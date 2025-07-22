const formatDate = (date) => {
  const day = date.toLocaleDateString('en-US', { day: 'numeric' });
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const year = date.toLocaleDateString('en-US', { year: 'numeric' });
  return {
    day,
    month,
    year,
  };
};
export default formatDate;
