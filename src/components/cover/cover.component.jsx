import React from 'react';

import { FaFolder } from 'react-icons/fa'

import './cover.styles.css'

const Cover = () => {
  return (
    <div className="cover-container h-screen bg-green-900 flex justify-center items-center">
      <div className="inner-container mt-10 w-96 h-96 flex justify-center items-center text-white">
        <header className='cover-title grid'>
          <h1 className='justify-self-center text-7xl mb-7 font-medium'><a href="index.html" className="logo">Folka.Dev</a></h1>
          <hr className='' />
          <p className='justify-self-center mt-7'>Otis Peters-Murphy</p>
          <div className='grid justify-center mt-5'>
            <a href="#.." className="button inline-block p-9 rounded-large bg-red-500 hover:bg-red-400 cursor-pointer"><FaFolder size={25}/></a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Cover;