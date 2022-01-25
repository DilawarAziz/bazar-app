import React from 'react';
import img from "../images/watch.png";
import img1 from "../images/Carousel.png";
import img2 from "../images/flash-3.png";
import img4 from '../images/camera-1.png'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import flash from '../images/flash4.png'
import { BsFillLightningFill } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
function Arrival(props) {
    let data = [
        1,2,3,4,5,6
    ]
  return(
      <div>
          <div className="deals-heading">
        <h1>
          <BsFillLightningFill color="red" />
         {props.heading}
        </h1>
        <div style={{display:"flex"}}>
        <p>
          Veiw All
        </p>
          <FaGreaterThan  className="veiw-all-icon"/>
          </div>
      </div>
      
      <div style={{position:"relative"}} className={props.main?props.main:"arrival-items-main"}>
      {/* {props.main&&<BsFillArrowLeftCircleFill className='arrow1' size={"45px"}  color="#0F3460"/>} */}
        {data.map((v, i) => (
            <div key={i} className={props.item ?props.item:'arrival-itmes'}>
                <img src={props.img} alt=''/>
                <p>phone</p>
            <h4>{"$"} 2345 {props.main&& <b style={{textDecoration:"line-through" ,color:"gray"}}> {"$177"}</b>} </h4>
            
            </div>
        ))}
        {/* {props.main&& <BsFillArrowRightCircleFill className='arrow2' size={"45px"} color="#0F3460"/>} */}
      </div>
      </div>
  )
}

export default Arrival;
