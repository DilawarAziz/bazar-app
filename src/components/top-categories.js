import React from "react";
import Topcatitems from "./Top-cat-items";
import { BsFillLightningFill } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
function Topcategories() {
  let data = [
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
  ];
  return (
    <div>
      <div className="deals-heading">
        <h1>
          <BsFillLightningFill color="red" />
          Top Categories
        </h1>
        <p>
          Veiw All <FaGreaterThan />
        </p>
      </div>
      <div className="top-cat-main">
        {data.map((v, i) => (
          <Topcatitems key={i} title={v.title} />
        ))}
      </div>
    </div>
  );
}

export default Topcategories;
