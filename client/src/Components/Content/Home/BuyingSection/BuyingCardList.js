import React, { useEffect } from "react";
import Card from "./BuyingCard";
import "./BuyingCardList.css";
import { Link } from "react-router-dom";

function BuyingCardList() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/product/get-products")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        // console.log(data);
      });
  }, []);
  var cardComponentArray = data.map((card, k) => {
    if (k < 4) {
      return (
        <Card
          img_url={card?.ip}
          maxQuantity={card?.maxQuantity}
          minQuantity={card?.minQuantity}
          name={card?.name}
          description={card?.description}
          price={card?.price}
          id={card?._id}
        />
      );
    }
  });
  return (
    <>
      <div className="froot">
        <div className="placeImage" />
        <p class="title_font" style={{ marginTop: "1rem" }}>
          Fresh From our farm
        </p>
        <div>
          <h3 class="title_font title_text">Featured Products</h3>
        </div>
        <div className="filter_options">
          <button>Vegetables</button>
          <button>Fruits</button>
          <button>Cereals</button>
          <button>Dry Fruits</button>
        </div>
        <div className="card-cont">{cardComponentArray}</div>
        <Link to="/shop">
          <button class="btn btn-2 btn-2a">View More</button>
        </Link>
      </div>
    </>
  );
}

export default BuyingCardList;
