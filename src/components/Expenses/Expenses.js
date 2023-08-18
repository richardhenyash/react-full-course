import './Expenses.css'
import Card from "../Shared/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({expenses}) {
  const [selectedYear, setSelectedYear] = useState('2020');
  
  const changeExpenseFilterHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  }
  
  let filteredExpenses = expenses.filter(ei => ei.date.getFullYear() === +selectedYear);
  
  return (
    <Card className="expenses">
      <ExpensesFilter year={selectedYear} onChangeExpensesFilter={changeExpenseFilterHandler}></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}></ExpensesList>
    </Card>
  );
}

export default Expenses;