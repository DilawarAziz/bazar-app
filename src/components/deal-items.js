import React from 'react';
import img from '../images/Carousel.png'

function DealItems(props) {
  return( 
  <div className='deals-item-childs'>
      <img className='deals-items-img' src={img} alt="img" />
      <h4>{props.title}</h4>
      <div className='plus-btn-main'>
          
      <h3>{"$"}NaN</h3>
      <button>+</button>
      </div>
  </div>
  )
}

export default DealItems;
