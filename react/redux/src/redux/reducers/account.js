import { DEPOSIT, RESET, WIDRAW } from "../constants/account"

export const accountReducer = (state = { amount: 500 }, { type, payload }) => {
    switch (type) {
        case DEPOSIT: return { amount: state.amount + payload }
        case WIDRAW: return { amount: state.amount - payload }
        case RESET: return { amount: 0 }
        default: return state
    }
    // if (type === DEPOSIT) {
    //     return { amount: state.amount + payload }
    // }
    // if (type === WIDRAW) {
    //     return { amount: state.amount - payload }
    // }
    // if (type === RESET) {
    //     return { amount: 0 }
    // }
    // return state
}