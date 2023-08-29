import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

export const login = createAsyncThunk("admin/login", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.get("/users", {
            params: userData
        })
        if (data.length === 0) {
            // Login Fail
            return rejectWithValue("Invalid Credentials")
        } else {
            // Login Success
            localStorage.setItem("info", JSON.stringify(data[0]))
            return data[0]
        }

    } catch (error) {
        console.log(error)
        return rejectWithValue(error.message)

    }
})
export const getAllUsers = createAsyncThunk("admin/user", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.get("/users")
        return data

    } catch (error) {
        console.log(error)
        return rejectWithValue(error.message)

    }
})
export const getAllEmployers = createAsyncThunk("admin/employers", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.get("/employers")
        return data

    } catch (error) {
        console.log(error)
        return rejectWithValue(error.message)

    }
})