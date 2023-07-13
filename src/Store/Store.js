import { configureStore } from '@reduxjs/toolkit'
import budgetSlice from './BudgetSlice.js'
const store = configureStore({
    reducer: {
        budget: budgetSlice.reducer,
    },
})
export default store
