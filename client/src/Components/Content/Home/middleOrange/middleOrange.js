import React from "react";
import Orange from "../image/orange.png";

export default function middleOrange() {
  return (
    <img
      src={Orange}
      style={{
        width: "35rem",
        position: "relative",
        zIndex: 10,
      }}
    />
  );
}
