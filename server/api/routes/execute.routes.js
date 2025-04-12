// server/api/routes/execute.js

import express from 'express';
// import { validateExecuteRequest } from '../../middleware/Execute.middleware.js';
import { executeController } from '../../controller/Execute.controller.js';

const router = express.Router();

// Execute code endpoint
router.post('/execute', executeController);

export default router;
