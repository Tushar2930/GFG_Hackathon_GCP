import React from "react";
import "./card.css"


function Card(props){

    return <>
        <div className="cardRoot">
            <div className="imgp">
                <img src={props.src}/>
            </div>
            <div className="vname">
                <h6>{props.name}</h6>
            </div>
            <div className="vprice"><small>
                {props.price}
            </small></div>
        </div>
    </>

}

export default Card;