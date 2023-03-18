import React from "react";
import "./BuyingCard.css";
import { useState } from "react";

function Card({ img_url, name, description, price }) {
    // This is specifying the quantity for the product
    const [inputValue, setinputValue] = useState(0)

    return (
        <div class="product-card m-3">
            <div class="card card-div">
                <img src={img_url} class="card-img-top" alt="Product Image" />
                
                {/* Card Body */}
                <div class="card-body">
                    {/* Card Head Section */}
                    <div class="row px-3">
                        <div class="col-8 card-title-div">
                            <p class="card-title float-start">{name}</p>
                        </div>
                        <div class="col-4 card-title-div right">
                            <p class="card-title float-end">
                                <i class="fa-solid fa-indian-rupee-sign"></i> {price}
                            </p>
                        </div>
                    </div>

                    {/* Card Middle Section */}
                    <div class="row px-3 card-content-div">
                        {description}
                    </div>

                    {/* Card Footer Section */}
                    <div class="row px-3">
                        
                        <div class="footer-btn col btn btn-success right-btn mx-0 pb-2">Want to Buy</div>
                    </div>  

                </div>
            </div>
        </div>
    )
}

export default Card;