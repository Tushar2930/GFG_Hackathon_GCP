import React, { useEffect,useState } from "react";
import "./navbar.css";
import logoImg from "./images/agrokart.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu'

function Navbar() {
  const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 10);
   });
 }, []);


  return (
    <nav className={scroll?"navbar navbar-scroll":"navbar"}>
      <div className="navbar-logo"><img style={{height: "3rem"}} src={logoImg}></img></div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about-us">About Us</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/signup">Log In</a>
        </li>
        <li>
          <a href="/cart"><ShoppingCartIcon/></a>
        </li>
        <li><MenuIcon/></li>
      </ul>
      <div className="navbar-menu-icon">&#9776;</div>
    </nav>
  );
}

export default Navbar;
