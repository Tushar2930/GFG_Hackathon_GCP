import React, { useState } from "react";
import "./dropDown.css";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggle}>
        Click me!
      </button>

      <ul className="dropdown-menu">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 2</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>
    </div>
  );
};

export default DropDown;
