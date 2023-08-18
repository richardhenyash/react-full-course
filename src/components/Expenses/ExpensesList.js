import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = ({expenses}) =>  {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses for the selected year</h2>
  }
  return (
    <ul className="expenses-list">
    {expenses.map((ei) => (
      <ExpenseItem
        key={ei.id}
        title={ei.title}
        amount={ei.amount} 
        date={ei.date}>
      </ExpenseItem>
    ))}
  </ul>);
}

export default ExpensesList;