import React, { useState } from 'react';
import Products from "./Products/products";
import SearchBar from './search';
import Card from '../../../Home/BuyingSection/BuyingCard';
import "./ProductSection.css"
import { MdArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

const shopData = [
    {id:"1", name:"Fuck You", price:"Free", description:"Middle Finger",  minQuantity:"1", maxQuantity:"100", img_url:"https://media.istockphoto.com/id/1271707347/vector/middle-finger.jpg?s=612x612&w=0&k=20&c=DFjhX1TphcbPpG4z7Pi1TCy151Mf6uXiQjB9HKqGwjw="},
    {id:"1", name:"Fuck You", price:"Free", description:"Middle Finger",  minQuantity:"1", maxQuantity:"100", img_url:"https://media.istockphoto.com/id/1271707347/vector/middle-finger.jpg?s=612x612&w=0&k=20&c=DFjhX1TphcbPpG4z7Pi1TCy151Mf6uXiQjB9HKqGwjw="},
    {id:"1", name:"Fuck You", price:"Free", description:"Middle Finger",  minQuantity:"1", maxQuantity:"100", img_url:"https://media.istockphoto.com/id/1271707347/vector/middle-finger.jpg?s=612x612&w=0&k=20&c=DFjhX1TphcbPpG4z7Pi1TCy151Mf6uXiQjB9HKqGwjw="},
    {id:"1", name:"Fuck You", price:"Free", description:"Middle Finger",  minQuantity:"1", maxQuantity:"100", img_url:"https://media.istockphoto.com/id/1271707347/vector/middle-finger.jpg?s=612x612&w=0&k=20&c=DFjhX1TphcbPpG4z7Pi1TCy151Mf6uXiQjB9HKqGwjw="},
    {id:"1", name:"Fuck You", price:"Free", description:"Middle Finger",  minQuantity:"1", maxQuantity:"100", img_url:"https://media.istockphoto.com/id/1271707347/vector/middle-finger.jpg?s=612x612&w=0&k=20&c=DFjhX1TphcbPpG4z7Pi1TCy151Mf6uXiQjB9HKqGwjw="},
    {id:"1", name:"Fuck You", price:"Free", description:"Middle Finger",  minQuantity:"1", maxQuantity:"100", img_url:"https://media.istockphoto.com/id/1271707347/vector/middle-finger.jpg?s=612x612&w=0&k=20&c=DFjhX1TphcbPpG4z7Pi1TCy151Mf6uXiQjB9HKqGwjw="},
]


function ProductSection() {
    const [lth, setLth] = React.useState(false);
    const [htl, setHtl] = React.useState(false);

    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = (query) => {
      // call your search API here and update the searchResults state for example:
    }

    var verticalLineStyle = {
        borderLeft: "0.5px solid grey"
    }

    var horizontalLine = {
        border: "0.7px solid grey",
        width:"86%",
    }

    var cardComponentArray = shopData.map(
        (card) => {
          return  (
              <Card 
                img_url={card.img_url} 
                maxQuantity={card.maxQuantity} 
                minQuantity={card.minQuantity} 
                name={card.name} 
                description={card.description} 
                price={card.price} 
                id={card.date}/>
          )
        }
      )  

    return (
        <div class="fluid-container">
            <div className="row" style={{ padding: "18px" }}>
                <div class="col-2">
                    <div className="row mb-5 mt-3">
                        <label className="mx-0 mb-5">
                            <span className={{fontSize: '18px'}}>Sort by:</span>
                            <select name="price-select" className="ms-4" style={{ width:"180px", height:"26px" }}>
                                <option onClick={(e) => setLth(!lth)}>Low to High</option>
                                <option onClick={(e) => setHtl(!htl)}>High to Low</option>
                            </select>
                        </label>
                    </div>

                    <div class="row">
                        {/* Head of Filter component */}
                        <div class="row">
                            <div class="text-center pb-3" style={{fontSize:"20px"}}>Categories</div>
                        </div>

                        {/* Main body of filter component */}
                        <div class="row">
                            <div class="col-8">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="form-check-1"  style={{border:"1px solid black",left:"40px"}}/>
                                    <label class="form-check-label mt-1 ms-2" for="flexCheckDefault">Fresh Fruits</label>
                                </div>
                            </div>
                            <div class="col-4">
                                <span className="float-end">23</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="form-check-2" style={{border:"1px solid black",left:"40px"}}/>
                                    <label class="form-check-label mt-1 ms-2" for="flexCheckDefault">Fresh Vegetables</label>
                                </div>
                            </div>
                            <div class="col-4">
                                <span className="float-end">23</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="form-check-3" style={{border:"1px solid black",left:"40px"}}/>
                                    <label class="form-check-label mt-1 ms-2" for="flexCheckDefault">Fresh Juices</label>
                                </div>
                            </div>
                            <div class="col-4">
                                <span className="float-end">23</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="form-check-4" style={{border:"1px solid black",left:"40px"}}/>
                                    <label class="form-check-label mt-1 ms-2" for="flexCheckDefault">Dry Fruits</label>
                                </div>
                            </div>
                            <div class="col-4">
                                <span className="float-end">23</span>
                            </div>
                        </div>  

                        {/* Bottom part of Filter component */}

                        {/* Horizontal line */}
                        <div className='mt-3 mx-auto' style={horizontalLine}></div>
                    </div>
                </div>
                
                <div class="col-10">
                    {/* <Products checklth={lth} checkhtl={htl} /> */}
                    <SearchBar onSearch={handleSearch} />
                    <div style={{margin:"60px 0 60px 0"}}></div>
                    <div className='row justify-content-around' style={verticalLineStyle}>
                        {cardComponentArray}
                    </div>

                    <div class="full-width mt-4 mb-5">
                        <div className=''><MdArrowBackIosNew /></div>
                        <div class="view-more-circle">1</div>
                        <div class="view-more-circle">2</div>
                        <div class="view-more-circle">3</div>
                        <div className=''><MdArrowForwardIos /></div>
                    </div>
                    {/* <div className='row'>
                        <button class="mx-auto mt-4" style={{width:"10%"}}>View More</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ProductSection;