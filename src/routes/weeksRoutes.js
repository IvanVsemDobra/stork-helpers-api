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

router.get('/me/journey/baby/:weekNumber', getWeekBabyInfo); //запит для сторінки Подорож малюк за номером тижня
router.get('/me/journey/mom/:weekNumber', getWeekMomInfo); //запит для сторінки Подорож мама за номером тижня

export default router;
