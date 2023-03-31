import React from "react";
import "./menu.css";

export default function menu() {
  return (
    <div className="menu">
      {" "}
      <input
        class="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label for="menu-icon"></label>
      <nav class="nav">
        <ul class="pt-5">
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Studio</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
