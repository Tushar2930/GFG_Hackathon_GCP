import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import "./WhatWeOffer.css";
import page_seprater from "../image/page_seprater.png";

const WhatWeOffer = () => {
  return (
    <>
      <div className="offer-root">
        <div className="bg_circle1" />
        <div className="bg_circle2" />
        <section className="text-gray-600 body-font ">
          <div
            className="container sm:px-5 sm:py-24 sm:mx-auto  "
            style={{
              width: "100vw",
              boxShadow: "none",
              background: "none",
            }}>
            <div className="flex flex-col text-center w-full mb-20 -mt-6">
              <div className="what_are_our_services text-2xl sm:text-5xl text-white py-10">
                Our Services
              </div>
              <img
                src={page_seprater}
                className="w-48 sm:w-96 flex  self-center -m-16 sm:-m-24 pb-10"
              />
              <div className="flex flex-wrap w-full  justify-center  sm:justify-around sm:m--3 sm:pl-10 sm:pr-10">
                <div className="flex flex-wrap w-full h-36 sm:h-48 sm:w-1/3  ">
                  <div className=" p-4 w-full h-full">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="what_offer_container fresh_veges flex rounded-l sm:rounded-lg h-full  sm:h-80 p-8 flex-col">
                      <div className="know_more">
                        <Fade direction="down" className="heading">
                          Fresh Vegetables
                        </Fade>
                        <p
                          style={{ fontFamily: "sans-serif" }}
                          className="none">
                          We offer fresh vegetables from farms all over india{" "}
                        </p>

                        <Link
                          to="/shop"
                          className="text-green-600 inline-flex items-center md:mb-2 lg:mb-0">
                          {" "}
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="flex flex-wrap w-full h-36 sm:h-48  sm:w-1/3">
                  <div className=" p-4 w-full">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="what_offer_container rental_services flex rounded-lg sm:h-80 p-8 flex-col">
                      <div className="know_more">
                        <Fade direction="down" className="heading">
                          Rental Services
                        </Fade>
                        <p style={{ fontFamily: "sans-serif" }}>
                          You can opt for various farm related services
                        </p>
                        <Link
                          to="/rent"
                          className="text-green-600 inline-flex items-center md:mb-2 lg:mb-0">
                          {" "}
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="flex flex-wrap w-full  h-36 sm:h-48 sm:w-1/3">
                  <div className=" p-4 w-full">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="what_offer_container farming_advicer flex rounded-lg sm:h-80 p-8 flex-col">
                      <div className="know_more">
                        <Fade direction="down" className="heading">
                          Farming Advisor
                        </Fade>
                        <p style={{ fontFamily: "sans-serif" }}>
                          You can use our multiple ML models to predict farming
                          related stuffs
                        </p>
                        <Link
                          to="/farming-advisor"
                          className="text-green-600 inline-flex items-center md:mb-2 lg:mb-0">
                          {" "}
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
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
