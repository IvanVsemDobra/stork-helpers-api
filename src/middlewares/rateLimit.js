import rateLimit from 'express-rate-limit';
import { ERRORS } from '../constants/errorMessages.js';

export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: ERRORS.COMMON.TOO_MANY_REQUESTS,
});

const emailRateLimitBase = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: ERRORS.EMAIL.RESEND_LIMIT,
});

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

export const resendEmailRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: ERRORS.EMAIL.RESEND_LIMIT,
});
