import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./slices/adminSlice";
import userSlice from "./slices/userSlice";
import employerSlice from "./slices/employerSlice";
import publicSlice from "./slices/publicSlice";

const reduxStore = configureStore({
    reducer: {
        admin: adminSlice,
        user: userSlice,
        employer: employerSlice,
        public: publicSlice
    }
})

export default reduxStore