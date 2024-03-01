import { createSlice } from "@reduxjs/toolkit";

const myOrdersSlice=createSlice({
  name:"myOrders",
  initialState:[],
  reducers:{
    addMyOrders:(state,action)=>{
     return action.payload;
    }
  }
})

export const myOrderActions=myOrdersSlice.actions;

export default myOrdersSlice;