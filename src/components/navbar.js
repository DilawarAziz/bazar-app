import { React, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiCalendarCheck } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
function Navbar() {
  const [bool, setbool] = useState(false);
  const [bool2, setbool2] = useState(false);

  const toggle = () => {
    if (bool) {
      setbool(false);
    } else {
      setbool(true);
    }
  };
  const toggle2 = () => {
    console.log("toggle2");
    if (bool2) {
      setbool2(false);
    } else {
      setbool2(true);
    }
  };
  console.log(bool2);
  return (
    <>
      <div className="before-nav" >
        <div className="navbar-main">
          <h1 className="bazarheading">bazar</h1>
          <div className="searchparent">
            <div className="search-icons">
              <AiOutlineSearch size={"25px"} />
              <input type="text" placeholder="Searching for ..." />
            </div>
            <div onClick={toggle2} className="nav-all-cat">
              <div className="search-cat-pt">
              <p className="search-cat">All Categories </p>
              <AiOutlineDown />
              </div>
              {bool2 && (
                <ul>
                  <li>Home</li>
                  <li>Pages</li>
                  <li>Pages</li>
                  <li>User Account</li>
                  <li>Vendor Account</li>
                  <li>Home</li>
                  <li>Pages</li>
                  <li>Vendor Account</li>
                  <li>Back to Demos</li>
                </ul>
              )}
            </div>
          </div>
          <div className="nav-icons-main">
            <div className="nav-icon">
              <FaRegUser />
            </div>
            <div  className="nav-icon cal-pt">
              <BiCalendarCheck />
              <h2>3</h2>
            </div>
          </div>
        </div>
        <div style={{ boxShadow: "rgb(128 128 128 / 6%) 0px 13px 18px" }}>
          <div className="navbar-main2">
            <div onClick={toggle} className="nav-cat">
              <div className="nav-cat-icons-pt">
                <p>
                  <BsFillMenuButtonFill
                    style={{ marginRight: "12px", color: "black" }}
                  />
                  Categories
                </p>
                {bool ? <AiOutlineDown /> : <AiOutlineRight />}
              </div>
              {bool && (
                <ul>
                  <li>Home</li>
                  <li>Pages</li>
                  <li>Pages</li>
                  <li>User Account</li>
                  <li>Vendor Account</li>
                  <li>Home</li>
                  <li>Pages</li>
                  <li>Vendor Account</li>
                  <li>Back to Demos</li>
                </ul>
              )}
            </div>
            <ul>
              {["Home", "User Account", "Pages", "Vendor Account", "Pages"].map(
                (i, index) => (
                  <li key={index}>
                    <a href="">{i} </a>
                    <div className="dropdown-cat">
                      <ul>
                        <li>Home</li>
                        <li>Pages</li>
                        <li>Pages</li>
                        <li>User Account</li>
                        <li>Vendor Account</li>
                        <li>Home</li>
                        <li>Pages</li>
                        <li>Vendor Account</li>
                        <li>Back to Demos</li>
                      </ul>
                    </div>
                  </li>
                )
              )}
              {/* <li>Pages</li>
          <li>User Account</li>
          <li>Vendor Account</li>
          <li>Back to Demos</li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
