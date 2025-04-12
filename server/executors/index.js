// server/executors/index.js
import JavaScriptExecutor from './javascript/index.js';
import PythonExecutor from './python/index.js';
import CppExecutor from './cpp/index.js';

class ExecutorFactory {
  static getExecutor(language) {
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
  }
}

export default ExecutorFactory;
