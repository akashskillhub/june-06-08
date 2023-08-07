import { createStore, combineReducers } from "redux"
import { counterReducer } from "./reducers/counterReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import { todoReducer } from "./reducers/todoReducer"

const rootReducer = combineReducers({
    counter: counterReducer,
    mazeTodos: todoReducer
})

const reduxStore = createStore(
    rootReducer,
    {},
    composeWithDevTools())

export default reduxStore