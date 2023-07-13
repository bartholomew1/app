import ExpensesItem from './ExpensesItem'
import { useSelector } from 'react-redux'

function ExpensesList() {
    const expenses = useSelector((state) => state.budget.items)
    if (expenses.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses!</h2>
    }

    return (
        <ul className="expenses-list">
            {expenses.map((expense) => (
                <ExpensesItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    )
}
export default ExpensesList
