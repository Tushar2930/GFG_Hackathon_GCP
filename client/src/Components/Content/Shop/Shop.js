import React, { useEffect } from "react";
import ProductSection from "./ShopPages/ProductSection/ProductSection";

function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: "#2C957C " }}>
      <ProductSection />
    </div>
  );
}

export default Shop;
