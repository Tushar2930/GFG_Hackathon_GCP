import React,{useEffect,useState} from "react";
import Card from "../../../../Home/BuyingSection/BuyingCard";
import "./BuyingCardList.css"
import { Link } from "react-router-dom";
import sellOptions from "../../../../Sell_form/veg_sell_form/veg_sell_data";
import SearchDropdown from "../../../../Sell_form/veg_sell_form/form_comp";


function Products(props){

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
    if(props.checklth===true){
      var temp=data;
      let sortedData=temp.sort(
        (p1, p2) => (p1.price > p2.price) ? 1 : (p1.price < p2.price) ? -1 : 0);
        console.log(sortedData,"lth");
        // console.log(data);
      setData(temp);
    }
    else if(props.checkhtl===true){
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
    console.log(props.checklth,props.checkhtl);
},[props.checklth,props.checkhtl])

  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState(null);
  const [species, setSpecies] = useState(null);

  var cardComponentArray = data.map(
    (card,k) => {
      if(k<index){
      return  (
          <Card img_url={card?.ip} name={card?.name} description={card?.description} price={card?.price} id={card._id}/>
      )
      }
    }
  )

  async function findProduct(){
    const findN=category?.value+" "+product?.value+" "+species?.value;
    var res=[];
    allData.map((e)=>{

       if(e.name.toLowerCase()===findN.toLowerCase())
        res.push(e);
    })
    console.log(res)
    setData(res);
  }

  useEffect(()=>{
    findProduct();
    },[species])

  const onCategoryOptionClicked = (option) => {
    setCategory(option);
    setProduct(null);
    setSpecies(null);
  };

  const onProductOptionClicked = (option) => {
    setProduct(option);
    setSpecies(null);

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
          <button type="button" class="btn btn-dark more-btn rounded-5" onClick={(e)=>setIndex(index+8)}>
            VIEW MORE
          </button>
        </div>

      </div>
    </div>
  );
}

export default Products;  