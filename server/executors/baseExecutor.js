// server/executors/baseExecutor.js

import dockerRunner from '../utils/Docker.js';
import { getLanguageConfig } from '../config/Languages.config.js';

class BaseExecutor {
  constructor(language) {
    this.language = language;
    this.config = getLanguageConfig(language);
  }

  async validateCode(code) {
    if (!code || typeof code !== 'string') {
      throw new Error('Invalid code provided');
    }
    return true;
  }

  async validateInput(input) {
    if (input && typeof input !== 'string') {
      throw new Error('Input must be a string');
    }
    return true;
  }

  async preProcess(code, input) {
    // Override in specific executors if needed

    return { code, input };
  }

  async postProcess(result) {
    // Override in specific executors if needed
    return result;
  }

  async execute(code, input = '') {
    try {
      // Validate inputs
      await this.validateCode(code);
      await this.validateInput(input);

      // Pre-process code and input
      const { code: processedCode, input: processedInput } = await this.preProcess(code, input);

      // Execute code using Docker
      const result = await dockerRunner.runCode(this.config, processedCode, processedInput);

      // Post-process results
      return await this.postProcess(result);
    } catch (error) {
      return {
        success: false,
        path: 'null at server/executors/baseExecutor.js/execute()/catch',
        output: null,
        error: error.message,
      };
    }
  }
}

export default BaseExecutor;
