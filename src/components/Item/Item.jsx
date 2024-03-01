import React from 'react'
import "./Item.css"
import { NavLink } from 'react-router-dom'

const Item = ({item}) => {



  return (
    <div className='item-container'>

      <div className='item-image-container'>
        <NavLink to={`/product/${item.id}`}>
        <img src={item.image} width="280px" alt='item-image'/>
        </NavLink>
      </div>

      <div className='item-details-container'>
        <h4 className='item-name'>{item.name}</h4>
        <p className='item-price'>Rs.{(item.price).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Item
