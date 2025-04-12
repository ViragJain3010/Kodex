// server/routes/auth.js
import express from 'express';
import passport from '../../config/passport.config.js';
import { authController } from '../../controller/Auth.controller.js';
import { generateAccessToken, generateRefreshToken } from '../../config/jwt.config.js';
import { requireAuth } from '../../middleware/auth.middleware.js';

const router = express.Router();

// Local Authentication Routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/refresh-token', authController.refreshToken);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);
router.get('/protected-route', requireAuth, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Google OAuth Routes
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  // Generate tokens after successful authentication
  const accessToken = generateAccessToken(req.user);
  const refreshToken = generateRefreshToken(req.user);

  // Redirect to frontend with tokens
  // Note: Replace with your actual frontend URL
  res.redirect(
    `${process.env.FRONTEND_URL}/oauth-callback?accessToken=${accessToken}&refreshToken=${refreshToken}`
  );
});

// GitHub OAuth Routes
router.get(
  '/github',
  passport.authenticate('github', {
    scope: ['user:email'],
  })
);

router.get('/github/callback', passport.authenticate('github', { session: false }), (req, res) => {
  // Generate tokens after successful authentication
  const accessToken = generateAccessToken(req.user);
  const refreshToken = generateRefreshToken(req.user);

  // Redirect to frontend with tokens
  // Note: Replace with your actual frontend URL
  res.redirect(
    `${process.env.FRONTEND_URL}/oauth-callback?accessToken=${accessToken}&refreshToken=${refreshToken}`
  );
});

export default router;
