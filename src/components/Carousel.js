import React from 'react';
import img from '../images/Carousel.png'
function Carousel() {
  return(
      <>
      <div style={{backgroundColor:"white"}}> 
               <div className='Carousel-main'>
  <div className='Carousel-heading'>
      <h1>50% Off For Your First Shopping </h1>
      <p>ui porro iste error Reprehenderit idunt fugit!  idunt fugit! Reprehenderit Reprehenderit uloremque,enim .</p>
      <div className='Carousel-btn-pt'>
      <button ><h3>Shop Now</h3></button>
      </div>
  </div>
  <div className='Carousel-img-pt'>
      <img src={img} alt="img" />
  </div>
  </div>
  </div>

  </>
  )
}

export default Carousel;
