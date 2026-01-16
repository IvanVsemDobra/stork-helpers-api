import rateLimit from 'express-rate-limit';

export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 хв
  max: 100,
  message: 'Too many requests, please try again later',
});

export const emailRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 година
  max: 5,
  message: 'Too many email requests',
});
