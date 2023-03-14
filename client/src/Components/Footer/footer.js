import React  from "react";
import "./footer.css";
import make_in_india_img from "./images/make_in_india.png" 
import { Link } from "react-router-dom";
import { FiMail } from 'react-icons/fi';
import { FaPhoneAlt } from "react-icons/fa"
import { FiClock } from "react-icons/fi"
import { BsFacebook } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsGoogle } from "react-icons/bs"



function Footer() {
    const screenSize = window.innerWidth;

    if (screenSize < 600) {
        console.log("small screen")
        return (
            <footer id="accordion-footer" className="accordion-footer container-fluid">
            <div class="footer-accordion accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <b>AGROKART</b>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <p class="footer-text-font">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.</p>
                            <div>
                                <span className="footer-social-media-icons-sm"><Link className="sm-icons-links" to=""><BsFacebook/></Link></span>
                                <span className="footer-social-media-icons-sm"><Link className="sm-icons-links" to=""><BsLinkedin/></Link></span>
                                <span className="footer-social-media-icons-sm"><Link className="sm-icons-links" to=""><BsGoogle/></Link></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <b>My ACCOUNT</b>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div className="footer-head-div-1 mt-0">
                                <span className="footer-div1-font-sm "><FiMail />  Email: </span>
                                <span className="footer-text-font-sm">agrotech@gmail.com</span>
                            </div>
                            <div className="footer-head-div-1">
                                <span className="footer-div1-font-sm"><FaPhoneAlt />  Phone: </span>
                                <span className="footer-text-font-sm">9211</span>
                            </div>
                            <div className="footer-head-div-1">
                                <span className="footer-div1-font-sm"><FiClock />  Opening: </span>
                                <span className="footer-text-font-sm">24/7</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <b>CUSTOMER SERVICES</b>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div className="footer-head-div-2 footer-text-font mt-0"><Link className="cs-links" to="">Contact Us</Link></div>
                            <div className="footer-head-div-2 footer-text-font"><Link className="cs-links" to="">Customer Service</Link></div>
                            <div className="footer-head-div-2 footer-text-font"><Link className="cs-links" to="">FAQs</Link></div>
                            <div className="footer-head-div-2 footer-text-font"><Link className="cs-links" to="">Order & Returns</Link></div>
                            <div className="footer-head-div-2 footer-text-font"><Link className="cs-links" to="">Consultancy</Link></div>
                        </div>
                    </div>
                </div>

                <div className="footer-horizontal-line"></div>

                <div className="footer-lower-sm text-center footer-text-font">©2023 AgroKart. All rights reserved.</div>
                <div className="footer-lower-sm text-center footer-text-font">
                    {/* Here images of cards will be displayed */}
                </div>
            </div>
            </footer>
        );

      } else {
        console.log("large screen")
        return (
            <footer id="main-footer" className="footer container-fluid">
                <div>
                    <div className="footer-head row" id="accordionFlushExample">
                        <div className="col footer-col footer-head-col" id="flush-headingOne">
                            <h2 className="footer-h2"><b>AGROKART</b></h2>
                            <p class="footer-text-font">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.</p>
                            <div>
                                <span className="footer-social-media-icons"><Link className="sm-icons-links" to=""><BsFacebook/></Link></span>
                                <span className="footer-social-media-icons"><Link className="sm-icons-links" to=""><BsLinkedin/></Link></span>
                                <span className="footer-social-media-icons"><Link className="sm-icons-links" to=""><BsGoogle/></Link></span>
                            </div>
                        </div>

                        <div className="col footer-col footer-head-col" id="flush-headingTwo">
                            <h2 className="footer-h2"><b>My ACCOUNT</b></h2>
                            <div className="footer-head-div-1">
                                <span className="footer-div1-font"><FiMail />  Email: </span>
                                <span className="footer-text-font">agrotech@gmail.com</span>
                            </div>
                            <div className="footer-head-div-1">
                                <span className="footer-div1-font"><FaPhoneAlt />  Phone: </span>
                                <span className="footer-text-font">9211</span>
                            </div>
                            <div className="footer-head-div-1">
                                <span className="footer-div1-font"><FiClock />  Opening: </span>
                                <span className="footer-text-font">24/7</span>
                            </div>
                        </div>

                        <div className="col footer-col footer-head-col" id="flush-headingThree">
                            <h2 className="footer-h2"><b>CUSTOMER SERVICES</b></h2>
                            <div className="footer-head-div-2 footer-text-font mt-0"><Link className="cs-links" to="">Contact Us</Link></div>
                            <div className="footer-head-div-2 footer-text-font"><Link className="cs-links" to="">Customer Service</Link></div>
                            <div className="footer-head-div-2 footer-text-font"><Link className="cs-links" to="">FAQs</Link></div>
                            <div className="footer-head-div-2 footer-text-font"><Link className="cs-links" to="">Order & Returns</Link></div>
                            <div className="footer-head-div-2 footer-text-font"><Link className="cs-links" to="">Consultancy</Link></div>
                        </div>
                    </div>

                    <div className="footer-horizontal-line"></div>

                    <div className="footer-base row">
                        <div className="footer-lower-left col footer-text-font">©2023 AgroKart. All rights reserved.</div>
                        <div className="footer-lower-right col">
                            {/* Here images of cards will be displayed */}
                        </div>
                    </div>
                </div>
            </footer>
        );
      }

}

export default Footer;

