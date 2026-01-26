// knexfile.js
import dotenv from 'dotenv';

dotenv.config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URI,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URI,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
  },

  test: {
    client: 'postgresql',
    connection: process.env.DATABASE_URI,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
  },
};
