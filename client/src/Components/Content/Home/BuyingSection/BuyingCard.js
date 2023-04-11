import React from "react";
import "./BuyingCard.css";
import "./BuyingCardList.css";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthorizationContext";

function Card({ img_url, maxQuantity, minQuantity, name, price, id }) {
  const [quantity, setinputValue] = useState(minQuantity);
  const useAuth = useContext(AuthContext);
  const [hovered, setHovered] = useState(true);
  const handleHover = () => {
    setHovered(!hovered);
    // console.log(hovered);
  };

  const handleCart = async function () {
    if (!useAuth.currentUser) {
      alert("Please Login First");
      window.location.href = "/signin";
    }
    const resp = await fetch("http://localhost:8000/cart/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        price,
        email: useAuth.currentUser.email,
        minQuantity,
        maxQuantity,
        quantity,
      }),
    });
    const data = await resp.json();
    console.log(data.message);
    if (data.message === "success") {
      alert("Product Added to cart Succesfully");
    } else if (data.message === "already added") {
      alert("Product Already Added to cart");
      // toast("Product Already Added to cart");
    } else {
      alert("Error");
    }
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="card-root w-80 h-60 flex flex-col items-around justify-around mt-10"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}>
      <div
        className={`imgWrapper w-full h-full ${hovered ? "zoom" : "nozoom"}`}
        style={{ backgroundImage: `url(${img_url})` }}>
        <div className={hovered ? "hover_icon" : "card_icon"}>
          <ShoppingCartOutlinedIcon
            style={{
              width: "2rem",
              height: "2rem",
              padding: "0.5rem",
              borderRadius: "2rem",
              backgroundColor: "#dcdcdcba",
              margin: "-0.5rem",
            }}
            onClick={handleCart}
          />
          <SearchIcon
            style={{
              width: "2rem",
              height: "2rem",
              padding: "0.5rem",
              borderRadius: "2rem",
              backgroundColor: "#dcdcdcba",
              margin: "-0.5rem",
            }}
            onClick={() => handleClick()}
          />
        </div>
      </div>
      <div
        className="card-info w-3/5  h-1/3  items-center  self-end"
        style={{
          marginTop: "-25px",
          marginRight: "-20px",
          backgroundColor: "#F8B63C ",
          zIndex: 11,
          padding: "10px",
        }}>
        <div className="card-name text-sm">{name}</div>
        <div className="card-price">₹ {price}</div>
      </div>
    </div>
  );
}

export default Card;
