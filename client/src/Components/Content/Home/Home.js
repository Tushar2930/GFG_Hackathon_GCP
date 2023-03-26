import React from "react";
import Carousel from "./Carousel/Carousel";
import DealsWeek from "./DealsOfTheWeek/DealsWeek";
import Poster from "./Poster/Poster";
import BuyingCardList from "./BuyingSection/BuyingCardList";
import RentingCardList from "./RentingSection/RentingCardList";
import { AuthContext } from "../context/AuthorizationContext";
import Testimonial from "./Testimonial/Testimonial";

function Home() {
  return (
    <>
      <Carousel />
      <BuyingCardList />
      <DealsWeek />
      <RentingCardList />
      <Poster />
      <Testimonial />
      <a href="/sell">SELL</a>
      <br />
      <a href="/get-rent-service">RENT</a>
      <br />
    </>
  );
}

export default Home;
