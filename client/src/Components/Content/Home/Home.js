import React from "react";
import Carousel from "./Carousel/Carousel";
import Featured from "./Features/Featured";
import DealsWeek from "./DealsOfTheWeek/DealsWeek";
import Poster from "./Poster/Poster";

function Home() {
  return (
    <>
      <Carousel />
      <Featured />
      <DealsWeek />
      <Poster />
    </>
  );
}

export default Home;
