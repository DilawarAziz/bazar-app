import React from 'react';
import Deals from './deals';
import {FcAutomotive} from 'react-icons/fc'
function Cars(props) {
    let data1 =["ferrari" ,3,546,6,7,4]
  return(
      <div className='cars-main'>
          <div className='cars-category'>
              {
                  data1.map((v,i)=>(
                      <div key={i} className='cars-cat-items'>
                        <p>  <FcAutomotive size={"20px"} style={{marginLeft : "12px ",marginRight :"12px"}}/>
                         { props.data.length===6?"ferrari":"mobiles"}
                          </p>
                      </div>
                  ))
              }

          </div>
<Deals heading={props?.heading} heading={"cars"} data={props.data} main={"cars-items-main"}/>
      </div>


  )
}

export default Cars;
