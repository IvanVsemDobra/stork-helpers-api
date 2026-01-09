export const calculateWeekNumber = (dueDate) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(dueDate);
  due.setHours(0, 0, 0, 0);
  let daysToMeeting = Math.round((due - today) / (1000 * 60 * 60 * 24));
  if (daysToMeeting < 0) {
    daysToMeeting = 0;
  }
  let weekNumber = 42 - Math.floor(daysToMeeting / 7);
  if (weekNumber > 42) {
    weekNumber = 42;
  }
  if (weekNumber < 1) {
    weekNumber = 1;
  }
  return { weekNumber, daysToMeeting };
};
