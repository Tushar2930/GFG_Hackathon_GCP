import React, { useContext } from "react";
import "./RentingCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthorizationContext.js"
import tractor_img from "./images/tractor.jpg";
import harvestor_img from "./images/harvestor.jpg"


function Card({ service_asked, id, name, area, price, address, date, duration, img_url, email }) {
  const useAuth = useContext(AuthContext);
  const handleClick = async () => {
    const response = await fetch('http://localhost:8000/rent/add-provider', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        email,
        cu_email: useAuth.currentUser.email
      })
    })
    const res = await response.json()
    if (res.message == "Data added successfully") {
      alert("Service added successfully");
    }
  }

      return (
          <div class="card my-2">
              <div class="row no-gutters">
                  <div class="col-md-5">
                      <img src="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2017/miscellaneous/p1-anchor-new-23072017080314.jpg&w=900&height=601" class="card-img" alt="..."/>
                  </div>
                  <div class="col-md-7">
                      <div class="card-body ">
                          <h5 class="card-title">{name}</h5>
                          {/* <p class="card-text">{content}</p> */}
                          <p class="card-text">{date}</p>
                          <p class="card-text">{duration}</p>
                          <p class="card-text">{area}</p>
                          <p class="card-text">{address}</p>
                          <p class="card-hr" style={{border:"1px solid black"}}></p>
                          <div className="row">
                              <div className="col-6">price : {price}</div>
                              <div className="col-6"><button type="button" class="btn btn-info float-right">Rent Now</button></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )
  }
  
  export default Card;