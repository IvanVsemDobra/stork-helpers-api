export const getUserBaseDate = (user) => {
  const { dueDate, createdAt } = user;

  if (dueDate) {
    return dueDate;
  }

  const DAYS_35_WEEKS = 35 * 7;
  const ms = DAYS_35_WEEKS * 24 * 60 * 60 * 1000;

  return new Date(createdAt.getTime() + ms);
};
