import React from "react";
import "./style.css";
// var PORT = process.env.port || 4000;
let server = 'https://18cd229e481c.ngrok.io'

// let ping = "http://localhost:"+process.env.PORT || 8080
// import Home from "../../components/thing/icons/home.png";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav id="nav" className="navbar" style={{ textDecoration: "none" }}>
          <ul id="navList" style={{ textDecoration: "none" }}>
            <li style={{ textDecoration: "none" }}>MuhWalls</li>
            <li><a href={server}>Uplad</a></li>
            {/* <li><a href={ping}>Ping</a></li> */}


          </ul>
    </nav>
  );
}

export default Navbar;
