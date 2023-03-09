import React  from "react";
import "./navbar.css"

function Navbar(){

    return <><div className="navRoot fd">
    <div className="logo">
    <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/logo/main-logo.png" alt=""/>
    </div>
    <ul className="fd aic lhj">
        <a href="/" className="fd jcc aic"><li >Home</li></a>
        <a href="/about-us" className="fd jcc aic"><li >About Us</li></a>
        <a href="/blog" className="fd jcc aic"><li >Blog</li></a>
        <a href="/contact-us" className="fd jcc aic"><li >Contact Us</li></a>
        <a href="/shop" className="fd jcc aic"><li >Shop</li></a>
    </ul>
    </div></>
}

export default Navbar;