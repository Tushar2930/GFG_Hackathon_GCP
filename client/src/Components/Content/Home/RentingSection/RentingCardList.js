import React, { useEffect ,useState} from "react";
import Card from "./RentingCard";
import "./RentingCardList.css";
import { Link } from "react-router-dom";

// 
 
function RentingCardList() {

  const [data, setData] = useState([]);
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
      setData(res.data);
    }
    fetchData();
  }, []);
 
  var cardComponentArray = data.map(
    (card,k) => {
      if(k<4){
      return  (
        <div class="col-6 px-4 mb-4">
          <Card name={card.name} content={card.service} address={card.Address} area={card.area} date={card.date} duration={card.duration} price={card.price}/>
        </div>
      )
      }
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