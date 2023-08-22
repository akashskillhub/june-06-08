import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./slices/adminSlice";
import userSlice from "./slices/userSlice";

const reduxStore = configureStore({
    reducer: {
        admin: adminSlice,
        user: userSlice
    }
})

export default reduxStore