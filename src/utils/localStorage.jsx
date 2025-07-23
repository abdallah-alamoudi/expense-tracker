export const initialExpenses = [
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
export const loadExpenses = () => {
  const storedExpensesJson = localStorage.getItem('expenses');
  const storedExpenses = JSON.parse(storedExpensesJson);
  // convert string date to Object date
  storedExpenses?.forEach((exp) => (exp.date = new Date(exp.date)));
  return storedExpenses || initialExpenses;
};
export const saveExpenses = (expenses) => {
  const expensesJson = JSON.stringify(expenses);
  localStorage.setItem('expenses', expensesJson);
};
