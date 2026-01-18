import rateLimit from 'express-rate-limit';

/**
 * Ліміт для auth (login / register)
 */
export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 хв
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests, please try again later',
});

/**
 * Базовий ліміт для зміни email
 */
const emailRateLimitBase = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 година
  max: 25, // тільки 5 спроб зміни email
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many email change requests',
});

/**
 * УМОВНИЙ rate limit
 * Ліміт застосовується ТІЛЬКИ якщо є email у body
 */
export const emailRateLimit = (req, res, next) => {
  if (req.body?.email) {
    return emailRateLimitBase(req, res, next);
  }
  next();
};


