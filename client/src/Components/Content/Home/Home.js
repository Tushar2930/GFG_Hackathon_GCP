import React from "react";
import Carousel from "./Carousel/Carousel";
import Featured from "./Features/Featured";
import DealsWeek from "./DealsOfTheWeek/DealsWeek";
import Poster from "./Poster/Poster";
import BuyingCardList from "./BuyingSection/BuyingCardList";
import RentingCardList from "./RentingSection/RentingCardList";


function Home() {
  return (
    <>
      <Carousel />
      <BuyingCardList />
      <DealsWeek />
      <RentingCardList />
      <Poster />
      <a href="/sell">SELL</a>
    </>
  );
}

export default Home;
