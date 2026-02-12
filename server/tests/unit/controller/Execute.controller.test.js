import { describe, it, expect, vi, beforeEach } from 'vitest';
import { executeController } from '../../../controller/Execute.controller.js';
import ExecutorFactory from '../../../executors/index.js';
import { snippetController } from '../../../controller/Snippet.controller.js';

vi.mock('../../../executors/index.js');
vi.mock('../../../controller/Snippet.controller.js');

describe('Execute Controller', () => {
  let req, res;

  beforeEach(() => {
    req = { body: { language: 'js', code: 'console.log(1)' } };
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
    };
    vi.clearAllMocks();
  });

  it('successfully executes code and returns result', async () => {
    const mockExecutor = {
      execute: vi.fn().mockResolvedValue({ success: true, output: '1', executionTime: 100 }),
    };
    ExecutorFactory.getExecutor.mockReturnValue(mockExecutor);

    await executeController(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ output: '1' }));
  });

  it('saves snippet if slug is provided', async () => {
    req.body.slug = 'test-slug';
    const mockExecutor = {
      execute: vi.fn().mockResolvedValue({ success: true, output: '1' }),
    };
    ExecutorFactory.getExecutor.mockReturnValue(mockExecutor);
    snippetController.createSnippet.mockResolvedValue({ status: 200 });

    await executeController(req, res);

    expect(snippetController.createSnippet).toHaveBeenCalledWith(
      'test-slug',
      expect.any(String),
      'js',
      '',
      '1'
    );
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ saveSuccess: true }));
  });

  it('returns 500 if execution fails', async () => {
    ExecutorFactory.getExecutor.mockImplementation(() => {
      throw new Error('Factory Error');
    });

    await executeController(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ error: 'Execution failed' }));
  });
});
