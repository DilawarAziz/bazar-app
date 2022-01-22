import React from 'react';
import img1 from '../images/banner-1.png'
import img2 from '../images/banner-2.png'
function Banner() {
  return (
      <div className='banner-main'>
          <img src={img1} className='banner-img-1' alt='img' />
          <img src={img2} className='banner-img-2' alt='img' />
      </div>
  )
}

export default Banner;
