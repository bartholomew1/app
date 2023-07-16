import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import fetcher from '../Api/fetcher'

export const fetchUsers = createAsyncThunk('table/fetchUsers', async () => {
    const data = await fetcher('http://localhost:3001/users/')
    return data
})

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        error: false
    },
    reducers: {
        ADD(state, action) {
            return [...state, action.payload]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
             state.data = action.payload
        })
    }
})
export default usersSlice
