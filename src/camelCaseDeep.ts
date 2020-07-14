export const camelize = (str: string) => {
  return str.split("_").reduce<string>((acc, cur, i): string => {
    if (i === 0) {
      return cur.toLowerCase();
    }
    return acc + cur.charAt(0).toUpperCase() + cur.slice(1).toLowerCase();
  }, "");
};

export const camelCaseDeep = (obj: Record<string, any>) => {
  const result = {} as Record<string, any>;
  Object.keys(obj).forEach((key) => {
    if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
      obj[key] = camelCaseDeep(obj[key]);
    }
    result[camelize(key)] = obj[key];
  });
  return result;
};
