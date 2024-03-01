const createUser=async(name,email,password,mobileno)=>{

  if(!name && !email && !password && !mobileno){
    throw Error("All Fields are Required")
  }

  const res=await fetch('https://mern-e-com-back-end.onrender.com/user/signup',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({name,email,password,mobileno})
  })

  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }


  localStorage.setItem('email',data.email)
  localStorage.setItem('token',data.token)

  return data;

}

const userLogin=async(email,password)=>{

  if(!email && !password ){
    throw Error("All Fields are Required")
  }

  const res=await fetch('https://mern-e-com-back-end.onrender.com/user/login',{
   method:"POST",
   headers:{
    'Content-Type':"application/json"
   },
   body:JSON.stringify({email,password})
  })

  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }
  
  localStorage.setItem('email',data.email)
  localStorage.setItem('token',data.token)

  return data;

}



const addUserItemToCart=async(product)=>{

  const res=await fetch('https://mern-e-com-back-end.onrender.com/user/cart',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "authorization":`Bearer ${localStorage.getItem('token')}`
    },
    body:JSON.stringify(product)
  })


  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }

  return data;

}


const getUserItem=async()=>{

   const res=await fetch('https://mern-e-com-back-end.onrender.com/user/cart',{
    method:"GET",
    headers:{
      "authorization":`Bearer ${localStorage.getItem('token')}`
    }
  })

  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }

  return data;
}

const incrementProductQuantity=async(productId)=>{

  const res=await fetch(`https://mern-e-com-back-end.onrender.com/user/cart/quantityincrement`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "authorization":`Bearer ${localStorage.getItem('token')}`
    },
    body:JSON.stringify({id:productId})
  })

  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }

  return data;

}



const decrementProductQuantity=async(productId)=>{

  const res=await fetch(`https://mern-e-com-back-end.onrender.com/user/cart/quantitydecrement`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "authorization":`Bearer ${localStorage.getItem('token')}`
    },
    body:JSON.stringify({id:productId})
  })

  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }


  return data;

}

const deleteCartItem=async(productId)=>{

  const res=await fetch(`https://mern-e-com-back-end.onrender.com/user/cart/${productId}`,{
    method:"DELETE",
    headers:{
      "authorization":`Bearer ${localStorage.getItem('token')}`
    },
  })

  const data=await res.json();
  
  if(!res.ok){
    throw Error(data.error)
  }

  return data;


}

const createUserShippingAddress=async(shipping)=>{

  if(!shipping.firstName || !shipping.lastName || !shipping.address || !shipping.country || !shipping.zipcode || !shipping.city || !shipping.state){
    throw Error("All Fields are Required")
  }

  const res=await fetch('https://mern-e-com-back-end.onrender.com/user/shipping',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "authorization":`Bearer ${localStorage.getItem('token')}`
    },
    body:JSON.stringify(shipping)
  });

  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }

  return data;

}

const userPayment=async(payment)=>{

  if(!payment.nameOnCard || !payment.cardNumber || !payment.expiryDate || !payment.securityCode || !payment.zipcode){
    throw Error('All Fields are Required')
  }

  const res=await fetch('https://mern-e-com-back-end.onrender.com/user/payment',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "authorization":`Bearer ${localStorage.getItem('token')}`
    },
    body:JSON.stringify(payment)
  })

  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }

  return data;

}

const createUserOrders=async(items)=>{

  const res=await fetch('https://mern-e-com-back-end.onrender.com/user/myorder',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "authorization":`Bearer ${localStorage.getItem('token')}`
    },
    body:JSON.stringify(items)
  })

  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }

  return data;

}


const getUserOrders=async()=>{

  const res=await fetch('https://mern-e-com-back-end.onrender.com/user/myorder',{
    method:"GET",
    headers:{
      "authorization":`Bearer ${localStorage.getItem('token')}`
    },
  })

  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }

  return data;

}


const clearAllCartItem=async()=>{

  const res=await fetch('https://mern-e-com-back-end.onrender.com/user/clearcart',{
    method:"DELETE",
    headers:{
      "authorization":`Bearer ${localStorage.getItem('token')}`
    },
  })

  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }

  return data;

}


export {createUser,userLogin,addUserItemToCart,getUserItem,incrementProductQuantity,decrementProductQuantity,deleteCartItem,createUserShippingAddress,userPayment,createUserOrders,getUserOrders,clearAllCartItem}