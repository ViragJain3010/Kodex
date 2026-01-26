// server/server.js
// npm start -> Starts the seperate backend server

import app from './api/index.js';
import path from 'path';
import fs from 'fs';
import db from './config/db.js';

import { fileURLToPath } from 'url';

// Get the current directory using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3001;

// Create temp directory for code files if it doesn't exist
const tempDir = path.join(__dirname, 'temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}
// Ensure the temp directory remains accessible to runner containers
fs.chmodSync(tempDir, 0o777);

// Function to start the server
async function startServer() {
  // Connect to the database
  try {
    await db.raw('SELECT 1');
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
  await db.destroy(); // Destroy Knex connection pool
  console.log('Cleanup completed. Exiting.');
  process.exit(0);
}

// Handle termination signals
process.on('SIGTERM', cleanup);
process.on('SIGINT', cleanup);

// Start the server
startServer();
