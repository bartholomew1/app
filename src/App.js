
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense"
import React, { useState } from "react"
const DUMMY_EXPENSES = [
  { id: 1, title: "Car Insurance", amount: 297.58, date: new Date(2021, 3, 8) }
];
function App() {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div>
     <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
