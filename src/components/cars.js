import React from 'react';
import Deals from './deals';
import {FcAutomotive} from 'react-icons/fc'
function Cars(props) {
    let data1 =["ferrari" ,3,546,6,7,4]
    console.log(props.heading);
  return(
      <div className='cars-main'>
          <div className='cars-category'>
              <div className='cat-more-pt'>
                  <h3>Brands</h3>
                  <h3 style={{color:"gray" ,borderLeft:"2px solid gray", paddingLeft:"37px"}}>Shops</h3>
              </div>
              {
                  data1.map((v,i)=>(
                      <div key={i} className='cars-cat-items'>
                        <p>  <FcAutomotive className='car-icon' size={"20px"} style={{marginLeft : "12px ",marginRight :"12px"}}/>
                         { props.data.length===6?"ferrari": props.heading==="Mobiles"?"mobiles" :props.heading==="Optics"?"Optics":"Optics"}
                          </p>
                      </div>
                  ))
              }

          </div>
<Deals img={props.img} heading={props?.heading}  data={props.data} main={"cars-items-main"}/>
      </div>


  )
}

export default Cars;
