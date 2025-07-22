import ChartBar from './ChartBar';
import React from 'react';

const Chart = ({ items }) => {
  const months = [
    { title: 'Jan', value: 0 },
    { title: 'Feb', value: 0 },
    { title: 'Mar', value: 0 },
    { title: 'Apr', value: 0 },
    { title: 'May', value: 0 },
    { title: 'Jun', value: 0 },
    { title: 'Jul', value: 0 },
    { title: 'Aug', value: 0 },
    { title: 'Sep', value: 0 },
    { title: 'Oct', value: 0 },
    { title: 'Nov', value: 0 },
    { title: 'Dec', value: 0 },
  ];
  items.forEach(({ amount, date }) => {
    const monthInx = date.getMonth();
    months[monthInx].value += amount;
  });
  const total = items.reduce((acc, curr) => curr.amount + acc, 0);
  return (
    <div className='bg-gray-700 p-6 my-5 rounded-2xl flex justify-around'>
      {months.map((month) => {
        return <ChartBar key={month.title} month={month} maxVal={total} />;
      })}
    </div>
  );
};

export default Chart;
