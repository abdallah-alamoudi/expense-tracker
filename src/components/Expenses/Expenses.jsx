import ExpenseItem from './ExpenseItem';
const Expenses = ({ expenses, onUpdate, onDelete }) => {
  return (
    <>
      
      {expenses.map((exp) => {
        return (
          <ExpenseItem
            key={exp.id}
            id={exp.id}
            title={exp.title}
            date={exp.date}
            amount={exp.amount}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        );
      })}
    </>
  );
};

export default Expenses;
