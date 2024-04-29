import React from "react";
import "./Navbar.css";
import logo from "..//Resources/LogoApp.png";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#FFFFFF", width: "100%", height: "20%" }}
    >
      <div className="imageNav-container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" className="imageNav" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
