import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
import "./MainPage.css";

const MainPage = () => {
  return <motion.div className="land-root py-20 sm:py-96 ">
  <div className="data-root">
    <div className="data-head"><Slide>Welcome to </Slide><div className="flex bsdk"><Slide direction="up">Agro</Slide><div style={{color:"black"}}><Slide direction="down">Kart</Slide></div></div></div>
    {/* <div className="data-moredata">We are certified Agricultural service.
    This is one of the best platform for farmers to sell their products and for buyers to buy products directly from farmers. */}
    <div className="data-moredata">
    <Typewriter
    onInit={(typewriter)=> {
      typewriter
      .typeString("We are certified Agro-service company . This is one of the best platform for farmers to sell their products and for buyers to buy products directly from farmers.")
      .changeDelay(50)
      .start();
  }}
  />
  {/* <Typewriter
  options={{
    strings: ['We are certified Agro-service company . This is one of the best platform for farmers to sell their products and for buyers to buy products directly from farmers.'],
    autoStart: true,
    // loop: true,
    delay: 50,
  }}
/> */}
    </div>
    <div className="butn">Connect with us</div>
  </div>
  </motion.div>;
};

export default MainPage;
 