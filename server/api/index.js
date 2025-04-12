// server/api/index.js

import express from 'express';
import cors from 'cors';
import passport from '../config/passport.config.js';
import authRoutes from './routes/auth.routes.js';
import executeRouter from './routes/execute.routes.js';
import testRoutes from './routes/test.js';
import languagesRoutes from './routes/languages.routes.js';
import snippetRoutes from './routes/snippet.routes.js';

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// Initialize Passport
app.use(passport.initialize());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', executeRouter);
app.use('/api', testRoutes);
app.use('/api', languagesRoutes);
app.use('/api', snippetRoutes);

// Error handling middleware
app.use((err, req, res) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal Server Error',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

export default app;
