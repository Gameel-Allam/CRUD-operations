import { configureStore } from "@reduxjs/toolkit";
import GetSlice from "./GetSlice";

export const store=configureStore({
    reducer:{
        usersData:GetSlice,
    }
})