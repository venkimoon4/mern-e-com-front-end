import React from 'react'
import { useParams } from "react-router-dom"
import "./Product.css"
import { all_products } from '../assets/all_products.js';
import { newCollections } from '../assets/newCollections.js';
import Item from '../Item/Item.jsx';
import { useDispatch, useSelector } from "react-redux"
import { bagActions } from '../../store/bagSlice.js';
import { addUserItemToCart } from '../../controllers/userController.js';
const Product = () => {

  const {productId}=useParams();

  const product=all_products.find((item)=>item.id===productId);

  const dispatch=useDispatch();

  const email=useSelector((store)=>store.user.email)

  const handleAddItemToBag=async()=>{
       try{
        const data=await addUserItemToCart(product);
        console.log(data)
        dispatch(bagActions.addItemToBag(data))
       }
       catch(error){
       console.log(error.message)
       }
  }
  

  return (
    <div>


    <div className='product-container'>
      
      <div className='product-images'>
        <img src={product.image} width="90px"/>
        <img src={product.image} width="90px"/>
        <img src={product.image} width="90px"/>
        <img src={product.image} width="90px"/>
      </div>

      <div className='product-showcase'>

       <div className='product-showcase-image'>
        <img src={product.image} width="350px"/>
       </div>

       <div className='product-showcase-details'>
        <h5>{product.name}</h5>
        <div className='ratings-container'>
        <span>{product.rating.stars}⭐</span><span>({product.rating.count})</span>
        </div>
        <p className='product-price'>Rs.{product.price}</p>
        <p>Indulge in the enchanting allure of our dress collection, where each piece is a testament to timeless elegance and contemporary flair.
        </p>
        <h3>Select Size</h3>
        <div className='size-container'>
        <span>S</span>
        <span>M</span>
        <span>L</span>
        <span>XL</span>
        <span>XXL</span>
        </div>

        <button onClick={()=>{
          if(email!==null){
          handleAddItemToBag()
        }else{
         alert('Please Login To Add Item To Bag')
        }
          }}>Add to Card</button>
        <div className='product-conclusion'>
        <p>Category: {product.category} T-Shirt,Crop Top </p>
        <p>Tags: Modern Latest</p>
        </div>
       </div>

      </div>

    </div>


    <div className='related products-container'>

    <div className='new-collection'>
        <h3>Related Products</h3>
    </div>


      <main className='new-arrivals'>
      {newCollections.map((item)=>{
       if(item.category===product.category){ 
       return <Item item={item}/>
       }
      })}
    </main>

    </div>


    </div>
  )
}

export default Product
