import createHttpError from 'http-errors';
import { ERRORS } from '../constants/errorMessages.js';

export const isValidCreateStatus = (req, res, next) => {
  const { name, date } = req.body;

  if (!name || !date) {
    return next(createHttpError(400, ERRORS.TASKS.REQUIRED_FIELDS));
  }

  const inputDate = new Date(date);
  const today = new Date();
  inputDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  if (inputDate < today) {
    return next(createHttpError(400, ERRORS.TASKS.INVALID_DATE));
  }

  next();
};

export const isValidTaskStatus = (req, res, next) => {
  const { isDone } = req.body;

  if (typeof isDone !== 'boolean') {
    return next(createHttpError(400, ERRORS.TASKS.INVALID_STATUS));
  }

  next();
};
