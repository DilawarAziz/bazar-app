import React from 'react';
import img from '../images/Carousel.png'
import {AiFillStar} from 'react-icons/ai'
import {BsPlusLg} from 'react-icons/bs'

function DealItems(props) {
  return( 
  <div className='deals-item-childs'>
    
    {props.type?<p>undefied % off</p>:<p>70 % off</p>}
      <img className='deals-items-img' src={img} alt="img" />
      
      <h4>{props.title}</h4>
      <div className='stars'>
        <AiFillStar size={"20px"} color='#faaf00'/>
        <AiFillStar size={"20px"} color='#faaf00'/>
        <AiFillStar size={"20px"} color='#faaf00'/>
        <AiFillStar size={"20px"} color='#faaf00'/>
        <AiFillStar size={"20px"} color='#faaf00'/>
        </div>
        
      <div className='plus-btn-main'>
          
     {props.type? <h3>{"$"}NaN</h3>:
     <h3 style={{color:"red"}}>{"$"} 2345.45 <b style={{textDecoration:"line-through" ,color:"gray"}}> {"$177.00"}</b></h3>}
      <button><BsPlusLg/></button>
      </div>
  </div>
  )
}

export default DealItems;
