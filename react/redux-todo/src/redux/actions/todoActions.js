import { ADD_TODO } from "../constants/todoConstants"
import reduxStore from "../store"

export const createTodo = arg => {
    reduxStore.dispatch({ type: ADD_TODO, payload: arg })
}