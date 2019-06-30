const padNumber = n => {
  return ('0' + n).slice(-2);
};

export const convertTime = timestamp => {
  const date = new Date(timestamp * 1000);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${padNumber(hours)}:${padNumber(minutes)}`;
};

export const convertDate = timestamp => {
  const date = new Date(timestamp * 1000);

  const dateDay = date
    .toDateString()
    .split(' ')
    .filter((el, i) => i % 2 === 0)
    .join(' ');
  return dateDay;
};
