export function Input({ value, onChange, title, type }) {
  return (
    <div className='flex flex-col'>
      <label
        htmlFor={title}
        className='text-lg  capitalize font-bold tracking-wider '
      >
        {title}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={title}
        type={type}
        className='bg-gray-600 px-4 py-2 rounded focus:outline-0 text-gray-100'
      />
    </div>
  );
}
