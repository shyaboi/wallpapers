import React from "react";
import "./style.css";
// import Home from "../../components/thing/icons/home.png";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav id="nav" className="navbar" style={{ textDecoration: "none" }}>
          <ul id="navList" style={{ textDecoration: "none" }}>
            <li style={{ textDecoration: "none" }}>Muhalls</li>
            <li>things</li>

          </ul>
    </nav>
  );
}

export default Navbar;
