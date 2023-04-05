import React from "react";
import Orange from "../image/orange.png";

export default function middleOrange() {
  return (
    <div
      style={{
        marginTop: "-250px",
        width: "400px",
        height: "300px",
        backgroundSize: "contain",
        backgroundRepeat: "noRepeat",
        zIndex: 100,
      }}>
      <img src={Orange} style={{ zIndex: 1000 }} />
    </div>
  );
}
