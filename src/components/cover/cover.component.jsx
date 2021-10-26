import React from 'react';
// import * as Scroll from "react-scroll"
import { Link } from 'react-scroll';

import { FaFolder } from 'react-icons/fa'

import './cover.styles.css'

const Cover = () => {

  


  return (
    <div className="cover-container h-screen bg-green-900 flex justify-center items-center">
      <div className="inner-container mt-10 w-96 h-96 flex justify-center items-center text-white">
        <header className='cover-title grid'>
          <h1 className='justify-self-center text-5xl md:text-7xl mb-7 font-medium'><a href="index.html">Folka.Dev</a></h1>
          <hr className='' />
          <p className='justify-self-center mt-7'>Otis Peters-Murphy</p>
          <div className='justify-self-center mt-5'>
            <Link to="banner-container" smooth={true} className="button rounded-large p-9"><FaFolder size={25}/></Link>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Cover;