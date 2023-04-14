import React from "react";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
import "./MainPage.css";

const MainPage = () => {
  return <motion.div className="land-root py-20 sm:py-96 ">
  <Slide>
    <div className="nameTemp">AgroKart is a B2B agricultural e-Commerce marketplace in India<div className="sm:block hidden" >Farmers can buy Agrimachinery and tools which are widely used in Indian Culture</div></div></Slide>
  </motion.div>;
};

export default MainPage;
 