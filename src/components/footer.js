import React from 'react';
// import img from '../images/playstore.png'
import img1 from '../images/p.png'
import {BiHomeAlt} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
function Footer() {
  return(
      <div style={{backgroundColor:"#0c0e30"}}> 
      <div className='footer-main'>
          <div className='footer-child'>
              <h1>bazar</h1>
              <p>The data we have provided is completely perfect there is no doubt in the data you can ask any question about the data</p>
              <img className='footerimg' src={img1} alt='img'/>
          </div>
          <div className='footer-child'>
              <h1>Contact Us</h1>
              {/* <p>The data we have provided is completely perfect there is no doubt in the data you can ask any question about the data</p> */}
              <p>we About You</p>
              <p>we care</p>
              <p>we care conditions</p>
              <p>we care policy</p>
              <p>we care conditions</p>
          </div>
          <div className='footer-child'>
              <h1>Customer Care</h1>
              {/* <p>The data we have provided is completely perfect there is no doubt in the data you can ask any question about the data</p> */}
              <p>we care About</p>
              <p>Help Center</p>
              <p>we care</p>
              <p>Help Center</p>
              <p>we care Track app</p>
          </div>
          <div className='footer-child'>
              <h1>About Us</h1>
              <p>The data we have provided you can ask any question about the data</p>
              <p>we care</p>
              <p>Email :DilawerAziz@gmail.com</p>
              <p>phone : 032395702345</p>
          </div>
      </div>
      
      <div className="footer2">
          
          <div  className='footer2-child '>
              <BiHomeAlt className='footer2-child-icon'/>
              <p>HOME</p>
          </div>
          <div className='footer2-child'>
              <BiUserCircle className='footer2-child-icon'/>
              <p>HOME</p>
          </div>
          <div   className='footer2-child cal-pt' style={{position:"relative"}}>
          <h2>3</h2>
              
              <BiHomeAlt className='footer2-child-icon'/>
              <p>HOME</p>
          </div>
          <div className='footer2-child'>
              <BiUserCircle className='footer2-child-icon'/>
              <p>HOME</p>
          </div>
         
      </div>
      </div>
  )
}

export default Footer;
