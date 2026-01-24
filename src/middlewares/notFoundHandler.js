import { ERRORS } from '../constants/errorMessages.js';

export const notFoundHandler = (req, res) => {
  res.status(404).json({ message: ERRORS.COMMON.NOT_FOUND });
};
