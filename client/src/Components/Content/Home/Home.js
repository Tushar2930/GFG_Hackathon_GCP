import React ,{useEffect,useContext}from "react";
import Carousel from "./Carousel/Carousel";
import Featured from "./Features/Featured";
import DealsWeek from "./DealsOfTheWeek/DealsWeek";
import Poster from "./Poster/Poster";
import BuyingCardList from "./BuyingSection/BuyingCardList";
import RentingCardList from "./RentingSection/RentingCardList";
import { AuthContext } from "../context/AuthorizationContext";


function Home() {
  const useAuth = useContext(AuthContext);
  // console.log(useAuth.currentUser);
 
  
  return (
    <> 
      <Carousel />
      <BuyingCardList/>
      <DealsWeek />
      <RentingCardList />
      <Poster />
      <a href="/sell">SELL</a><br/>
      <a href="/get-rent-service">RENT</a>
    </>
  );
}

export default Home;
 