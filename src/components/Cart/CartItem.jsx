import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagActions } from '../../store/bagSlice';
import { decrementProductQuantity, deleteCartItem, incrementProductQuantity } from '../../controllers/userController';

const CartItem = ({item}) => {

  const dispatch=useDispatch();


  const handleRemoveItemFromCart=async(itemId)=>{
    try{
    await deleteCartItem(itemId);  
    dispatch(bagActions.deleteItemFromBag(itemId))
    }catch(error){
    console.log(error.message)
    }
  }

  const handleIncreaseQuantity=async(itemId)=>{
    try{
    const data=await incrementProductQuantity(itemId)  
    dispatch(bagActions.increaseCartQauntity(itemId))
    }
    catch(error){
      console.log(error.message)
    }
  }

  const handleDecreaseQauntity=async(itemId)=>{
    try{
      if(item.quantity>1){  
      const data=await decrementProductQuantity(itemId)  
      dispatch(bagActions.decreaseCartQuantity(itemId))
      }
      else{
        await deleteCartItem(itemId);
        dispatch(bagActions.deleteItemFromBag(itemId))
      }
      }
      catch(error){
        console.log(error.message)
      }
  }

  return (
    <>

<div className="item">
        <div className="buttons">
          <span className="delete-btn" onClick={()=>handleRemoveItemFromCart(item.id)}>X</span>
        </div>

        <div className="image">
          <img src={item.image} width="50" alt="" />
        </div>

        <div className="description">
          <span>{item.name}</span>
        </div>

        <div className="quantity">
          <button className="plus-btn" type="button" name="button" onClick={()=>{
            handleIncreaseQuantity(item.id)
          }}>
            +
          </button>
          {/* <input type="text" name="name" readOnly value={item.quantity}/> */}
          {item.quantity}
          <button className="minus-btn" type="button" name="button" onClick={()=>{
            handleDecreaseQauntity(item.id)
          }}>
            -
          </button>
        </div>

        <div className="total-price">${item.price}</div>
      </div>
    </>
  )
}

export default CartItem
