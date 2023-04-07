import React, { useState, useEffect } from "react";
import SearchBar from "./search";
import Card from "../../../Home/BuyingSection/BuyingCard";
import "./ProductSection.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function ProductSection() {
  const [lth, setLth] = React.useState(false);
  const [htl, setHtl] = React.useState(false);

  var verticalLineStyle = {
    borderLeft: "0.5px solid grey",
    backgroundColor: "#e8e8e8",
    minHeight: "100vh",
    borderRadius: "20px",
    paddingTop: "3rem",
  };

  var horizontalLine = {
    border: "0.7px solid grey",
    width: "86%",
  };

  const [data, setData] = React.useState([]);
  const [allData, setAllData] = React.useState([]);
  const [index, setIndex] = React.useState(8);
  useEffect(() => {
    fetch("http://localhost:8000/product/get-products")
      .then((response) => response.json())
      .then((data) => {
        setAllData(data.data);
        setData(data.data);
      });
  }, []);
  // console.log(data);

  var cardComponentArray = data.map((card) => {
    return (
      <Card
        img_url={card?.ip}
        name={card?.name}
        description={card?.description}
        price={card?.price}
        id={card._id}
      />
    );
  });


  const [searchResults, setSearchResults] = useState("");
  const handleSearch = (query) => {
    const results = data.filter((card) => card.name.includes(query));
    setSearchResults(results);
    setData(results);
    
    console.log(query)
    if (query === "") {
      setSearchResults([]);
      setData(allData);
    }
    // console.log(results);
  };

//   useEffect(()=>{
//     if(lth===true){
// //sort data in ascending order according to price
// var newData=data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
// setData(newData);
// console.log(data,lth,htl)
//     }
//     else if(htl===true){
//       var newData=data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
//       setData(newData);
//       console.log(data,lth,htl)
//     }
//   },[lth,htl])

  async function filterSort(e){
    if(e===1){
      var newData=data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      setData(newData);
    }
    else if(e===0){
      var newData=data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      setData(newData);
    }
    else{
      setData(allData)
    }
    console.log(data)
  }

  return (
    <div class="fluid-container">
      <div className="row" style={{ padding: "18px" }}>
        <div class="col-2">
          <div className="row mb-5 mt-3">
            <label className="mx-0 mb-5">
              <span className={{ fontSize: "18px" }}>Sort by:</span>
              <select
              onChange={e=>filterSort(e.target.options.selectedIndex)}
                name="price-select"
                className="ms-4"
                style={{ width: "180px", height: "26px" }}>
                <option >Low to High</option>
                <option >High to Low</option>
                <option selected="selected">Recommended </option>
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
