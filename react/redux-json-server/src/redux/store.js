import { createStore, combineReducers, applyMiddleware } from "redux"
import { todoReducer } from "./reduccers/todoReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { userReducer } from "./userService"

const rootReducer = combineReducers({
    notes: todoReducer,
    clients: userReducer
})
const reduxStore = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk)))

export default reduxStore