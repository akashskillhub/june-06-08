import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const ADD_TOUR = "ADD_TOUR"
const REMOVE_TOUR = "REMOVE_TOUR"

const tourReducer = (state = { tours: [] }, { type, payload }) => {
    switch (type) {
        case ADD_TOUR: return { tours: [...state.tours, payload] }
        case REMOVE_TOUR: return {
            tours: state.tours.filter(item => item.name != payload)
        }
        default: return state
    }
}

export const addTour = arg => {
    return async dispatch => {
        dispatch({ type: ADD_TOUR, payload: arg })
    }
}
export const deleteTour = arg => {
    return async dispatch => {
        dispatch({ type: REMOVE_TOUR, payload: arg })
    }
}

const rootReducer = combineReducers({
    packages: tourReducer
})

const reduxStore = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk)))

export default reduxStore