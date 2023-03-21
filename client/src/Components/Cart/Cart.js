import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Content/context/AuthorizationContext";
import "./cart.css";
import Card from "./Card_card";

function Cart() {
  const [data, setData] = React.useState([]);
  const useAuth = useContext(AuthContext);
  // if (!useAuth.currentUser) {
  //   window.location.href = "/signin";
  // }
  console.log();

  useEffect(() => {
    async function feth() {
      const resp = await fetch("http://localhost:8000/cart/get-products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: useAuth.currentUser.email,
        }),
      });

      const temp = await resp.json();
      setData(temp);
    }
    if (useAuth.currentUser?.email) {
      feth();
      }
      })
      console.log(data.cart)
        var total=0;
    var cardComponentArray = data?.cart?.map(
        (card) => {
          total=total+parseInt(card?.quantity)*parseInt(card?.price);
          return  (
            
              <Card img_url={card?.ip} name={card?.name} description={card?.description} quantity={card?.quantity}price={card?.price} id={card?._id}/>
          )
        }
      )
function handleRazorPay(data){
  const options={
    "key":'rzp_test_Ao3jBTNOJ6GS1R',
    "amount":Number(data.amount),
    "currency":data.currency,
    "name":"AGROKART",
    "description":'test',
    "order_id":data.id,
    handler:async function(response){
      console.log(response);
      const data=await fetch("http://localhost:8000/order/verify",{
        method:'POST',
    headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        response:response
      })
      })
      const resp=await data.json();
      if(resp.message==='Sign Valid'){
        
        alert('Order Placed Successfully');
        window.location.href='/'
      }
    }
  }
  const rzp= window.Razorpay(options);
  rzp.open();
}


const handlePay=async function(){
const resp=await fetch("http://localhost:8000/order/checkout",{
       method:'POST',
    headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        amount:total
      })
        })
        const data=await resp.json();
        handleRazorPay(data.order);
      }
    // console.log(data);
    return <>
    <div class="cart">
  <h2>Shopping Cart</h2>
  <ul>
    <li>
   {cardComponentArray}
    </li>
  </ul>
  <div class="total">
    <p>Total: ${total}</p>
    <button>Checkout</button>
  </div>
</div>

    </>
  ;
}

export default Cart;
