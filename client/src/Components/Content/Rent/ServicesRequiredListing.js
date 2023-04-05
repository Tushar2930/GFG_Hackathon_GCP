import React,{useEffect} from "react";
import Products from "./RentingCardList";
import FilterComponent from "./FilterComponent";


function ServicesRequiredListing(){
    var verticalLineStyle = {
        borderLeft: "0.5px solid #E0E1E4"
    }
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    var categoryElementArray1 =[
        {type:"<= 10sqkm", total:"100"},
        {type:"(10-100)sqkm", total:"50"},
        {type:">= 100sqkm", total:"20"},
    ]

    var categoryElementArray2 =[
        {type:"Service 1", total:"300"},
        {type:"Service 2", total:"200"},
        {type:"Service 3", total:"50"},
    ]

    return (
        <div class="fluid-container">  
            <div className="row" style={{padding:"18px"}}>
                <div class="col-2">
                <div class="container-fluid m-2">
            <div className="text-center"><h1><b>Filters</b></h1></div>
            <FilterComponent filterCategory="Location" categoryElementArray={categoryElementArray1}/>
            <FilterComponent filterCategory="Type of Service" categoryElementArray={categoryElementArray2}/>
        </div>
                </div>
                    <Products />
            </div>
        </div>
    )
}

export default ServicesRequiredListing;