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
        addItem(state, action) {
            state.data.push(...action.payload)
        },
        deleteUser(state, action) {
            const id = action.payload
            id.map(element => {
            state.data = state.data.filter((item) => item.id !== element)
            });
        },
        updateUser(state, action) {
            const { id } = action.payload
            const existingUser = state.data.find((user) => user.id === id)
            state.data.splice(existingUser, 1, action.payload)
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
