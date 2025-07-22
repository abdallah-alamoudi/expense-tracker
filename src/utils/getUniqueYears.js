import formatDate from './formatDate';

const getUniqueYears = (expenses) => {
  const years = expenses.map((exp) => {
    const { year } = formatDate(exp.date);
    return year;
  });
  return [...new Set(years)];
};

export default getUniqueYears;
