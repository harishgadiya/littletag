import moment from 'moment';

export const cleanObject = (obj) => {
  Object.keys(obj).forEach((key) => obj[key] === undefined && delete obj[key]);
  return obj;
};

export const addDaysToDate = (days, date = new Date()) => {
  date.setDate(date.getDate() + days);
  return date;
};

export const getDateInFormat = (date, formatStr = 'DD/MM/YYYY') => {
  return date && moment(date).format(formatStr);
};

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const getPercentage = (number, percentageOfNumber) => {
  return (((percentageOfNumber - number) / percentageOfNumber) * 100)?.toFixed(0);
};
