import React ,{useContext}from "react";
import { AuthContext } from "../Content/context/AuthorizationContext";
import "./cart.css";
import Card from "./Card_card";

function Cart(){
    const [data,setData]=React.useState([]);
    const useAuth = useContext(AuthContext);
    console.log(useAuth.currentUser.email)
    fetch("http://localhost:8000/cart/get-products",{
        method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:useAuth.currentUser.email
      }) 
    }).then(resp=>resp.json())
    .then(data=>setData(data));

    var cardComponentArray = data.cart.map(
        (card) => {
          return  (
            
              <Card img_url={card?.ip} name={card?.name} description={card?.description} price={card?.price} id={card?._id}/>
          )
        }
      )

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
    <p>Total: $25.00</p>
    <button>Checkout</button>
  </div>
</div>

    </>
}

export default Cart;