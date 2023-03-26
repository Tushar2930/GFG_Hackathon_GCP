import React from "react";
import Carousel from "./Carousel/Carousel";
import DealsWeek from "./DealsOfTheWeek/DealsWeek";
import Poster from "./Poster/Poster";
import BuyingCardList from "./BuyingSection/BuyingCardList";
import RentingCardList from "./RentingSection/RentingCardList";
import Menu from "../../Navbar/menu/menu";
function Home() {
  return (
    <>
      <Menu></Menu>
      <Carousel />
      <BuyingCardList />
      <DealsWeek />
      <RentingCardList />
      <Poster />
      <a href="/sell">SELL</a>
      <br />
      <a href="/get-rent-service">RENT</a>
      <br />
    </>
  );
}

export default Home;
