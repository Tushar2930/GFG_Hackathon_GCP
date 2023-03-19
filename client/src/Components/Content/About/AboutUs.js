import React from "react";
import "./AboutUs.css"
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";


function About(){

    return (
        <div class="fluid-container" style={{paddingRight:"10.5px", paddingLeft:"10.5px"}}>
            <div class="" style={{marginRight:"6%", marginLeft:"6%"}}>
                <ContactComponent />
                <div class="my-5"></div>
                <AboutComponent />
            </div>
        </div>
    )
}

export default About;