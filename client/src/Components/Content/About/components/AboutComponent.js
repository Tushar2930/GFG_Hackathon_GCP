import React from "react";
import "./AboutComponent.css"
import AboutCard from "./AboutCard";

function AboutComponent(){

    return (
        <div class="">
            <div class="row">
                <h2 class="text-center">Contact Our Team</h2>
            </div>
            <div class="row">
                <div class="col-3"><AboutCard /></div>
                <div class="col-3"><AboutCard /></div>
                <div class="col-3"><AboutCard /></div>
                <div class="col-3"><AboutCard /></div>
            </div>
        </div>
    )
}

export default AboutComponent;