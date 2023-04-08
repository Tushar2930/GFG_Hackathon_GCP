import React, { useContext } from "react";
import "./RentingCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthorizationContext.js"
import tractor_img from "./images/tractor.jpg";
import harvestor_img from "./images/harvestor.jpg"


function Card({ service_asked, id, name, area, price, address, date, duration, img_url, email }) {
  const useAuth = useContext(AuthContext);
  const handleClick = async () => {
    
    const response = await fetch('http://localhost:8000/rent/add-provider', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        email,
        cu_email: useAuth.currentUser.email
      })
    })
    const res = await response.json()
    if (res.message == "Data added successfully") {
      alert("Service added successfully");
    }
  }
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height:"28rem",
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      overflow: 'hidden',
      marginBottom:"3rem",
      justifyContent: "space-between"
    },
    imageContainer: {
      width: '50%',
      height:"auto",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: 'auto',
    },
    contentContainer: {
      width: '50%',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
    },
    name: {
      fontSize: '3rem',
      fontWeight: 'bold',
      margin: '0 0 10px 0',
      textAlign: 'center',
      alignSelf: "flex-start",
    },
    stars: {
      fontSize: '16px',
      margin: '0 0 10px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    star: {
      color: '#ffd700',
    },
    description: {
      fontSize: '16px',
      margin: '0 0 10px 0',
      textAlign: 'justify',
    },
    price: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '0 10px 0 0',
    },
    button: {
      fontSize: '16px',
      fontWeight: 'bold',
      padding: '10px 20px',
      backgroundColor: '#008CBA',
      color: '#fff',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      alignSelf: 'flex-end',
    },
  };

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
      {/* <div class="py-8 flex flex-wrap md:flex-nowrap" >
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
      </div> */}

<div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={img_url} alt="Placeholder" style={styles.image} />
      </div>
      <div style={styles.contentContainer}>
        <h2 style={styles.name}>{name}</h2>
        <div style={styles.stars}>
          <span style={styles.star}>★</span>
          <span style={styles.star}>★</span>
          <span style={styles.star}>★</span>
          <span style={styles.star}>★</span>
          <span style={styles.star}>★</span>
        </div>
        <p style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet mi lacus. Praesent suscipit nulla vel nunc faucibus, ac finibus dolor luctus.</p>
        <div style={{ display: 'flex', alignItems: 'center', alignSelf: "flex-end" }}>
          <span style={styles.price}>${price}</span>
          <button style={styles.button} onClick={handleClick}>Book Service</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card;

