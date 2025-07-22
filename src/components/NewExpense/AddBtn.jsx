import React from 'react';

export function AddBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className='bg-cyan-700 hover:bg-cyan-900 transition duration-200  shadow-2xl block cursor-pointer mx-auto px-8 py-3 rounded-2xl'
    >
      Add New Expense
    </button>
  );
}
