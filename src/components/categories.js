import React from 'react';
import img from "../images/watch.png";
import img1 from "../images/Carousel.png";
import img2 from "../images/flash-3.png";
import img4 from '../images/camera-1.png'
import flash from '../images/flash4.png'
import { BsFillLightningFill } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
function Categories() {
    let data =[ "Mobiles",'Electronics' ,"Fashion" , "Laptop" , "Desktop" ,"Camera","Mobiles",'Electronics' ,"Fashion" , "Laptop" , "Desktop" ,"Camera"]
  return (
      <div >
          <div className="deals-heading">
        <h1>
          <BsFillLightningFill color="red" />
          Categories
        </h1>
        <p>
          Veiw All
          <FaGreaterThan />
        </p>
      </div>
      <div className='categories-main'>
          {data.map((v,i)=>(
              <div key={i}className='categories-list'>
                  <img src={img} alt=''/>
                  <h5>{v}</h5>
                  {/* {console.log(v)} */}

              </div>
          ))}
          </div>
      </div>
  )
}

export default Categories;
