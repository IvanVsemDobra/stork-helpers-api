import { Router } from 'express';
import { createTask, getTasks, updateTaskStatus } from '../controllers/tasksController';


const router = Router();

router.post('/', auth, createTask);
router.get('/', auth, getTasks);
router.patch('/:taskId/status', auth, updateTaskStatus);

export default router;
