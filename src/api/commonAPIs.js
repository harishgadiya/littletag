export const errorFn = (error, ...rest) => {
  if (error) console.log('error: ', error);
  console.log('rest: ', rest);
};
