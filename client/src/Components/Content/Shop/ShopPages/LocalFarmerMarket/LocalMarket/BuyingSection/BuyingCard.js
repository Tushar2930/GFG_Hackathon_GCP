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
                        <div class="col py-0 me-3" >
                            <div class="row quantity-div">
                                <div class="col-4 bg-danger">
                                    <button type="button" class="btn btn-number p-0"  data-type="minus" onClick={() => {setinputValue(inputValue-1)}}>
                                        <i class="fa-solid fa-minus"></i>
                                    </button>
                                </div>
                                <div class="col-4 p-0">
                                    <input type="text" className="form-control input-number quantity-input m-0 p-0" value={inputValue} max={20} onChange={(e) => {setinputValue(e.target.value)}}></input>
                                </div>
                                <div class="col-4 bg-success">
                                    <button type="button" class="btn btn-number p-0" data-type="plus" onClick={() => {setinputValue(inputValue+1)}}>
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="footer-btn col btn btn-success right-btn my-0 py-0">Cart</div>
                    </div>  

                </div>
            </div>
        </div>
    )
}

export default Card;