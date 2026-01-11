import { Router } from 'express';
import {
  createDiaryNote,
  getAllDiaryNote,
  updateDiaryNote,
  deleteDiaryNote,
} from '../controllers/diariesController.js';

import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.post('/me', authenticate, createDiaryNote);
router.get('/me', authenticate, getAllDiaryNote);
router.patch('/me/:diaryNoteId', authenticate, updateDiaryNote);
router.delete('/me/:diaryNoteId', authenticate, deleteDiaryNote);

export default router;
