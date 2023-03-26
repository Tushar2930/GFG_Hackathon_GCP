import React, { useContext, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { updateUserCartItem } from "../api/updateCartProduct";

import { AuthContext } from "../Content/context/AuthorizationContext";
import "./cart.css";
import Card from "./Card_card";

function Cart() {
  const useAuth = useContext(AuthContext);
  if (useAuth.currentUser === null) {
    window.location.href = "/signin";
  }
  const [data, setData] = React.useState({});
  const [isfetch, setIsfetch] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const updateFields = async (id, quantity) => {
    var tempcart = [];
    data.cart.map((e) => {
      if (e.id == id) {
        quantity && tempcart.push({ id, quantity });
      } else {
        tempcart.push(e);
      }
    });

    try {
      setIsLoading(true);
      await updateUserCartItem({
        id: useAuth.currentUserDetails.id,
        cartArray: tempcart,
      }).then((res) => {
        !isfetch ? setIsfetch(true) : setIsfetch(false);
        setIsLoading(false);
        console.log(res);
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  async function feth() {
    if (useAuth.currentUser) {
      try {
        setIsLoading(true);
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
        console.log(temp);
        setData(temp);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error.message);
      }
    }
  }

  useEffect(() => {
    feth();
  }, [useAuth.currentUser, isfetch]);
  useEffect(() => {
    feth();
  }, []);

  var total = 0;
  var cardComponentArray = data?.cart?.map((card) => {
    total = total + parseInt(card?.quantity) * parseInt(card?.price);

    if (data.cart.length === 0) {
      return (
        <div>
          Add Items to Cart <a href="/">Go to Home</a>
        </div>
      );
    }
    if (isLoading) {
      return (
        <div className="loading">
          <CircularProgress />
        </div>
      );
    }

    return (
      <Card
        key={card?.id}
        updateFeilds={updateFields}
        img_url={card?.ip}
        name={card?.name}
        description={card?.description}
        minQuantity={card?.minQuantity}
        quantity={card?.quantity}
        price={card?.price}
        id={card?.id}
      />
    );
  });
  function handleRazorPay(data) {
    const options = {
      key: "rzp_test_Ao3jBTNOJ6GS1R",
      amount: Number(data.amount),
      currency: data.currency,
      name: "AGROKART",
      description: "test",
      order_id: data.id,
      handler: async function (response) {
        console.log(response);
        const data = await fetch("http://localhost:8000/order/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            response: response,
          }),
        });
        const resp = await data.json();
        if (resp.message === "Sign Valid") {
          alert("Order Placed Successfully");
          window.location.href = "/";
        }
      },
    };
    const rzp = window.Razorpay(options);
    rzp.open();
  }

  const handlePay = async function () {
    const resp = await fetch("http://localhost:8000/order/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: total,
      }),
    });
    const data = await resp.json();
    handleRazorPay(data.order);
  };
  // console.log(data);
  return (
    <>
      <div class="cart">
        <h2>Shopping Cart</h2>
        <ul>
          <li>{cardComponentArray}</li>
        </ul>
        <div class="total">
          <p>Total: ${total}</p>
          <button onClick={handlePay}>Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
