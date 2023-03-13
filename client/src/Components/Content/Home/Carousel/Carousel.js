import React from "react";
import "./carousel.css";

function Carousel() {
  return (
    <div className="carousel">
      <form className="carouselForm">
        <input
          className="carouselInput"
          type="radio"
          name="fancy"
          autoFocus
          value="clubs"
          id="_1"
        />
        <input
          className="carouselInput"
          type="radio"
          name="fancy"
          value="hearts"
          id="_2"
        />
        <input
          className="carouselInput"
          type="radio"
          name="fancy"
          value="spades"
          id="_3"
        />
        <input
          className="carouselInput"
          type="radio"
          name="fancy"
          value="diamonds"
          id="_4"
        />
        <label htmlFor="_1" className="carouselLabel"></label>
        <label htmlFor="_2" className="carouselLabel"></label>
        <label htmlFor="_3" className="carouselLabel"></label>
        <label htmlFor="_4" className="carouselLabel"></label>

        <div className="keys">Use left and right keys to navigate</div>
      </form>
    </div>
  );
}

export default Carousel;
