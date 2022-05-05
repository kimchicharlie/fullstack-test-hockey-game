export const getLastNYears = (lastN: number = 20) => {
  const currentYear = new Date().getFullYear();
  const lastNYears = [];

  for (let index = 0; index < lastN; index++) {
    lastNYears.push(currentYear - index);
  }

  return lastNYears;
};
