import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./SingleProduct.css";

const ProductPage = (props) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200",
    "https://picsum.photos/200/300",
  ];

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };
  const handleAddToCart = () => {};

  return (
    <div className="product-page">
      <div className="wrapper">
        <div className="product-images">
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt="product"
              className={selectedImage === index ? "active" : ""}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <img src={images[selectedImage]} alt="err" className="main-img" />
      </div>
      <div className="product-details">
        <h1>Product Name</h1>
        <p>Description of the product</p>
        <p style={{ padding: "px 100px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <p>Price: $99.99</p>
        <div class="row px-3">
          <div class="col py-0 me-3">
            <div class="row quantity-div">
              <div class="col-4 bg-danger">
                <button
                  type="button"
                  class="btn btn-number p-0"
                  data-type="minus"
                  onClick={() => {
                    setQuantity(!quantity ? quantity : quantity - 1);
                  }}>
                  <RemoveIcon />
                </button>
              </div>
              <div class="col-4 p-0">
                <input
                  type="number"
                  className="form-control input-number quantity-input m-0 p-0"
                  value={quantity}></input>
              </div>
              <div class="col-4 bg-success">
                <button
                  type="button"
                  class="btn btn-number p-0"
                  data-type="plus"
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}>
                  <AddIcon />
                </button>
              </div>
            </div>
          </div>
          <div class="footer-btn col btn btn-success right-btn my-0 py-0">
            Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
