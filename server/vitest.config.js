// vite.config.js
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
  },
  include: ['./tests/**/*.{test,spec}.js'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'), // Maps @ to the root directory (server)
    },
  },
});
