import React,{useContext} from "react";
import "./RentingCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../../context/AuthorizationContext";


function Card({ service_asked,id,name,area,price, loc , date, dur_ar,img_url,email}) {
    const useAuth = useContext(AuthContext);
const handleClick=async ()=>{
    const response=await fetch('http://localhost:8000/rent/add-provider',{
         method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id,
            email,
            cu_email:useAuth.currentUser.email
        })
    })
    const res=await response.json()
    if(res.message=="Data added successfully"){
        alert("Service added successfully");
    }
}
    return (
        <div class="card my-2">
            <div class="row no-gutters">
                <div class="col-md-5">
                    <img src="" class="card-img" alt="..."/>
                </div>
                <div class="col-md-7">
                    <div class="card-body ">
                    <h5 class="card-title">{name}</h5>
                        <h5 class="card-title">{service_asked}</h5>
                        <p class="card-text">date :{date}</p>
                        <p class="card-text">duration :{dur_ar} days</p>
                        <p class="card-text">price :{price}</p>
                        <p class="card-hr"></p>
                        <div className="row">
                            <div className="col-6">{loc}</div>
                            <div className="col-6"><button type="button" class="btn btn-info float-right">
                                <button onClick={handleClick}>Give Service</button>
                            </button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;