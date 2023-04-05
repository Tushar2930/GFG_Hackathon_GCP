import React, { useState } from 'react';
import './ml_page.css';

const MlPage = () => {
  const [isLeftSectionHovered, setIsLeftSectionHovered] = useState(false);

  const handleLeftSectionHover = () => {
    setIsLeftSectionHovered(true);
  };

  const handleRightSectionHover = () => {
    setIsLeftSectionHovered(false);
  };

  const leftSectionStyle = {
    backgroundColor: isLeftSectionHovered ? '#f4d336' : 'white',
  };

  const rightSectionStyle = {
    backgroundColor: isLeftSectionHovered ? 'white' : '#f4d336',
  };

  return (
   <div className='bg-white' style={{padding:"6% 10% 6% 10%"}}>
    <div className="ml-container">
      <div className="ml-section" style={leftSectionStyle} onMouseEnter={handleLeftSectionHover}>
        <img className='ml-img' src="https://pbs.twimg.com/profile_images/583024902619316224/u0Xx7RxD_400x400.jpg" alt="placeholder" />
        <div className='px-3 pt-3 pb-1 text-center' style={{fontSize:"1.4rem"}}>Crop Recommendation</div>
        <div className='px-3 py-1 text-center' style={{fontSize:"1rem"}}>loda lassan</div>
        <button className='mx-auto px-3 py-2'>Predict</button>
      </div>
      <div className="ml-section" style={rightSectionStyle} onMouseEnter={handleRightSectionHover}>
        <img className='ml-img' src="https://pbs.twimg.com/profile_images/583024902619316224/u0Xx7RxD_400x400.jpg" alt="placeholder" />
        <div className='px-3 pt-3 pb-1 text-center' style={{fontSize:"1.4rem"}}>Fertilizer Recommendation</div>
        <div className='px-3 py-1 text-center' style={{fontSize:"1rem"}}>loda lassan</div>
        <button className='mx-auto px-3 py-2'>Predict</button>
      </div>
    </div>
  </div>
  );
};

export default MlPage;