export const getConfig = async ({ key, value, config }) => {
  const result = await config.find((item) => item[key] === value);

  return result;
};
