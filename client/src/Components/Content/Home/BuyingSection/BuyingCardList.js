import React, { useEffect } from "react";
import Card from "./BuyingCard";
import "./BuyingCardList.css";
import { Slide } from "react-awesome-reveal";
import MiddleOrange from "../middleOrange/middleOrange";

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
    if (k < 8) {
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
          <button
            type="button"
            class="p-0 w-10 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm  text-center mr-2 mb-2 dark:focus:ring-yellow-900">
            Vegetable
          </button>
          <button
            type="button"
            class="p-0 w-10 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm  text-center mr-2 mb-2 dark:focus:ring-yellow-900">
            Fruits
          </button>
          <button
            type="button"
            class="p-0 w-10 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm  text-center mr-2 mb-2 dark:focus:ring-yellow-900">
            Cereals
          </button>
          <button
            type="button"
            class="p-0 w-10 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm  text-center mr-2 mb-2 dark:focus:ring-yellow-900">
            Dry Fruits
          </button>
        </div>
        <Slide bottom triggerOnce>
          <div className="card-cont flex flex-wrap justify-center">
            {cardComponentArray}
          </div>
        </Slide>
        <Link to="/shop">
          <button
            type="button"
            class="w-40  bg-yellow-500  hover:bg-emerald-800 hover:text-white font-medium rounded-lg text-sm text-center mt-10 mr-2 mb-2">
            View more
          </button>
        </Link>
      </div>
    </>
  );
}

export default BuyingCardList;
