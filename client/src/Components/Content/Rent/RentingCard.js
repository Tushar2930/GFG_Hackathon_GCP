import React,{useContext} from "react";
import "./RentingCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthorizationContext.js";


function Card({service_asked,id,name,area,price, loc , date, dur_ar,img_url,email}) {
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
        // <div class="card my-2">
        //     <div class="row no-gutters">
        //         <div class="col-md-5">
        //             <img src={img_url} class="card-img" alt="..."/>
        //         </div>
        //         <div class="col-md-7">
        //             <div class="card-body ">
        //             <h5 class="card-title">{name}</h5>
        //                 <h5 class="card-title">{service_asked}</h5>
        //                 <p class="card-text">Date :{date}</p>
        //                 <p class="card-text">Duration :{dur_ar} days</p>
        //                 <p class="card-text">Price :{price}</p>
        //                 <p class="card-hr">Area : {area}</p>
        //                 <div className="row">
        //                     <div className="col-6">{loc}</div>
        //                     <div className="col-6"><button type="button" class="btn btn-info float-right">
        //                         <button onClick={handleClick}>Give Service</button>
        //                     </button></div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            <div class="py-8 flex flex-wrap md:flex-nowrap" >
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col h-full">
          <div className="h-full">
            <img src={img_url} className="h-full w-full"/>
          </div>
          <span class="font-semibold title-font text-gray-700 text-center pt-2">{name}</span>
        </div>
        <div class="md:flex-grow flex justify-evenly flex-col">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{service_asked}</h2>
          <p class="leading-relaxed">Price : {price}</p> <p class="leading-relaxed"> Area : {area} </p> <p class="leading-relaxed">Location : {loc}</p>
          <a class=" inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-3xl mt-4 sm:w-3/4 md:w-1/6" >Give Service
          </a>
        </div>
      </div>
        </>
    )
}

export default Card;