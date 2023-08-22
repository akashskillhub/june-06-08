import axios from "axios"
import { combineReducers, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const ADD_BLOG_SUCCESS = "ADD_BLOG_SUCCESS"
const ADD_BLOG_FAIL = "ADD_BLOG_FAIL"

const GET_BLOG_SUCCESS = "GET_BLOG_SUCCESS"
const GET_BLOG_FAIL = "GET_BLOG_FAIL"


const DELETE_BLOG_SUCCESS = "DELETE_BLOG_SUCCESS"
const DELETE_BLOG_FAIL = "DELETE_BLOG_FAIL"

const UPDATE_BLOG_SUCCESS = "UPDATE_BLOG_SUCCESS"
const UPDATE_BLOG_FAIL = "UPDATE_BLOG_FAIL"

const INVALIDATE = "INVALIDATE"

const REGISTER_SUCCESS = "REGISTER_SUCCESS"
const REGISTER_FAIL = "REGISTER_FAIL"

const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_FAIL = "LOGIN_FAIL"

const LOGOUT = "LOGOUT"


const userReducer = (state = { users: [] }, { type, payload }) => {
    switch (type) {
        case REGISTER_SUCCESS: return { ...state, register: true }
        case REGISTER_FAIL: return { ...state, error: payload }

        case LOGIN_SUCCESS: return { ...state, auth: payload }
        case LOGIN_FAIL: return { ...state, error: payload }

        case LOGOUT: return { ...state, auth: null }

        default: return state
    }
}

const blogReducer = (state = { blogs: [] }, { type, payload }) => {
    switch (type) {
        case ADD_BLOG_SUCCESS: return { ...state, blogCreate: true }
        case ADD_BLOG_FAIL: return { ...state, error: payload }

        case GET_BLOG_SUCCESS: return { ...state, blogs: payload }
        case GET_BLOG_FAIL: return { ...state, error: payload }

        case DELETE_BLOG_SUCCESS: return { ...state, blogDelete: true }
        case DELETE_BLOG_FAIL: return { ...state, error: payload }

        case UPDATE_BLOG_SUCCESS: return { ...state, blogUpdate: true }
        case UPDATE_BLOG_FAIL: return { ...state, error: payload }

        case INVALIDATE: return {
            ...state,
            error: false,
            blogCreate: false,
            blogUpdate: false,
            blogDelete: false
        }

        default: return state
    }
}
const rootReducer = combineReducers({
    articles: blogReducer,
    clients: userReducer
})


/**
 * add          axios.post(URL, DATA)
 * get          axios.get(URL)
 * update       axios.put(URL/ID, DATA)
 * delete       axios.delete(URL/ID)
 */

const URL = "http://localhost:5000/blogs"
const USER_URL = "http://localhost:5000/users"

export const addBlog = blogData => {
    return async dispatch => {
        try {
            const { data } = await axios.post(URL, blogData)
            dispatch({ type: ADD_BLOG_SUCCESS, })
        } catch (error) {
            dispatch({ type: ADD_BLOG_FAIL, payload: error.message })
        }
    }
}

export const getBlogs = blogData => {
    return async dispatch => {
        try {
            const { data } = await axios.get(URL)
            dispatch({ type: GET_BLOG_SUCCESS, payload: data })
        } catch (error) {
            dispatch({ type: GET_BLOG_FAIL, payload: error.message })
        }
    }
}
export const deleteBlog = id => {
    return async dispatch => {
        try {
            const { data } = await axios.delete(`${URL}/${id}`)
            dispatch({ type: DELETE_BLOG_SUCCESS })
        } catch (error) {
            dispatch({ type: DELETE_BLOG_FAIL, payload: error.message })
        }
    }
}
export const updateBlog = blogData => {
    return async dispatch => {
        try {
            const { data } = await axios.patch(`${URL}/${blogData.id}`, blogData)
            dispatch({ type: UPDATE_BLOG_SUCCESS })
        } catch (error) {
            dispatch({ type: UPDATE_BLOG_FAIL, payload: error.message })
        }
    }
}
export const invalidate = blogData => {
    return async dispatch => {
        dispatch({ type: INVALIDATE })
    }
}

export const registerUser = userData => async dispatch => {
    try {
        const { data } = await axios.post(USER_URL, userData)
        dispatch({ type: REGISTER_SUCCESS })
    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error.message })
    }
}
export const loginUser = userData => async dispatch => {
    try {
        const { data } = await axios.get(USER_URL, {
            params: {
                email: userData.email,
                password: userData.password,
            }
        })
        if (data.length === 0) {
            dispatch({
                type: LOGIN_FAIL,
                payload: "Email Or Password Do Not Match"
            })

        } else {
            localStorage.setItem("auth", JSON.stringify(data[0]))
            dispatch({ type: LOGIN_SUCCESS, payload: data[0] })
        }
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.message })
    }
}
export const logoutUser = userData => async dispatch => {
    localStorage.removeItem("auth")
    dispatch({ type: LOGOUT })
}

const local = JSON.parse(localStorage.getItem("auth"))

const reduxStore = createStore(
    rootReducer,
    {
        clients: {
            auth: local
        }
    },
    composeWithDevTools(applyMiddleware(thunk)))
export default reduxStore

