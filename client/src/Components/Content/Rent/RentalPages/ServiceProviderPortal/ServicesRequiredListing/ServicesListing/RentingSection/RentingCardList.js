import React from "react";
import Card from "./RentingCard";
import "./RentingCardList.css"
import { Link } from "react-router-dom";


var cardData = [
  {service_asked:"service", loc:"Chaand", date:"12/12/12", dur_ar:"infinity", img_url:"https://images-eu.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/indianfarmer_1616522104637_original._CR3,3,1315,1315_._FMjpg_.jpeg",},
  {service_asked:"service", loc:"Chaand", date:"12/12/12", dur_ar:"infinity", img_url:"https://images-eu.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/indianfarmer_1616522104637_original._CR3,3,1315,1315_._FMjpg_.jpeg",},
  {service_asked:"service", loc:"Chaand", date:"12/12/12", dur_ar:"infinity", img_url:"https://images-eu.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/indianfarmer_1616522104637_original._CR3,3,1315,1315_._FMjpg_.jpeg",},
  {service_asked:"service", loc:"Chaand", date:"12/12/12", dur_ar:"infinity", img_url:"https://images-eu.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/indianfarmer_1616522104637_original._CR3,3,1315,1315_._FMjpg_.jpeg",},
  {service_asked:"service", loc:"Chaand", date:"12/12/12", dur_ar:"infinity", img_url:"https://images-eu.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/indianfarmer_1616522104637_original._CR3,3,1315,1315_._FMjpg_.jpeg",},
  {service_asked:"service", loc:"Chaand", date:"12/12/12", dur_ar:"infinity", img_url:"https://images-eu.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/indianfarmer_1616522104637_original._CR3,3,1315,1315_._FMjpg_.jpeg",},
  {service_asked:"service", loc:"Chaand", date:"12/12/12", dur_ar:"infinity", img_url:"https://images-eu.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/indianfarmer_1616522104637_original._CR3,3,1315,1315_._FMjpg_.jpeg",},
  {service_asked:"service", loc:"Chaand", date:"12/12/12", dur_ar:"infinity", img_url:"https://images-eu.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/indianfarmer_1616522104637_original._CR3,3,1315,1315_._FMjpg_.jpeg",},
]


function BuyingCardList() {
  var cardComponentArray = cardData.map(
    (card) => {
      return  (
        <div class="col-4 px-4 pb-4">
          <Card service_asked={card.service_asked} img_url={card.img_url} loc={card.loc} date={card.date} dur_ar={card.dur_ar} />
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