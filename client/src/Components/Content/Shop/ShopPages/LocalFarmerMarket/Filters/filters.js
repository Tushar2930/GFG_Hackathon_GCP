import React from "react";
import FilterComponent from "./FilterComponent/FilterComponent";

function Filters(){

    return (
        <div class="container-fluid m-2">
            <div className="text-center"><h1><b>Filters</b></h1></div>
            <FilterComponent />
        </div>
    )
}

export default Filters;