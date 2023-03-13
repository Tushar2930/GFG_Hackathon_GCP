import React from "react";
import "./carousel.css";

function Carousel() {
  return (
    <div className="carousel">
      <form>
        <input type="radio" name="fancy" autoFocus value="clubs" id="1" />
        <input type="radio" name="fancy" value="hearts" id="2" />
        <input type="radio" name="fancy" value="spades" id="3" />
        <input type="radio" name="fancy" value="diamonds" id="4" />
        <label htmlFor="1"></label>
        <label htmlFor="2"></label>
        <label htmlFor="3"></label>
        <label htmlFor="4"></label>

        <div className="keys">Use left and right keys to navigate</div>
      </form>
    </div>
  );
}

export default Carousel;
