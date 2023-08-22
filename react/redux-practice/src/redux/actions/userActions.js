import axios from "axios"
import { LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/userConstants"
const URL = "http://localhost:5000/users"

export const registerUser = userData => async (dispatch, getState) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST, })
        const { data } = await axios.post(URL, userData)
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: REGISTER_USER_FAIL, payload: error.message })
    }
}


export const loginUser = userData => async (dispatch, getState) => {
    try {
        dispatch({ type: LOGIN_USER_REQUEST, })
        const { data } = await axios.get(URL, {
            params: userData
        })
        localStorage.setItem("auth", JSON.stringify(data[0]))

        if (data.length === 0) {
            dispatch({ type: LOGIN_USER_FAIL, payload: "Invalid Credentials" })
        } else {
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: data[0]
            })
        }
    } catch (error) {
        dispatch({ type: LOGIN_USER_FAIL, payload: error.message })
    }
}

export const logoutUser = e => async dispatch => {
    localStorage.removeItem("auth")
    dispatch({ type: LOGOUT })
}
