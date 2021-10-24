import React from 'react';

// import Navbar from './navbar.component';
// import { FaFacebookF, FaSpotify, FaSoundcloud, FaInstagram, FaBandcamp } from "react-icons/fa";
import Logo from "../../images/testinglogo.png"

const Header = () => {
  return (
    <div className="header h-20 bg-red-400 flex  justify-center">
      <div className="header-container flex w-3/4 h-full justify-between">
        <div className="bar-container flex-1 flex items-center">
          <ul className="nav-list flex ">
            <li className="nav-item px-5">About</li>
            <li className="nav-item px-5">Projects</li>
            <li className="nav-item px-5">Contact</li>
          </ul>
        </div>
        <div className="logo inline-flex">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
