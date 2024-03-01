import { createSlice } from "@reduxjs/toolkit"

const bagSlice=createSlice({
name:"bag",
initialState:[],
reducers:{
  addItemToBag:(state,action)=>{
      return action.payload
  },
  deleteItemFromBag:(state,action)=>{
    return state.filter((item)=>item.id!==action.payload)
  },
  increaseCartQauntity:(state,action)=>{

   const item=state.find((item)=>item.id===action.payload);

   if(item){
    item.quantity++;
   }

  },
  decreaseCartQuantity:(state,action)=>{
 
    const item=state.find((item)=>item.id===action.payload);
 
    if(item){
    item.quantity--;
    }
    
},
clearCart:(state,action)=>{
 return state=[]
}
}
})

export const bagActions=bagSlice.actions;

export default bagSlice;