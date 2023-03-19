import React from "react";
import "./RentingCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";


function Card({ service_asked, loc , date, dur_ar, img_url }) {

    return (
        <div class="card my-2">
            <div class="row no-gutters">
                <div class="col-md-5">
                    <img src={img_url} class="card-img" alt="..."/>
                </div>
                <div class="col-md-7">
                    <div class="card-body ">
                        <h5 class="card-title">{service_asked}</h5>
                        <p class="card-text">date :{date}</p>
                        <p class="card-hr"></p>
                        <div className="row">
                            <div className="col-6">{loc}</div>
                            <div className="col-6"><button type="button" class="btn btn-info float-right">
                                <Link to=''>Give Service</Link>
                            </button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;