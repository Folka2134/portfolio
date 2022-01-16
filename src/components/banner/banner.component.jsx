import React from 'react';
import { IconContext } from 'react-icons/lib';

import { Link } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa'

import { FaHtml5, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt, FaCss3Alt } from "react-icons/fa"
import { SiPostgresql, SiFirebase, SiExpress, SiMongodb } from "react-icons/si"



const Banner = () => {


  return (
    <div id="banner" className="banner-container bg-dark-white text-center h-auto py-24 md:pt-24 md:pb-0 text-2xl md:text-2xl" >
      <p className="">Hey my name is Otis and I'm a software developer <br />based in Brighton, uk </p>
      <footer className="mt-10 text-base grid sm:flex justify-center text-white">
        <a href="#." target="_blank" rel="noreferrer" className="button">Resume</a>
        <a href="https://uk.linkedin.com/in/otis-peters-murphy-0246941a9?trk=people-guest_people_search-card" target="_blank" rel="noreferrer" className="button">Linkedin</a>
        <a href="https://github.com/Folka2134" target="_blank" rel="noreferrer" className="button">Github</a>
      </footer>

      <IconContext.Provider value={{ size: "155", className: "icon" }}>
        <div className="bg-icon-grey2 mt-24 py-2 px-10 overflow-hidden ">
          <div className="flex flex-wrap justify-around w-full text-2xl md:text-3xl">
            <div className="group"><FaHtml5 className="hover:text-icon-red" /> <span className="iconText">HTML</span></div>
            <div className="group"><FaCss3Alt className="hover:text-blue-600" /> <span className="iconText">CSS</span></div>
            <div className="group"><FaJsSquare className="hover:text-icon-yellow2" /><span className="iconText">JavaScript</span></div>
            <div className="group"><FaReact className="hover:text-blue-400" /> <span className="iconText">React</span></div>
            <div className="group"><FaNodeJs className="hover:text-icon-green" /><span className="iconText">NodeJs</span></div>
            <div className="group"><SiExpress className="hover:text-red-700" /><span className="iconText">Express</span></div>
            <div className="group"><FaPython className="hover:text-icon-pblue" /><span className="iconText">Python</span></div>
            <div className="group"><SiPostgresql className="hover:text-icon-pgblue" /><span className="iconText">Prostgres</span></div>
            <div className="group"><SiMongodb className="hover:text-icon-green2 " /><span className="iconText">MongoDB</span></div>
            <div className="group"><FaGitAlt className="hover:text-icon-gred" /><span className="iconText">Git</span></div>
          </div>


        </div>
      </IconContext.Provider>
      <div className='projectBtn hidden md:flex w-full justify-center px-16 py-6 opacity-90 content-center'>
        <Link to="projects-container" smooth={true} className="animate-pulse rounded-large p-5 cursor-pointer text-blue-dark hover:text-icon-red transition-all duration-300 ease-linear"><FaArrowDown size={25} /></Link>
      </div>
    </div>
  );
}

export default Banner;
