import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Content/context/AuthorizationContext";
import "./menu.css";

export default function Menu() {
  const useAuth = React.useContext(AuthContext);
  console.log(useAuth?.currentUserDetails);
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
            <a href="/sell">Sell Crops</a>
          </li>
          <li>
            {useAuth?.currentUserDetails.data?.profiledata?.find((ele) => {
              return ele === "farmer";
            }) && <a href="/get-rent-service">Get Service </a>}
          </li>
          <li>
            {useAuth?.currentUserDetails.data?.profiledata?.find((ele) => {
              return ele === "rentel-service";
            }) && <a href="/rent">Rent a Service </a>}
          </li>

          <li>
            <a href="/login">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
