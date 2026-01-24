// server/controllers/Snippet.controller.js
import prisma from '../config/prisma.js';

export const snippetController = {
  async createSnippet(slug, code, language, input, output) {
    try {
      await prisma.snippet.upsert({
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

  async getSnippet(req, res) {
    try {
      const { slug } = req.params;
      const snippet = await prisma.snippet.findUnique({
        where: { slug },
      });
      res.json(snippet).status(200);
    } catch (error) {
      console.log('🚀 ~ getSnippet ~ error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async isSlugAvailable(req, res) {
    try {
      const { slug } = req.params;
      const snippet = await prisma.snippet.findUnique({
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
