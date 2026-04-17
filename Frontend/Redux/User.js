import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name:"user",
    initialState:{
        value:100,
        User:[],
        UserCartData:[],
        Order:[]
    },
    reducers:{
        Userstatus:(state,data)=>{
           state.value=data.payload.status
           console.log("now dispatch ",state)
        },
        UserData:(state,action)=>{
state.User.push(action.payload.Details)
// state.User.length>1?state.User=[]:""
// console.log("User Data is ",state.User)
        },
        UserCart:(state,action)=>{
            state.UserCartData=[action.payload.UserCartdata]
        },
        UserOrder:(state,action)=>{
            state.Order=[]
            state.Order=[action.payload.data]
            console.log("action in userorder redux ",action.payload.data," and order is ",state.Order)

        }
    }
})


export const {Userstatus,UserData,UserCart,UserOrder}=UserSlice.actions
export default UserSlice.reducer