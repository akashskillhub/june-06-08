import { ADD_USER } from "./constants/userContstants"

export const userReducer = (state = { users: [] }, action) => {
    if (action.type === ADD_USER) {
        return { ...state, users: [...state.users, action.payload] }
    }
    return state
}

export const addUser = arg => async dispatch => {
    dispatch({ type: ADD_USER, payload: arg })
}