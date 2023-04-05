import React, { useEffect,useState } from "react";
import "./navbar.css";
import logoImg from "./images/agrokart.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from "react-router-dom";



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
          <Link to="/" className={scroll?"hover-a":"navbar-links-a"}>Home</Link>
        </li>
        <li>
          <Link to="/about-us" className={scroll?"hover-a":"navbar-links-a"}>About Us</Link>
        </li>
        <li>
          <Link to="/shop" className={scroll?"hover-a":"navbar-links-a"}>Shop</Link>
        </li>
        <li>
          <Link to="/signup" className={scroll?"hover-a":"navbar-links-a"}>Log In</Link>
        </li>
        <li>
          <Link to="/cart" className={scroll?"hover-a":"navbar-links-a"}><ShoppingCartIcon/></Link>
        </li>
        <li className={scroll?"hover-a":"navbar-links-a"}><MenuIcon/></li>
      </ul>
      <div className="navbar-menu-icon">&#9776;</div>
    </nav>
  );
}

export default Navbar;
