import React from "react";
import DealItems from "./deal-items";
import { BsFillLightningFill } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
function Deals(props) {
  return (
    <div style={{position:"relative"}}>
      <div className="deals-heading">
        <h1>
          <BsFillLightningFill color="red" />
          {props?.heading}
        </h1>
        <div style={{display:"flex"}}>
        <p>
          Veiw All
        </p>
          <FaGreaterThan  className="veiw-all-icon"/>
          </div>
      </div>
      <div className='deal-arrow-pt'>
        </div>
      <div style={{position:"relative"}} className={props.main?props.main:"deal-item-main"}>
       {/* {!props.main&& <BsFillArrowLeftCircleFill className='arrow1' size={"45px"}  color="#0F3460"/>} */}
        {props.data.map((v, i) => (
          <DealItems img={props.img} key={i} type={props.type} title={v.title} />
          ))}
       {/* {!props.main&&   <BsFillArrowRightCircleFill className='arrow2' size={"45px"} color="#0F3460"/>} */}
      </div>
    </div>
  );
}

export default Deals;
