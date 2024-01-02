import { configureStore } from "@reduxjs/toolkit";
import ClientSlice from "./Slices/Slices"
import adminSlice from "./Slices/adminSlice";


const reduxStore = configureStore({
    reducer: {
        users: ClientSlice,
        admin: adminSlice
    },

})

export default reduxStore