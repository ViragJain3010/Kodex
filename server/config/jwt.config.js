// server/config/jwt.js
import jwt from 'jsonwebtoken';

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'your-access-secret-key';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-key';
const JWT_EXPIRATION = '15m';
const REFRESH_TOKEN_EXPIRATION = '7d';

export const generateAccessToken = user => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
    },
    JWT_ACCESS_SECRET,
    { expiresIn: JWT_EXPIRATION }
  );
};

export const generateRefreshToken = user => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
    },
    JWT_REFRESH_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRATION }
  );
};

export const verifyAccessToken = token => {
  try {
    return jwt.verify(token, JWT_ACCESS_SECRET);
  } catch (error) {
    console.log('🚀 ~ verifyAccessToken ~ error:', error);
    return null;
  }
};

export const verifyRefreshToken = token => {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET);
  } catch (error) {
    console.log('🚀 ~ verifyRefreshToken ~ error:', error);
    return null;
  }
};

export const refreshAccessToken = refreshToken => {
  try {
    const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);

    // Generate new access token
    return generateAccessToken({
      id: decoded.id,
      username: decoded.username,
      email: decoded.email,
    });
  } catch (error) {
    console.log('🚀 ~ refreshAccessToken ~ error:', error);
    return null;
  }
};
