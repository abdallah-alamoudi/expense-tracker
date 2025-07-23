import { useState, useEffect } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Filter from './components/Expenses/Filter';
import Chart from './components/Chart/Chart';
import { NoExpenses } from './components/Expenses/NoExpenses';
import Modal from './components/UI/Modal';
import formatDate from './utils/formatDate';
import getUniqueYears from './utils/getUniqueYears';
import {
  saveExpenses,
  loadExpenses,
  initialExpenses,
} from './utils/localStorage';
import AppBackground from './components/UI/AppBackground';

const { year: initialFilterYear } = formatDate(initialExpenses[0].date);

export const App = () => {
  const [expenses, setExpenses] = useState(loadExpenses);
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
  }, [expenses, filteredYear]);

  // save to local storage
  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  return (
    <AppBackground>
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
    </AppBackground>
  );
};
export default App;
