import createHttpError from 'http-errors';
import DiaryNote from '../models/diaryNote.js';
import { ERRORS } from '../constants/errorMessages.js';

export const createDiaryNote = async (req, res, next) => {
  try {
    const diaryNote = await DiaryNote.create({
      ...req.body,
      userId: req.user._id,
    });
    res.status(201).json(diaryNote);
  } catch (error) {
    next(error);
  }
};

export const getAllDiaryNote = async (req, res, next) => {
  try {
    const diaryNotes = await DiaryNote.find({ userId: req.user._id });
    res.status(200).json(diaryNotes);
  } catch (error) {
    next(error);
  }
};

export const updateDiaryNote = async (req, res, next) => {
  try {
    const { diaryNoteId } = req.params;

    const diaryNote = await DiaryNote.findOneAndUpdate(
      { _id: diaryNoteId, userId: req.user._id },
      req.body,
      { new: true }
    );

    if (!diaryNote) {
      return next(createHttpError(404, ERRORS.COMMON.NOT_FOUND));
    }

    res.status(200).json(diaryNote);
  } catch (error) {
    next(error);
  }
};

export const deleteDiaryNote = async (req, res, next) => {
  try {
    const { diaryNoteId } = req.params;

    const diaryNote = await DiaryNote.findOneAndDelete({
      _id: diaryNoteId,
      userId: req.user._id,
    });

    if (!diaryNote) {
      return next(createHttpError(404, ERRORS.COMMON.NOT_FOUND));
    }

    res.status(200).json({ message: 'Нотатку успішно видалено' });
  } catch (error) {
    next(error);
  }
};
