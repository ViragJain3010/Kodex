import { describe, it, expect, vi, beforeEach } from 'vitest';
import { authController } from '../../../controller/Auth.controller.js';
import User from '../../../models/User.model.js';
import bcrypt from 'bcryptjs';
import * as jwtConfig from '../../../config/jwt.config.js';
import * as emailService from '../../../services/Email.Service.js';

vi.mock('../../../models/User.model.js');
vi.mock('bcryptjs');
vi.mock('../../../config/jwt.config.js');
vi.mock('../../../services/Email.Service.js');

describe('Auth Controller', () => {
  let req, res;

  beforeEach(() => {
    req = { body: {} };
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
    };
    vi.clearAllMocks();
  });

  describe('signup', () => {
    it('successfully signs up a new user', async () => {
      req.body = { username: 'test', email: 'test@example.com', password: 'password123' };
      User.findFirst.mockResolvedValue(null);
      bcrypt.hash.mockResolvedValue('hashed_password');
      User.create.mockResolvedValue({ id: 1, username: 'test', email: 'test@example.com' });
      jwtConfig.generateAccessToken.mockReturnValue('access_token');
      jwtConfig.generateRefreshToken.mockReturnValue('refresh_token');

      await authController.signup(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ accessToken: 'access_token' })
      );
    });

    it('returns 400 if user exists', async () => {
      req.body = { username: 'test', email: 'test@example.com' };
      User.findFirst.mockResolvedValue({ id: 1 });

      await authController.signup(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Username or email already exists' });
    });
  });

  describe('login', () => {
    it('successfully logs in a user', async () => {
      req.body = { identifier: 'test', password: 'password123' };
      const mockUser = {
        id: 1,
        username: 'test',
        authProvider: 'LOCAL',
        password: 'hashed_password',
      };
      User.findFirst.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(true);
      jwtConfig.generateAccessToken.mockReturnValue('access_token');
      jwtConfig.generateRefreshToken.mockReturnValue('refresh_token');

      await authController.login(req, res);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ accessToken: 'access_token' })
      );
    });

    it('returns 401 for invalid credentials', async () => {
      req.body = { identifier: 'test', password: 'wrong' };
      User.findFirst.mockResolvedValue(null);

      await authController.login(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
    });
  });

  describe('forgotPassword', () => {
    it('sends reset email if user exists', async () => {
      req.body = { email: 'test@example.com' };
      User.findUnique.mockResolvedValue({ id: 1, email: 'test@example.com' });
      emailService.sendPasswordResetEmail.mockResolvedValue(true);

      await authController.forgotPassword(req, res);

      expect(res.json).toHaveBeenCalledWith({ message: 'Password reset link sent' });
    });

    it('returns 200 even if user not found (security requirement)', async () => {
      req.body = { email: 'wrong@example.com' };
      User.findUnique.mockResolvedValue(null);

      await authController.forgotPassword(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Reset link sent to Email (User Not Found)',
      });
    });
  });
});
