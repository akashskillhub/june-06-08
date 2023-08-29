import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";


export const registerUser = createAsyncThunk(
    "registerUser",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.post("/users", userData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })


export const loginUser = createAsyncThunk("user/login", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.get("/users", {
            params: userData
        })
        if (data.length === 0) {
            // Login Fail
            return rejectWithValue("Invalid Credentials")
        } else {
            // Login Success
            localStorage.setItem("userInfo", JSON.stringify(data[0]))
            return data[0]
        }

    } catch (error) {
        console.log(error)
        return rejectWithValue(error.message)

    }
})
export const applyJob = createAsyncThunk("user/applyJob", async (jobData, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.post("/apply", jobData)
        return true
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.message)

    }
})
export const isApply = createAsyncThunk("user/isApply", async (jobData, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.get("/apply", {
            params: jobData
        })

        return data.length === 0 ? false : true
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.message)

    }
})
export const getUserApplications = createAsyncThunk("user/applications", async (id, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.get("/apply", {
            params: {
                _expand: "job",
                userId: id
            }
        })

        return data
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.message)

    }
})