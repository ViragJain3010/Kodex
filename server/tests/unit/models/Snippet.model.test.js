import { describe, it, expect, vi, beforeEach } from 'vitest';
import db from '../../../config/db.js';
import Snippet from '../../../models/Snippet.model.js';

vi.mock('../../../config/db.js', () => {
  const mockDb = vi.fn().mockReturnValue({
    where: vi.fn().mockReturnThis(),
    first: vi.fn().mockResolvedValue(null),
    insert: vi.fn().mockReturnThis(),
    update: vi.fn().mockReturnThis(),
    returning: vi.fn().mockResolvedValue([]),
  });
  return { default: mockDb };
});

describe('Snippet Model', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('findUnique', () => {
    it('returns null if snippet not found', async () => {
      const result = await Snippet.findUnique({ where: { slug: 'test' } });
      expect(result).toBeNull();
    });

    it('returns snippet in camelCase if found', async () => {
      const mockSnippet = {
        id: 1,
        slug: 'test',
        created_at: new Date(),
      };
      db().first.mockResolvedValueOnce(mockSnippet);

      const result = await Snippet.findUnique({ where: { slug: 'test' } });
      expect(result.slug).toBe('test');
      expect(result.createdAt).toBeDefined();
    });
  });

  describe('upsert', () => {
    it('updates existing snippet', async () => {
      const existingSnippet = { id: 1, slug: 'test' };
      db().first.mockResolvedValueOnce(existingSnippet);
      db().returning.mockResolvedValueOnce([{ ...existingSnippet, updated_at: new Date() }]);

      const result = await Snippet.upsert({
        where: { slug: 'test' },
        update: { code: 'new code' },
        create: { slug: 'test', code: 'new code' },
      });

      expect(db().update).toHaveBeenCalled();
      expect(result.id).toBe(1);
    });

    it('creates new snippet if not exists', async () => {
      db().first.mockResolvedValueOnce(null); // not found
      db().returning.mockResolvedValueOnce([{ id: 2, slug: 'new', created_at: new Date() }]);

      const result = await Snippet.upsert({
        where: { slug: 'new' },
        update: { code: 'code' },
        create: { slug: 'new', code: 'code' },
      });

      expect(db().insert).toHaveBeenCalled();
      expect(result.id).toBe(2);
    });
  });
});
