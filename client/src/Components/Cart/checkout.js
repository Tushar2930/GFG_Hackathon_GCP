import React from 'react';
import "./checkout.css"


const Checkout = () => {
  return (
    <div style={{ width: '100%' }}>

      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <span className='ms-2 px-3 py-2' style={{}}>3 items</span>
        <span className='me-2 px-3 py-2' style={{}}>$ 69</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <span className='ms-2 px-3 py-2' style={{}}>Shipping</span>
        <span className='me-2 px-3 py-2' style={{}}>$ 2</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom:"5%" }}>
        <span className='ms-2 px-3 py-2' style={{}}>tax</span>
        <span className='me-2 px-3 py-2' style={{}}>$ 1</span>
      </div>

      <div className='checkout-total-line'></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <span className='ms-2 p-3'><h3>Total<span style={{fontSize:"1.4rem"}}> (tax exc.)</span></h3></span>
        <span className='me-2 p-3'><h4>$100</h4></span>
      </div>
      <div className='checkout-total-line'></div>

      <div className='mt-3' style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <button className='checkout-btn px-3' style={{width:"fit-content"}}>
            Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
