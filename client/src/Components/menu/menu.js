import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

export default function menu() {
  return (
    <div className="menu">
      {" "}
      <input
        class="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label for="menu-icon"></label>
      <nav class="nav">
        <ul class="pt-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>

          <li>
            <a href="/sell">Sell Products</a>
          </li>
          <li>
            <a href="/login">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
