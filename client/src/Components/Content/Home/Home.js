import React from "react";
import Carousel from "./Carousel/Carousel";
import DealsWeek from "./DealsOfTheWeek/DealsWeek";
import Poster from "./Poster/Poster";
import BuyingCardList from "./BuyingSection/BuyingCardList";
import RentingCardList from "./RentingSection/RentingCardList";
import DropDown from "../../Navbar//dropDown";

function Home() {
  return (
    <>
      <Carousel />
      <BuyingCardList />
      <DealsWeek />
      <DropDown />

      <RentingCardList />
      <Poster />
      <a href="/sell">SELL</a>
      <br />
      <a href="/get-rent-service">RENT</a>
      <br />
      <a href="/buyer-form">Buyer</a>
    </>
  );
}

export default Home;
