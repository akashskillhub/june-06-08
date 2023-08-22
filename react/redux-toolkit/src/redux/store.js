import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todoSlice from "./todoSlice";

const reduxStore = configureStore({
    reducer: {
        counter: counterSlice,
        notes: todoSlice
    }
})

export default reduxStore