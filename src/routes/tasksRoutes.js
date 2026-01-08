import { Router } from 'express';
import { createTask, getTasks, updateTaskStatus } from '../controllers/tasksController.js';
import { isValidCreateStatus, isValidTaskStatus } from '../middlewares/tasks.js';



const router = Router();


router.post(
  '/',
  // auth,
  isValidCreateStatus,
  createTask
);
router.get('/', /* auth, */ getTasks);
router.patch(
  '/:taskId/status',
  // auth,
  isValidTaskStatus,
  updateTaskStatus
);

export default router;
