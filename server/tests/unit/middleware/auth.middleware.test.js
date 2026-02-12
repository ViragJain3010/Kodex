// ignore unused variables
/* eslint-disable no-unused-vars */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { requireAuth, optionalAuth } from '../../../middleware/auth.middleware.js';
import passport from '../../../config/passport.config.js';

vi.mock('../../../config/passport.config.js', () => ({
  default: {
    authenticate: vi.fn(),
  },
}));

describe('Auth Middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = { user: null };
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
    };
    next = vi.fn();
    vi.clearAllMocks();
  });

  describe('requireAuth', () => {
    it('calls next() if authentication is successful', () => {
      const user = { id: 1, username: 'test' };
      passport.authenticate.mockImplementation(
        (strategy, options, callback) => (req, res, next) => {
          callback(null, user, null);
        }
      );

      requireAuth(req, res, next);

      expect(req.user).toBe(user);
      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });

    it('returns 401 if authentication fails', () => {
      passport.authenticate.mockImplementation(
        (strategy, options, callback) => (req, res, next) => {
          callback(null, false, { message: 'Expired' });
        }
      );

      requireAuth(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: 'Unauthorized' }));
      expect(next).not.toHaveBeenCalled();
    });

    it('calls next with error if passport errors', () => {
      const error = new Error('Passport Error');
      passport.authenticate.mockImplementation(
        (strategy, options, callback) => (req, res, next) => {
          callback(error);
        }
      );

      requireAuth(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe('optionalAuth', () => {
    it('attaches user if authenticated but always calls next()', () => {
      const user = { id: 1 };
      passport.authenticate.mockImplementation(
        (strategy, options, callback) => (req, res, next) => {
          callback(null, user);
        }
      );

      optionalAuth(req, res, next);

      expect(req.user).toBe(user);
      expect(next).toHaveBeenCalled();
    });

    it('does not attach user if not authenticated and calls next()', () => {
      passport.authenticate.mockImplementation(
        (strategy, options, callback) => (req, res, next) => {
          callback(null, false);
        }
      );

      optionalAuth(req, res, next);

      expect(req.user).toBeNull();
      expect(next).toHaveBeenCalled();
    });
  });
});
