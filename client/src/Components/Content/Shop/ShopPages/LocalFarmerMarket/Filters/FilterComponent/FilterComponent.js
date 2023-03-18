import React from "react";
import "./FilterComponent.css"

function FilterComponent(){

    return (
        <div class="row">
            {/* Head of Filter component */}
            <div class="row">
                <h5 class="text-center">Type</h5>
            </div>

            {/* Main body of filter component */}
            <div class="row">
                <div class="col-8">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label mt-1 ms-2" for="flexCheckDefault">
                            No of buyers
                        </label>
                    </div>
                </div>
                <div class="col-4">
                    <span className="float-end">(20)</span>
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label mt-1 ms-2" for="flexCheckDefault">
                            Rating
                        </label>
                    </div>
                </div>
                <div class="col-4">
                    <span className="float-end">(20)</span>
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label mt-1 ms-2" for="flexCheckDefault">
                            Price
                        </label>
                    </div>
                </div>
                <div class="col-4">
                    <span className="float-end">(20)</span>
                </div>
            </div>

            {/* Bottom part of Filter component */}
            <div class="row">
                <div class="col-6">
                    <h6>Show More</h6>
                </div>
                <div class="col-6">
                    <button type="button" class="btn btn-primary float-end">Apply</button>
                </div>
            </div>

            {/* Horizontal line */}
            <div class="filter-hr-div">
                <div class="filter-hr"></div>
            </div>
            

        </div>
    )
}

export default FilterComponent;