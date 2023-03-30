import React from 'react';
import './card.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Card = ({ title, description, icon }) => {
  return (
    <><div style={{height:"100%",width:"100%"}}>
            <div className='card-left'>
            <img src={icon} alt="icon" />
            </div>
            <div className='card-right'> 
            <div className='right-head'>
                <h6>{title}</h6>
                <div className='arrow-icon'><a class="btn-readmore-plus" href="https://demo.7iquid.com/agrisoil/service/agriculture-products/">
                                            <ArrowForwardIcon style={{color:"white"}}/>
                                            </a></div>
            </div>
            <div className='right-body'>
                <p style={{fontWeight:"lighter"}}>
                {description}
                </p></div>
            </div>
            </div>
    </>
  );
};

export default Card;