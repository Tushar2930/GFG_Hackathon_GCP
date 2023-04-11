import React, { useEffect, useState } from "react";
import Card from "./BuyingCard";
import "./BuyingCardList.css";
import { Slide } from "react-awesome-reveal";
import MiddleOrange from "../middleOrange/middleOrange";

import { Link } from "react-router-dom";

function BuyingCardList() {
  const [data, setData] = React.useState([]);
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/product/get-products")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setShowData(data.data);
      });
  }, []);

  const filter_products = (e) => {
    var filter = e.target.value;
    var temp = [];
    data.map((item) => {
      if (item.category === filter) {
        temp.push(item);
      }
    });
    setShowData(temp);
  };
  var cardComponentArray = showData?.map((card, k) => {
    if (k < 6) {
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
            onClick={(e) => {
              filter_products(e);
            }}
            value={"Vegetables"}
            type="button"
            class="p-0 w-10 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm  text-center mr-2 mb-2 dark:focus:ring-yellow-900">
            Vegetables
          </button>
          <button
            onClick={(e) => {
              filter_products(e);
            }}
            value={"Fruits"}
            type="button"
            class="p-0 w-10 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm  text-center mr-2 mb-2 dark:focus:ring-yellow-900">
            Fruits
          </button>
          <button
            onClick={(e) => {
              filter_products(e);
            }}
            value={"Cereals"}
            type="button"
            class="p-0 w-10 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm  text-center mr-2 mb-2 dark:focus:ring-yellow-900">
            Cereals
          </button>
          <button
            value={"Dry Fruits"}
            onClick={(e) => {
              filter_products(e);
            }}
            type="button"
            class="p-0 w-10 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm  text-center mr-2 mb-2 dark:focus:ring-yellow-900">
            Dry Fruits
          </button>
        </div>
        <Slide bottom triggerOnce>
          <div className="card-cont flex flex-wrap justify-center  w-screen h-auto gap-20">
            {cardComponentArray}
          </div>
        </Slide>
        <Link to="/shop">
          <button
            type="button"
            class="w-40  bg-yellow-500  hover:bg-emerald-800 hover:text-white font-medium rounded-lg text-sm text-center mt-10 mr-2 mb-2 h-10">
            View more
          </button>
        </Link>
      </div>
    </>
  );
}

export default BuyingCardList;
