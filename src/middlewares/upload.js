import multer from 'multer';
import createHttpError from 'http-errors';
import { ERRORS } from '../constants/errorMessages.js';

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      return cb(createHttpError(400, ERRORS.UPLOAD.INVALID_FILE), false);
    }
    cb(null, true);
  },
});
