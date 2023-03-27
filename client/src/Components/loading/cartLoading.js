import React from "react";
import "./cartLoading.css";

export default function cartLoading() {
  return (
    <div className="cartLoader">
      <div class="preloader">
        <div class="box">
          <div class="box__inner">
            <div class="box__back-flap"></div>
            <div class="box__right-flap"></div>
            <div class="box__front-flap"></div>
            <div class="box__left-flap"></div>
            <div class="box__front"></div>
          </div>
        </div>
        <div class="box">
          <div class="box__inner">
            <div class="box__back-flap"></div>
            <div class="box__right-flap"></div>
            <div class="box__front-flap"></div>
            <div class="box__left-flap"></div>
            <div class="box__front"></div>
          </div>
        </div>
        <div class="line">
          <div class="line__inner"></div>
        </div>
        <div class="line">
          <div class="line__inner"></div>
        </div>
        <div class="line">
          <div class="line__inner"></div>
        </div>
        <div class="line">
          <div class="line__inner"></div>
        </div>
        <div class="line">
          <div class="line__inner"></div>
        </div>
        <div class="line">
          <div class="line__inner"></div>
        </div>
        <div class="line">
          <div class="line__inner"></div>
        </div>
      </div>
    </div>
  );
}
