// server/executors/index.js
import JavaScriptExecutor from './javascript/index.js';
import PythonExecutor from './python/index.js';
import CppExecutor from './cpp/index.js';

class ExecutorFactory {
  static getExecutor(language) {
    if (!language) {
      throw new Error('Language parameter is required');
    }

    try {
      switch (language.toLowerCase()) {
        case 'javascript':
          return new JavaScriptExecutor();
        case 'python':
          return new PythonExecutor();
        case 'cpp':
          return new CppExecutor();
        default:
          throw new Error(`Unsupported language: ${language}`);
      }
    } catch (error) {
      // Wrap any error with context
      throw new Error(`Error creating executor for language '${language}': ${error.message}`);
    }
  }
}

export default ExecutorFactory;
