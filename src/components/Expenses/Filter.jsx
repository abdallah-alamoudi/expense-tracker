import getUniqueYears from '../../utils/getUniqueYears';

function Filter({ expenses, onFilter, value }) {
  const years = getUniqueYears(expenses);
  return (
    <div className='filter flex justify-between'>
      <h2 className='text-xl capitalize'>filter expense by year</h2>
      <select
        onChange={(e) => {
          const year = e.target.value;
          onFilter(year);
        }}
        value={value}
        name='filteredYear'
        id='filteredYear'
        className=' bg-cyan-800 text-white  px-6 py-2 text-lg rounded focus:outline-0'
      >
        {years.map((year) => {
          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default Filter;
