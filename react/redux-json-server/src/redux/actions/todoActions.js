import { ADD_TODO, ADD_TODO_ERROR, DELETE_TODO, GET_TODO } from "../constants/todoContstans"
import axios from "axios"
export const createTodo = (arg) => {
    return async dispatch => {
        try {
            const { data } = await axios.post("http://localhost:5000/todos", arg)
            dispatch({ type: ADD_TODO })
        } catch (error) {
            console.log(error)
            dispatch({ type: ADD_TODO_ERROR, payload: error.message })
        }

    }
}
export const getAllTodos = () => async dispatch => {
    try {
        const { data } = await axios.get("http://localhost:5000/todos")
        console.log(data)
        dispatch({ type: GET_TODO, payload: data })
    } catch (error) {
        console.log(error)
    }
}
export const deleteTodo = arg => async dispatch => {
    try {
        const { data } = await axios.delete(`http://localhost:5000/todos/${arg}`)
        dispatch({ type: DELETE_TODO })
    } catch (error) {
        console.log(error)
    }
}
