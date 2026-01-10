import { Task } from '../models/task.js';

export const createTask = async (req, res) => {
  try {
    const { name, date } = req.body;

    const task = await Task.create({ name, date, owner:  req.user.id });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });

  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getTaskById = async (req, res) => {
  try {
    const { taskId } = req.params;

    const task = await Task.findOne({
      _id: taskId,
      owner: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        message: 'Task not found',
      });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTaskStatus = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { isDone } = req.body;

    const task = await Task.findOneAndUpdate(
      { _id: taskId, owner: req.user.id },

      { isDone },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

