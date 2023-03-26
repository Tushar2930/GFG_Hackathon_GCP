import React from "react";
import FileBase from "react-file-base64";
import "./veg_sell.css";
import { useState } from 'react';
import SearchDropdown from "./form_comp";
import sellOptions from "./veg_sell_data"



function Veg_sell(){
  const [name,setName]=React.useState("");
  const [price,setPrice]=React.useState("");
  const [quantity,setQuantity]=React.useState("");
  const [ip,setIp]=React.useState("");
  const [descricption,setDescricption]=React.useState("");


  // const handleSubmit=async (e)=>{
  //   e.preventDefault();
  //   const resp=await fetch('http://localhost:8000/product/sell-add',{
  //     method:'POST',
  //     headers:{
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify({
  //       name,
  //       price,
  //       quantity,
  //       ip,
  //       descricption
  //     })
  //   })
  //   const data= await resp.json();
  //   if(data.message==='data added successfully'){
  //     alert('Product added Successfully');
  //     window.location.href='/';
  //   }
  // }

  // New Stuffs made by Sumit
  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState(null);
  const [species, setSpecies] = useState(null);
  

  const onCategoryOptionClicked = (option) => {
    setCategory(option)
  };

  const onProductOptionClicked = (option) => {
    setProduct(option)
  };

  const onSpeciesOptionClicked = (option) => {
    setSpecies(option)
  };


    return (
    <div className="form_root">
      {/* <h1 className="mx-auto">Sell Items</h1> */}
      <form className="my-2">
        <h6 className="float-start">Category :</h6>
        <SearchDropdown options={sellOptions} onOptionClicked={onCategoryOptionClicked}/>
      </form>

      {category ? 
        <form className="my-2">
          <h6>Product :</h6>
          <SearchDropdown options={category.product} onOptionClicked={onProductOptionClicked}/>
        </form>
      :null}

      {product ? 
        <form className="my-2">
          <h6>Species :</h6>
          <SearchDropdown options={product.species} onOptionClicked={onSpeciesOptionClicked}/>
        </form>
      :null}

      {species ? 
        <form className="mx-auto my-5">
            <h2 className="text-center">Item Details</h2>
            <div className="flexb">
              <label for="item-price">Item Price:</label>
              <input type="text" id="item-price" name="item-price" required onChange={(e)=>setPrice(e.target.value)}/>
            </div>

            <div className="flexb">
              <label for="item-quantity">Item Quantity:</label>
              <input type="number" id="item-quantity" name="item-quantity" required onChange={(e)=>setQuantity(e.target.value)}/>
            </div>

            <div className="flexb">
              <label for="item-image">Item Image:</label>
              <FileBase type="file" multiple={false} onDone={({base64})=>setIp(base64)}></FileBase>
            </div>

            <div className="flexb"><label for="item-desc">Item Descricption:</label>
              <input type="text" id="item-desc" name="item-desc" required onChange={(e)=>setDescricption(e.target.value)}/>
            </div>

            <button type="submit">Submit</button>
        </form>
      :null}
    </div>
    )
    
}

export default Veg_sell;