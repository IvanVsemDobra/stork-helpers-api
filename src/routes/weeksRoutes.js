import { Router } from 'express';
import {
  getFirstWeekInfo,
  getWeekBabyInfo,
  getWeekInfo,
  getWeekMomInfo,
} from '../controllers/weeksController.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use('/me', authenticate);
router.get('/public/my-day', getFirstWeekInfo); //неавторизований запит
router.get('/me/my-day', getWeekInfo); //запит на інфо для сторінки мій день
router.get('/me/journey/baby', getWeekBabyInfo); //запит для сторінки Подорож малюк
router.get('/me/journey/mom', getWeekMomInfo); //запит для сторінки Подорож мама

export default router;
