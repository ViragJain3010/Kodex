// server/controller/Execute.controller.js

import ExecutorFactory from '../executors/index.js';
import { snippetController } from './Snippet.controller.js';

/**
 * Controller to handle code execution requests.
 *
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */
export const executeController = async (req, res) => {
  console.log('Inside executeController');
  try {
    const { slug, language, code, input = '' } = req.body;

    // Get appropriate executor
    const executor = ExecutorFactory.getExecutor(language);

    // Execute code
    const result = await executor.execute(code, input);

    if (slug) {
      const response = await snippetController.createSnippet(
        slug,
        code,
        language,
        input,
        result.output || result.error
      );
      res.status(200).json({
        success: result.success,
        saveSuccess: response.status === 200,
        path: 'at server/api/routes/execute.js/try()',
        output: result.output,
        error: result.error,
        executionTime: result.executionTime,
      });
    } else {
      res.status(200).json({
        success: result.success,
        saveSuccess: 'No Slug provided',
        path: 'at server/api/routes/execute.js/try()',
        output: result.output,
        error: result.error,
        executionTime: result.executionTime,
      });
    }
  } catch (error) {
    console.error('Execution error:', error);
    res.status(500).json({
      success: false,
      path: 'at server/api/routes/execute.js/catch()',
      error: 'Execution failed',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};
