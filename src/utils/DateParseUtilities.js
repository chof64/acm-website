export const transformISOtoEnglish = (date) => {
  const DATE = new Date(date);
  return DATE.toLocaleString("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
