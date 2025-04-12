// server/api/routes/test.js

import express from 'express';
import { getLanguageConfig } from '../../config/Languages.config.js';
import dockerRunner from '../../utils/Docker.js';
import { snippetController } from '../../controller/Snippet.controller.js';

const router = express.Router();

router.post('/test', async (req, res) => {
  try {
    const { slug = 'brave-fox', language = 'python', code, input } = req.body;
    const config = getLanguageConfig(language);
    const result = await dockerRunner.runCode(
      config,
      // "#include<bits/stdc++.h>\nusing namespace std;\nint main() {int n; cin >> n; cout << n; return 0;}",
      //   "n=input() \nprint(n)",
      // 'console.log("Hello, World!");',
      //   "3010"
      code,
      input
    );
    await snippetController.createSnippet(slug, code, language, input, result.output);
    res.json(result);
  } catch (error) {
    console.error('Docker execution error:', {
      message: error.message,
      stack: error.stack,
      details: error.json || error.reason || error.statusCode,
      fullError: JSON.stringify(error, null, 2),
    });
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default router;
