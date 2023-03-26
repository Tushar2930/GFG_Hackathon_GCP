import React,{useEffect,useState} from "react";
import Card from "./BuyingCard";
import "./BuyingCardList.css"
import { Link } from "react-router-dom";
import sellOptions from "../../../../Sell_form/veg_sell_form/veg_sell_data";
import SearchDropdown from "../../../../Sell_form/veg_sell_form/form_comp";


function Products(){

    const [data,setData]=React.useState([]);
  useEffect(()=>{
    fetch("http://localhost:8000/product/get-products")
    .then((response) => response.json())
    .then((data) => setData(data.data));
  },[]);

  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState(null);
  const [species, setSpecies] = useState(null);

  var cardComponentArray = data.map(
    (card) => {
      return  (
        <div class="col-3 px-4 pb-4">
          <Card img_url={card?.ip} name={card?.name} description={card?.description} price={card?.price} />
        </div>
      )
    }
  )

  async function findProduct(){
    const findN=category?.value+" "+product?.value+" "+species?.value;
    var res=[];
    data.map((e)=>{
       if(e.name.toLowerCase()==findN.toLowerCase())
        res.push(e);
    })
    setData(res);
  }
  useEffect(()=>{
    findProduct();
    },[species])

  const onCategoryOptionClicked = (option) => {
    setCategory(option);
  };

  const onProductOptionClicked = (option) => {
    setProduct(option);
  };

  const onSpeciesOptionClicked = (option) => {
    setSpecies(option);
};


  return (
    <div class="fluid-container main-fluid-container">  
      <div className="row div-container">
        <div>
        <form className="my-2">
        <h6 className="float-start">Category :</h6>
        <SearchDropdown
          options={sellOptions}
          onOptionClicked={onCategoryOptionClicked}
        />
      </form>

      {category ? (
        <form className="my-2">
          <h6>Product :</h6>
          <SearchDropdown
            options={category.product}
            onOptionClicked={onProductOptionClicked}
          />
        </form>
      ) : null}

      {product ? (
        <form className="my-2">
          <h6>Species :</h6>
          <SearchDropdown
            options={product.species}
            onOptionClicked={onSpeciesOptionClicked}
          />
        </form>
      ) : null}
        </div>

        <div class="text-center head-text-div"> 
          <b>Buy Items</b>
        </div>

        {cardComponentArray}

        <div class="text-center bottommost-div">
          <button type="button" class="btn btn-dark more-btn rounded-5">
            <Link className="view-more-link" to="">VIEW MORE</Link>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Products;  