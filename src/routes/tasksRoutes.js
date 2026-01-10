import { Router } from 'express';
import { createTask, getTasks, getTaskById, updateTaskStatus } from '../controllers/tasksController.js';
import { isValidCreateStatus, isValidTaskStatus } from '../middlewares/tasks.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.post(
  '/',
  authenticate,
  isValidCreateStatus,
  createTask
);

router.get('/', authenticate, getTasks);

router.get('/:taskId', authenticate, getTaskById);

router.patch(
  '/:taskId/status',
  authenticate,
  isValidTaskStatus,
  updateTaskStatus
);


export default router;
