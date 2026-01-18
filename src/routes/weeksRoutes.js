import { Router } from 'express';
import {
  getFirstWeekInfo,
  getWeekBabyInfo,
  getWeekInfo,
  getWeekMomInfo,
} from '../controllers/weeksController.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

/**
 * @swagger
 * /api/weeks/public/my-day:
 *   get:
 *     tags: [Weeks]
 *     summary: Отримати інформацію про перший день (публічний)
 *     responses:
 *       200:
 *         description: Інформація про перший день тижня
 *
 * /api/weeks/me/my-day:
 *   get:
 *     tags: [Weeks]
 *     summary: Отримати інформацію для сторінки "Мій день"
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Інформація користувача для сторінки "Мій день"
 *
 * /api/weeks/me/journey/baby:
 *   get:
 *     tags: [Weeks]
 *     summary: Інформація для сторінки "Подорож малюк"
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Інформація про розвиток малюка
 *
 * /api/weeks/me/journey/baby/{weekNumber}:
 *   get:
 *     tags: [Weeks]
 *     summary: Інформація для сторінки "Подорож малюк" за номером тижня
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: weekNumber
 *         required: true
 *         schema:
 *           type: integer
 *         description: Номер тижня
 *     responses:
 *       200:
 *         description: Інформація про розвиток малюка за тиждень
 *
 * /api/weeks/me/journey/mom:
 *   get:
 *     tags: [Weeks]
 *     summary: Інформація для сторінки "Подорож мама"
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Інформація про стан мами
 *
 * /api/weeks/me/journey/mom/{weekNumber}:
 *   get:
 *     tags: [Weeks]
 *     summary: Інформація для сторінки "Подорож мама" за номером тижня
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: weekNumber
 *         required: true
 *         schema:
 *           type: integer
 *         description: Номер тижня
 *     responses:
 *       200:
 *         description: Інформація про стан мами за тиждень
 */

router.use('/me', authenticate);
router.get('/public/my-day', getFirstWeekInfo); //неавторизований запит
router.get('/me/my-day', getWeekInfo); //запит на інфо для сторінки мій день
router.get('/me/journey/baby', getWeekBabyInfo); //запит для сторінки Подорож малюк
router.get('/me/journey/mom', getWeekMomInfo); //запит для сторінки Подорож мама

router.get('/me/journey/baby/:weekNumber', getWeekBabyInfo); //запит для сторінки Подорож малюк за номером тижня
router.get('/me/journey/mom/:weekNumber', getWeekMomInfo); //запит для сторінки Подорож мама за номером тижня

export default router;
