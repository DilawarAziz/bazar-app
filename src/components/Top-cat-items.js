import React from "react";
import img from "../images/watch.png";
import flash2 from "../images/flash5.png";
import flash1 from "../images/flash6.png";
import flash from '../images/flash4.png'
function Topcatitems() {
  return (
    <div className="top-items-childs">
      <div className="top-img-pt">
        <img src={flash2} alt="img" />
        <img src={flash1} alt="img" />
        <img src={flash2} alt="img" />
      </div>
      <div className="top-items-title-pt">
        <h5>watch</h5>
        <h6>3k orders this week</h6>
      </div>
    </div>
  );
}

export default Topcatitems;
