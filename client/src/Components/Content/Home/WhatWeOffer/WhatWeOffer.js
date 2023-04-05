import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import "./WhatWeOffer.css";
import what_we_offer from "../image/what_we_offer.png";
import bg from "../image/bg.png";

const WhatWeOffer = () => {
  return (
    <>
      <div className="offer-root">
        <section class="text-gray-600 body-font ">
          <div
            class="container px-5 py-24 mx-auto  "
            style={{
              width: "100vw",
              boxShadow: "none",
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
            }}>
            <div class="flex flex-col text-center w-full mb-20 mt-10">
              <img
                src={what_we_offer}
                className="floating w-96 flex self-center m--10px"
              />
              <div className="flex flex-wrap w-full justify-around m--3">
                <div class="flex flex-wrap  w-80  rounded-2xl ">
                  <div class=" p-4 w-full">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      class="what_offer_container fresh_veges flex rounded-lg h-80 p-8 flex-col">
                      <div className="know_more">
                        <Fade direction="down" className="heading">
                          Fresh Vegetables
                        </Fade>
                        <p>
                          we offer fresh vegetables from farms all over india{" "}
                        </p>
                        <a
                          href="#"
                          className="text-green-600 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                            class="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div class="flex flex-wrap  w-80">
                  <div class=" p-4 w-full">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      class="what_offer_container rental_services flex rounded-lg h-80 p-8 flex-col">
                      <div className="know_more">
                        <Fade direction="down" className="heading">
                          Rental Services
                        </Fade>
                        <p>You can opt for various farm related services</p>
                        <a
                          href="#"
                          className="text-green-600 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                            class="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div class="flex flex-wrap  w-80">
                  <div class=" p-4 w-full">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      class="what_offer_container farming_advicer flex rounded-lg h-80 p-8 flex-col">
                      <div className="know_more">
                        <Fade direction="down" className="heading">
                          Farming Advisor
                        </Fade>
                        <p>
                          You can use our multiple ml modles to pridict farming
                          realate stuff
                        </p>
                        <a
                          href="#"
                          className="text-green-600 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                            class="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhatWeOffer;
