import { configureStore } from "@reduxjs/toolkit";     //to Create a Store for Redux
import UserSlice from "./User";
import AdminSlice from "./Admin";


export const store=configureStore({
    reducer:{
User:UserSlice,
Admin:AdminSlice
    }
})