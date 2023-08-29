import { createSlice } from "@reduxjs/toolkit";
import { createJobPost, loginEmployer, registerEmployer } from "../actions/employerActions";
// import { loginUser, registerUser } from "../actions/userActions";

const employerSlice = createSlice({
    name: "employerSlice",
    initialState: {
        auth: JSON.parse(localStorage.getItem("employerInfo"))
    },
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        },
        employerLogout: (state, { payload }) => {
            localStorage.removeItem("employerInfo")
            state.auth = null
        }
    },
    extraReducers: builder => builder
        .addCase(registerEmployer.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(registerEmployer.fulfilled, (state, { payload }) => {
            state.loading = false
            state.employerRegister = true
        })
        .addCase(registerEmployer.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(loginEmployer.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(loginEmployer.fulfilled, (state, { payload }) => {
            state.loading = false
            state.auth = payload
        })
        .addCase(loginEmployer.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(createJobPost.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(createJobPost.fulfilled, (state, { payload }) => {
            state.loading = false
            state.jobCreate = true
        })
        .addCase(createJobPost.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate, employerLogout } = employerSlice.actions
export default employerSlice.reducer