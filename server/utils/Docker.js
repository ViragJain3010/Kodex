import Docker from 'dockerode';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

/**
 * DockerRunner class handles the execution of code within Docker containers.
 * It manages directory setup, container creation, execution, and cleanup.
 * - getExecutionPaths: Returns the paths for the container code directory.
 * - setupExecutionDir: Sets up the execution directory, writing code and input files.
 * - cleanupExecutionDir: Removes the execution directory and all its contents.
 * - convertMemoryToBytes: Converts memory limit string to bytes.
 * - createContainer: Creates a Docker container based on language configuration and code.
 * - runCode: Runs the code in the container and returns the result.
 */
class DockerRunner {
  constructor() {
    this.docker = new Docker();
    // Base directories
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    this.projectRoot = path.resolve(__dirname, '..', '..');
    this.tempBaseDir = path.join(this.projectRoot, 'temp');
  }

  /**
   * Helper to get container code directory paths for both host and container perspectives.
   * @param {string} containerId - Unique identifier for the container/execution.
   * @returns {{containerCodeDir: string, hostCodeDir: string}} Object containing paths.
   */
  getExecutionPaths(containerId) {
    const containerCodeDir = path.join(this.tempBaseDir, containerId);

    // HOST_WORK_DIR points to the root 'Kodex' directory on the host.
    const hostWorkDir = process.env.HOST_WORK_DIR;
    const hostCodeDir = hostWorkDir
      ? path.join(hostWorkDir, 'temp', containerId)
      : containerCodeDir;

    return { containerCodeDir, hostCodeDir };
  }

  /**
   * Set up the execution directory, with code and input files.
   * /temp/{containerId}/{index.js, input.txt}
   * @param {string} containerId - Unique ID for the execution.
   * @param {Object} languageConfig - Configuration for the specific programming language.
   * @param {string} code - The source code to be executed.
   * @param {string} [input] - Optional standard input for the code.
   * @returns {Promise<{containerCodeDir: string, codePath: string}>} The setup paths.
   */
  async setupExecutionDir(containerId, languageConfig, code, input) {
    const { containerCodeDir } = this.getExecutionPaths(containerId);
    const { execution } = languageConfig;

    // Create directory
    await fs.mkdir(containerCodeDir, { recursive: true });
    await fs.chmod(containerCodeDir, 0o777);

    // Write code file
    const codeFileName = `${execution.filePrefix}${languageConfig.extension}`;
    const codePath = path.join(containerCodeDir, codeFileName);
    await fs.writeFile(codePath, code);
    await fs.chmod(codePath, 0o777);

    // Write input file if provided
    if (input) {
      const inputPath = path.join(containerCodeDir, 'input.txt');
      await fs.writeFile(inputPath, input);
      await fs.chmod(inputPath, 0o777);
    }

    return { containerCodeDir, codePath };
  }

  /**
   * Remove the execution directory and all its contents.
   * @param {string} containerCodeDir - The path to the directory to be removed.
   * @returns {Promise<void>}
   */
  async cleanupExecutionDir(containerCodeDir) {
    if (!containerCodeDir) return;
    try {
      await fs.rm(containerCodeDir, { recursive: true, force: true });
    } catch (error) {
      console.error('Directory cleanup error:', error.message);
    }
  }

  /**
   * Helper function to convert memory limit string (e.g., '512m') to bytes.
   * @param {string} memoryString - Memory limit string with units (b, k, m, g).
   * @returns {number} Memory in bytes.
   * @throws {Error} If memory format is invalid.
   */
  convertMemoryToBytes(memoryString) {
    const units = {
      b: 1,
      k: 1024,
      kb: 1024,
      m: 1024 * 1024,
      mb: 1024 * 1024,
      g: 1024 * 1024 * 1024,
      gb: 1024 * 1024 * 1024,
    };

    const match = memoryString.toLowerCase().match(/^(\d+)\s*(kb|mb|gb|[kmgb])?$/);
    if (!match) {
      throw new Error(`Invalid memory format: ${memoryString}`);
    }

    const value = parseInt(match[1]);
    const unit = match[2] || 'b';

    return value * (units[unit] || 1);
  }

