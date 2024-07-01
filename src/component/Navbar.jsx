import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Navbar() {


  return (
    <>

      <nav id="block-style-main-menu">
        <label for="drop" className="toggle">Menu</label>
        <input type="checkbox" id="drop" />

        <ul className="menu with-js opacity">
          <li className="first leaf">
            <Link to="/" title="Home">Home</Link>
          </li>
          <li className="leaf">
            <Link to="/about" title="About Us">About Us</Link>
          </li>
          <li className="leaf">
            <Link to="/Image-Gallery" title="Image Gallery">Image Gallery</Link>
          </li>
          <li className="leaf">
            <Link to="/registration" title="Registration">Registration</Link>
          </li>
          <li className="leaf">
            <Link to="/course" title="Course">Course</Link>
          </li>
          <li className="leaf">
            <Link to="/contact" title="Contact Us">Contact Us</Link>
          </li>
          
          <li className="leaf">
            <a href="https://www.nielit.gov.in/index.php" title=" NIELIT HQ"> NIELIT HQ</a>
          </li>
        </ul>

      </nav>


    </>

  );
}

export default Navbar;
