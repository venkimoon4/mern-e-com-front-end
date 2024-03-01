import React from 'react'
import "./Cart.css"
import CartItem from './CartItem'
import BagSummary from './BagSummary'
import { useSelector } from "react-redux"

const Cart = () => {

  const bag=useSelector((store)=>store.bag);

  console.log(bag);

  return (
    <div className='cart-container'>
      <div className="shopping-cart">
      {/* <!-- Title --> */}

      <div className="title">
        Shopping Bag
      </div>

       {bag.map((item)=>{
        return <CartItem key={item.id} item={item}/>
       })}

    </div>
     <BagSummary/>
    </div>
  )
}

export default Cart
