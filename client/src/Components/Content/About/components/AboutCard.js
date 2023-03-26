import React from "react";


function AboutCard({ name, description, contact_num, img_url}){

    return (
            <div class="card p-1 m-4 ">
                <img class="card-img-top" src={img_url} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <button type="button" class="btn btn-large btn-block d-flex flex-nowrap overflow-visible" id="aa" >Contact</button>
                </div>
            </div>
    )
}

export default AboutCard;