// server/models/User.model.js
import db from '../config/db.js';

const TABLE_NAME = 'users';

export const User = {
  /**
   * Find first user matching the where clause
   * @param {Object} whereClause - Query conditions with OR/AND support
   * @returns {Promise<Object|null>}
   */
  async findFirst(whereClause) {
    try {
      let query = db(TABLE_NAME);

      if (whereClause.where) {
        if (whereClause.where.OR) {
          // Handle OR conditions
          query = query.where(function () {
            whereClause.where.OR.forEach(condition => {
              this.orWhere(condition);
            });
          });
        } else if (whereClause.where.AND) {
          // Handle AND conditions
          whereClause.where.AND.forEach(condition => {
            query = query.where(condition);
          });
        } else {
          // Simple where condition
          query = query.where(whereClause.where);
        }

        // Handle additional operators like gt (greater than)
        if (whereClause.where.resetTokenExpiry?.gt) {
          query = query.where('reset_token_expiry', '>', whereClause.where.resetTokenExpiry.gt);
        }
      }

      const user = await query.first();
      return user || null;
    } catch (error) {
      console.error('Error in User.findFirst:', error);
      throw error;
    }
  },

  /**
   * Find unique user by a field
   * @param {Object} whereClause - { where: { field: value } }
   * @returns {Promise<Object|null>}
   */
  async findUnique(whereClause) {
    try {
      const user = await db(TABLE_NAME).where(whereClause.where).first();
      return user || null;
    } catch (error) {
      console.error('Error in User.findUnique:', error);
      throw error;
    }
  },

  /**
   * Create a new user
   * @param {Object} params - { data: { username, email, password, authProvider, etc. } }
   * @returns {Promise<Object>}
   */
  async create(params) {
    try {
      const { data } = params;

      const userData = {
        username: data.username,
        email: data.email,
        password: data.password || null,
        auth_provider: data.authProvider || 'LOCAL',
        provider_id: data.providerId || null,
        reset_token: data.resetToken || null,
        reset_token_expiry: data.resetTokenExpiry || null,
        created_at: new Date(),
        updated_at: new Date(),
      };

      const [user] = await db(TABLE_NAME).insert(userData).returning('*');

      // Transform back to camelCase for API consistency
      return {
        id: user.id,
        username: user.username,
        email: user.email,
        password: user.password,
        authProvider: user.auth_provider,
        providerId: user.provider_id,
        resetToken: user.reset_token,
        resetTokenExpiry: user.reset_token_expiry,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
      };
    } catch (error) {
      console.error('Error in User.create:', error);
      throw error;
    }
  },

  /**
   * Update a user
   * @param {Object} params - { where: { id: 'xxx' }, data: { field: value } }
   * @returns {Promise<Object>}
   */
  async update(params) {
    try {
      const { where, data } = params;

      // Transform camelCase to snake_case for database
      const updateData = {
        ...(data.username !== undefined && { username: data.username }),
        ...(data.email !== undefined && { email: data.email }),
        ...(data.password !== undefined && { password: data.password }),
        ...(data.authProvider !== undefined && { auth_provider: data.authProvider }),
        ...(data.providerId !== undefined && { provider_id: data.providerId }),
        ...(data.resetToken !== undefined && { reset_token: data.resetToken }),
        ...(data.resetTokenExpiry !== undefined && { reset_token_expiry: data.resetTokenExpiry }),
        updated_at: new Date(),
      };

      const [user] = await db(TABLE_NAME).where(where).update(updateData).returning('*');

      // Transform back to camelCase
      return {
        id: user.id,
        username: user.username,
        email: user.email,
        password: user.password,
        authProvider: user.auth_provider,
        providerId: user.provider_id,
        resetToken: user.reset_token,
        resetTokenExpiry: user.reset_token_expiry,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
      };
    } catch (error) {
      console.error('Error in User.update:', error);
      throw error;
    }
  },
};

export default User;
