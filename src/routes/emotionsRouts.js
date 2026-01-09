import { Router } from 'express';
import { getEmotions } from '../controllers/emotionsController.js';

const router = Router();

router.get('/emotions', getEmotions);
export default router;
