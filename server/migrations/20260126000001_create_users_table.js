/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  // Create enum type for auth_provider
  await knex.raw(`
    DO $$ BEGIN
      CREATE TYPE auth_provider AS ENUM ('LOCAL', 'GOOGLE', 'GITHUB');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;
  `);

  // Create users table
  await knex.schema.createTable('users', table => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('username').notNullable().unique();
    table.string('email').notNullable().unique();
    table.string('password').nullable(); // Nullable for OAuth users
    table.specificType('auth_provider', 'auth_provider').notNullable().defaultTo('LOCAL');
    table.string('provider_id').nullable(); // For OAuth provider user ID
    table.string('reset_token').nullable();
    table.timestamp('reset_token_expiry').nullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });

  // Create index for faster lookups
  await knex.schema.raw('CREATE INDEX idx_users_email ON users(email)');
  await knex.schema.raw('CREATE INDEX idx_users_username ON users(username)');
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTableIfExists('users');
  await knex.raw('DROP TYPE IF EXISTS auth_provider');
}
