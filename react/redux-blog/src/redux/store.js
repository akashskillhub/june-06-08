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




const blogReducer = (state = { blogs: [] }, { type, payload }) => {
    switch (type) {
        case ADD_BLOG_SUCCESS: return { ...state, blogCreate: true }
        case ADD_BLOG_FAIL: return { ...state, error: payload }

        case GET_BLOG_SUCCESS: return { ...state, blogs: payload }
        case GET_BLOG_FAIL: return { ...state, error: payload }

        case DELETE_BLOG_SUCCESS: return { ...state, blogDelete: !state.blogDelete }
        case DELETE_BLOG_FAIL: return { ...state, error: payload }

        default: return state
    }
}
const rootReducer = combineReducers({
    articles: blogReducer
})


/**
 * add          axios.post(URL, DATA)
 * get          axios.get(URL)
 * update       axios.put(URL/ID, DATA)
 * delete       axios.delete(URL/ID)
 */

const URL = "http://localhost:5000/blogs"

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

const reduxStore = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk)))
export default reduxStore