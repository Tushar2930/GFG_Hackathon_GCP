import React, { useState } from 'react';
import './ml_page.css';
import { motion } from "framer-motion";
import crop_predict_img from "./images/crop.jpg"
import { FaBeer } from 'react-icons/fa';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

const MlPage = () => {

  return (
   <div className='' style={{padding:"1% 7% 2% 7%", }}>
    <div className='mb-4 top-ml-content' style={{fontSize:"3rem"}}>Farming Advices</div>
    <div className="ml-container">
      <div className="ml-section mx-3 left-ml-section left-ml">
        <div style={{marginTop:"50%"}}></div>
        <div className='px-3 pt-3 pb-1 text-center mt-5' style={{fontSize:"2.2rem", color:"white"}}>
          Crop Recommendation<Link to="/model-form/prediction-crop" className='ml-btn-link' style={{fontSize:"3rem"}}><BsArrowRightCircleFill className='m-auto'/></Link>
        </div>
      </div>

      <div className="ml-section mx-3 right-ml-section right-ml">
        <div style={{marginTop:"50%"}}></div>
        <div className='px-3 pt-3 pb-1 text-center mt-5' style={{fontSize:"2.2rem", color:"white"}}>
          Fertilizer Recommendation<Link to="/model-form/fertilizer" className='ml-btn-link' style={{fontSize:"3rem"}}><BsArrowRightCircleFill className='m-auto'/></Link>
        </div>
      </div>
    </div>

  </div>
  );
};

export default MlPage;