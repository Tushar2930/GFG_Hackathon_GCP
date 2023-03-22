import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Content/context/AuthorizationContext";
import "./cart.css";
import Card from "./Card_card";

function Cart() {
  const [data, setData] = React.useState([]);
  const useAuth = useContext(AuthContext);

  useEffect(() => {
    async function feth() {
      try {
        if (useAuth.currentUser) {
          await fetch("http://localhost:8000/cart/get-products", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: useAuth.currentUser.email,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              setData(data);
              console.log(data);
            });
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    feth();
  }, []);

  console.log(data);
  var total = 0;
  var cardComponentArray = data?.cart?.map((card, i) => {
    total = total + parseInt(card?.quantity) * parseInt(card?.price);
    return (
      <Card
        key={i}
        img_url={card?.ip}
        name={card?.name}
        description={card?.description}
        quantity={card?.quantity}
        price={card?.price}
        id={card?.id}
      />
    );
  });

  return (
    <>
      <div class="cart">
        <h2>Shopping Cart</h2>
        <ul>
          <li>{cardComponentArray}</li>
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