  /**
   * Create a Docker container based on language configuration and code.
   * @param {Object} languageConfig - Configuration for the language.
   * @param {string} code - Source code.
   * @param {string} [input=''] - Optional input for the code.
   * @returns {Promise<{container: Object, containerCodeDir: string}>} The created container and its directory.
   */
  async createContainer(languageConfig, code, input = '') {
    const executionId = uuidv4();
    const { docker: dockerConfig, execution, settings } = languageConfig;

    const { containerCodeDir, hostCodeDir } = this.getExecutionPaths(executionId);
    await this.setupExecutionDir(executionId, languageConfig, code, input);

    console.log(`Execution ID: ${executionId}`);
    console.log(
      `Environment: ${process.env.NODE_ENV === 'production' ? 'Production' : 'Development'}`
    );
    console.log(`Mounting host path: ${hostCodeDir} to container path: /app`);

    // Convert memory string to bytes
    const memoryBytes = this.convertMemoryToBytes(dockerConfig.memory);

    // Construct full image name
    const dockerUsername = process.env.DOCKER_USERNAME;
    const imageTagPrefix = dockerUsername ? `${dockerUsername}/` : '';
    const imageTagSuffix = process.env.DOCKER_IMAGE_TAG || 'latest';
    const imageTag = `${imageTagPrefix}${dockerConfig.image}:${imageTagSuffix}`;

    // Container configuration
    const containerConfig = {
      Image: imageTag,
      Cmd: settings.requiresCompilation
        ? ['compile', `${execution.compileCommand}`, `${execution.command}`]
        : [execution.command, `${execution.filePrefix}${languageConfig.extension}`],
      WorkingDir: dockerConfig.workDir,
      HostConfig: {
        Memory: memoryBytes,
        NanoCpus: Math.floor(parseFloat(dockerConfig.cpus) * 1e9),
        Binds: [`${hostCodeDir}:/app`],
        AutoRemove: false,
        NetworkMode: process.env.DOCKER_NETWORK || 'code-network',
      },
      // Essential Permission Fix: Run as the host user in Dev to avoid 'Root Folder' issues
      // User: process.env.NODE_ENV !== 'production' ? `${process.getuid()}:${process.getgid()}` : undefined,
    };

    // Ensure image exists
    const images = await this.docker.listImages();
    const imageExists = images.some(img => img.RepoTags && img.RepoTags.includes(imageTag));

    if (!imageExists) {
      console.log(`Image ${imageTag} not found locally, attempting to pull...`);
      await new Promise((resolve, reject) => {
        this.docker.pull(imageTag, (err, stream) => {
          if (err) return reject(err);
          this.docker.modem.followProgress(stream, (err, output) => {
            if (err) return reject(err);
            resolve(output);
          });
        });
      });
      console.log(`Image ${imageTag} pulled successfully.`);
    }

    const container = await this.docker.createContainer(containerConfig);
    return { container, containerCodeDir };
  }

  /**
   * Runs the provided code in a Docker container and return the execution results.
   * @param {Object} languageConfig - Configuration for the language.
   * @param {string} code - Source code.
   * @param {string} [input=''] - Optional input for the code.
   * @returns {Promise<{success: boolean, output: string|null, error: string|null, executionTime: number|null}>}
   */
  async runCode(languageConfig, code, input = '') {
    let containerCodeDir = null;
    let container = null;

    try {
      const containerData = await this.createContainer(languageConfig, code, input);
      container = containerData.container;
      containerCodeDir = containerData.containerCodeDir;

      await container.start();

      const result = await Promise.race([
        container.wait(),
        new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error('Execution timeout. Your code ran for too long.')),
            languageConfig.docker.timeout
          )
        ),
      ]);

      const logs = await container.logs({ stdout: true, stderr: true });
      const allOutput = logs.toString('utf8');

      // Process logs (stdout/stderr)
      const stdoutLines = [];
      const stderrLines = [];

      allOutput.split('\n').forEach(line => {
        if (line.startsWith('\u0001')) stdoutLines.push(line.substring(8));
        else if (line.startsWith('\u0002')) stderrLines.push(line.substring(8));
      });

      const stdout = stdoutLines.join('\n');
      const stderr = stderrLines.join('\n');

      // Extract execution time
      const timeMatch = stderrLines.find(line => line.startsWith('EXECUTION_TIME:'));
      const executionTime = timeMatch ? parseInt(timeMatch.split(':')[1]) : null;

      return {
        success: result.StatusCode === 0,
        output: stdout,
        error: result.StatusCode !== 0 ? stderr : null,
        executionTime,
      };
    } catch (error) {
      console.error('Docker execution error:', error);
      return {
        success: false,
        error: error.message,
      };
    } finally {
      if (container) {
        try {
          const containerInfo = await container.inspect();
          if (containerInfo.State.Running) await container.stop();
          await container.remove({ force: true });
        } catch (err) {
          console.error('Container cleanup error:', err.message);
        }
      }
      await this.cleanupExecutionDir(containerCodeDir);
    }
  }
}

export default new DockerRunner();
