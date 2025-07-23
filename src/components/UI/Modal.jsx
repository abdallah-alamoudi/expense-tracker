import React from 'react';

const Modal = ({
  title,
  message,
  confirmMsg,
  cancelMsg,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-white/20 bg-opacity-50 z-80'>
      <div className=' bg-neutral-900 p-6 rounded-2xl shadow-2xl w-[90%] max-w-[600px]'>
        <h2 className='border-b-1 border-b-white text-2xl pb-3'>{title}</h2>
        <p className='text-center my-10 text-xl'>{message}</p>
        <div className='btns flex justify-end gap-3'>
          <button
            className='bg-cyan-700 hover:bg-cyan-900 transition duration-200  shadow-2xl  cursor-pointer  px-8 py-3 rounded-2xl'
            onClick={onConfirm}
          >
            {confirmMsg}
          </button>
          <button
            className='bg-red-700 hover:bg-red-900 transition duration-200  shadow-2xl  cursor-pointer  px-8 py-3 rounded-2xl'
            onClick={onCancel}
          >
            {cancelMsg}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
