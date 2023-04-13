import React from "react";
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
  console.log(maxQuantity, minQuantity, name, price, id);
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
      className="card-root w-25 h-40 sm:w-60 sm:h-80 flex flex-col items-around justify-around mt-10   focus:border-2  sm:hover:border-2"
      style={{ borderRadius: "10px", backgroundColor: "#ffffff" }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}>
      <div
        className={`imgWrapper w-full h-full ${hovered ? "zoom" : "nozoom"}`}
        style={{
          backgroundImage: `url(${img_url})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
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
        className="card-info w-full  h-1/3  flex flex-col items-center justify-center  "
        style={{
          marginTop: "-25px",
          marginRight: "-20px",
          backgroundColor: "White ",
          borderRadius: "10px",
          zIndex: 11,
          padding: "10px",
        }}>
        <div className="card-name text-xs sm:text-sm ">{name}</div>
        <div className="card-price text-sm">₹ {price}</div>
      </div>
    </div>
  );
}

export default Card;
