import { createSlice } from "@reduxjs/toolkit";
import { getJobDetail, getJobs } from "../actions/publicActions";

const publicSlice = createSlice({
    name: "publicSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addCase(getJobs.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getJobs.fulfilled, (state, { payload }) => {
            state.loading = false
            state.jobs = payload
        })
        .addCase(getJobs.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(getJobDetail.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getJobDetail.fulfilled, (state, { payload }) => {
            state.loading = false
            state.selectedJob = payload
        })
        .addCase(getJobDetail.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = publicSlice.actions
export default publicSlice.reducer