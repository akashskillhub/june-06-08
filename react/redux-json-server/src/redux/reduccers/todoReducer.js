import { ADD_TODO, ADD_TODO_ERROR, DELETE_TODO, GET_TODO, UPDATE_TODO } from "../constants/todoContstans";

export const todoReducer = (state = { todos: [] }, { type, payload }) => {
    switch (type) {
        case ADD_TODO: return { ...state, todoCreate: !state.todoCreate }
        case ADD_TODO_ERROR: return { ...state, error: payload }
        case GET_TODO: return { ...state, todos: payload }
        case UPDATE_TODO: return
        case DELETE_TODO: return { ...state, todoDelete: !state.todoDelete }
        default: return state
    }

}