// server/executors/python/index.js
import BaseExecutor from '../baseExecutor.js';

class PythonExecutor extends BaseExecutor {
  constructor() {
    super('python');
    console.log('PythonExecutor/constructor');
  }

  async preProcess(code, input) {
    // Python can handle input directly through stdin
    return { code, input };
  }
}

export default PythonExecutor;
