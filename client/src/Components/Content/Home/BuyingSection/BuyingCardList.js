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
  var cardComponentArray = data.map((card,k) => {
    if(k<4){
    return (
      <div className="col-3 px-4 pb-4">
        <Card
          img_url={card?.ip}
          maxQuantity={card?.maxQuantity}
          minQuantity={card?.minQuantity}
          name={card?.name}
          description={card?.description}
          price={card?.price}
          id={card?._id}
        />
      </div>
    );
    }
  });
  return (
    <div className="fluid-container main-fluid-container">
      <div className="row div-container">
        <div className="text-center head-text-div">
          <b>Buy Items</b>
        </div>

        {cardComponentArray}

        <div className="text-center bottommost-div">
          <button type="button" class="btn btn-dark more-btn rounded-5">
            <Link className="view-more-link" to="/shop">
              VIEW MORE
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyingCardList;
