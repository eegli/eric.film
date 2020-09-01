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

export const dateFormat = (date: string): string => {
  const _date = new Date(date);
  const year = _date.getFullYear();
  const month = months[_date.getMonth()];
  const day = _date.getDate();
  // const day = _day < 10 ? `0${_day}` : _day;
  return `${month} ${day}, ${year}`;
};
