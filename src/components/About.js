import React from 'react';
import {FaHeadphonesAlt} from 'react-icons/fa'
function About() {
    let data =[
        {
            heading :"Worldwide Delivery",
            detail:"we offer prices on over 100 million plus product any range million"
        },
        {
            heading :"About us",
            detail:"we offer prices on over 100 million plus product any range million"
        },
        {
            heading :"Customer Care",
            detail:"we offer prices on over 100 million plus product any range million"
        },
        {
            heading :"Contact Us",
            detail:"we offer prices on over 100 million plus product any range million"
        },
    ]
  return (
      <div className='about-main'>
          {data.map((v,i)=>(
              <div key={i} className='about-items'>
                  <div >
                  <FaHeadphonesAlt size={"40px"} color={'gray'}/>
                  </div>
                  <h3> {v.heading}</h3>
                  <p>{v.detail}</p>
              </div>
          ))}
      </div>
  )
}

export default About;
