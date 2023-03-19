import React from "react";
import Carousel from "./RentCarousel/carousel";


function ServicePage(){

    return (
        <div class="container-fluid m-2">

            <div class="row">
                <Carousel />
            </div>

            <div class="row">
                <div class="m-5">
                <form className="">
                    <h2 class="text-center">Farmer Form</h2>
                    <div class="form-group">
                        <label for="required-data">Required Date</label>
                        <input type="text" class="form-control" id="required-data" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="dur-ar">Duration/Area</label>
                        <input type="text" class="form-control" id="dur-ar" placeholder="Password" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>

        </div>
    )
}

export default ServicePage;