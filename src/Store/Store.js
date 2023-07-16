import { configureStore } from '@reduxjs/toolkit'
import budgetSlice from './BudgetSlice.js'
import usersSlice, { fetchUsers } from './UsersSlice.js'
import tableSlice from './TableSlice.js'
const store = configureStore({
    reducer: {
        budget: budgetSlice.reducer,
        users: usersSlice.reducer,
        table: tableSlice.reducer
    },
})
store.dispatch(fetchUsers())
export default store
