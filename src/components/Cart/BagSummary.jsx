import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";


const BagSummary=()=>{

  const bag=useSelector((store)=>store.bag);

  const navigate=useNavigate();

  const handleCheckout=()=>{
  navigate('/shipping');
  }

  const totalItems=bag.length;

  let totalMRP=0;
  let discountedMRP=0;

  bag.forEach((item) => {
    totalMRP=item.original_price*item.quantity;
    discountedMRP=item.price*item.quantity;
  });

  const convinenceFee=bag.length===0 ? 0 : 99;

  const totalCost=discountedMRP+convinenceFee;


  return(
    <>
    <div className="bag-summary">
     <h2>PRICE DETAILS: <span>{totalItems}</span></h2>
     <h4>Total MRP: <span>₹{totalMRP}</span></h4>
     <h4>Discounted on MRP: <span>₹{discountedMRP}</span></h4>
     <h4>Convenienec Fee: <span>₹{convinenceFee}</span></h4>
     <hr/>
     <h3>Total Amount: <span>₹{totalCost}</span></h3>
     <button role="button" className="button-name" onClick={()=>{
      if(bag.length!==0){
      handleCheckout()
      }
      else{
        alert('Please Add Products In Your Bag To Checkout')
      }
      }} >PLACE ORDER</button>
    </div>
    </>
  )

}

export default BagSummary;