import React from "react";
import img from "../images/watch.png";
import img1 from "../images/Carousel.png";
import img2 from "../images/flash-3.png";
import img4 from '../images/camera-1.png'
import flash from '../images/flash4.png'
import { BsFillLightningFill } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
import {AiFillStar} from 'react-icons/ai'

function Rating() {
  let data = [1, 2, 3, 4];
  return (
    <div className="rating-main">
      <div className="rating1">
      <div className="deals-heading">
        <h1>
          <BsFillLightningFill color="red" />
          Flash Deals
        </h1>
        <p>
          Veiw All
          <FaGreaterThan />
        </p>
      </div>
      <div className="rating1main"> 
        {data.map((v, i) => (
          <div key={i} className="rating1child">
            <img src={img4} alt="" />
            <div className='stars'>
        <AiFillStar size={"20px"} color='#faaf00'/>
        <AiFillStar size={"20px"} color='#faaf00'/>
        <AiFillStar size={"20px"} color='#faaf00'/>
        <AiFillStar size={"20px"} color='#faaf00'/>
        <AiFillStar size={"20px"} color='#faaf00'/>
        {/* <p>{"(45)"}</p> */}
        </div>
            <h3>phone</h3>
            <h4>{"$"} 2345</h4>
          </div>
        ))}
        </div>
      </div>
      <div className="rating2">
      <div className="deals-heading">
        <h1>
          <BsFillLightningFill color="red" />
          Top Rating
        </h1>
        <p>
          Veiw All
          <FaGreaterThan />
        </p>
      </div>
      <div className="rating2main">
      <div className="rating2imgpt">
        <img  src={flash} alt=""/>
        <h4>Green plant</h4>
      </div>
      <div className="rating2imgpt">
        <img src={flash} alt=""/>
        <h4>Green plant</h4>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Rating;
