import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";


export const getJobs = createAsyncThunk(
    "getJobs",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.get("/jobs")
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const getJobDetail = createAsyncThunk(
    "getJobDetails",
    async (id, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.get(`/jobs/${id}`)
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })