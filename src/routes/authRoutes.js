import { Router } from 'express';
import { celebrate } from 'celebrate';
import { registerUser, loginUser, logoutUser, refreshUserSession } from '../controllers/authController.js';
import { loginUserSchema, registerUserSchema } from '../validations/authValidation.js';

const router = Router();

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

router.post( '/register', celebrate( registerUserSchema ), registerUser );
router.post( '/login', celebrate( loginUserSchema ), loginUser );
router.post( '/logout', logoutUser );
router.post('/refresh', refreshUserSession);

export default router;
