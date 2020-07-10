import React from "react";
import "./style.css";
var PORT = process.env.port || 4000;
let server = "http://localhost:"+PORT+"/donus"
// import Home from "../../components/thing/icons/home.png";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav id="nav" className="navbar" style={{ textDecoration: "none" }}>
          <ul id="navList" style={{ textDecoration: "none" }}>
            <li style={{ textDecoration: "none" }}>Muhalls</li>
            <li><a href={server}>Uplad</a></li>

          </ul>
    </nav>
  );
}

export default Navbar;
