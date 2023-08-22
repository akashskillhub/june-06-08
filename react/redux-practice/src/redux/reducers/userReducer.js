import { LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/userConstants"

export const userReducer = (state = { users: [] }, { type, payload }) => {
    switch (type) {
        case REGISTER_USER_REQUEST: return { ...state, loading: true }
        case REGISTER_USER_SUCCESS: return {
            ...state,
            loading: false,
            register: true
        }
        case REGISTER_USER_FAIL: return {
            ...state,
            loading: false,
            error: payload
        }

        case LOGIN_USER_REQUEST: return { ...state, loading: true }
        case LOGIN_USER_SUCCESS: return {
            ...state,
            loading: false,
            auth: payload
        }
        case LOGIN_USER_FAIL: return {
            ...state,
            loading: false,
            error: payload
        }
        case LOGOUT: return {
            ...state,
            auth: false,
        }
        default: return state
    }
}