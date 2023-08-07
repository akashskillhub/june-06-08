import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../constants/todoConstants";

export const todoReducer = (state = { todos: [] }, { type, payload }) => {

    switch (type) {
        case ADD_TODO: return { todos: [...state.todos, payload] }
        case UPDATE_TODO: return
        case DELETE_TODO: return
        default: return state
    }

}