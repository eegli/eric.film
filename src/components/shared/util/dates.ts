const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const dateFormat = (_date: string): string => {
  const date = new Date(_date);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  return `${day} ${month} ${year}`;
};
