import React from "react";
import Logo from "../assets/farmer.webp";
import {Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className= "navbar">
        <div className= "leftSide">
            <img src= {Logo} />
        </div>
        <div className= "rigthSide">
          <Link to="/"> Home</Link>
          <Link to="/login"> Login </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      
    </div>
  )
}

export default Navbar
