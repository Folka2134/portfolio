import React from 'react';

// import Navbar from './navbar.component';
import { FaFacebookF, FaSpotify, FaSoundcloud, FaInstagram, FaBandcamp } from "react-icons/fa";
import Logo from "../../images/testinglogo.png"

const Header = () => {
  return (
    <div className="header h-20 bg-red-400 flex  justify-center">
      <div className="header-container flex w-3/4 h-full justify-between">
        <div className="bar-container flex-1 flex items-center">
          <ul className="nav-list flex ">
            <li className="nav-item px-5">About</li>
            <li className="nav-item px-5">Music</li>
            <li className="nav-item px-5">Rigs</li>
            <li className="nav-item px-5">Contact</li>
          </ul>
        </div>
        <div className="logo flex-1 inline-flex justify-center">
          <img src={Logo} alt="logo" />
        </div>
        <div className="social-container flex-1 grid items-center justify-items-end">
          <ul className="social-list flex">
            <li className="social-item px-4"><FaFacebookF size={25}/></li>
            <li className="social-item px-4"><FaSpotify size={25}/></li>
            <li className="social-item px-4"><FaSoundcloud size={25}/></li>
            <li className="social-item px-4"><FaInstagram size={25}/></li>
            <li className="social-item px-4"><FaBandcamp size={25}/></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
