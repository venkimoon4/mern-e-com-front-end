import { configureStore } from "@reduxjs/toolkit";
import bagSlice from "./bagSlice";
import userSlice from "./userSlice";
import myOrdersSlice from "./myOrdersSlice";


const clothStore=configureStore({
  reducer:{
    bag:bagSlice.reducer,
    user:userSlice.reducer,
    myOrders:myOrdersSlice.reducer
  }
})

export default clothStore;