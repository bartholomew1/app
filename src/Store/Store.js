import { configureStore } from '@reduxjs/toolkit'
import budgetSlice from './BudgetSlice.js'
import usersSlice, { fetchUsers } from './UsersSlice.js'
const store = configureStore({
    reducer: {
        budget: budgetSlice.reducer,
        users: usersSlice.reducer,
    },
})
store.dispatch(fetchUsers())
export default store
