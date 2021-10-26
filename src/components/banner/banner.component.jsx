import React from 'react';
import { IconContext } from 'react-icons/lib';

import {FaHtml5, FaJsSquare, FaReact, FaNodeJs, FaPython} from "react-icons/fa"
import {SiPostgresql, SiRedux} from "react-icons/si"

const Banner = () => {
  return (
    <div id="banner" className="banner-container text-center h-auto py-24 text-2xl md:text-3xl" >
      <p>Hey my name is Otis and I'm a software developer <br/>based in Brighton, uk </p>
      <footer className="mt-10 text-base grid sm:flex justify-center text-white">
        <a href="#." target="_blank" rel="noreferrer" className="button">Resume</a>
        <a href="https://uk.linkedin.com/in/otis-peters-murphy-0246941a9?trk=people-guest_people_search-card" target="_blank" rel="noreferrer" className="button">Linkedin</a>
        <a href="https://github.com/Folka2134" target="_blank" rel="noreferrer" className="button">Github</a>
      </footer>
      
      <IconContext.Provider value={{color: "#5B5B5B", size:"250"}}>
        <div className="bg-gray-200 mt-24 p-9 overflow-hidden">
          <div className="flex flex-wrap justify-around w-full">
            <div className="image"><FaHtml5 /></div>
            <div className="image"><FaJsSquare /></div>
            <div className="image"><FaReact  /></div>
            <div className="image"><FaNodeJs /></div>
            <div className="image"><SiRedux /></div>
            <div className="image"><FaPython /></div>
            <div className="image"><SiPostgresql /></div>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Banner;
