import React from 'react'
import  "./ShopCategory.css"
import { all_products } from '../assets/all_products.js'
import Item from '../Item/Item.jsx'

const ShopCategory = ({category}) => {
  return (

    <>

    <main className='shop-category'>
     {all_products.map((item,i)=>{
     if(item.category===category){ 
     return <Item key={i} item={item}/>
     }
    })}

  </main>

  </>
  )
}

export default ShopCategory
