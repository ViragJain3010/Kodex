import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import prisma from '../config/prisma.js';
import app from '@/api/index.js';

// Mock dependencies
vi.mock('../config/prisma.js', () => {
  return {
    default: {
      $connect: vi.fn().mockResolvedValue(),
      $disconnect: vi.fn().mockResolvedValue(),
      snippet: {
        findUnique: vi.fn(),
        upsert: vi.fn(),
      },
      user: {
        findFirst: vi.fn(),
        create: vi.fn(),
        findUnique: vi.fn(),
        update: vi.fn(),
      },
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
    prisma.$connect.mockReset();
    prisma.$disconnect.mockReset();

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

  it('creates temp directory if it does not exist', async () => {
    fs.existsSync.mockReturnValueOnce(false);

    // Import server to trigger init code
    await import('./server.js');

    expect(fs.existsSync).toHaveBeenCalled();
    expect(fs.mkdirSync).toHaveBeenCalled();
  });

  it('does not create temp directory if it already exists', async () => {
    fs.existsSync.mockReturnValueOnce(true);

    await import('./server.js');

    expect(fs.existsSync).toHaveBeenCalled();
    expect(fs.mkdirSync).not.toHaveBeenCalled();
  });

  it('connects to database and starts the server', async () => {
    fs.existsSync.mockReturnValueOnce(true);

    await import('./server.js');

    expect(prisma.$connect).toHaveBeenCalled();
    expect(app.listen).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Connected to the database successfully!');
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Server running on port'));
  });

  it('exits process if database connection fails', async () => {
    const error = new Error('Connection failed');
    prisma.$connect.mockRejectedValueOnce(error);

    fs.existsSync.mockReturnValueOnce(true);

    await import('./server.js');

    expect(console.error).toHaveBeenCalledWith('Database connection failed:', error);
    expect(process.exit).toHaveBeenCalledWith(1);
  });

  it('registers signal handlers for graceful shutdown', async () => {
    fs.existsSync.mockReturnValueOnce(true);

    await import('./server.js');

    expect(process.on).toHaveBeenCalledWith('SIGTERM', expect.any(Function));
    expect(process.on).toHaveBeenCalledWith('SIGINT', expect.any(Function));
  });

  it('performs cleanup on SIGTERM', async () => {
    fs.existsSync.mockReturnValueOnce(true).mockReturnValueOnce(true);

    await import('./server.js');

    // Trigger SIGTERM handler
    await processEvents.SIGTERM();

    expect(fs.existsSync).toHaveBeenCalledTimes(2);
    expect(fs.rmSync).toHaveBeenCalled();
    expect(prisma.$disconnect).toHaveBeenCalled();
    expect(process.exit).toHaveBeenCalledWith(0);
  });

  it('performs cleanup on SIGINT', async () => {
    fs.existsSync.mockReturnValueOnce(true).mockReturnValueOnce(true);

    await import('./server.js');

    // Trigger SIGINT handler
    await processEvents.SIGINT();

    expect(fs.existsSync).toHaveBeenCalledTimes(2);
    expect(fs.rmSync).toHaveBeenCalled();
    expect(prisma.$disconnect).toHaveBeenCalled();
    expect(process.exit).toHaveBeenCalledWith(0);
  });

  it('does not attempt to remove temp directory if it does not exist during cleanup', async () => {
    fs.existsSync.mockReturnValueOnce(true).mockReturnValueOnce(false);

    await import('./server.js');

    // Trigger SIGTERM handler
    await processEvents.SIGTERM();

    expect(fs.existsSync).toHaveBeenCalledTimes(2);
    expect(fs.rmSync).not.toHaveBeenCalled();
  });
});
