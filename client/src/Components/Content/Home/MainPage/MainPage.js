import React from 'react'
import "./MainPage.css"
import {Zoom,Fade} from "react-awesome-reveal"

const MainPage = () => {
  return (
    <div className='land-root py-96'>
    <Zoom><Fade>
    <h1 className="rounded-3xl relative px-4 py-4 w-1/4 text-center text-white" style={{backgroundColor:"#ffa900",fontWeight:"800",fontSize:"xxx-large",left:"39%"}}>AGROKART</h1>
    </Fade>
    </Zoom>
    </div>
  )
}

export default MainPage