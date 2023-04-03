import React from "react";
import HorizontalCard from "./Cart_card";
import Checkout from "./checkout";
import farm_img from "./images/farming.jpg"

function Cart() {
    return (
        <>
        <div class="m-0" style={{width:"100%", height:"350px", overflow:"hidden"}}>
            <img src={farm_img} alt="poster image" style={{width:"100%", height:"auto", display:"block"}}/>
        </div>

        <div className="p-5" style={{ width: "100%" }}>

            <h1 className="mb-5 mt-3" style={{ textAlign: "center" }}>Welcome to your cart</h1>      
            <div style={{ display: "flex" }}>
                <div style={{ flex: 3 }}>
                    <div className="mx-4"><HorizontalCard /></div>
                    <div className="mx-4"><HorizontalCard /></div>
                    <div className="mx-4"><HorizontalCard /></div>
                </div>
                <div style={{ flex: 1}}>
                    <div className="ms-0 me-5 pt-3" style={{ border: "1px solid #ccc"}}>
                        <Checkout />
                    </div>
                </div>
            </div>
            <div className="mt-4 " style={{ display: "flex", justifyContent: "center"}}>
                <button style={{ width: "12%", backgroundColor:"#50C878", fontSize:"1.2rem", borderRadius:"20px" }}>Continue Shopping</button>
            </div>
        </div>
        </>
    );
}

export default Cart;