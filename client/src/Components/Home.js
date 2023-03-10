import React from "react"
import Carousel from "./Carousel"
import Featured from "./Featured"
import DealsWeek from "./DealsWeek"
import Footer from "./footer"
import Poster from "./Poster"

function Home(){
return <>
    <Carousel/>
    <Featured/>
    <DealsWeek />
    <Poster />
    <Footer />
</>

}

export default Home