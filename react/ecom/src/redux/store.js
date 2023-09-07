import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./slices/adminSlice";

const reduxStore = configureStore({
    reducer: {
        admin: adminSlice
    }
})
export default reduxStore