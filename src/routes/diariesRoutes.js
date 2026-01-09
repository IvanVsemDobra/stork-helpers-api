import { Router } from 'express';

import {
  createDiaryNote,
  getAllDiaryNote,
  updateDiaryNote,
  deleteDiaryNote,
} from '../controllers/diariesController.js';

import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.post('/diaries', authenticate, createDiaryNote);
router.get('/diaries', authenticate, getAllDiaryNote);
router.patch('/diaries/:diaryNoteId', authenticate, updateDiaryNote);
router.delete('/diaries/:diaryNoteId', authenticate, deleteDiaryNote);

export default router;
