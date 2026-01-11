import { Router } from 'express';
import { createTask, getTasks, getTaskById, updateTaskStatus } from '../controllers/tasksController.js';
import { isValidCreateStatus, isValidTaskStatus } from '../middlewares/tasks.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     tags: [Tasks]
 *     summary: Створити завдання
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, date]
 *             properties:
 *               name:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Завдання створено
 */


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
