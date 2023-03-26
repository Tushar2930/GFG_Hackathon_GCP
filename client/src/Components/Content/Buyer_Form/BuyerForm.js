// MyForm.js
import React, { useState } from "react";
import "./MyForm.css";

function BuyerForm() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <form className="my-form" onSubmit={console.log("submit")}>
      <label>
        Item:
        <input
          type="text"
          value={item}
          onChange={(event) => setItem(event.target.value)}
          required
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          required
        />
      </label>
    </form>
  );
}

export default BuyerForm;
