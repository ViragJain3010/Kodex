import { describe, it, expect, vi, beforeEach } from 'vitest';
import db from '../../../config/db.js';
import User from '../../../models/User.model.js';

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

describe('User Model', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('findFirst', () => {
    it('returns null if no user is found', async () => {
      const result = await User.findFirst({ where: { username: 'nonexistent' } });
      expect(result).toBeNull();
    });

    it('returns user if found', async () => {
      const mockUser = { id: 1, username: 'testuser' };
      db().first.mockResolvedValueOnce(mockUser);

      const result = await User.findFirst({ where: { username: 'testuser' } });
      expect(result).toEqual(mockUser);
    });

    it('handles OR conditions', async () => {
      await User.findFirst({ where: { OR: [{ username: 'a' }, { email: 'b' }] } });
      expect(db().where).toHaveBeenCalledWith(expect.any(Function));
    });
  });

  describe('findUnique', () => {
    it('returns user by unique field', async () => {
      const mockUser = { id: 1, email: 'test@example.com' };
      db().first.mockResolvedValueOnce(mockUser);

      const result = await User.findUnique({ where: { email: 'test@example.com' } });
      expect(result).toEqual(mockUser);
    });
  });

  describe('create', () => {
    it('creates a new user and returns it in camelCase', async () => {
      const userData = {
        username: 'newuser',
        email: 'new@example.com',
        auth_provider: 'LOCAL',
        created_at: new Date(),
        id: 1,
      };
      db().returning.mockResolvedValueOnce([userData]);

      const result = await User.create({ data: { username: 'newuser', email: 'new@example.com' } });

      expect(result.username).toBe('newuser');
      expect(result.authProvider).toBe('LOCAL');
      expect(db().insert).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('updates a user and returns updated data in camelCase', async () => {
      const updatedUser = {
        id: 1,
        username: 'updated',
        auth_provider: 'LOCAL',
        updated_at: new Date(),
      };
      db().returning.mockResolvedValueOnce([updatedUser]);

      const result = await User.update({ where: { id: 1 }, data: { username: 'updated' } });

      expect(result.username).toBe('updated');
      expect(db().update).toHaveBeenCalled();
    });
  });
});
