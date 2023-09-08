import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./slices/adminSlice";
import publicSlice from "./slices/publicSlice";

const reduxStore = configureStore({
    reducer: {
        admin: adminSlice,
        public: publicSlice
    }
})
export default reduxStore