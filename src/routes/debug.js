import express from 'express';
const router = express.Router();

/**
 * Дебаг: повертає ключі та інші змінні середовища
 */
router.get('/env', (req, res) => {
  res.json({
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || 'не знайдено',
  });
});

export default router;
