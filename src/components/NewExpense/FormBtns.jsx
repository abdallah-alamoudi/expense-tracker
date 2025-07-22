import React from 'react';

export function FormBtns({ onClose, title, amount, date }) {
  const isAddBtnDisabled = title === '' || amount === '' || date === '';
  return (
    <div className='btns mx-auto w-fit'>
      <button
        onClick={onClose}
        className='px-4 py-2 bg-cyan-700 hover:bg-cyan-900 transition duration-200 shadow-2xl  rounded text-lg cursor-pointer capitalize mx-2'
      >
        cancel
      </button>
      <button
        type='submit'
        className={`px-4 py-2 bg-cyan-700 hover:bg-cyan-900 transition duration-200 shadow-2xl  rounded text-lg cursor-pointer capitalize mx-2 ${
          isAddBtnDisabled && '!bg-gray-700 !cursor-not-allowed'
        }`}
      >
        add Expense
      </button>
    </div>
  );
}
