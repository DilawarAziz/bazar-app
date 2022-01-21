import React from 'react';
import {FaRegUser} from 'react-icons/fa'
import {BiCalendarCheck} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMenuButtonFill} from 'react-icons/bs'
function Navbar() {
  return (
      <>
        <div className='navbar-main'>
      <h1 className='bazarheading'>
          bazar
      </h1>
      <div className='searchparent'>
          <div className='search-icons'>
          <AiOutlineSearch size={"25px"}/>
          </div>
      <input type="search"  placeholder='Searching for...'/>
      <p className='search-cat'>All Categories</p>
      </div>
      <div className='nav-icons-main'>
      <div className='nav-icon'>
      <FaRegUser/>
      </div>
      <div className='nav-icon'>
      <BiCalendarCheck/>
      </div>
      </div>
  </div>
  <div className='navbar-main2'>
      <div className='nav-cat'>
          <BsFillMenuButtonFill/>
  <p >Categories</p>
  </div>
          <ul>
              <li>Home</li>
              <li>Pages</li>
              <li>User Account</li>
              <li>Vendor Account</li>
              <li>Back to Demos</li>
          </ul>
  </div>
  
  </>

  )
}

export default Navbar;
