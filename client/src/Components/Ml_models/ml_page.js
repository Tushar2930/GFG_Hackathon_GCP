import React, { useState } from 'react';
import './ml_page.css';
import { motion } from "framer-motion";
import crop_predict_img from "./images/crop.jpg"
import { FaBeer } from 'react-icons/fa';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import FertImg from "./images/fertilizer.avif"

const MlPage = () => {
 
  return (
  //  <div className='' style={{padding:"1% 7% 2% 7%", }}>
  //   <div className='mb-4 top-ml-content' style={{fontSize:"3rem"}}>Farming Advices</div>
  //   <div className="ml-container">
  //     <div className="ml-section mx-3 left-ml-section left-ml">
  //       <div style={{marginTop:"50%"}}></div>
  //       <div className='px-3 pt-3 pb-1 text-center mt-5' style={{fontSize:"2.2rem", color:"white"}}>
  //         Crop Recommendation<Link to="/model-form/prediction-crop" className='ml-btn-link' style={{fontSize:"3rem"}}><BsArrowRightCircleFill className='m-auto'/></Link>
  //       </div>
  //     </div>

  //     <div className="ml-section mx-3 right-ml-section right-ml">
  //       <div style={{marginTop:"50%"}}></div>
  //       <div className='px-3 pt-3 pb-1 text-center mt-5' style={{fontSize:"2.2rem", color:"white"}}>
  //         Fertilizer Recommendation<Link to="/model-form/fertilizer" className='ml-btn-link' style={{fontSize:"3rem"}}><BsArrowRightCircleFill className='m-auto'/></Link>
  //       </div>
  //     </div>
  //   </div>

  // </div>
  <>
    <div>
      <div>Farming Advices</div>

      <div>
        <div className='firstImgStart'>
    {/* start of 1st */}
        <div className="w-1/2 flex" style={{height:"40vh"}}>
          <div className="h-4/5 w-4/5 flex self-start"><img className="w-full h-full" src={FertImg} /></div>
          <div className="bg-yellow-500 w-2/5 flex h-1/4 text-3xl rounded-2xl justify-center items-center text-white self-end my-8 -mx-32">Try it</div>
        </div>
        <div className='firstImgText w-1/2'>
          <p>
          There are several fertilizer prediction models available that can help determine the optimal amount and type of fertilizer to add to soil. These models use data such as soil type, weather conditions, crop history, and other factors to calculate the amount of nutrients and other additives needed to maintain or improve soil health and crop yield. By analyzing this data, the models can provide recommendations on which specific fertilizers to use and how much to apply.
          </p>
        </div>
      {/* end */}
          </div>


          <div>

          </div>
      </div>
    </div>
  </>
  );
};

export default MlPage;