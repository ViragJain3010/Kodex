// server/models/Snippet.model.js
import db from '../config/db.js';

const TABLE_NAME = 'snippets';

export const Snippet = {
  /**
   * Find unique snippet by field (usually slug)
   * @param {Object} whereClause - { where: { slug: 'xxx' } }
   * @returns {Promise<Object|null>}
   */
  async findUnique(whereClause) {
    try {
      const snippet = await db(TABLE_NAME).where(whereClause.where).first();

      if (!snippet) return null;

      // Transform to camelCase
      return {
        id: snippet.id,
        slug: snippet.slug,
        code: snippet.code,
        language: snippet.language,
        output: snippet.output,
        input: snippet.input,
        createdAt: snippet.created_at,
        updatedAt: snippet.updated_at,
      };
    } catch (error) {
      console.error('Error in Snippet.findUnique:', error);
      throw error;
    }
  },

  /**
   * Upsert (insert or update) a snippet
   * @param {Object} params - { where: { slug }, update: {...}, create: {...} }
   * @returns {Promise<Object>}
   */
  async upsert(params) {
    try {
      const { where, update, create } = params;

      // Check if snippet exists
      const existing = await db(TABLE_NAME).where(where).first();

      if (existing) {
        // Update existing snippet
        const updateData = {
          code: update.code,
          language: update.language,
          output: update.output,
          input: update.input,
          updated_at: update.updatedAt || new Date(),
        };

        const [snippet] = await db(TABLE_NAME).where(where).update(updateData).returning('*');

        return {
          id: snippet.id,
          slug: snippet.slug,
          code: snippet.code,
          language: snippet.language,
          output: snippet.output,
          input: snippet.input,
          createdAt: snippet.created_at,
          updatedAt: snippet.updated_at,
        };
      } else {
        // Create new snippet
        const insertData = {
          slug: create.slug,
          code: create.code,
          language: create.language,
          output: create.output,
          input: create.input || null,
          created_at: new Date(),
          updated_at: new Date(),
        };

        const [snippet] = await db(TABLE_NAME).insert(insertData).returning('*');

        return {
          id: snippet.id,
          slug: snippet.slug,
          code: snippet.code,
          language: snippet.language,
          output: snippet.output,
          input: snippet.input,
          createdAt: snippet.created_at,
          updatedAt: snippet.updated_at,
        };
      }
    } catch (error) {
      console.error('Error in Snippet.upsert:', error);
      throw error;
    }
  },
};

export default Snippet;
