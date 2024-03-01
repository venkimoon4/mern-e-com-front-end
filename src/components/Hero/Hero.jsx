import React from 'react'
import Item from '../Item/Item'
// import { newArriavals } from '../../assets/newArriavals.js'
import { newArrivals } from '../../assets/newArriavals.js'
import "./Hero.css"
import { newCollections } from '../../assets/newCollections.js'
const Hero = () => {
  return (

    <>
    <div className='new-arrivals-banner'>
      <div>
      <h3>Welcome </h3>  
      <h3>We Got New Arrivals</h3>
      <h3>For Everyone<span>👋</span></h3>
      </div>
     <img src='./images/hero-banner.png' style={{backgroundColor:"transparent"}} width="300"/>
    </div>

    <main className='new-arrivals'>
      {newArrivals.map((item)=>{
       return <Item key={item.id} item={item}/>
      })}
    </main>


      <div className='new-collection'>
        <h3>New Collections For Men</h3>
      </div>


      <main className='new-arrivals'>
      {newCollections.map((item)=>{
       if(item.category==="men"){ 
       return <Item  key={item.company} item={item}/>
       }
      })}
    </main>


    <div className='new-collection-women'>
        <h3>New Collections For Women</h3>
      </div>

      <main className='new-arrivals'>
      {newCollections.map((item,i)=>{
       if(item.category==="women"){ 
       return <Item key={i} item={item}/>
       }
      })}
    </main>


    <div className='news-letter'>

      <div>

       <h3>Subsrcibe To Our News Letter</h3>

       <input placeholder='Email Addresss'/><button>Subscribe</button>

       </div>

    </div>



    

    </>
  )
}

export default Hero