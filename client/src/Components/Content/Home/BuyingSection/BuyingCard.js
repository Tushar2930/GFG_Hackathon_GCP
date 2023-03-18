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
                <div class="card-body">
                    <div class="row px-3 pb-3">
                        <div class="col-8 card-title-div"><h5 class="card-title float-start"><b>{name}</b></h5></div>
                        <div class="col-4 card-title-div right">
                            <h6 class="card-title float-end">
                                <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i> {price}
                            </h6>
                        </div>
                    </div>

                    <div class="row px-3 card-content-div">
                        {description}
                    </div>

                    <div class="row px-3">
                        <div class="footer-btn col btn btn-outline-dark left-btn">
                            <div class="input-group">
                                <span class="input-group-btn">
                                    <button type="button" class="btn btn-danger btn-number"  data-type="minus" data-field="quant[2]" onClick={() => {setinputValue(inputValue-1)}}>
                                        <i class="fa-solid fa-minus"></i>
                                    </button>
                                </span>
                                <input type="text" name="quant[2]" class="form-control input-number input-quantity" min="1" max="100" value={inputValue}/>
                                <span class="input-group-btn">
                                    <button type="button" class="btn btn-success btn-number" data-type="plus" data-field="quant[2]" onClick={() => {setinputValue(inputValue+1)}}>
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div class="footer-btn col btn btn-outline-success right-btn">Add to Cart</div>
                    </div>       
                </div>
            </div>
        </div>
    )
}

export default Card;