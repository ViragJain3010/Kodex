// server/middleware/authMiddleware.js
import passport from '../config/passport.config.js';

/**
 * Middleware to require JWT authentication.
 *
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next function.
 */
export const requireAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      // Token is invalid or expired
      return res.status(401).json({
        message: 'Unauthorized',
        error: info?.message || 'Invalid token',
      });
    }

    // Attach user to request object
    req.user = user;
    next();
  })(req, res, next);
};

/**
 * Middleware for optional JWT authentication.
 *
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next function.
 */
export const optionalAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) {
      return next(err);
    }

    // If a valid user is found, attach to request
    if (user) {
      req.user = user;
    }

    next();
  })(req, res, next);
};
