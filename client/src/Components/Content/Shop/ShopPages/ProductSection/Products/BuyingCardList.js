import React,{useEffect} from "react";
import Card from "./BuyingCard";
import "./BuyingCardList.css"
import { Link } from "react-router-dom";

function BuyingCardList() {

  const [data,setData]=React.useState([]);
  useEffect(()=>{
    fetch("http://localhost:8000/product/get-products")
    .then((response) => response.json())
    .then((data) => setData(data.data));
  },[]);

  var cardComponentArray = data.map(
    (card) => {
      return  (
        <div class="col-3 px-4 pb-4">
          <Card img_url={card?.ip} name={card?.name} description={card?.description} price={card?.price} />
        </div>
      )
    }
  )

  return (
    <div class="fluid-container main-fluid-container">  
      <div className="row div-container">

        <div class="text-center head-text-div"> 
          <b>Buy Items</b>
        </div>

        {cardComponentArray}

        <div class="text-center bottommost-div">
          <button type="button" class="btn btn-dark more-btn rounded-5">
            <Link className="view-more-link" to="">VIEW MORE</Link>
          </button>
        </div>

      </div>
    </div>
  );
}

export default BuyingCardList;