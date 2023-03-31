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
    // <div className="fluid-container main-fluid-container">
    //   <div className="row div-container">
    //     <div className="text-center head-text-div">
    //       <b>Buy Items</b>
    //     </div>

    //     {cardComponentArray}

    //     <div className="text-center bottommost-div">
    //       <button type="button" class="btn btn-dark more-btn rounded-5">
    //         <Link className="view-more-link" to="/shop">
    //           VIEW MORE
    //         </Link>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <>
      <div style={{ height: "88vh", width: "98vw" }}>
        <div style={{ height: "89vh", width: "98vw", textAlign: "center" }}>
          <div>
            <p class="title_font" style={{marginTop: "1rem"}}>Fresh From our farm</p>
          </div>
          <div>
            <h3 class="title_font title_text">Featured Products</h3>
          </div>
          <div className="card-cont">
            {cardComponentArray}
          </div>
      <a href="/shop"><button class="btn btn-2 btn-2a">View More</button></a>
        </div>
      </div>
    </>
  );
}

export default BuyingCardList;
