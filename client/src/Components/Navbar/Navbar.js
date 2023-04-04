import React, { useEffect,useState } from "react";
import "./navbar.css";
import logoImg from "./images/agrokart.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu'



function Navbar() {
  const [scroll, setScroll] = useState(false);
  console.log("Scroll :", scroll)
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
          <a href="/" className={scroll?"hover-a":"navbar-links-a"}>Home</a>
        </li>
        <li>
          <a href="/about-us" className={scroll?"hover-a":"navbar-links-a"}>About Us</a>
        </li>
        <li>
          <a href="/shop" className={scroll?"hover-a":"navbar-links-a"}>Shop</a>
        </li>
        <li>
          <a href="/signup" className={scroll?"hover-a":"navbar-links-a"}>Log In</a>
        </li>
        <li>
          <a href="/cart" className={scroll?"hover-a":"navbar-links-a"}><ShoppingCartIcon/></a>
        </li>
        <li className={scroll?"hover-a":"navbar-links-a"}><MenuIcon/></li>
      </ul>
      <div className="navbar-menu-icon">&#9776;</div>
    </nav>
  );
}

export default Navbar;
