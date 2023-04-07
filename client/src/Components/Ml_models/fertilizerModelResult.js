import React from 'react'


const FertilizerModelResult = ({prediction}) => {
  return (
    <div className='container-fluid bg-white py-4'>
            <div className='row text-center my-2' style={{fontSize:"2rem"}}>
                <div>
                    Prediction Result
                </div>
            </div>
            <div className='row text-center my-2'>
                <div dangerouslySetInnerHTML={{__html: prediction.replace(/\n/g,'<br />')}}/>
            </div>
            </div>
  )
}

export default FertilizerModelResult