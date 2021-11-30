import React from 'react';
// import { bounce } from 'react-animations';


import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa'

import smartBrainPreview from "../../images/smartbrain_preview2.png"
import kingsHifiPreview from "../../images/kingshifi_preview.png"
import weatherFlipPreview from "../../images/weatherflip_preview.png"


const Projects = () => {
  return (
    <div id="projects" className="projects-container bg-dark-white h-auto pb-1 ">
      <Link to="projects-container" smooth={true}><h1 className="w-full mb-8 h-10 text-4xl font-medium text-center text-white bg-space-background bg-bottom bg-cover bg-fixed cursor-pointer title">Projects</h1></Link>
      <div className="project-list grid grid-cols-1 md:grid-cols-3">
        <div className="rounded overflow-hidden shadow-md hover:shadow-2xl mx-5 mb-8 transition-all duration-300 ease-linear">
          <img className="w-full" src={smartBrainPreview} alt="Mountain" />
          <div className="px-6 py-4 flex">
            <div className="flex-1 border-r-4 p-4">
              <header className="font-bold text-xl mb-2">Face Detection App</header>
              <p className="text-gray-700 text-lg">
                This app was created to "detect" faces within an image and also update a signed in user's "rank".
              <br></br>
              <br></br>
                The detection is performed by pulling data from an api and the users are stored within my own database.
              </p>
            </div>
            <div className="flex-1 pl-6 p-4">
              <header className="font-bold text-xl">Project Improvements</header>
              <ul className="text-gray-700 text-lg list-disc p-2">
                <li>Implement multi-face detection</li>
                <li>Implement user score board feature</li>
                <li>Adjust design for mobile</li>
              </ul>
            </div>
          </div>
          <div className="px-6 text-center text-white">
            <span className="tag">React</span>
            <span className="tag">NodeJs</span>
            <span className="tag">ExpressJs</span>
            <span className="tag">Postgresql</span>
          </div>
          <div className="px-6 pb-2 text-center text-white">
            <a href="#." className="inline-block px-3 py-1 text-sm font-semibold mr-2 mb-2 button">Live</a>
            <a href="https://github.com/Folka2134/face-detection-app" className="inline-block px-3 py-1 text-sm font-semibold mr-2 mb-2 button" target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-md hover:shadow-2xl mx-5 mb-8 transition-all duration-300 ease-linear">
          <img className="w-full" src={kingsHifiPreview} alt="Mountain" />
          <div className="px-6 py-4 flex">
            <div className="flex-1 border-r-4 p-4">
              <header className="font-bold text-xl mb-2">Kings Hi-Fi Site</header>
              <p className="text-gray-700 text-lg">
                Website built for local record label/collective Kings Hi-Fi.
                <br></br>
                <br></br>
                This is the first commissioned project I've done, in which I had designs and features to implement via customer requirements/requests.
              </p>
            </div>
            <div className="flex-1 pl-6 p-4">
              <header className="font-bold text-xl">Project Improvements</header>
              <ul className="text-gray-700 text-lg list-disc p-2">
                <li>Implement E-commerce features.</li>
                <li>Create a custom music player.</li>
              </ul>
            </div>
          </div>
          <div className="px-6 text-center text-white">
            <span className="tag">React</span>
            <span className="tag">Firebase</span>
          </div>
          <div className="px-6 pb-2 text-center text-white">
            <span className="inline-block px-3 py-1 text-sm font-semibold mr-2 mb-2 button">Live</span>
            <span className="inline-block px-3 py-1 text-sm font-semibold mr-2 mb-2 button">Github</span>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-md hover:shadow-2xl mx-5 mb-8 transition-all duration-300 ease-linear">
          <img className="w-full" src={weatherFlipPreview} alt="Mountain" />
          <div className="px-6 py-4 flex">
            <div className="flex-1 border-r-4 p-4">
              <header className="font-bold text-xl mb-2">Weather App</header>
              <p className="text-gray-700 text-lg">
                Created a simple weather app with React. Displaying 150+ cities and providing additional information specific to the location.
                <br></br>
                <br></br>
                Here I'm pulling all data from the <a href="https://openweathermap.org/" className="underline md:break-normal break-all">https://openweathermap.org/</a> api
              </p>
            </div>
            <div className="flex-1 pl-6 p-4">
              <header className="font-bold text-xl">Project Improvements</header>
              <ul className="text-gray-700 text-lg list-disc p-2">
                <li>Expand current dataset beyond 150+ cities</li>
                <li>Implement pagination</li>
                <li>Provide more data per location</li>
              </ul>
            </div>
          </div>
          <div className="px-6 text-center text-white">
            <span className="tag">React</span>
            <span className="tag">Tailwind</span>
          </div>
          <div className="px-6 pb-2 text-center text-white">
            <span className="inline-block px-3 py-1 text-sm font-semibold mr-2 mb-2 button">Live</span>
            <span className="inline-block px-3 py-1 text-sm font-semibold mr-2 mb-2 button">Github</span>
          </div>
        </div>

 


      </div>
      <div className='flex w-full justify-end px-16 opacity-90'>
        <Link to="cover-container" smooth={true} className="button buttonBounce rounded-large p-5 mb-5 text-white"><FaArrowUp size={25}/></Link>
      </div>
    </div>

  );
}

export default Projects;
