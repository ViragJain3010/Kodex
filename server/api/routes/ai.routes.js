import { requireAuth } from '../../middleware/auth.middleware.js';
import {
  aiRateLimitMiddleware,
  aiProxyMiddleware,
  mockAiHandler,
} from '../../middleware/ai.middleware.js';
import express from 'express';

const router = express.Router();

/**
 * @route POST /api/ai/ask
 * @desc Ask AI about code or instructions
 * @access Private (Requires JWT)
 */
router.post('/ai/ask', requireAuth, aiRateLimitMiddleware, aiProxyMiddleware);

/**
 * @route POST /api/ai/mock
 * @desc Mock endpoint for frontend testing
 * @access Public (For development)
 */
router.post('/ai/mock', mockAiHandler);

export default router;
