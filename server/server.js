// server/server.js
// npm start -> Starts the seperate backend server

import app from './api/index.js';
import path from 'path';
import fs from 'fs';
import { PrismaClient } from '@prisma/client';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const PORT = process.env.PORT || 3001;
const prisma = new PrismaClient();
const tempDir = path.join(__dirname, 'temp');

function createTempDir() {
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }
}

async function startServer() {
  try {
    await prisma.$connect();
    console.log('Connected to the database successfully!');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/`);
  });
}

async function cleanup() {
  console.log('Performing cleanup...');
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  await prisma.$disconnect();
  console.log('Cleanup completed. Exiting.');
  process.exit(0);
}

process.on('SIGTERM', cleanup);
process.on('SIGINT', cleanup);

createTempDir();
startServer();
export { createTempDir, startServer, cleanup, prisma, tempDir };
