import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Content/context/AuthorizationContext";
import "./cart.css";
import Card from "./Card_card";

function Cart() {
  const [data, setData] = React.useState([]);
  const useAuth = useContext(AuthContext);
  function Cart() {}

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
  );
}

export default Cart;
