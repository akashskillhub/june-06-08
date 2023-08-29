import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";


export const registerEmployer = createAsyncThunk(
    "registerEmployer",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.post("/employers", userData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const loginEmployer = createAsyncThunk("employer/login", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.get("/employers", {
            params: userData
        })
        if (data.length === 0) {
            // Login Fail
            return rejectWithValue("Invalid Credentials")
        } else {
            // Login Success
            localStorage.setItem("employerInfo", JSON.stringify(data[0]))
            return data[0]
        }

    } catch (error) {
        console.log(error)
        return rejectWithValue(error.message)

    }
})




export const createJobPost = createAsyncThunk(
    "createJobPost",
    async (jobData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.post("/jobs", jobData)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })