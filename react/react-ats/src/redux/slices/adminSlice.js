import { createSlice } from "@reduxjs/toolkit";
import { getAllEmployers, getAllUsers, login } from "../actions/adminAction";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        users: [],
        employers: [],
        auth: JSON.parse(localStorage.getItem("info"))
    },
    reducers: {
        logout: (state, { payload }) => {
            localStorage.removeItem("info")
            state.auth = null
        }
    },
    extraReducers: builder => {
        builder.addCase(login.pending, (state, { payload }) => {
            state.loading = true
        })
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.loading = false
            state.auth = payload
        })
        builder.addCase(login.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload

        })

        builder.addCase(getAllUsers.pending, (state, { payload }) => {
            state.loading = true
        })
        builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
            state.loading = false
            state.users = payload
        })
        builder.addCase(getAllUsers.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        builder.addCase(getAllEmployers.pending, (state, { payload }) => {
            state.loading = true
        })
        builder.addCase(getAllEmployers.fulfilled, (state, { payload }) => {
            state.loading = false
            state.employers = payload
        })
        builder.addCase(getAllEmployers.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })
    }

})
export const { logout } = adminSlice.actions
export default adminSlice.reducer