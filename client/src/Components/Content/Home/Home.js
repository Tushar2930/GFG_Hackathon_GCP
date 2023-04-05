import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel/Carousel";
import DealsWeek from "./DealsOfTheWeek/DealsWeek";
import Poster from "./Poster/Poster";
import BuyingCardList from "./BuyingSection/BuyingCardList";
import RentingCardList from "./RentingSection/RentingCardList";
import Testimonial from "./Testimonial/Testimonial";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
import MainPage from "./MainPage/MainPage";
import LandingPage from "./landingPage/landingpage";
import MiddleOrange from "./middleOrange/middleOrange";

function Home() {
  return (
    <>
      {/* <Carousel /> */}
      <MainPage />
      <WhatWeOffer />
      <MiddleOrange />
      <BuyingCardList />
      <DealsWeek />
      <RentingCardList />
      <Testimonial />
      <Link to="/sell">SELL</Link> <Link to="/get-rent-service">RENT</Link>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Home;
