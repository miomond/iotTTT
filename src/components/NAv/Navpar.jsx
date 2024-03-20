import React from 'react'
import Home from "../icons/Home.jsx";
import BlgIcon from "../icons/BlgIcon.jsx";
import ContactIcon from "../icons/ContactIcon.jsx";
import Rgis from "../icons/Rgis.jsx";
import { useState, useEffect } from "react";
import OGO from "../../assets/internet-of-things-icon-vector.png";
import About from "../../assets/SVG.png";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navpar.css";
import "./responsive.css"




import semiLogo from "../../assets/navStarter.png";
import { NavLink } from 'react-router-dom';



function Navpar() {
  const [rotateValue, setRotateValue] = useState(0);

  return (
    <Navbar collapseOnSelect expand="lg" id="navo"  style={{height:'fit-content' , padding:'0px 10px'}}>
    <img className="semiLogo"  src={semiLogo} alt="semi logo" />
      <Navbar.Brand href="/">
      <img  className="ogo "  style={{ transform: `rotate(${rotateValue}deg)`, width: "50px" }}  src={OGO}  alt="LOGO"  />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className=" me-auto Navy   ">
          <NavLink to="/" className='ah '>
            <Home/> <span className='ms-2'>Home</span>
          </NavLink>
          <NavLink className='ah' to="/Blog">
            <BlgIcon /> <span className='ms-2'>our blogs</span> {" "}
          </NavLink>
          <NavLink className='ah' to="/about">
            {" "}
            <img  style={{width:30}} src={About} alt="about logo"></img><span className='ms-3'>About us</span> 
          </NavLink>
          <NavLink className='ah' to="/contactUs">
            <ContactIcon /> <span className='ms-3'>Contact us</span> {" "}
          </NavLink>
        </Nav>
        <Nav>
              <NavLink eventKey={2} to="/login" className="login">
                Login
              </NavLink>
              <NavLink eventKey={2} to="/register" className="Register">
                {" "}
                <Rgis /> <span className='ms-2'>Register</span>
                <div className="icon">
                  <svg
                    height={24}
                    width={24}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </NavLink>
        </Nav>
      </Navbar.Collapse>
  </Navbar>  )
}

export default Navpar;
