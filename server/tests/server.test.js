import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import fs from 'node:fs';
import db from '../config/db.js';
import app from '@/api/index.js';

// Mock dependencies
vi.mock('../config/db.js', () => {
  return {
    default: {
      raw: vi.fn().mockResolvedValue(),
      destroy: vi.fn().mockResolvedValue(),
    },
  };
});

vi.mock('fs', async () => {
  const actual = await vi.importActual('fs');
  const mockedFs = {
    ...actual,
    existsSync: vi.fn(),
    mkdirSync: vi.fn(),
    rmSync: vi.fn(),
    chmodSync: vi.fn(),
  };
  return {
    ...mockedFs,
    default: mockedFs,
  };
});

vi.mock('../api/index.js', () => {
  return {
    default: {
      listen: vi.fn((port, callback) => {
        if (callback) callback();
        return {
          close: vi.fn().mockImplementation(cb => cb && cb()),
        };
      }),
    },
  };
});

describe('Server', () => {
  let processEvents = {};
  let originalProcessOn;
  let originalProcessExit;

  beforeEach(() => {
    vi.resetModules();

    // Mock process.on to capture handlers
    originalProcessOn = process.on;
    process.on = vi.fn((event, handler) => {
      processEvents[event] = handler;
      return process;
    });

    // Mock process.exit
    originalProcessExit = process.exit;
    process.exit = vi.fn();

    // Reset mocks
    fs.existsSync.mockReset();
    fs.mkdirSync.mockReset();
    fs.rmSync.mockReset();
    db.raw.mockReset();
    db.destroy.mockReset();

    // Mock console methods
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore original process methods
    process.on = originalProcessOn;
    process.exit = originalProcessExit;

    vi.restoreAllMocks();
  });

  it('connects to database and starts the server', async () => {
    await import('../server.js');

    expect(db.raw).toHaveBeenCalled();
    expect(app.listen).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Connected to the database successfully!');
  });

  it('exits process if database connection fails', async () => {
    const error = new Error('Connection failed');
    db.raw.mockRejectedValueOnce(error);

    await import('../server.js');

    expect(console.error).toHaveBeenCalledWith('Database connection failed:', error);
    expect(process.exit).toHaveBeenCalledWith(1);
  });

  it('registers signal handlers for graceful shutdown', async () => {
    await import('../server.js');

    expect(process.on).toHaveBeenCalledWith('SIGTERM', expect.any(Function));
    expect(process.on).toHaveBeenCalledWith('SIGINT', expect.any(Function));
  });

  it('performs cleanup on SIGTERM', async () => {
    await import('../server.js');

    // Trigger SIGTERM handler
    await processEvents.SIGTERM();

    expect(db.destroy).toHaveBeenCalled();
    expect(process.exit).toHaveBeenCalledWith(0);
  });

  it('performs cleanup on SIGINT', async () => {
    await import('../server.js');

    // Trigger SIGINT handler
    await processEvents.SIGINT();

    expect(db.destroy).toHaveBeenCalled();
    expect(process.exit).toHaveBeenCalledWith(0);
  });
});
