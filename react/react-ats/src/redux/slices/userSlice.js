import { createSlice } from "@reduxjs/toolkit";
import { applyJob, getUserApplications, isApply, loginUser, registerUser } from "../actions/userActions";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        auth: JSON.parse(localStorage.getItem("userInfo"))
    },
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        },
        userLogout: (state, { payload }) => {
            localStorage.removeItem("userInfo")
            state.auth = null
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

        .addCase(loginUser.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(loginUser.fulfilled, (state, { payload }) => {
            state.loading = false
            state.auth = payload
        })
        .addCase(loginUser.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(applyJob.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(applyJob.fulfilled, (state, { payload }) => {
            state.loading = false
            state.applied = true
        })
        .addCase(applyJob.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(isApply.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(isApply.fulfilled, (state, { payload }) => {
            state.loading = false
            state.isApplied = payload
        })
        .addCase(isApply.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(getUserApplications.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getUserApplications.fulfilled, (state, { payload }) => {
            state.loading = false
            state.history = payload
        })
        .addCase(getUserApplications.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate, userLogout } = userSlice.actions
export default userSlice.reducer