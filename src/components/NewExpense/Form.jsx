import React from 'react';
import FormInputs from './FormInputs';
import { FormBtns } from './FormBtns';

export function Form({
  onClose,
  onSubmit,
  title,
  setTitle,
  amount,
  setAmount,
  date,
  setDate,
}) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <FormInputs
          title={title}
          setTitle={setTitle}
          amount={amount}
          setAmount={setAmount}
          date={date}
          setDate={setDate}
        />
        <FormBtns
          title={title}
          amount={amount}
          date={date}
          onClose={onClose}
        ></FormBtns>
      </form>
    </div>
  );
}
