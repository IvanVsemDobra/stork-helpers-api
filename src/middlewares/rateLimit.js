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
  max: 5, // максимум 5 змін email на годину
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many email change requests, please try later',
});

/**
 * УМОВНИЙ rate limit
 * Спрацьовує ТІЛЬКИ якщо реально міняється email
 */
export const emailRateLimit = (req, res, next) => {
  const email = req.body?.email;

  const isEmailChange =
    typeof email === 'string' &&
    email.trim().length > 0 &&
    email !== req.user.email;

  if (isEmailChange) {
    return emailRateLimitBase(req, res, next);
  }

  next();
};

/**
 * Ліміт для resend verification
 */
export const resendEmailRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: 'Too many resend attempts, try later',
});
