import { Router } from 'express';
import { celebrate } from 'celebrate';

import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUserSession,
  googleAuth,
} from '../controllers/authController.js';

import {
  loginUserSchema,
  registerUserSchema,
} from '../validations/authValidation.js';

import { authRateLimit } from '../middlewares/rateLimit.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Авторизація та аутентифікація користувачів
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Реєстрація користувача
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password, name]
 *             properties:
 *               email:
 *                 type: string
 *                 example: test@mail.com
 *               password:
 *                 type: string
 *                 example: qwerty123
 *               name:
 *                 type: string
 *                 example: Anna
 *     responses:
 *       201:
 *         description: Користувач успішно зареєстрований
 *       409:
 *         description: Email already exists
 */
router.post(
  '/register',
  authRateLimit,
  celebrate(registerUserSchema),
  registerUser
);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Логін користувача
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 example: test@mail.com
 *               password:
 *                 type: string
 *                 example: qwerty123
 *     responses:
 *       200:
 *         description: Успішний логін
 *       401:
 *         description: Invalid credentials
 */
router.post(
  '/login',
  authRateLimit,
  celebrate(loginUserSchema),
  loginUser
);

/**
 * @swagger
 * /api/auth/google:
 *   post:
 *     tags: [Auth]
 *     summary: Логін або реєстрація через Google
 *     description: |
 *       Приймає Google ID token (credential),
 *       верифікує його через Google та створює сесію.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [credential]
 *             properties:
 *               credential:
 *                 type: string
 *                 description: Google ID token (JWT)
 *                 example: eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk1NDRkMGZm...
 *     responses:
 *       200:
 *         description: Успішна Google-авторизація
 *       400:
 *         description: Missing credential
 *       401:
 *         description: Google authentication failed
 */
router.post('/google', googleAuth);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     tags: [Auth]
 *     summary: Logout користувача
 *     responses:
 *       204:
 *         description: Успішний logout
 */
router.post('/logout', logoutUser);

/**
 * @swagger
 * /api/auth/refresh:
 *   post:
 *     tags: [Auth]
 *     summary: Оновлення сесії
 *     responses:
 *       200:
 *         description: Session refreshed
 *       401:
 *         description: Session not found або expired
 */
router.post('/refresh', refreshUserSession);

export default router;
