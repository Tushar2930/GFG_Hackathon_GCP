import React,{useEffect,useState} from "react";
import Products from "./RentingCardList";
import FilterComponent from "./FilterComponent";
import SearchBar from "../Shop/ShopPages/ProductSection/search";


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

    const [searchResults, setSearchResults] = useState("");

    console.log(searchResults);
    return (
        <div class="fluid-container">  
        <div className="flex justify-around content-center py-8 px-4">
        <label className="mx-0 my-0" style={{width:"31%"}}>
              <span className={{ fontSize: "18px" }}>Sort by:</span>
              <select
                name="price-select"
                className="ms-4"
                style={{ width: "180px", height: "26px",border:"1px solid black" }}>
                <option >High to Low</option>
                <option >Low to High</option>
                <option selected="selected">Recommended </option>
              </select>
            </label>
            <div className="w-full">
        <SearchBar onSearch={setSearchResults} /></div>
        </div>
             <div className="row" style={{padding:"18px"}}>
                {/* <div class="col-2"> */}
                {/* <div class="container-fluid m-2"> */}
            {/* <div className="text-center"><h1><b>Filters</b></h1></div> */}
            {/* <FilterComponent filterCategory="Location" categoryElementArray={categoryElementArray1}/>
            <FilterComponent filterCategory="Type of Service" categoryElementArray={categoryElementArray2}/> */}
        {/* </div> */}
                {/* </div>  */}
                <div className="flex justify-center">
                    <Products search={searchResults}/>
                    </div>
            </div>
        </div>
    )
}

export default ServicesRequiredListing;