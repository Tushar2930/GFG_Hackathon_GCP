import React from "react";
import FilterComponent from "./FilterComponent/FilterComponent";

function Filters(){
    var categoryElementArray1 =[
        {type:"<= 100Rs/kg", total:"100"},
        {type:"100Rs - 1000Rs", total:"50"},
        {type:">= 1000Rs", total:"20"},
    ]

    var categoryElementArray2 =[
        {type:"Fruits", total:"300"},
        {type:"Vegetables", total:"200"},
        {type:"Pulses", total:"50"},
    ]

    return (
        <div class="container-fluid m-2">
            <div className="text-center"><h1><b>Filters</b></h1></div>
            <FilterComponent filterCategory="Price" categoryElementArray={categoryElementArray1}/>
            <FilterComponent filterCategory="Category" categoryElementArray={categoryElementArray2}/>
        </div>
    )
}

export default Filters;