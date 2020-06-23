import React from "react";
import "./style.css";
import pic from "../../images/ok.jpg";
import pic2 from "../../images/ok2.jpg";

const names = [pic, pic2]


function Donus() {
  console.log(names);
  return (
    <div id="wallBox">
      {names.map((name) => (
        <div id="picBox">
          <img src={name} alt="donus" />{" "}
          <div id="linkBox">
            <a href={name}>Original</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Donus;
