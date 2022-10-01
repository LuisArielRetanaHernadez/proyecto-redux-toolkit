import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: '0', name: 'Luis Ariel',},
    {id: '1', name: 'Llesica'},
    {id: '2', name: 'Oscar'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export default usersSlice.reducer;