/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Аутентифікація користувача
 */

/**
 * @swagger
 * /api/auth/google:
 *   post:
 *     summary: Авторизація через Google
 *     description: Приймає Google ID token (credential), верифікує його через Google та створює сесію.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - credential
 *             properties:
 *               credential:
 *                 type: string
 *                 description: Google ID token (JWT)
 *                 example: "eyJhbGciOiJSUzI1NiIsImtpZCI6IkpXVCJ9..." # скорочено для Swagger
 *     responses:
 *       200:
 *         description: Успішна Google-авторизація
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User authenticated successfully"
 *                 user:
 *                   type: object
 *                   properties:
 *                     googleId:
 *                       type: string
 *                       example: "117903985864673020204"
 *                     email:
 *                       type: string
 *                       example: "ivan@example.com"
 *                     name:
 *                       type: string
 *                       example: "Іван Пампуха"
 *                     avatar:
 *                       type: string
 *                       example: "https://lh3.googleusercontent.com/a-/AOh14G..."
 *       400:
 *         description: Missing credential або некоректний формат
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Missing credential"
 *       401:
 *         description: Google authentication failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Google authentication failed"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Щось пішло не так. Будь ласка, спробуйте пізніше."
 *     security:
 *       - cookieAuth: []

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Реєстрація користувача
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRegister'
 *     responses:
 *       201:
 *         description: Користувач створений
 *       400:
 *         description: Некоректні дані
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserRegister:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           example: "ivan@example.com"
 *         password:
 *           type: string
 *           example: "supersecret123"
 */
