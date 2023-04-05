import React, { useEffect, useState } from "react";
import "./RentingCardList.css";
import { Link } from "react-router-dom";
import { Slide ,Fade, Zoom} from "react-awesome-reveal";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//

function RentingCardList() {

  return (
    <div class=" main_fluid-container">
      <div className="row div-container flex flex-col">
        <div class="font flex">
        <Slide className="px-4 py-4">
          <b className="text-5xl  h-1/4 font-temp pt-16 pb-0 flex" style={{color:"#ffb300"}}><p className="text-black px-4">Rental </p> Services</b></Slide>
        </div>
        
        <Slide direction="right"><Fade direction="up"><p className="w-1/2 text-black flex my-12 text-lg " style={{fontFamily:"cursive"}}>
        Find quality farm equipment for your operation with our rental service.<br/>
         From tractors to tillers, we offer a variety of options to fit your needs. 
         Convenient, reliable, and hassle-free rentals for a stress-free farming experience.
        </p></Fade></Slide>
        <Zoom>
        <button type="button" class="flex justify-center content-center h-12 w-48 rounded-3xl" style={{backgroundColor:"#4d8087"}}>
          <Link className="view-more-link" to="/rent">
            Know More
            <ArrowForwardIosIcon />
          </Link>
        </button></Zoom>
      </div>
    </div>
  );
}

export default RentingCardList;
