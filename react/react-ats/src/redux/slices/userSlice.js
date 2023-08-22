import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../actions/userActions";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addCase(registerUser.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(registerUser.fulfilled, (state, { payload }) => {
            state.loading = false
            state.userRegister = true
        })
        .addCase(registerUser.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = userSlice.actions
export default userSlice.reducer