import { Router } from 'express';
import {
  getFirstWeekInfo,
  getWeekInfo,
} from '../controllers/weeksController.js';

const router = Router();

router.get('/weeks/public/my-day', getFirstWeekInfo);
router.get('/weeks/me/my-day', getWeekInfo);

export default router;
