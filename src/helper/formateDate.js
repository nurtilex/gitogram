const formateDate = (str) => {
  // 2021-10-04T21:36:58Z
  const MONTHES = {
    '01': 'JANUARY',
    '02': 'FEBRUARY',
    '03': 'MARCH',
    '04': 'APRIL',
    '05': 'MAY',
    '06': 'JUNE',
    '07': 'JULY',
    '08': 'AUGUST',
    '09': 'SEPTEMBER',
    10: 'OCTOBER',
    11: 'NOVEMBER',
    12: 'DECEMBER',
  };
  const day = str.slice(8, 10);
  const month = MONTHES[str.slice(5, 7)];
  return `${day} ${month}`;
};

export default formateDate;
