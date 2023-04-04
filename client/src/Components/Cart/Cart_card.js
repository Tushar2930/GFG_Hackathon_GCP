import React from "react";

const HorizontalCard = () => {

    return (
        <div
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
                    src="https://pbs.twimg.com/profile_images/1642177647840202753/yh9PCwZK_400x400.jpg"
                    alt="product"
                />
            </div>

            {/* Content */}
            <div style={{ width: "30%", paddingLeft:"2%" }}>
                <h3>Product Title</h3>
                <p>Koi bhenchod yahan gaali nahi dega</p>
            </div>

            {/* Faaltu space */}
            <div style={{ width: "10%", paddingLeft:"2%" }}></div>

            {/* Plus-Minus Button */}
            <div style={{ width: "7%", textAlign: "center" }}>
                <span>1</span>
            </div>
            <div style={{ width: "8%"}}>
                <button className="m-0" style={{padding:"5px 8px", color:"black", backgroundColor:"white", width:"fit-content", border:"0.4px solid #B3B3B3"}}>∧</button>
                <button className="m-0" style={{padding:"5px 8px", color:"black", backgroundColor:"white", width:"fit-content", border:"0.4px solid #B3B3B3"}}>∨</button>
            </div>

            {/* Price */}
            <div style={{ width: "15%", textAlign: "center" }}>
                <h3>$19.99</h3>
            </div>
        </div>
    );
};


export default HorizontalCard;