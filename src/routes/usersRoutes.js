import express from 'express';
import {
  getCurrentUser,
  updateUser,
  updateUserAvatar,
} from '../controllers/usersController.js';
import { authenticate } from '../middlewares/authenticate.js';
import { upload } from '../middlewares/upload.js';

const router = express.Router();


/**
 * @swagger
 * /api/users/me:
 *   get:
 *     tags: [Users]
 *     summary: Отримати поточного користувача
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Дані користувача
 */

/**
 * GET current user
 */
router.get('/me', authenticate, getCurrentUser);

/**
 * UPDATE user profile
 * body: { name, dueDate, theme }
 */
router.patch('/me', authenticate, updateUser);

/**
 * UPDATE user avatar
 * form-data: avatar
 */
router.patch(
  '/avatar',
  authenticate,
  upload.single('avatar'),
  updateUserAvatar
);

export default router;
