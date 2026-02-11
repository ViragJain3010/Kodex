// server/controllers/Snippet.controller.js
import Snippet from '../models/Snippet.model.js';

export const snippetController = {
  /**
   * Create or update a snippet.
   *
   * @param {string} slug - Unique identifier for the snippet.
   * @param {string} code - Source code of the snippet.
   * @param {string} language - Programming language of the snippet.
   * @param {string} input - Standard input for the code.
   * @param {string} output - Execution output of the code.
   * @returns {Promise<{status: number, message: string}>} Response status and message.
   */
  async createSnippet(slug, code, language, input, output) {
    try {
      await Snippet.upsert({
        where: { slug },
        update: {
          code,
          input,
          output,
          language,
          updatedAt: new Date(),
        },
        create: {
          slug,
          code,
          language,
          input,
          output,
        },
      });

      const response = {
        status: 200,
        message: 'Snippet created/updated successfully',
      };
      return response;
    } catch (error) {
      console.error(error);
      const response = {
        status: 500,
        message: 'Internal server error',
      };
      return response;
    }
  },

  /**
   * Retrieve a snippet by its slug.
   *
   * @param {import('express').Request} req - Express request object.
   * @param {import('express').Response} res - Express response object.
   */
  async getSnippet(req, res) {
    try {
      const { slug } = req.params;
      const snippet = await Snippet.findUnique({
        where: { slug },
      });
      res.json(snippet).status(200);
    } catch (error) {
      console.log('🚀 ~ getSnippet ~ error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  /**
   * Check if a slug is available for a new snippet.
   *
   * @param {import('express').Request} req - Express request object.
   * @param {import('express').Response} res - Express response object.
   */
  async isSlugAvailable(req, res) {
    try {
      const { slug } = req.params;
      const snippet = await Snippet.findUnique({
        where: {
          slug,
        },
      });
      if (snippet) {
        res.status(409).json({ message: 'Slug is already taken' });
      } else {
        res.status(200).json({ message: 'Slug is available' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};
