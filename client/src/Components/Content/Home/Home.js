import React from "react";
import Carousel from "./Carousel/Carousel";
import DealsWeek from "./DealsOfTheWeek/DealsWeek";
import Poster from "./Poster/Poster";
import BuyingCardList from "./BuyingSection/BuyingCardList";
import RentingCardList from "./RentingSection/RentingCardList";
import Testimonial from "./Testimonial/Testimonial";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";

function Home() {
  return (
    <>
      {/* <Carousel /> */}
      <BuyingCardList />
      <WhatWeOffer/>
      <DealsWeek />
      <RentingCardList />
      <Poster />
      <Testimonial />
      <a href="/sell">SELL</a> <a href="/get-rent-service">RENT</a>
      <br />
      <br/>
      
      <br />
      <br/>
    </>
  );
}

export default Home;
