import React, { useState,useEffect } from "react";
import SearchBar from "./search";
import Card from "../../../Home/BuyingSection/BuyingCard";
import "./ProductSection.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function ProductSection() {
  const [lth, setLth] = React.useState(false);
  const [htl, setHtl] = React.useState(false);

  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (query) => {
    // call your search API here and update the searchResults state for example:
  };

  var verticalLineStyle = {
    borderLeft: "0.5px solid grey",
  };

  var horizontalLine = {
    border: "0.7px solid grey",
    width: "86%",
  };

  const [data,setData]=React.useState([]);
    const [allData,setAllData]=React.useState([]);
    const [index,setIndex]=React.useState(8);
  useEffect(()=>{
    fetch("http://localhost:8000/product/get-products")
    .then((response) => response.json())
    .then((data) => {
        setAllData(data.data)
    setData(data.data)})
  },[]);
// console.log(data);
useEffect(()=>{
    if(lth===true){
      var temp=data;
      let sortedData=temp.sort(
        (p1, p2) => (p1.price > p2.price) ? 1 : (p1.price < p2.price) ? -1 : 0);
        console.log(sortedData,"lth");
        // console.log(data);
      setData(temp);
    }
    else if(htl===true){
        var temp1=data;
        let sortedData=temp1.sort(
          (p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);
          console.log(sortedData,'htl');
          // console.log(data);
        setData(temp1);
    }
    else{
      setData(allData);
    }
    console.log(lth,htl);
},[lth,htl])


  var cardComponentArray = data.map((card) => {
    return (
      <Card img_url={card?.ip} name={card?.name} description={card?.description} price={card?.price} id={card._id}/>
    );
  });

  return (
    <div class="fluid-container">
      <div className="row" style={{ padding: "18px" }}>
        <div class="col-2">
          <div className="row mb-5 mt-3">
            <label className="mx-0 mb-5">
              <span className={{ fontSize: "18px" }}>Sort by:</span>
              <select
                name="price-select"
                className="ms-4"
                style={{ width: "180px", height: "26px" }}>
                <option onClick={(e) => setLth(!lth)}>Low to High</option>
                <option onClick={(e) => setHtl(!htl)}>High to Low</option>
              </select>
            </label>
          </div>

          <div class="row">
            {/* Head of Filter component */}
            <div class="row">
              <div class="text-center pb-3" style={{ fontSize: "20px" }}>
                Categories
              </div>
            </div>

            {/* Main body of filter component */}
            <div class="row">
              <div class="col-8">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="form-check-1"
                    style={{ border: "1px solid black", left: "40px" }}
                  />
                  <label
                    class="form-check-label mt-1 ms-2"
                    for="flexCheckDefault">
                    Fresh Fruits
                  </label>
                </div>
              </div>
              <div class="col-4">
                <span className="float-end">23</span>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="form-check-2"
                    style={{ border: "1px solid black", left: "40px" }}
                  />
                  <label
                    class="form-check-label mt-1 ms-2"
                    for="flexCheckDefault">
                    Fresh Vegetables
                  </label>
                </div>
              </div>
              <div class="col-4">
                <span className="float-end">23</span>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="form-check-3"
                    style={{ border: "1px solid black", left: "40px" }}
                  />
                  <label
                    class="form-check-label mt-1 ms-2"
                    for="flexCheckDefault">
                    Fresh Juices
                  </label>
                </div>
              </div>
              <div class="col-4">
                <span className="float-end">23</span>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="form-check-4"
                    style={{ border: "1px solid black", left: "40px" }}
                  />
                  <label
                    class="form-check-label mt-1 ms-2"
                    for="flexCheckDefault">
                    Dry Fruits
                  </label>
                </div>
              </div>
              <div class="col-4">
                <span className="float-end">23</span>
              </div>
            </div>

            {/* Bottom part of Filter component */}

            {/* Horizontal line */}
            <div className="mt-3 mx-auto" style={horizontalLine}></div>
          </div>
        </div>

        <div class="col-10">
          {/* <Products checklth={lth} checkhtl={htl} /> */}
          <SearchBar onSearch={handleSearch} />
          <div style={{ margin: "60px 0 60px 0" }}></div>
          <div className="row justify-content-around" style={verticalLineStyle}>
            {cardComponentArray}
          </div>

          <div class="full-width mt-4 mb-5">
            <div className="">
              <MdArrowBackIosNew />
            </div>
            <div class="view-more-circle">1</div>
            <div class="view-more-circle">2</div>
            <div class="view-more-circle">3</div>
            <div className="">
              <MdArrowForwardIos />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
