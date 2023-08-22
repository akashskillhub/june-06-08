import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 1000 },
    // actions 👇
    reducers: {
        inc: (state, { payload }) => {
            state.count++
        },
        dec: (state, { payload }) => {
            state.count--
        },

        incBy: (state, { payload }) => {
            state.count += payload
        },
        decBy: (state, { payload }) => {
            state.count -= payload
        },

    },
    // reducer 👇
    extraReducers: () => { }
})

export const { inc, dec, incBy, decBy } = counterSlice.actions
export default counterSlice.reducer