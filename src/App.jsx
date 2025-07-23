import { useState, useEffect } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Filter from './components/Expenses/Filter';
import formatDate from './utils/formatDate';
import getUniqueYears from './utils/getUniqueYears';
import Chart from './components/Chart/Chart';
import { NoExpenses } from './components/Expenses/NoExpenses';
import Modal from './components/UI/Modal';

const initialExpenses = [
  {
    id: 'e1',
    title: 'buying A',
    date: new Date('2025-07-10'),
    amount: 89,
  },
  {
    id: 'e2',
    title: 'buying B',
    date: new Date('2024-06-17'),
    amount: 94,
  },
  {
    id: 'e3',
    title: 'buying C',
    date: new Date('2024-01-19'),
    amount: 109,
  },
  {
    id: 'e4',
    title: 'buying d',
    date: new Date('2023-06-1'),
    amount: 30,
  },
];
const { year: initialFilterYear } = formatDate(initialExpenses[0].date);

export const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [filteredYear, setFilteredYear] = useState(initialFilterYear);
  const [expenseToDelete, setExpenseToDelete] = useState(null);

  const filteredExpenses = expenses.filter(
    (exp) => formatDate(exp.date).year === filteredYear,
  );

  const createExpenseHandler = (newExp) => {
    setExpenses((prevExps) => [newExp, ...prevExps]);
  };
  const updateExpenseHandler = (id, UpdatedExpense) => {
    setExpenses((prevExps) =>
      prevExps.map((exp) => {
        if (exp.id === id) {
          return UpdatedExpense;
        }
        return exp;
      }),
    );
  };

  const deleteExpenseHandler = (id) => {
    setExpenseToDelete(id);
  };
  const cancelDeleteHandler = () => {
    setExpenseToDelete(null);
  };
  const confirmDeleteHandler = () => {
    setExpenses((prevExps) =>
      prevExps.filter((exp) => exp.id !== expenseToDelete),
    );
    setExpenseToDelete(null);
  };
  useEffect(() => {
    const uniqueYears = getUniqueYears(expenses);
    if (!uniqueYears.includes(filteredYear)) {
      if (uniqueYears.length > 0) {
        setFilteredYear(uniqueYears[0]); // fallback to first valid year
      } else {
        setFilteredYear('');
      }
    }

    return () => {};
  }, [expenses, filteredYear]);

  return (
    <div className='min-h-screen w-full bg-black relative overflow-hidden text-white'>
      {/* Midnight Mist */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
        `,
        }}
      />
      <div className='mx-auto max-w-[800px] relative z-40'>
        <NewExpense onCreateExpense={createExpenseHandler} />
        <Chart items={filteredExpenses} />
        <div className='p-8 my-5 rounded-2xl  bg-gray-900 text-white'>
          {expenses.length === 0 && <NoExpenses></NoExpenses>}
          {expenses.length !== 0 && (
            <>
              <Filter
                value={filteredYear}
                expenses={expenses}
                onFilter={(year) => {
                  setFilteredYear(year);
                }}
              />
              <Expenses
                expenses={filteredExpenses}
                onUpdate={updateExpenseHandler}
                onDelete={deleteExpenseHandler}
              />
            </>
          )}
        </div>
        {expenseToDelete && (
          <Modal
            title={'Are you sure you want to delete this expense?'}
            message={'This action cannot be undone.'}
            cancelMsg={'Cancel'}
            confirmMsg={'Delete'}
            onCancel={cancelDeleteHandler}
            onConfirm={confirmDeleteHandler}
          />
        )}
      </div>
    </div>
  );
};
export default App;
