import { Task } from '../models/task.js';
import createHttpError from 'http-errors';
import { ERRORS } from '../constants/errorMessages.js';

export const createTask = async (req, res, next) => {
  try {
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

    const task = await Task.create({ name, date, owner: req.user._id });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ owner: req.user._id });
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (req, res, next) => {
  try {
    const { taskId } = req.params;

    const task = await Task.findOne({ _id: taskId, owner: req.user._id });

    if (!task) {
      return next(createHttpError(404, ERRORS.TASKS.NOT_FOUND));
    }

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

export const updateTaskStatus = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const { isDone } = req.body;

    if (typeof isDone !== 'boolean') {
      return next(createHttpError(400, ERRORS.TASKS.INVALID_STATUS));
    }

    const task = await Task.findOneAndUpdate(
      { _id: taskId, owner: req.user._id },
      { isDone },
      { new: true }
    );

    if (!task) {
      return next(createHttpError(404, ERRORS.TASKS.NOT_FOUND));
    }

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};
