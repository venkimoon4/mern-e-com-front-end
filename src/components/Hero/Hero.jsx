import React, { useRef } from 'react'
import Item from '../Item/Item'
import { newArrivals } from '../../../public/assets/newArriavals.js'
import "./Hero.css"
import { newCollections } from '../../../public/assets/newCollections.js'
const Hero = () => {

  const inputRef=useRef()

  const handleNewsLetter=()=>{
    if(!inputRef.current.value){
    alert('Please Enter You Email Address')
    }
    else{
      alert('Sent Successfully Thank You 💌')
    }
  }

  return (

    <>
    <div className='new-arrivals-banner'>
      <div>
      <h3>Welcome </h3>  
      <h3>We Got New Arrivals</h3>
      <h3>For Everyone<span>👋</span></h3>
      </div>
     <img src='./assets/hero-banner.png' style={{backgroundColor:"transparent"}} width="300"/>
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

       <input ref={inputRef} placeholder='Email Addresss'/><button onClick={handleNewsLetter}>Subscribe</button>

       </div>

    </div>



    

    </>
  )
}

export default Hero