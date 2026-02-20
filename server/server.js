// server/server.js
// npm start -> Starts the seperate backend server

import app from './api/index.js';
import db from './config/db.js';

const PORT = process.env.PORT || 3001;

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
  await db.destroy(); // Destroy Knex connection pool
  console.log('Cleanup completed. Exiting.');
  process.exit(0);
}

// Handle termination signals
process.on('SIGTERM', cleanup);
process.on('SIGINT', cleanup);

// Start the server
startServer();
