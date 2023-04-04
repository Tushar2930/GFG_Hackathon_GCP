import React,{useEffect,useContext} from "react";
import Card from "./Cart_card";
import "./checkout.css"
import farm_img from "./images/farming.jpg"
import "./my_cart.css"
import { updateUserCartItem } from "../api/updateCartProduct";
import { AuthContext } from "../Content/context/AuthorizationContext";



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
          // console.log(resp1.image);
  
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
        <div class="m-0" style={{width:"100%", height:"350px", overflow:"hidden"}}>
            <img src={farm_img} alt="poster image" style={{width:"100%", height:"auto", display:"block"}}/>
        </div>

        <div className="p-5" style={{ width: "100%", backgroundColor:"white" }}>

            <div className="mb-5 mt-3" style={{ textAlign: "center", fontSize:"2.4rem" }}>Welcome to your cart</div>      
            <div style={{ display: "flex" }}>
                <div style={{ flex: 3 }}>
                   {cardComponentArray}
                </div>
                <div style={{ flex: 1}}>
                    <div className="ms-0 me-5 pt-3" style={{ border: "1px solid #ccc"}}>
                    <div style={{ width: '100%' }}>

<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
  <span className='ms-2 px-3 py-2' style={{}}>{} items</span>
  <span className='me-2 px-3 py-2' style={{}}>$ {total}</span>
</div>
<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
  <span className='ms-2 px-3 py-2' style={{}}>Shipping</span>
  <span className='me-2 px-3 py-2' style={{}}>$ 2</span>
</div>
<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom:"5%" }}>
  <span className='ms-2 px-3 py-2' style={{}}>tax</span>
  <span className='me-2 px-3 py-2' style={{}}>$ 1</span>
</div>

<div className='checkout-total-line'></div>
<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
  <span className='ms-2 p-3'>
    <span style={{fontSize:"1.8rem"}}><b>Total</b></span>
    <span style={{fontSize:"1.4rem"}}> (tax inc.)</span>
  </span>
  <span className='me-2 p-3' style={{fontSize:"1.2rem", display:"flex", alignItems:"center"}}>{total+3}</span>
</div>
<div className='checkout-total-line'></div>
<div className='mt-4' style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
<div class="wrapper mb-3" onClick={handlePay}>
    <a className='wrapper-a py-2 px-3'><span className='wrapper-span'><b>Checkout</b></span></a>
</div>
</div>

</div>
                    </div>
                </div>
            </div>
            <div className="mt-4 " style={{ display: "flex", justifyContent: "center"}}>
                <button className="continue-shopping-btn" style={{ width: "12%", backgroundColor:"#50C878", fontSize:"1.2rem", borderRadius:"20px" }}>Continue Shopping</button>
            </div>
        </div>
        </>
    );
}
 
export default Cart;