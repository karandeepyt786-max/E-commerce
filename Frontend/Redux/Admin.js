import { createSlice } from "@reduxjs/toolkit";

const AdminSlice=createSlice({
    name:"Admin",
    initialState:{
        value:100,
        Admin:[],
        SingleProduct:[]
    },
    reducers:{
        AdminStatus:(state,data)=>{
           state.value=data.payload.status
           console.log("now dispatch ",state)
        },
       AdminData:(state,action)=>{
state.Admin.push(action.payload.Details)
// state.User.length>1?state.User=[]:""
        },
   setSingleProduct: (state, action) => {
      state.SingleProduct = action.payload.Product; // directly assign object
      console.log("single product is",state.SingleProduct);
    },
    }
})


export const {AdminStatus,AdminData,setSingleProduct}=AdminSlice.actions
export default AdminSlice.reducer