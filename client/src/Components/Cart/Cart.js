import React, { useContext, useEffect } from "react";
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
  const [image, setImage] = React.useState([]);


  const updateFields = async (id, quantity) => {
    console.log(id, quantity);
    var tempcart = [];
    var tempcartupdate = [];

    data.cart.map((e) => {
      if (e.id == id) {
        quantity && tempcartupdate.push({ ...e, id, quantity });
      } else {
        // tempcart.push(e);
        tempcartupdate.push(e);
      }
      console.log("tempcart", tempcart, "tempcartupdate", tempcartupdate);
      setData({ ...data, cart: tempcartupdate });
    });

    try {
      await updateUserCartItem({
        id: useAuth.currentUserDetails.id,
        cartArray: tempcartupdate,
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  async function feth() {
    if (useAuth.currentUser) {
      try {
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

        const data1 = await fetch("http://localhost:8000/cart/get-image", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart:temp.cart
          })
        });
        const resp1=await data1.json();
        setImage(resp1.image);

      } catch (error) {
        console.log(error.message);
      }
    }
  }

  useEffect(() => {
    feth();
  }, [useAuth.currentUser]);
  useEffect(() => {
    feth();
  }, []);
  function handleRazorPay(orderData) {
    const options = {
      key: "rzp_test_Ao3jBTNOJ6GS1R",
      amount: Number(orderData.amount),
      currency: orderData.currency,
      name: "AGROKART",
      description: "test",
      order_id: orderData.id,
      handler: async function (response) {
        console.log(response);
        const data1 = await fetch("http://localhost:8000/order/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            response: response,
          }),
        });
        const resp = await data1.json();
        if (resp.message === "Sign Valid") {
          const data2 = await fetch("http://localhost:8000/order/place", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: useAuth.currentUser.email,
              data,
            }),
          });
          const resp2 = await data2.json();
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
    const data2 = await resp.json();
    console.log(data2);
    handleRazorPay(data2.order);
  };

  var total = 0;
  var cardComponentArray = data?.cart?.map((card,k) => {
    total = total + parseInt(card?.quantity) * parseInt(card?.price);
    // console.log(card);
    return (
      <Card
        img_url={image[k]}
        name={card?.name}
        maxQuantity={card?.maxQuantity}
        minQuantity={card?.minQuantity}
        quantity={card?.quantity}
        price={card?.price}
        id={card?.id}
        updateFeilds={updateFields}
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
          <button onClick={handlePay}>Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
