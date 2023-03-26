import React from "react";
import Products from "./Products/products";


function ProductSection(){
    var verticalLineStyle = {
        borderLeft: "0.5px solid #E0E1E4"
    }

    const [lth,setLth]=React.useState(false);
    const [htl,setHtl]=React.useState(false);

    return (
        <div class="fluid-container">  
            <div className="row" style={{padding:"18px"}}>
                <div class="col-2">
                <h1>Filter</h1>
                <div class="row">
                    <div class="col-8">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="lth" id="flexCheckDefault" onClick={(e)=>setLth(!lth)}/>
                            <label class="form-check-label mt-1 ms-2" for="flexCheckDefault">Price Low to High</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value='htl' id="flexCheckDefault" onClick={(e)=>setHtl(!htl)}/>
                            <label class="form-check-label mt-1 ms-2" for="flexCheckDefault" >Price High to Low</label>
                        </div>
                    </div>
                </div>
        <div class="row">
            {/* Head of Filter component */}
            <div class="row">
                <h5 class="text-center"></h5>
            </div>

            {/* Main body of filter component */}


            {/* Bottom part of Filter component */}
            <div class="row">
                <div class="col-6">

                </div>
                <div class="col-6">
                   
                </div>
            </div>

            {/* Horizontal line */}
            <div class="filter-hr-div">
                <div class="filter-hr"></div>
            </div>
            

        </div>
                </div>
                <div class="col-10" style={verticalLineStyle}>
                    <Products checklth={lth} checkhtl={htl}/>
                </div>
            </div>
        </div>
    )
}

export default ProductSection;