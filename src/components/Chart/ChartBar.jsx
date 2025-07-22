import React from 'react';

const ChartBar = ({ month: { title, value }, maxVal }) => {
  const barHeight = maxVal === 0 ? 0 : Math.round((value / maxVal) * 100);

  console.log(title, barHeight);
  return (
    <div className='flex flex-col justify-center items-center text-cyan-200 font-bold '>
      <div className='h-[100px]  relative bg-gray-200 w-[13px] rounded-full '>
        <div
          style={{ height: barHeight }}
          className='absolute transition-all duration-200 w-full bottom-0 bg-green-500 rounded-full'
        ></div>
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default ChartBar;
