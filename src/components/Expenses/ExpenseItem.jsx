import formatDate from '../../utils/formatDate';
import React, { useState, useRef, useEffect } from 'react';
import { X, Pen } from 'lucide-react';
import { Input } from '../NewExpense/Input';

const ExpenseItem = ({ id, title, date, amount, onUpdate, onDelete }) => {
  const [isInUpdate, setIsInUpdate] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const updateInputRef = useRef();
  const { day, month, year } = formatDate(date);
  const keyDownHandler = (e) => {
    const keyPressed = e.key;
    if (keyPressed === 'Enter') {
      if (editTitle === '') return;
      setIsInUpdate(false);

      onUpdate(id, {
        id,
        title: editTitle,
        amount,
        date,
      });
    }
  };
  // focus when pen is clicked
  useEffect(() => {
    if (isInUpdate) updateInputRef.current.focus();
  }, [isInUpdate]);
  return (
    <div className='bg-gray-700 py-3 px-5 my-5 rounded-2xl sm:flex  sm:flex-row justify-between items-center  relative'>
      <div className='absolute right-5 top-3 flex gap-3 '>
        <Pen
          onClick={() => {
            setIsInUpdate(true);
          }}
          size={20}
          color='cyan'
          className='cursor-pointer hover:scale-130 transition duration-150'
        />
        <X
          onClick={() => {
            onDelete(id);
          }}
          size={20}
          color='red'
          className='cursor-pointer hover:scale-130 transition duration-150'
        />
      </div>
      <div className=' flex justify-between items-center sm:justify-center  '>
        <div className='date bg-gray-800 p-3 rounded-xl w-[100px] flex justify-center items-center flex-col  mr-3'>
          <div className='month bold text-lg'>{month}</div>
          <div className='year'>{year}</div>
          <div className='day bold text-2xl'>{day}</div>
        </div>
        {!isInUpdate && (
          <div className='title capitalize text-2xl'>{title}</div>
        )}
        {isInUpdate && (
          <input
            ref={updateInputRef}
            className=' capitalize text-xl max-w-[150px] sm:max-w-[none] rounded focus:outline-0 bg-white p-2 text-black block '
            type='text'
            value={editTitle}
            onChange={(e) => {
              setEditTitle(e.target.value);
            }}
            onKeyDown={keyDownHandler}
          ></input>
        )}
      </div>
      <div className='amount px-8 py-2 w-full sm:w-[100px] flex justify-center  rounded-2xl bg-cyan-600 mt-4 sm:mt-0 text-2xl font-bold'>
        ${amount}
      </div>
    </div>
  );
};

export default ExpenseItem;
