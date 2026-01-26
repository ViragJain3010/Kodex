/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('snippets', table => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('slug').notNullable().unique();
    table.text('code').notNullable();
    table.string('language').notNullable();
    table.text('output').notNullable();
    table.text('input').nullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });

  // Create index for faster slug lookups
  await knex.schema.raw('CREATE INDEX idx_snippets_slug ON snippets(slug)');
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTableIfExists('snippets');
}
