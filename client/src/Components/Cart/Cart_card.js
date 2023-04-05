import React from "react";
import LoadingImg from "./images/loading.png"

const HorizontalCard = ({ img_url,
    name,
    maxQuantity,
    minQuantity,
    quantity,
    price,
    id,
    updateFeilds,}) => {
 
    return (


        <div className="mx-4"><div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "70%",
                padding: "0.4%",
                border: "1px solid #ccc",
                borderRadius: "4px",
                margin:"auto",
            }}>

            {/* Image */}
            <div style={{ width: "30%", padding:"1.8%" }}>
                <img
                    style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                    src={img_url?img_url:LoadingImg}
                    alt={name}
                />
            </div>

            {/* Content */}
            <div style={{ width: "30%", paddingLeft:"2%" }}>
                <h3>{name}</h3>
            </div>

            {/* Faaltu space */}
            <div style={{ width: "10%", paddingLeft:"2%" }}></div>

            {/* Plus-Minus Button */}
            <div style={{ width: "7%", textAlign: "center" }}>
                <span>{quantity}</span>
            </div>
            <div style={{ width: "8%"}}>
                <button className="m-0" style={{padding:"5px 8px", color:"black", backgroundColor:"white", width:"fit-content", border:"0.4px solid #B3B3B3"}} onClick={() => {
            quantity < maxQuantity && updateFeilds(id, quantity + 1);
          }}>∧</button>
                <button className="m-0" style={{padding:"5px 8px", color:"black", backgroundColor:"white", width:"fit-content", border:"0.4px solid #B3B3B3"}} onClick={() => {
            quantity > minQuantity && updateFeilds(id, quantity - 1);
          }}>∨</button>
            </div>

            {/* Price */}
            <div style={{ width: "15%", textAlign: "center" }}>
                <h3>${price}</h3>
            </div>
        </div>
        </div>
    );
};


export default HorizontalCard;