// server/api/routes/languages.js

import express from 'express';
import {
  validateLanguage,
  getLanguageConfig,
  getSupportedLanguages,
} from '../../config/Languages.config.js';

const router = express.Router();

// Get list of all supported languages
router.get('/languages', (req, res) => {
  try {
    const languages = getSupportedLanguages();
    res.json({
      success: true,
      path: 'at server/api/routes/languages.js/languages/try',
      languages: languages,
      total: languages.length,
    });
  } catch (error) {
    console.error('Error fetching languages:', error);
    res.status(500).json({
      success: false,
      path: 'at server/api/routes/languages.js/languages/catch',
      error: 'Failed to fetch supported languages',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// Get configuration for a specific language
router.get('/languages/:lang', async (req, res) => {
  try {
    const language = req.params.lang.toLowerCase();

    // Validate language
    if (!validateLanguage(language)) {
      return res.status(404).json({
        success: false,
        error: 'Language not supported',
        message: `Language '${language}' is not supported. Please use one of the supported languages.`,
        path: 'at server/api/routes/execute.js/languages/:lang/try',
      });
    }

    // Get language configuration
    const config = getLanguageConfig(language);

    // Remove sensitive information from docker configuration
    const safeConfig = {
      name: config.name,
      extension: config.extension,
      filePrefix: config.execution.filePrefix,
      defaultBoilerplate: config.execution.defaultBoilerplate,
      requiresCompilation: config.settings.requiresCompilation,
      supportsInput: config.settings.supportsInput,
      supportsFiles: config.settings.supportsFiles,
    };

    // Send response
    res.json({
      success: true,
      language: language,
      safeConfig,
    });
  } catch (error) {
    console.error('Error fetching language config:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch language configuration',
      path: 'at server/api/routes/execute.js/languages/:lang/catch',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

export default router;
