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