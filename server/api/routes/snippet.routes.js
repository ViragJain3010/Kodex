// server/api/routes/snippet.routes.js

import express from 'express';
import { snippetController } from '../../controller/Snippet.controller.js';

const router = express.Router();

router.get('/:slug', snippetController.getSnippet);
// router.post('/:slug', snippetController.createSnippet)
router.get('/check/:slug', snippetController.isSlugAvailable);

export default router;
