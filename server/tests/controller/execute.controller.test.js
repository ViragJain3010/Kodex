import { describe, it, expect, vi, beforeEach } from 'vitest';
import { executeController } from '@/controller/Execute.controller.js';
import ExecutorFactory from '@/executors/index.js';
import { snippetController } from '@/controller/Snippet.controller.js';

// Mock dependencies
vi.mock('@/executors/index.js', () => ({
  default: {
    getExecutor: vi.fn(),
  },
}));

vi.mock('@/controller/Snippet.controller.js', () => ({
  snippetController: {
    createSnippet: vi.fn(),
  },
}));

describe('Execute Controller', () => {
  let req, res;

  beforeEach(() => {
    // Mock request and response objects
    req = {
      body: {
        language: 'javascript',
        code: 'console.log("Hello World")',
        input: '',
      },
    };

    res = {
      status: vi.fn(() => res),
      json: vi.fn(),
      write: vi.fn(),
      end: vi.fn(),
    };

    // Reset mocks
    vi.clearAllMocks();
  });

  it('should successfully execute code without slug and return result', async () => {
    // Mock executor
    const mockExecutor = {
      execute: vi.fn().mockResolvedValue({
        success: true,
        output: 'Hello World',
        error: null,
        executionTime: 100,
      }),
    };

    // Setup ExecutorFactory mock
    ExecutorFactory.getExecutor.mockReturnValue(mockExecutor);

    // Call the controller
    await executeController(req, res);

    // Assertions
    expect(ExecutorFactory.getExecutor).toHaveBeenCalledWith('javascript');
    expect(ExecutorFactory.getExecutor).toHaveBeenCalledTimes(1);
    expect(mockExecutor.execute).toHaveBeenCalledWith('console.log("Hello World")', '');
    expect(mockExecutor.execute).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);

    // Verify response structure and types
    expect(res.json).toHaveBeenCalledTimes(1);
    const responseArg = res.json.mock.calls[0][0];
    expect(responseArg).toBeTypeOf('object');
    expect(responseArg.success).toBe(true);
    expect(responseArg.success).toBeTypeOf('boolean');
    expect(responseArg.saveSuccess).toBe(false);
    expect(responseArg.saveSuccess).toBeTypeOf('boolean');
    expect(responseArg.path).toBeTypeOf('string');
    expect(responseArg.path).toBe('at server/api/routes/execute.js/try()');
    expect(responseArg.output).toBeTypeOf('string');
    expect(responseArg.output).toBe('Hello World');
    expect(responseArg.error).toBeNull();
    expect(responseArg.executionTime).toBeTypeOf('number');
    expect(responseArg.executionTime).toBe(100);
  });

  it('should successfully execute code with slug and save the snippet', async () => {
    // Setup request with slug
    req.body.slug = 'test-slug';

    // Mock executor
    const mockExecutor = {
      execute: vi.fn().mockResolvedValue({
        success: true,
        output: 'Hello World',
        error: null,
        executionTime: 100,
      }),
    };

    // Setup ExecutorFactory mock
    ExecutorFactory.getExecutor.mockReturnValue(mockExecutor);

    // Setup snippetController mock
    snippetController.createSnippet.mockResolvedValue({
      success: true,
      status: 200, 
      slug: 'test-slug',
    });

    // Call the controller
    await executeController(req, res);

    // Assertions
    expect(ExecutorFactory.getExecutor).toHaveBeenCalledWith('javascript');
    expect(mockExecutor.execute).toHaveBeenCalledWith('console.log("Hello World")', '');

    // Verify snippetController was called correctly
    expect(snippetController.createSnippet).toHaveBeenCalledTimes(1);
    expect(snippetController.createSnippet).toHaveBeenCalledWith(
      'test-slug',
      'console.log("Hello World")',
      'javascript',
      '',
      'Hello World'
    );

    // Verify response
    expect(res.status).toHaveBeenCalledWith(200);

    const responseArg = res.json.mock.calls[0][0];
    expect(responseArg).toBeTypeOf('object');
    expect(responseArg.success).toBe(true);
    expect(responseArg.saveSuccess).toBe(true);
    expect(responseArg.output).toBe('Hello World');
    expect(responseArg.error).toBeNull();
    expect(responseArg.executionTime).toBe(100);
  });

  it('should handle execution errors', async () => {
    // Mock executor with error
    const mockExecutor = {
      execute: vi.fn().mockResolvedValue({
        success: false,
        output: null,
        error: 'Runtime error: x is not defined',
        executionTime: 50,
      }),
    };

    // Setup ExecutorFactory mock
    ExecutorFactory.getExecutor.mockReturnValue(mockExecutor);

    // Call the controller
    await executeController(req, res);

    // Assertions
    expect(res.status).toHaveBeenCalledWith(200); // Should still return 200 for execution errors

    const responseArg = res.json.mock.calls[0][0];
    expect(responseArg).toBeTypeOf('object');
    expect(responseArg.success).toBe(false);
    expect(responseArg.saveSuccess).toBe(false);
    expect(responseArg.output).toBeNull();
    expect(responseArg.error).toBeTypeOf('string');
    expect(responseArg.error).toBe('Runtime error: x is not defined');
    expect(responseArg.executionTime).toBeTypeOf('number');
  });

  it('should handle missing required parameters', async () => {
    // Test with missing language
    req.body.language = undefined;

    // Call the controller
    await executeController(req, res);

    // Assertions
    expect(res.status).toHaveBeenCalledWith(500);

    const responseArg = res.json.mock.calls[0][0];
    expect(responseArg).toBeTypeOf('object');
    expect(responseArg.success).toBe(false);
    expect(responseArg.error).toBeTypeOf('string');
    expect(responseArg.error).toContain('Language parameter is required');

    // Reset and test with missing code
    req.body.language = 'javascript';
    req.body.code = undefined;

    // Reset mocks
    res.status.mockClear();
    res.json.mockClear();

    // Call the controller again
    await executeController(req, res);

    // Assertions
    expect(res.status).toHaveBeenCalledWith(500);

    const responseArg2 = res.json.mock.calls[0][0];
    expect(responseArg2).toBeTypeOf('object');
    expect(responseArg2.success).toBe(false);
    expect(responseArg2.error).toBeTypeOf('string');
    expect(responseArg2.error).toContain('Code parameter is required');
  });

  it('should handle unknown language executor', async () => {
    // Setup request with unknown language
    req.body.language = 'unknown-language';

    // Mock ExecutorFactory to throw error
    const error = new Error('Unsupported language: unknown-language');
    ExecutorFactory.getExecutor.mockImplementation(() => {
      throw error;
    });

    // Call the controller
    await executeController(req, res);

    // Assertions
    expect(ExecutorFactory.getExecutor).toHaveBeenCalledWith('unknown-language');
    expect(res.status).toHaveBeenCalledWith(500);

    const responseArg = res.json.mock.calls[0][0];
    expect(responseArg).toBeTypeOf('object');
    expect(responseArg.success).toBe(false);
    expect(responseArg.error).toBeTypeOf('string');
    expect(responseArg.error).toContain('unknown-language');
  });

  it('should handle snippet creation failure', async () => {
    // Setup request with slug
    req.body.slug = 'test-slug';

    // Mock executor
    const mockExecutor = {
      execute: vi.fn().mockResolvedValue({
        success: true,
        output: 'Hello World',
        error: null,
        executionTime: 100,
      }),
    };

    // Setup ExecutorFactory mock
    ExecutorFactory.getExecutor.mockReturnValue(mockExecutor);

    // Setup snippetController mock for failure
    snippetController.createSnippet.mockResolvedValue({
      success: false,
      error: 'Database error',
    });

    // Call the controller
    await executeController(req, res);

    // Assertions
    expect(snippetController.createSnippet).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);

    const responseArg = res.json.mock.calls[0][0];
    expect(responseArg).toBeTypeOf('object');
    expect(responseArg.success).toBe(true); // Execution was successful
    expect(responseArg.saveSuccess).toBe(false); // Saving failed
    expect(responseArg.error).toBe(null); // Execution error is null
    expect(responseArg.saveError).toBeTypeOf('string'); // Should have a save error
    expect(responseArg.output).toBe('Hello World');
  });
});
