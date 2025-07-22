import React from 'react';
import { Input } from './Input';

const FormInputs = ({ title, setTitle, amount, setAmount, date, setDate }) => {
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  return (
    <div>
      <div className='flex justify-center  gap-5 '>
        <Input
          value={title}
          onChange={titleChangeHandler}
          title={'title'}
          type={'text'}
        ></Input>
        <Input
          value={amount}
          onChange={amountChangeHandler}
          title={'amount'}
          type={'number'}
        ></Input>
      </div>
      <div className='date flex m-4 w-[440px] mx-auto flex-col'>
        <Input
          value={date}
          onChange={dateChangeHandler}
          title={'date'}
          type={'date'}
        />
      </div>
    </div>
  );
};

export default FormInputs;
