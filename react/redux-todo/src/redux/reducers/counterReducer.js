import { DEC, INC } from "../constants/counterConstants";

export const counterReducer = (state = { count: 123 }, { type, payload }) => {

    switch (type) {
        case INC: return { count: state.count + 1 }
        case DEC: return { count: state.count - 1 }
        default: return state
    }

}