export const appDataConfig = (appJsonArr, envURL) => {
console.log("🚀 ~ file: appDataConfig.js ~ line 2 ~ appDataConfig ~ appJsonArr", appJsonArr)
  return appJsonArr.find(({url}) => url === envURL);
};
