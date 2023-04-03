import React, { useEffect, useState } from "react";
import Card from "./RentingCard";
import "./RentingCardList.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//

function RentingCardList() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const data=await fetch("http://localhost:8000/rent/getAllFarmers",{
  //       method:"GET",
  //       headers:{
  //         "Content-Type":"application/json"
  //       }
  //     });
  //     const res=await data.json();
  //     setData(res.data);
  //     setData(res.data);
  //   }
  //   fetchData();
  // }, []);

  // var cardComponentArray = data.map(
  //   (card,k) => {
  //     if(k<4){
  //     return  (
  //       <div class="col-6 px-4 mb-4">
  //         <Card name={card.name} content={card.service} address={card.Address} area={card.area} date={card.date} duration={card.duration} price={card.price}/>
  //       </div>
  //     )
  //     }
  //   }
  // )

  return (
    <div class=" main_fluid-container">
      <div className="row div-container flex flex-coloum">
        <div class="head-text-div flex">
          <b>Rental Services</b>
        </div>
        <p className="w-1/2 text-white flex">
          n publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available
        </p>
        {/* {cardComponentArray} */}
        <button type="button" class="w-36 h-10 flex">
          <Link className="view-more-link" to="/rent">
            Know More
            <ArrowForwardIosIcon />
          </Link>
        </button>
      </div>
      {/* <section class="text-gray-600 body-font">
        <div
          class="container px-5 py-24 mx-auto "
          style={{ width: "100vw", background: "none", boxShadow: "none" }}>
          <div class="flex flex-wrap -m-4 ">
            <div class="lg:w-1/4 md:w-3/4 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1">$16.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-3/4 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1">$16.00</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default RentingCardList;
