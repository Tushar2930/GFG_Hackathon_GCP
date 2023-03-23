import React, { useEffect } from "react";
import Card from "./RentingCard";
import "./RentingCardList.css"
import { Link } from "react-router-dom";

function BuyingCardList() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
    const data=await fetch("http://localhost:8000/rent/getAllFarmers",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    });
    const res=await data.json();
    setData(res.data);
    console.log(res.data);
  }
  fetchData();
    }, []);

  var cardComponentArray = data.map(
    (card) => {
    
      return  (
        <div class="col-4 px-4 pb-4">
          <Card service_asked={card.service} id={card._id} name={card.name} area={card.area} price={card.price} loc={card.Address
} date={card.date} dur_ar={card.duration} email={card.email}/>
        </div>
      )
    }
  )

  return (
    <div class="fluid-container main-fluid-container">  
      <div className="row div-container">

        <div class="text-center head-text-div"> 
          <b>Rental Services Required for Farmers</b>
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