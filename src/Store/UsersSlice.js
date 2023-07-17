import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import fetcher from '../Api/fetcher'

export const fetchUsers = createAsyncThunk('table/fetchUsers', async () => {
    const data = await fetcher('http://localhost:3001/users')
    return data
})

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        error: false
    },
    reducers: {
        deleteUser(state, action) {
            const id = action.payload
            id.map(element => {
            state.data = state.data.filter((item) => item.id !== element)
            });
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
             state.data = action.payload
        })
    }
})
export const usersActions = usersSlice.actions
export default usersSlice
