import './Expenses.css'
import { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import { useSelector } from 'react-redux'
function Expenses() {
    const expense = useSelector((state) => state.budget.items)
    const [yearSelected, setYearSelectedValue] = useState('2023')

    const filterChangeHandler = (selectedYear) => {
        setYearSelectedValue(selectedYear)
    }
    const filteredExpenses = expense.filter((expense) => {
        return expense.date.getFullYear().toString() === yearSelected
    })

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter
                    selected={yearSelected}
                    onChangeSelect={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </li>
    )
}
export default Expenses
