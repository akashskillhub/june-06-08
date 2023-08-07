// store
// reducer
// action

import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { accountReducer } from "./reducers/account";


const rootReducer = combineReducers({
    bank: accountReducer
})
const reduxStore = createStore(rootReducer, {}, composeWithDevTools())



export default reduxStore