export const searchValue = (targetKey: string, obj: Record<string, any>) => {
  Object.keys(obj).find((key) => {
    if (targetKey === key) {
      return obj[key];
    }
    if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
      searchValue(targetKey, obj[key]);
    }
  });
};
