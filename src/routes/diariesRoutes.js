import { Router } from 'express';
import {
  createDiaryNote,
  getAllDiaryNote,
  updateDiaryNote,
  deleteDiaryNote,
} from '../controllers/diariesController.js';

import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.post('/diaries/me', authenticate, createDiaryNote);
router.get('/diaries/me', authenticate, getAllDiaryNote);
router.patch('/diaries/me/:diaryNoteId', authenticate, updateDiaryNote);
router.delete('/diaries/me/:diaryNoteId', authenticate, deleteDiaryNote);

export default router;
