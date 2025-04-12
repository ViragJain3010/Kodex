// server/server.js
// npm start -> Starts the seperate backend server

import app from './api/index.js';
import path from 'path';
import fs from 'fs';
import { PrismaClient } from '@prisma/client';

// Get the current directory using import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const PORT = process.env.PORT || 3001;

// Initialize Prisma Client
const prisma = new PrismaClient();

// Create temp directory for code files if it doesn't exist
const tempDir = path.join(__dirname, 'temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

// Function to start the server
async function startServer() {
  // Connect to the database
  try {
    await prisma.$connect();
    console.log('Connected to the database successfully!');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); // Exit if connection fails
  }

  // Start the Express server
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/`);
  });
}

// Cleanup function on shutdown
async function cleanup() {
  console.log('Performing cleanup...');
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  await prisma.$disconnect(); // disconnect Prisma
  console.log('Cleanup completed. Exiting.');
  process.exit(0);
}

// Handle termination signals
process.on('SIGTERM', cleanup);
process.on('SIGINT', cleanup);

// Start the server
startServer();
