import { Router } from 'express';
import { getEmotions } from '../controllers/emotionsController.js';

const router = Router();

/**
 * @swagger
 * /api/emotions:
 *   get:
 *     tags: [Emotions]
 *     summary: Отримати список емоцій
 *     responses:
 *       200:
 *         description: Список емоцій
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Радість
 */



router.get('/emotions', getEmotions);
export default router;
