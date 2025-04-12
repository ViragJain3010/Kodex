// /server/index.js  -> Utilises build from Next.js
// npm run dev

import express from 'express';
import path from 'path';
import fs from 'fs';
import next from 'next';

// Import the API app
import apiApp from './api/index.js';

const PORT = process.env.PORT || 3001;

// Temp directory for code files
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const tempDir = path.join(__dirname, 'temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

// Initialize Express
const server = express();

// Initialize Next.js with standalone build
const nextApp = next({ dev: false, dir: path.join(__dirname, 'standalone') });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  // Mount API routes
  server.use('/', apiApp);

  // Handle requests with Next.js
  server.all('*', (req, res) => {
    return handle(req, res); // Pass requests to Next.js
  });

  // Start the server
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/api`);
    console.log(`Frontend served from: http://localhost:${PORT}/`);
  });

  // Cleanup on shutdown
  process.on('SIGTERM', () => {
    console.log('Received SIGTERM. Performing cleanup...');
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
    process.exit(0);
  });

  process.on('SIGINT', () => {
    console.log('Received SIGINT. Performing cleanup...');
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
    process.exit(0);
  });
});
