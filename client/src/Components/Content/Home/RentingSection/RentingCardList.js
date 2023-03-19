import React from "react";
import Card from "./RentingCard";
import "./RentingCardList.css";
import { Link } from "react-router-dom";

var cardData = [
  {name:"Tool 1", content:"Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Proin eget tortor risus."},
  {name:"Tool 2", content:"Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Proin eget tortor risus."},
  {name:"Tool 3", content:"Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Proin eget tortor risus."},
  {name:"Tool 4", content:"Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Proin eget tortor risus."},
]

function RentingCardList() {
  var cardComponentArray = cardData.map(
    (card) => {
      return  (
        <div class="col-6 px-4 mb-4">
          <Card name={card.name} content={card.content} />
        </div>
      )
    }
  )

  return (
    <div class="fluid-container main-fluid-container">  
      <div className="row div-container">
        <div class="text-center head-text-div"> 
          <b>Rental Services</b>
        </div>

        {cardComponentArray}

        <div class="text-center bottommost-div">
          <button type="button" class="btn btn-dark more-btn rounded-5">
            <Link className="view-more-link" to="/rent">VIEW MORE</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RentingCardList;