import React from 'react'
import './WhatWeOffer.css'
import Card from './WhatCard'

const WhatWeOffer = () => {
  return (
    <>
        <div className="offer-root">
        <span className='offer-heading'>
                What We <strong>Offer</strong>
                <br />
            Selection Of <strong>Products</strong>     
      </span>
      <div className="container off-cont" style={{height:"60%",width:"100%",background:"none",boxShadow:'none'}}>
      <Card
        title="Fresh Vegetables"
        description="We provide organic farming services that grow healthy and sustainable crops without harmful chemicals."
        icon={"https://demo.7iquid.com/agrisoil/wp-content/uploads/2022/09/raw-carrots-beetroots-counter-550x600.jpg"}
      />
      <Card
        title="Agriculture Services"
        description="We offer farming services that help you grow crops efficiently and increase your yield."
        icon={"https://demo.7iquid.com/agrisoil/wp-content/uploads/2022/08/testimonial-10-550x600.jpg"}
      />
      <Card
        title="Farm Fresh Produce"
        description="Our algorithms can provide you with valuable insights and guidance to increase your yield."
        icon={"https://demo.7iquid.com/agrisoil/wp-content/uploads/2022/09/closeup-chemist-scientist-injecting-nature-strawberry-with-chemical-pesticides-550x600.jpg"}
      />
    </div>

        </div>
    </>
  )
}

export default WhatWeOffer