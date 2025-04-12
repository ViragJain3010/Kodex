// server/utils/docker.js
import Docker from 'dockerode';
import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

class DockerRunner {
  constructor() {
    this.docker = new Docker();
  }

  // Helper function to convert memory string to bytes
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

    const match = memoryString.toLowerCase().match(/^(\d+)\s*([kmg]b?)?$/);
    if (!match) {
      throw new Error(`Invalid memory format: ${memoryString}`);
    }

    const value = parseInt(match[1]);
    const unit = match[2] || 'b';

    return value * (units[unit] || 1);
  }

  async createContainer(languageConfig, code, input = '') {
    const containerId = uuidv4();
    const { docker: dockerConfig, execution, settings } = languageConfig;

    // Create temporary directory for code
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const codeDir = path.join(__dirname, '..', 'temp', containerId);
    await fs.mkdir(codeDir, { recursive: true });

    // Write code and input files
    const codePath = path.join(codeDir, `${execution.filePrefix}${languageConfig.extension}`);
    await fs.writeFile(codePath, code);
    await fs.chmod(codePath, 0o777);

    if (input) {
      const inputPath = path.join(codeDir, 'input.txt');
      await fs.writeFile(inputPath, input);
      await fs.chmod(inputPath, 0o777);
    }

    // Convert memory string to bytes
    const memoryBytes = this.convertMemoryToBytes(dockerConfig.memory);
    // console.log(
    //   `Converting memory limit ${dockerConfig.memory} to ${memoryBytes} bytes`
    // );

    // console.log("Execution: ", execution);
    // console.log(execution.compileCommand)

    // Container configuration
    const containerConfig = {
      Image: dockerConfig.image + ':latest',
      Cmd: settings.requiresCompilation
        ? ['compile', `${execution.compileCommand}`, `${execution.command}`]
        : [execution.command, `${execution.filePrefix}${languageConfig.extension}`],
      WorkingDir: dockerConfig.workDir,
      HostConfig: {
        Memory: memoryBytes,
        NanoCpus: Math.floor(parseFloat(dockerConfig.cpus) * 1e9),
        Binds: [`${codeDir}:/app`],
        AutoRemove: false, // if set true => Docker execution error: Error: (HTTP code 409) unexpected - can not get logs from container which is dead or marked for removal
        NetworkMode: 'code-network',
      },
    };

    // console.log("Container config:", JSON.stringify(containerConfig, null, 2));

    // console.log('Available Docker images:');
    // const images = await this.docker.listImages();
    // console.log(images.map(img => ({
    //   RepoTags: img.RepoTags,
    //   Id: img.Id
    // })));

    const images = await this.docker.listImages();
    // console.log(images)
    const imageExists = images.some(
      img => img.RepoTags && img.RepoTags.includes(`${dockerConfig.image}:latest`)
    );

    if (!imageExists) {
      console.log(`Image ${dockerConfig.image} not found locally, attempting to pull...`);
      try {
        console.log(`Pulling image ${dockerConfig.image}:latest`);
        await this.docker.pull(`${dockerConfig.image}:latest`);
      } catch (pullError) {
        console.log(`Failed to pull image ${dockerConfig.image}:`, pullError);
        throw new Error(`Failed to find or pull image ${dockerConfig.image}: ${pullError.message}`);
      }
    }
    // console.log('Image exists:', imageExists);

    const container = await this.docker.createContainer(containerConfig);
    return { container, codeDir, codePath };
  }

  async runCode(languageConfig, code, input = '') {
    let codeDir = null;
    let container = null;

    // console.log("Starting code execution with config:", {
    //   language: languageConfig.name,
    //   memory: languageConfig.docker.memory,
    //   timeout: languageConfig.docker.timeout,
    // });

    try {
      // Create container and get the directory path
      const containerData = await this.createContainer(languageConfig, code, input);
      container = containerData.container;
      codeDir = containerData.codeDir;

      // console.log("Container created, starting execution...");
      // console.log("container: " + container)
      // console.log("codeDir: " + codeDir)

      // Start container
      await container.start();

      // console.log("Container started, waiting for completion...");

      // Wait for container with timeout
      const result = await Promise.race([
        container.wait(),
        new Promise((_, reject) =>
          setTimeout(
            () =>
              reject(
                new Error(
                  'Execution timeout. Your code ran for more than 10s. Please optimise your code.'
                )
              ),
            languageConfig.docker.timeout
          )
        ),
      ]);

      // console.log("Execution completed with status code:", result.StatusCode);

      const logs = await container.logs({ stdout: true, stderr: true });
      const allOutput = logs.toString('utf8');

      // console.log(allOutput)

      // Split stderr and stdout
      const stderrLines = allOutput
        .split('\n')
        .filter(line => line.startsWith('\u0002')) // stderr prefix
        .map(line => line.substring(8));

      console.log('stderrLines: ', stderrLines);

      const stdoutLines = allOutput
        .split('\n')
        .filter(line => line.startsWith('\u0001')) // stdout prefix
        .map(line => line.substring(8));

      console.log('stdoutLines: ', stdoutLines);

      // Extract execution time from stderr
      const timeMatch = stderrLines.find(line => line.startsWith('EXECUTION_TIME:'));
      const executionTime = timeMatch ? parseInt(timeMatch.split(':')[1]) : null;
      console.log(executionTime + ' ms');

      // Capture the error messages in stderr (e.g., 'error:' lines)
      const errorMessages = stderrLines.filter(line => line.includes('error:'));
      console.log('errorMessages: ', errorMessages);

      const stderr = stderrLines.join('\n');

      // Get program output from stdout
      const output = stdoutLines.join('\n');

      return {
        success: result.StatusCode === 0,
        path: 'at server/utils/docker.js/runCode()/try',
        output: output,
        error: result.StatusCode !== 0 ? stderr : null,
        errorMessages,
        executionTime: executionTime,
      };
    } catch (error) {
      console.error('Docker execution error:', error);
      return {
        success: false,
        path: 'at server/utils/docker.js/runCode()/catch',
        output: null,
        error: error.message,
        executionTime: null,
      };
    } finally {
      // Improved cleanup logic
      if (container) {
        try {
          const containerInfo = await container.inspect();
          if (containerInfo.State.Running) {
            await container.stop();
            // console.log("container stopped");
          }
          await container.remove({ force: true });
          // console.log("Container removed");
        } catch (cleanupError) {
          console.error('Container cleanup error:', cleanupError.message);
        }
      }

      if (codeDir) {
        try {
          await fs.rm(codeDir, { recursive: true, force: true });
          // console.log("Directory cleaned up");
        } catch (cleanupError) {
          console.error('Directory cleanup error:', cleanupError.message);
        }
      }
    }
  }
}

export default new DockerRunner();
