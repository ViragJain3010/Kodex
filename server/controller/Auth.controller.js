// server/controllers/Auth.controller.js
import User from '../models/User.model.js';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import {
  generateAccessToken,
  generateRefreshToken,
  refreshAccessToken,
} from '../config/jwt.config.js';
import { sendPasswordResetEmail } from '../services/Email.Service.js';

export const authController = {
  async signup(req, res) {
    try {
      const { username, email, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findFirst({
        where: {
          OR: [{ username }, { email }],
        },
      });

      if (existingUser) {
        return res.status(400).json({
          message: 'Username or email already exists',
        });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      const user = await User.create({
        data: {
          username,
          email,
          password: hashedPassword,
          authProvider: 'LOCAL',
        },
      });

      // Generate tokens
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);

      res.status(201).json({
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
        accessToken,
        refreshToken,
      });
    } catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({ message: 'Server error during signup' });
    }
  },

  // Local Login
  async login(req, res) {
    try {
      const { identifier, password } = req.body; // identifier (email or username)

      // Find user by email or username
      const user = await User.findFirst({
        where: {
          OR: [{ email: identifier }, { username: identifier }],
        },
      });

      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials (identifier)' });
      }

      // Check password for local auth
      if (user.authProvider === 'LOCAL') {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).json({ message: 'Invalid credentials (password)' });
        }
      }

      // Generate tokens
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);

      res.json({
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
        accessToken,
        refreshToken,
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Server error during login' });
    }
  },

  // Refresh Token
  async refreshToken(req, res) {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        return res.status(401).json({ message: 'Refresh token required' });
      }

      const newAccessToken = refreshAccessToken(refreshToken);

      if (!newAccessToken) {
        return res.status(403).json({ message: 'Invalid refresh token' });
      }

      res.json({ accessToken: newAccessToken });
    } catch (error) {
      console.error('Refresh token error:', error);
      res.status(500).json({ message: 'Server error refreshing token' });
    }
  },

  // Forgot Password
  async forgotPassword(req, res) {
    try {
      const { email } = req.body;

      // Find user
      const user = await User.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(200).json({ message: 'Reset link sent to Email (User Not Found)' });
      }

      // Generate reset token
      const resetToken = crypto.randomBytes(32).toString('hex');
      const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now

      // Save reset token to user
      await User.update({
        where: { id: user.id },
        data: {
          resetToken,
          resetTokenExpiry,
        },
      });

      // Create reset link
      // Note: Replace with your actual frontend reset password URL
      const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
      console.log('Reset Link:', resetLink);

      // Send reset email
      const emailSent = await sendPasswordResetEmail(email, resetLink);

      if (!emailSent) {
        return res.status(500).json({ message: 'Failed to send reset email' });
      }

      res.json({ message: 'Password reset link sent' });
    } catch (error) {
      console.error('Forgot password error:', error);
      res.status(500).json({ message: 'Server error processing forgot password' });
    }
  },

  // Reset Password
  async resetPassword(req, res) {
    try {
      const { token, newPassword } = req.body;

      // Find user with valid reset token
      const user = await User.findFirst({
        where: {
          resetToken: token,
          resetTokenExpiry: { gt: new Date() },
        },
      });

      if (!user) {
        return res.status(400).json({ message: 'Invalid or expired reset token' });
      }

      // Hash new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Update user password and clear reset token
      await User.update({
        where: { id: user.id },
        data: {
          password: hashedPassword,
          resetToken: null,
          resetTokenExpiry: null,
        },
      });

      res.json({ message: 'Password reset successful' });
    } catch (error) {
      console.error('Reset password error:', error);
      res.status(500).json({ message: 'Server error resetting password' });
    }
  },
};
