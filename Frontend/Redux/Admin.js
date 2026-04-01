import { createSlice } from "@reduxjs/toolkit";

const AdminSlice=createSlice({
    name:"Admin",
    initialState:{
        value:100,
        Admin:[]
    },
    reducers:{
        AdminStatus:(state,data)=>{
           state.value=data.payload.status
           console.log("now dispatch ",state)
        },
       AdminData:(state,action)=>{
state.Admin.push(action.payload.Details)
// state.User.length>1?state.User=[]:""

        }
    }
})


export const {AdminStatus,AdminData}=AdminSlice.actions
export default AdminSlice.reducer