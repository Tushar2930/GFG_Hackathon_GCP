import React, { useEffect, useState } from 'react';
import './ml_page.css';
import { motion } from "framer-motion";
import crop_predict_img from "./images/crop.jpg"
import { FaBeer } from 'react-icons/fa';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import FertImg from "./images/fertilizer.avif"
import CropImg from "./images/crop.avif"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const MlPage = () => {
 
useEffect(() => {
  window.scrollTo(0, 0)
}, [])


  return (
  <>
    <div>
      <div className="px-12 py-12 text-center text-white text-6xl nuni" style={{backgroundColor:"#00715d"}}>Farming Advices</div>

      <div className="px-12 py-12" style={{backgroundColor:"#f9f5e9"}}>
        <div className='firstImgStart flex justify-center items-center px-12 py-12'>
    {/* start of 1st */}
        <div className="w-1/2 flex" style={{height:"40vh"}}>
          <div className="flex self-start" style={{width:"70%",height:"90%"}}><img className="w-full h-full"  src={CropImg} /></div>
          <Link className="bg-yellow-500  flex h-1/4 w-2/5 text-3xl rounded-2xl justify-center items-center text-white -mx-56" to="/model-form/prediction-crop" style={{alignSelf:"end"}}><div className="bg-yellow-500  flex h-1/4 text-3xl rounded-2xl justify-center items-center text-white self-center -mx-56">Try it<ArrowForwardIcon style={{width: "4rem",
    height: "2rem"}}/> </div></Link>
        </div>
        <div className='firstImgText w-1/2'>
        <h2 className="text-3xl mb-12 nuni" style={{fontWeight:"900"}}>Crop Recommendation</h2>
          <p className='sans'>
          A crop recommendation model is a machine learning model that recommends the best crop to grow based on factors such as soil composition , pH level, rainfall, and geographical location. This model is designed to help farmers make informed decisions about their farming strategies and maximize their crop yields. The model can be built using various techniques such as ensembling, recurrent neural networks with Long Short-Term Memory (LSTM) neuron models , or improved distribution based chicken swarm optimization (IDCSO) with weight-based LSTM 
          </p>
        </div>
      {/* end */}
          </div>
          <div className='firstImgStart flex justify-center items-center px-12 py-12'>
    {/* start of 1st */}
        <div className="w-1/2 flex" style={{height:"40vh"}}>
          <div className="flex self-start" style={{width:"70%",height:"90%"}}><img className="w-full h-full"  src={FertImg} /></div>
          <Link className="bg-yellow-500  flex h-1/4 w-2/5 text-3xl rounded-2xl justify-center items-center text-white -mx-56" to="/model-form/fertilizer" style={{alignSelf:"end"}}><div className="bg-yellow-500  flex h-1/4 text-3xl rounded-2xl justify-center items-center text-white self-center -mx-56">Try it<ArrowForwardIcon style={{width: "4rem",
    height: "2rem"}}/> </div></Link> 
        </div>
        <div className='firstImgText w-1/2'>
        <h2 className="text-3xl mb-12 nuni" style={{fontWeight:"900"}}>Fertilizer Recommendation</h2>
          <p className='sans'>
          There are several fertilizer prediction models available that can help determine the optimal amount and type of fertilizer to add to soil. These models use data such as soil type, weather conditions, crop history, and other factors to calculate the amount of nutrients and other additives needed to maintain or improve soil health and crop yield. By analyzing this data, the models can provide recommendations on which specific fertilizers to use and how much to apply.
          </p>
        </div>
      {/* end */}
          </div>
      </div>
    </div>
  </>
  );
};

export default MlPage;