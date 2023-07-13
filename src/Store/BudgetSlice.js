import { createSlice } from '@reduxjs/toolkit'

export const budgetSlice = createSlice({
name: 'budget',
initialState: {
items: []
},
reducers: {
ADD(state, action) {
   const newItem = action.payload
   state.items.push({
    id: Math.random().toString(),
    ...newItem
   }
   )
 }
}
})
export const budgetActions = budgetSlice.actions
export default budgetSlice
