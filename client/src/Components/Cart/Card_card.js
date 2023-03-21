import React from "react";
import "./cart.css"

function Card({ img_url, name, description,quantity, price ,id}) {

    return <>
        <div class="item">
        <img src={img_url} alt={name} />
        <p>{name}</p>
        <p>${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    </>

}

export default Card;