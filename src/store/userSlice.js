import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
  name:"user",
  initialState:{
    email:null
  },
  reducers:{
    setUserState:(state,action)=>{
      state.email=action.payload
    }
  }
})

export const userActions=userSlice.actions;

export default userSlice;