import BaseExecutor from '../baseExecutor.js';

class JavaScriptExecutor extends BaseExecutor {
  constructor() {
    super('javascript');
    console.log('JavaScriptExecutor/constructor');
  }

  async preProcess(code, input) {
    // Add console input handling if input is provided
    console.log('JavaScriptExecutor/preProcess');

    return { code, input };
  }
}

export default JavaScriptExecutor;
