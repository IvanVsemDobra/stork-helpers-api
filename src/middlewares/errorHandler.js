import { isCelebrateError } from 'celebrate';
import { ERRORS } from '../constants/errorMessages.js';

export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  // Celebrate/Joi validation error
  if (isCelebrateError(err)) {
    const messages = Array.from(err.details.values()).map(
      detail => detail.details[0].message
    );
    return res.status(400).json({
      message: 'Validation failed',
      details: messages,
    });
  }

  // Error with custom status (e.g., createHttpError)
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }

  // Internal server error
  const isProd = process.env.NODE_ENV === 'production';
  res.status(500).json({
    message: isProd ? ERRORS.COMMON.INTERNAL : err.message,
  });
};
