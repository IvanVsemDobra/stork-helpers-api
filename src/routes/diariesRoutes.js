import { Router } from 'express';
import {
  createDiaryNote,
  getAllDiaryNote,
  updateDiaryNote,
  deleteDiaryNote,
} from '../controllers/diariesController.js';

import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

/**
 * @swagger
 * /api/diaries/me:
 *   post:
 *     tags: [Diaries]
 *     summary: Створити нову нотатку у щоденнику
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, description, emotions]
 *             properties:
 *               title:
 *                 type: string
 *                 example: Мій день
 *               description:
 *                 type: string
 *                 example: Сьогодні було чудово...
 *               emotions:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["63f1e2abc123def456789012", "63f1e2abc123def456789013"]
 *     responses:
 *       201:
 *         description: Нотатку успішно створено
 *
 *   get:
 *     tags: [Diaries]
 *     summary: Отримати всі нотатки користувача
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Список нотаток
 *
 * /api/diaries/me/{diaryNoteId}:
 *   patch:
 *     tags: [Diaries]
 *     summary: Оновити нотатку користувача
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: diaryNoteId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID нотатки
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Новий день
 *               description:
 *                 type: string
 *                 example: Сьогодні було ще краще!
 *               emotions:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["63f1e2abc123def456789014"]
 *     responses:
 *       200:
 *         description: Нотатку успішно оновлено
 *
 *   delete:
 *     tags: [Diaries]
 *     summary: Видалити нотатку користувача
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: diaryNoteId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID нотатки
 *     responses:
 *       200:
 *         description: Нотатку успішно видалено
 */

router.post('/me', authenticate, createDiaryNote);
router.get('/me', authenticate, getAllDiaryNote);
router.patch('/me/:diaryNoteId', authenticate, updateDiaryNote);
router.delete('/me/:diaryNoteId', authenticate, deleteDiaryNote);

export default router;
