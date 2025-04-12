// server/executors/cpp/index.js
import BaseExecutor from '../baseExecutor.js';

class CppExecutor extends BaseExecutor {
  constructor() {
    super('cpp');
    console.log('CppExecutor/constructor');
  }

  async preProcess(code, input) {
    // C++ can handle input directly through stdin
    return { code, input };
  }

  async postProcess(result) {
    // Handle compilation errors differently from runtime errors
    if (!result.success && result.error) {
      if (result.error.includes('error: ')) {
        return {
          ...result,
          error: 'Compilation Error: ' + result.error,
        };
      }
    }
    return result;
  }
}

export default CppExecutor;
