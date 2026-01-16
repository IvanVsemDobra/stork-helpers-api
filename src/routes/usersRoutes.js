import express from 'express';
import {
  getCurrentUser,
  updateUser,
  updateUserAvatar,
  updateUserTheme,
  verifyEmail,
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


// 🆕 окремий ендпоінт теми
router.patch('/theme', authenticate, updateUserTheme);

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

/**
 * VERIFY new email
 */
router.get('/verify-email/:token', verifyEmail);

export default router;
