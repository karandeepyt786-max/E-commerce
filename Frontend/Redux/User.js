import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name:"user",
    initialState:{
        value:100,
        User:[]
    },
    reducers:{
        Userstatus:(state,data)=>{
           state.value=data.payload.status
           console.log("now dispatch ",state)
        },
        UserData:(state,action)=>{
state.User.push(action.payload.Details)
// state.User.length>1?state.User=[]:""

        }
    }
})


export const {Userstatus,UserData}=UserSlice.actions
export default UserSlice.reducer