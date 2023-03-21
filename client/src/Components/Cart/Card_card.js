import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import "./cart.css";

function Card({ img_url, name, description, quantity, price, id }) {
  return (
    <>
      <div class="item">
        <img src={img_url} alt={name} />
        <p>{name}</p>
        <p>${price}</p>
        <div className="minus-item">
          <RemoveIcon />
        </div>
        <p>Quantity: {quantity}</p>
        <div>
          <AddIcon className="add-item" />
        </div>
        <div>
          <DeleteIcon className="delete" />
        </div>
      </div>
    </>
  );
}

export default Card;
