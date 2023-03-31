import React from "react";
import Carousel from "./Carousel/Carousel";
import DealsWeek from "./DealsOfTheWeek/DealsWeek";
import Poster from "./Poster/Poster";
import BuyingCardList from "./BuyingSection/BuyingCardList";
import RentingCardList from "./RentingSection/RentingCardList";
import Testimonial from "./Testimonial/Testimonial";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
<<<<<<< HEAD
import MainPage from "./MainPage/MainPage";
=======
import LandingPage from "./landingPage/landingpage";
>>>>>>> 65748530cd7c691bcf9451eb0b436b020c8ddf39

function Home() {
  return (
    <>
<<<<<<< HEAD
      {/* <Carousel /> */}
      <MainPage/>
      <WhatWeOffer/>
=======
      <LandingPage />
      <WhatWeOffer />
>>>>>>> 65748530cd7c691bcf9451eb0b436b020c8ddf39
      <BuyingCardList />
      <DealsWeek />
      <RentingCardList />
      <Poster />
      <Testimonial />
      <a href="/sell">SELL</a> <a href="/get-rent-service">RENT</a>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Home;
