import { Router } from 'express';
import {
  getFirstWeekInfo,
  getWeekBabyInfo,
  getWeekInfo,
  getWeekMomInfo,
} from '../controllers/weeksController.js';

const router = Router();

router.get('/weeks/public/my-day', getFirstWeekInfo); //неавторизований запит
router.get('/weeks/me/my-day', getWeekInfo); //запит на інфо для сторінки мій день
router.get('/weeks/me/journey/baby', getWeekBabyInfo); //запит для сторінки Подорож малюк
router.get('/weeks/me/journey/mom', getWeekMomInfo); //запит для сторінки Подорож мама

export default router;
