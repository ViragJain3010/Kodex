import { describe, it, expect, vi, beforeEach } from 'vitest';
import { snippetController } from '../../../controller/Snippet.controller.js';
import Snippet from '../../../models/Snippet.model.js';

vi.mock('../../../models/Snippet.model.js');

describe('Snippet Controller', () => {
  let req, res;

  beforeEach(() => {
    req = { params: {}, body: {} };
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
    };
    vi.clearAllMocks();
  });

  describe('createSnippet', () => {
    it('creates a snippet successfully', async () => {
      Snippet.upsert.mockResolvedValue({});
      const result = await snippetController.createSnippet('slug', 'code', 'js', '', 'out');
      expect(result.status).toBe(200);
      expect(Snippet.upsert).toHaveBeenCalled();
    });

    it('returns 500 on error', async () => {
      Snippet.upsert.mockRejectedValue(new Error('DB Error'));
      const result = await snippetController.createSnippet('slug', 'code');
      expect(result.status).toBe(500);
    });
  });

  describe('getSnippet', () => {
    it('retrieves a snippet by slug', async () => {
      req.params.slug = 'test';
      const mockSnippet = { slug: 'test', code: '...' };
      Snippet.findUnique.mockResolvedValue(mockSnippet);

      await snippetController.getSnippet(req, res);

      expect(res.json).toHaveBeenCalledWith(mockSnippet);
    });
  });

  describe('isSlugAvailable', () => {
    it('returns 200 if slug is available', async () => {
      req.params.slug = 'available';
      Snippet.findUnique.mockResolvedValue(null);

      await snippetController.isSlugAvailable(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    it('returns 409 if slug is taken', async () => {
      req.params.slug = 'taken';
      Snippet.findUnique.mockResolvedValue({ slug: 'taken' });

      await snippetController.isSlugAvailable(req, res);

      expect(res.status).toHaveBeenCalledWith(409);
    });
  });
});
