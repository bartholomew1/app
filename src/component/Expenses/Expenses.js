import "./Expenses.css";
import { useState } from "react"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
function Expenses(props) {
  const [yearSelected, setYearSelectedValue] = useState('2022')

  const filterChangeHandler = (selectedYear) => {
setYearSelectedValue(selectedYear)
  }
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === yearSelected
  })
  
  return (
    <li>
    <Card className="expenses">
    <ExpensesFilter selected={yearSelected} onChangeSelect={filterChangeHandler}/>
    <ExpensesChart expenses={filteredExpenses}/>
   <ExpensesList items={filteredExpenses}/>  
    </Card>
 </li>
  );
}
export default Expenses;
