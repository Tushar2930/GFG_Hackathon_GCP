import React ,{useEffect}from "react";
import Card from "./BuyingCard";
import "./BuyingCardList.css"
import { Link } from "react-router-dom";

// var cardData = [
//   {img_url:"https://5.imimg.com/data5/MM/MM/GLADMIN-/jumbo-natural-guava-1000x1000.jpg", name:"Product 1", description:"What an amazing product, i got from here. I will thank all the team for it.", price:"10"},
//   {img_url:"https://5.imimg.com/data5/MM/MM/GLADMIN-/jumbo-natural-guava-1000x1000.jpg", name:"Product 2", description:"What an amazing product, i got from here. I will thank all the team for it.", price:"20"},
//   {img_url:"https://5.imimg.com/data5/MM/MM/GLADMIN-/jumbo-natural-guava-1000x1000.jpg", name:"Product 3", description:"What an amazing product, i got from here. I will thank all the team for it.", price:"30"},
//   {img_url:"https://5.imimg.com/data5/MM/MM/GLADMIN-/jumbo-natural-guava-1000x1000.jpg", name:"Product 4", description:"What an amazing product, i got from here. I will thank all the team for it.", price:"40"},
//   {img_url:"https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg", name:"Product 1", description:"What an amazing product, i got from here. I will thank all the team for it.", price:"10"},
//   {img_url:"https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg", name:"Product 2", description:"What an amazing product, i got from here. I will thank all the team for it.", price:"20"},
//   {img_url:"https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg", name:"Product 3", description:"What an amazing product, i got from here. I will thank all the team for it.", price:"30"},
//   {img_url:"https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg", name:"Product 4", description:"What an amazing product, i got from here. I will thank all the team for it.", price:"40"},
// ]


function BuyingCardList() {

  const [data,setData]=React.useState([]);
  useEffect(async ()=>{
    try {
      await fetch("http://localhost:8000/product/get-products")
    .then((response) => response.json())
    .then((data) => setData(data.data));
    } catch (error) {
     console.log(error.message) 
    }
    
  },[]);


  var cardComponentArray = data?.map(
    (card) => {
      return  (
        <div class="col-3 px-4 pb-4">
          <Card img_url={card?.ip} name={card?.name} description={card?.description} price={card?.price} />
        </div>
      )
    }
  )
  return (
    <div class="fluid-container main-fluid-container">  
      <div className="row div-container">

        <div class="text-center head-text-div"> 
          <b>Buy Items</b>
        </div>

        {cardComponentArray}

        <div class="text-center bottommost-div">
          <button type="button" class="btn btn-dark more-btn rounded-5">
            <Link className="view-more-link" to="/shop">VIEW MORE</Link>
          </button>
        </div>

      </div>
    </div>
  );
}

export default BuyingCardList;