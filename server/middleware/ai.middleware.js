// server/middleware/ai.middleware.js
/* eslint-disable */

import http from 'http';
import db from '../config/db.js';

/**
 * Simple In-memory Token Bucket Rate Limiter
 */
class TokenBucket {
  constructor(capacity, fillRate) {
    this.capacity = capacity;
    this.fillRate = fillRate; // tokens per millisecond
    this.buckets = new Map();
  }

  allowRequest(userId) {
    const key = String(userId);
    const now = Date.now();
    let bucket = this.buckets.get(key);

    if (!bucket) {
      bucket = { tokens: this.capacity, lastFill: now };
    } else {
      // Calculate how many tokens were added since last request
      const elapsed = now - bucket.lastFill;
      const addedTokens = elapsed * this.fillRate;
      bucket.tokens = Math.min(this.capacity, bucket.tokens + addedTokens);
      bucket.lastFill = now;
    }

    if (bucket.tokens >= 1) {
      bucket.tokens -= 1;
      this.buckets.set(key, bucket);
      return { allowed: true, tokens: Math.floor(bucket.tokens) };
    }

    return { allowed: false, tokens: Math.floor(bucket.tokens) };
  }
}

// 10 requests per minute = 10 tokens capacity, 10 tokens / 60000 ms fill rate
const aiRateLimiter = new TokenBucket(3, 10 / 60000);

/**
 * Middleware to enforce rate limits for AI requests.
 */
export const aiRateLimitMiddleware = (req, res, next) => {
  const userId = req.user.id; // Assumes requireAuth was called before
  const { allowed, tokens } = aiRateLimiter.allowRequest(userId);

  console.log(`[RateLimit] User: ${userId}, Remaining tokens: ${tokens}`);
  res.setHeader('X-RateLimit-Remaining', tokens.toString());

  if (!allowed) {
    return res.status(429).json({
      message: 'Too many AI requests',
      error: 'Rate limit exceeded. Please try again in a minute.',
      remainingTokens: tokens,
    });
  }

  next();
};

/**
 * Middleware to proxy requests to the internal AI microservice.
 */
export const aiProxyMiddleware = (req, res) => {
  console.log(`[AIProxyMiddleware] Request received for user: ${req.user?.id}`);
  const aiServiceUrl = process.env.AI_SERVICE_URL || 'http://localhost:8001';

  const startTime = Date.now();
  let fullResponse = '';

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const proxyReq = http.request(`${aiServiceUrl}/internal/ask`, options, proxyRes => {
    // Disable buffering for real-time streaming
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no'); // For Nginx if present

    res.status(proxyRes.statusCode);
    res.flushHeaders();

    // Intercept data for logging
    proxyRes.on('data', chunk => {
      fullResponse += chunk.toString();
    });

    proxyRes.on('end', async () => {
      const latency = Date.now() - startTime;

      try {
        // Parse the full response to extract meaningful info if needed
        // The AI service sends: data: {"type": "done", "full_response": "..."}\n\n
        const lines = fullResponse.split('\n');
        let extractedResponse = '';
        let modifiedCode = null;

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.substring(6));
              if (data.type === 'done') {
                extractedResponse = data.full_response;
                modifiedCode = data.modified_code;
              }
            } catch (e) {
              /* ignore partial/malformed JSON in stream */
            }
          }
        }

        // Save to DB
        // await db('ai_logs').insert({
        //   user_id: req.user.id,
        //   feature: 'ask',
        //   prompt: req.body.instruction || 'Explain code',
        //   response: extractedResponse,
        //   modified_code: modifiedCode ? JSON.stringify(modifiedCode) : null,
        //   latency_ms: latency
        // });
      } catch (err) {
        console.error('Failed to save AI log:', err);
      }
    });

    // Pipe the response body (the SSE stream) directly to the client
    proxyRes.pipe(res);
  });

  proxyReq.on('error', err => {
    console.error('AI Proxy Error:', err);
    res.status(502).json({
      message: 'AI Service Unavailable',
      error: err.message,
    });
  });

  // Attach user_id to the payload before forwarding
  const payload = {
    ...req.body,
    user_id: req.user.id,
  };

  proxyReq.write(JSON.stringify(payload));
  proxyReq.end();
};

/**
 * Mock AI Streaming Handler for frontend testing
 */
export const mockAiHandler = (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');

  res.flushHeaders();

  const chunks = [
    { type: 'chunk', content: 'Hello! ' },
    { type: 'chunk', content: 'This is a ' },
    { type: 'chunk', content: 'mock streaming ' },
    { type: 'chunk', content: 'response from the backend. ' },
    {
      type: 'chunk',
      content: '\n\nI can see your language is ' + (req.body.language || 'unknown') + '.',
    },
    {
      type: 'done',
      full_response: 'Hello! This is a mock streaming response from the backend.',
      modified_code: null,
    },
  ];

  let i = 0;
  const interval = setInterval(() => {
    if (i < chunks.length) {
      res.write(`data: ${JSON.stringify(chunks[i])}\n\n`);
      i++;
    } else {
      clearInterval(interval);
      res.end();
    }
  }, 1000);
};
