import React,{useContext} from "react";
import FileBase from "react-file-base64";
import "./veg_sell.css";
import { useState } from "react";
import SearchDropdown from "./form_comp";
import { createProduct } from "../../../api/createProduct";
import sellOptions from "./veg_sell_data";
import {AuthContext} from '../../context/AuthorizationContext';




function Veg_sell() {
  const [productObj, setProductObj] = useState({});
  const [ip, setIp] = useState("");
  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState(null);
  const [species, setSpecies] = useState(null);

  const handleValueChange = (e) => {
    setProductObj({
      ...productObj,
      [e.target.name]: e.target.value,
      category: category.label,
      product: product.label,
      species: species.label,
      ip,
    });
  };
  const useAuth = useContext(AuthContext);
  
  const onCategoryOptionClicked = (option) => {
    setCategory(option);
  };

  const onProductOptionClicked = (option) => {
    setProduct(option);
  };

  const onSpeciesOptionClicked = (option) => {
    setSpecies(option);
  };

  const handelSubmit = async (e) => {
    await createProduct({
      ...productObj,
      minQuantity: Math.floor(productObj.maxQuantity / 5),
      userEmail:useAuth.currentUser.email,
    }).then((res) => {
      if(res.message === "data added successfully"){
        alert("Product added successfully");
        window.location.href = "/";
      }
    });
  };

  return (
    <div className="form_root">
      <div className="animate-charcter mx-auto mb-4" style={{fontSize:"3rem"}}>
        <b>Sell Items</b>
      </div>

      <form className="my-2">
        <div className="float-start mb-2 sell-field" style={{fontSize:"1.7rem"}}>Category </div>
        <SearchDropdown
          options={sellOptions}
          onOptionClicked={onCategoryOptionClicked}
        />
      </form>

      {category ? (
        <form className="my-2">
          <div className="mb-2 sell-field" style={{fontSize:"1.7rem"}}>Product </div>
          <SearchDropdown
            options={category.product}
            onOptionClicked={onProductOptionClicked}
          />
        </form>
      ) : null}

      {product ? (
        <form className="my-2">
          <div className="mb-2 sell-field" style={{fontSize:"1.7rem"}}>Species </div>
          <SearchDropdown
            options={product.species}
            onOptionClicked={onSpeciesOptionClicked}
          />
        </form>
      ) : null}

      {species ? (
        <form className="mx-auto my-5">
          {/* <div className="text-center pb-3 " style={{fontSize:"2.1rem", fontFamily: "'fantasy'"}}>ITEM DETAILS</div> */}

          <div className="flexb">
            <label className="text-center sell-field" htmlFor="item-price" style={{fontSize:"1.6rem"} }>Item Price</label>
            <input
              classname="veg-sell-input"
              type="text"
              id="item-price"
              name="price"
              value={productObj.price}
              required
              onChange={(e) => handleValueChange(e)}
              onFocus={(e) => {e.target.classList.add('blue-outline');}}
            />
          </div>

          <div className="flexb">
            <label className="text-center sell-field" htmlFor="item-quantity" style={{fontSize:"1.6rem"}}>
              Max Quantity(in kg)
            </label>
            <input
              classname="veg-sell-input mx-0"
              type="number"
              id="max-item-quantity"
              name="maxQuantity"
              required
              onChange={(e) => handleValueChange(e)}
              onFocus={(e) => {e.target.classList.add('blue-outline');}}
            />
          </div>

          <div className="flexb">
            <label className="text-center sell-field" htmlFor="item-image" style={{fontSize:"1.6rem"}}>Item Image</label>
            <FileBase
              className="veg-sell-input mx-0"
              type="file"
              multiple={false}
              onDone={({ base64 }) => setIp(base64)}></FileBase>
          </div>

          <div className="flexb">
            <label className="text-center sell-field" htmlFor="item-desc" style={{fontSize:"1.6rem"}}>Item Descricption</label>
            <input
              classname="veg-sell-input"
              type="text"
              id="item-desc"
              name="description"
              required
              onChange={(e) => handleValueChange(e)}
              onFocus={(e) => {e.target.classList.add('blue-outline');}}
            />
          </div>
          { /* onClick={() => handelSubmit() }*/ }
          <button type="button" className="success" onClick={handelSubmit}>Submit</button>
        </form>
      ) : null}
    </div>
  );
}

export default Veg_sell;
