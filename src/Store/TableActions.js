import { createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    table: [],
    error: null,
}

export const fetchData = createAsyncThunk('table/fetchData', async () => {
    const response = await fetcher(
        'https://pokeapi.co/api/v2/pokemon?limit=150'
    )
    return response
})
