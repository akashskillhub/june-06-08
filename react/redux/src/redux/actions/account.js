import { DEPOSIT, RESET, WIDRAW } from "../constants/account"
import reduxStore from "../store"

export const depositMoney = amt => {
    reduxStore.dispatch({ type: DEPOSIT, payload: amt })
}
export const widrawMoney = amt => {
    reduxStore.dispatch({ type: WIDRAW, payload: amt })
}
export const reset = amt => {
    reduxStore.dispatch({ type: RESET })
}