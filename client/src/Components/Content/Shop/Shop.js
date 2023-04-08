import React ,{useEffect}from "react";
import ProductSection from "./ShopPages/ProductSection/ProductSection";

function Shop() {
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ProductSection />
    </div>
  );
}

export default Shop;
