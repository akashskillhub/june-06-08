import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "./api";

export const createTodo = createAsyncThunk("todo/create", async (todoData, { rejectWithValue }) => {
    try {
        const { data } = await API.post("/todos", todoData)
        return "Todo Create Success"
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getTodos = createAsyncThunk("todo/read", async (todoData, { rejectWithValue }) => {
    try {
        const { data } = await API.get("/todos")
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const removeTodo = createAsyncThunk("todo/remove", async (id, { rejectWithValue }) => {
    try {
        const { data } = await API.delete(`/todos/${id}`)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})