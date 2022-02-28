export const appDataConfig = (appJsonArr, envURL) => {
  return appJsonArr.find(({url}) => url === envURL);
};
