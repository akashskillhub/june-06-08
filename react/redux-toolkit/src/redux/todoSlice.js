import { createSlice } from "@reduxjs/toolkit";
import { createTodo, getTodos, removeTodo } from "./todoActions";

const todoSlice = createSlice({
    name: "todos",
    initialState: { todos: [] },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(createTodo.pending, (state, { payload }) => {
            state.loading = true
        })
        builder.addCase(createTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.todoAdded = true
        })
        builder.addCase(createTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        builder.addCase(getTodos.pending, (state, { payload }) => {
            state.loading = true
        })
        builder.addCase(getTodos.fulfilled, (state, { payload }) => {
            state.loading = false
            state.todos = payload
        })
        builder.addCase(getTodos.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        builder.addCase(removeTodo.pending, (state, { payload }) => {
            state.loading = true
        })
        builder.addCase(removeTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.todoDeleted = true
        })
        builder.addCase(removeTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })
    }
})

export default todoSlice.reducer