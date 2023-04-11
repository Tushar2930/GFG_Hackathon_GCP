import React, { useState, useEffect ,useContext} from "react";
import SearchBar from "./search";
import { getUser } from "../../../../api/getUser";
import { AuthContext } from "../../../../Content/context/AuthorizationContext";
import Card from "../../../Home/BuyingSection/BuyingCard";
import "./ProductSection.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function ProductSection() {
  const [lth, setLth] = React.useState(false);
  const [htl, setHtl] = React.useState(false);

  const [userType,setUserType] = React.useState([]);
  const useAuth = useContext(AuthContext);
  useEffect(() => {
    async function fetchData() {
      if (useAuth.currentUser) {
        try {
          await getUser(useAuth?.currentUser?.email).then((result) => {
            // setUserType(result.data.profiledata)
            console.log(result)
          });
        } catch (error) {
          console.log(error.message);
        }
      }
    }
    fetchData();
  }, [useAuth.currentUser]);

console.log(userType)


  var verticalLineStyle = {
    borderLeft: "0.5px solid grey",
    backgroundColor: "white",
    minHeight: "100vh",
    borderRadius: "0px",
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
    const results = allData.filter((card) =>
      card.name.toLowerCase().includes(query.toLowerCase())
    );
    // console.log(results);
    setData(results);
    // console.log(query)
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

const [e,setE]=React.useState(2);

  const filterSort=(e)=>{
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
    // console.log(data)
  }

  useEffect(()=>{
    filterSort(e);
  },[e])
  
// console.log(allData)
  const filterData=(named)=>{
    // console.log(named)
    var newData=allData.filter((card)=>card.category.toLowerCase().includes(named.toLowerCase()));
    setData(newData);
  
  }



  return (
    <div class="fluid-container">
    <div>
      <img src="https://demo.7iquid.com/agrisoil/wp-content/uploads/2022/07/page-title-bg-1.jpg"></img><div className="absolute text-white" style={{fontFamily:"monospace",top:"30%",left:"5%",fontSize:"xxx-large"}}>SHOP</div>
    </div>
      <div className="row" style={{ padding: "18px" }}>
        <div class="col-2">
          <div className="row" style={{borderBottom:"1px solid #c7c8c9", marginTop:"1.58%"}}>
            <label className="mx-0 mb-5">
              <span className={{ fontSize: "18px" }}>Sort by:</span>
              <select
              onChange={(e)=>{setE(e.target.options.selectedIndex);}}
                name="price-select"
                className="ms-4"
                style={{ width: "180px", height: "26px",border:"1px solid black" }}>
                <option >High to Low</option>
                <option >Low to High</option>
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
                    name="fruits"
                    id="form-check-1"
                    style={{ border: "1px solid black", left: "40px" }}
                    onClick={(e) => {if(e.target.checked===true){filterData(e.target.name)} else{setData(allData)}}}
                  />
                  <label
                    class="form-check-label mt-1 ms-2"
                    for="flexCheckDefault">
                    Fresh Fruits
                  </label>
                </div>
              </div>
              <div class="col-4">
                <span className="float-end">{
                allData.filter((card)=>card?.category.toLowerCase().includes("fruits".toLowerCase())).length
                }</span>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="vegetables"
                    id="form-check-2"
                    style={{ border: "1px solid black", left: "40px" }}
                    onClick={(e) => {if(e.target.checked===true){filterData(e.target.name)} else{setData(allData)}}}
                  />
                  <label
                    class="form-check-label mt-1 ms-2"
                    for="flexCheckDefault">
                    Fresh Vegetables
                  </label>
                </div>
              </div>
              <div class="col-4">
                <span className="float-end">{  
                allData.filter((card)=>card.category.toLowerCase().includes("vegetables".toLowerCase())).length
                }</span>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="form-check-3"
                    name="pulses"
                    style={{ border: "1px solid black", left: "40px" }}
                    onClick={(e) => {if(e.target.checked===true){filterData(e.target.name)} else{setData(allData)}}}
                  />
                  <label
                    class="form-check-label mt-1 ms-2"
                    for="flexCheckDefault">
                    Pulses
                  </label>
                </div>
              </div>
              <div class="col-4">
                <span className="float-end">{allData.filter((card)=>card.category.toLowerCase().includes("pulses".toLowerCase())).length
                }</span>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="form-check-3"
                    name="grains"
                    style={{ border: "1px solid black", left: "40px" }}
                    onClick={(e) => {if(e.target.checked===true){filterData(e.target.name)} else{setData(allData)}}}
                  />
                  <label
                    class="form-check-label mt-1 ms-2"
                    for="flexCheckDefault">
                    Grains
                  </label>
                </div>
              </div>
              <div class="col-4">
                <span className="float-end">{allData.filter((card)=>card.category.toLowerCase().includes("grain".toLowerCase())).length
                }</span>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="form-check-4"
                    name="dry fruits"
                    style={{ border: "1px solid black", left: "40px" }}
                    onClick={(e) => {if(e.target.checked===true){filterData(e.target.name)} else{setData(allData)}}}
                  />
                  <label
                    class="form-check-label mt-1 ms-2"
                    for="flexCheckDefault">
                    Dry Fruits
                  </label>
                </div>
              </div>
              <div class="col-4">
                <span className="float-end">{
                  allData.filter((card)=>card.category.toLowerCase().includes("dry fruits".toLowerCase())).length
                }</span>
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
          <div className="flex justify-center mb-0" style={{ margin: "60px 0 60px 0" }}><hr style={{marginLeft:"-2%",width:"100%"}}/></div>
          <div className="row justify-content-around rounded-none" style={verticalLineStyle}>
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
