import React from 'react'
import "./BreadCrum.css"
import { Link } from 'react-router-dom'
const BreadCrum = ({product}) => {
  return (
    <div className='bread-container'>
      <p className='bread'><Link style={{color:"grey",textDecoration:"none",cursor:"pointer"}} to="/">Home</Link> {'>'} <Link style={{color:"grey",textDecoration:"none",cursor:"pointer"}} to={`/${product.category}`}> Shop {'>'} </Link> {product.category} {'>'} {product.name}</p>
    </div>
  )
}

export default BreadCrum
