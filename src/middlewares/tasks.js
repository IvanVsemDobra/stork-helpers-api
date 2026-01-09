export const isValidCreateStatus = (req, res, next) => {
  const { name, date } = req.body;

  if (!name || !date) {
    return res.status(400).json({
      message: 'Name and date are required',
    });
  }

  const inputDate = new Date(date);
  const today = new Date();

  inputDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  
  if (inputDate < today) {
    return res.status(400).json({
      message: 'Choose the right date',
    });
  }
  next();
};

export const isValidTaskStatus = (req, res, next) => {
  const { isDone } = req.body;

  if (typeof isDone !== 'boolean') {
    return res.status(400).json({
      message: 'isDone must be boolean',
    });
  }

  next();
};
