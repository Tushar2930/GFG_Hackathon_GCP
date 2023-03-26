import React from "react";
import FileBase from "react-file-base64";
import "./veg_sell.css";
import { useState } from "react";
import SearchDropdown from "./form_comp";
import { createProduct } from "../../../api/createProduct";
import sellOptions from "./veg_sell_data";

function Veg_sell() {
  const [productObj, setProductObj] = useState({});
  const [ip, setIp] = React.useState("");
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
      minQuantity: Math.floor(productObj.quantity / 5),
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="form_root">
      {/* <h1 className="mx-auto">Sell Items</h1> */}
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

      {species ? (
        <form className="mx-auto my-5">
          <h2 className="text-center">Item Details</h2>
          <div className="flexb">
            <label htmlFor="item-price">Item Price:</label>
            <input
              type="text"
              id="item-price"
              name="price"
              value={productObj.price}
              required
              onChange={(e) => handleValueChange(e)}
            />
          </div>

          <div className="flexb">
            <label htmlFor="item-quantity">
              Max Quantity You Have*(in kg):
            </label>
            <input
              type="number"
              id="max-item-quantity"
              name="quantity"
              required
              onChange={(e) => handleValueChange(e)}
            />
          </div>

          <div className="flexb">
            <label htmlFor="item-image">Item Image:</label>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setIp(base64)}></FileBase>
          </div>

          <div className="flexb">
            <label htmlFor="item-desc">Item Descricption:</label>
            <input
              type="text"
              id="item-desc"
              name="description"
              required
              onChange={(e) => handleValueChange(e)}
            />
          </div>

          <button type="submit" onClick={() => handelSubmit()}>
            Submit
          </button>
        </form>
      ) : null}
    </div>
  );
}

export default Veg_sell;
