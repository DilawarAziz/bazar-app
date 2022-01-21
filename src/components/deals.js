import React from 'react';
import DealItems from './deal-items';
import {BsFillLightningFill} from 'react-icons/bs'
import {FaGreaterThan} from 'react-icons/fa'
function Deals() {
    
    let data =[
        {
        title:"Smart Watch Black"
    },
        {
        title:"Smart Watch Black"
    },
        {
        title:"Smart Watch Black"
    },
        {
        title:"Smart Watch Black"
    },
   
]
  return (
  <div>
      <div className='deals-heading'>
          
          <h1>
              <BsFillLightningFill color='red'/>
              Flash Deals
          </h1>
          <p>
              Veiw All {" "}
              <FaGreaterThan/>
          </p>
      </div>
      <div className='deal-item-main'>
      {data.map((v,i)=>(
          
      <DealItems title={v.title}/>
      ))}
      </div>
      
  </div>
  )
}

export default Deals;
