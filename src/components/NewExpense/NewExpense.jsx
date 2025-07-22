import React, { useState } from 'react';
import { AddBtn } from './AddBtn';
import { Form } from './Form';

const NewExpense = ({ onCreateExpense }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');

  const closeHandler = () => {
    setOpen(false);
    setTitle('');
    setAmount('');
    setDate('');
  };
  const addBtnClickHandler = () => {
    setOpen(true);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (title === '' || amount === '' || date === '') return;
    const newExpense = {
      id: Math.random().toString(),
      title,
      amount: +amount,
      date: new Date(date),
    };

    onCreateExpense(newExpense);
    closeHandler();
    setTitle('');
    setAmount('');
    setDate('');
  };
  return (
    <div
      style={{ maxHeight: !open ? '100px' : '300px' }}
      className='p-6 transition-all duration-200 rounded-2xl'
    >
      {!open && <AddBtn onClick={addBtnClickHandler}></AddBtn>}
      {open && (
        <Form
          onClose={closeHandler}
          onSubmit={submitHandler}
          title={title}
          setTitle={setTitle}
          amount={amount}
          setAmount={setAmount}
          date={date}
          setDate={setDate}
        ></Form>
      )}
    </div>
  );
};

export default NewExpense;
