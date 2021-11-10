import React from 'react';
// import { bounce } from 'react-animations';


import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa'

import smartBrainPreview from "../../images/smartbrain_preview2.png"


const Projects = () => {
  return (
    <div id="projects" className="projects-container bg-dark-white h-auto pb-1 ">
      <Link to="projects-container" smooth={true}><h1 className="w-full mb-8 h-10 text-4xl font-medium text-center text-white bg-space-background bg-bottom bg-cover bg-fixed cursor-pointer title">Projects</h1></Link>
      <div className="project-list grid grid-cols-1 md:grid-cols-3">
        <div className="rounded overflow-hidden shadow-md hover:shadow-2xl mx-5 mb-8 transition-all duration-300 ease-linear">
          <img className="w-full" src={smartBrainPreview} alt="Mountain" />
          <div className="px-6 py-4 flex">
            <div className="flex-1 border-r-4">
              <header className="font-bold text-xl mb-2">Face Detection App</header>
              <p className="text-gray-700 text-lg">
              In this App will "detect" a face within an image url and also update a signed in user's "rank".<br></br>
              The detection is performed by pulling data from an api (clarifai) and the users are stored within my own database.
              </p>
            </div>
            <div className="flex-1 pl-6">
              <header className="font-bold text-xl mb-2">Project Improvements</header>
              <ul className="text-gray-700 text-lg list-disc">
                <li>Implement multi-face detection</li>
                <li>Implement user score board feature</li>
                <li>Adjust design for mobile</li>
              </ul>
            </div>
          </div>
          <div className="px-6 text-center text-white">
            <span className="tag">React</span>
            <span className="tag">NodeJs</span>
            <span className="tag">Postgresql</span>
          </div>
          <div className="px-6 pb-2 text-center text-white">
            <a href="#." className="inline-block px-3 py-1 text-sm font-semibold mr-2 mb-2 button">Live</a>
            <a href="https://github.com/Folka2134/face-detection-app" className="inline-block px-3 py-1 text-sm font-semibold mr-2 mb-2 button" target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-md hover:shadow-2xl mx-5 mb-8 transition-all duration-300 ease-linear">
          <img className="w-full" src="https://images.squarespace-cdn.com/content/v1/55cfb535e4b061baebe310df/1587472623697-IC8B3J3ZIZI0AMIE7U8G/sky+photo+for+website+home+page.jpeg?format=2500w" alt="Mountain" />
          <div className="px-6 py-4 flex">
            <div className="flex-1 border-r-4">
              <header className="font-bold text-xl mb-2">Face Detection App</header>
              <p className="text-gray-700 text-lg">
                In this App will "detect" a face within an image url and also update a signed in user's "rank".
              </p>
            </div>
            <div className="flex-1 pl-6">
              <header className="font-bold text-xl mb-2">Project Improvements</header>
              <ul className="text-gray-700 text-lg list-disc">
                <li>Implement multi-face detection</li>
                <li>Implement user score board feature</li>
                <li>Adjust design for mobile</li>
              </ul>
            </div>
          </div>
          <div className="px-6 text-center text-white">
            <span className="tag">React</span>
            <span className="tag">NodeJs</span>
            <span className="tag">Postgresql</span>
          </div>
          <div className="px-6 pb-2 text-center text-white">
            <span className="inline-block px-3 py-1 text-sm font-semibold mr-2 mb-2 button">Live</span>
            <span className="inline-block px-3 py-1 text-sm font-semibold mr-2 mb-2 button">Github</span>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-md hover:shadow-2xl mx-5 mb-8 transition-all duration-300 ease-linear">
          <img className="w-full" src="https://images.squarespace-cdn.com/content/v1/55cfb535e4b061baebe310df/1587472623697-IC8B3J3ZIZI0AMIE7U8G/sky+photo+for+website+home+page.jpeg?format=2500w" alt="Mountain" />
          <div className="px-6 py-4 flex">
            <div className="flex-1 border-r-4">
              <header className="font-bold text-xl mb-2">Face Detection App</header>
              <p className="text-gray-700 text-lg">
                In this App I lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex-1 pl-6">
              <header className="font-bold text-xl mb-2">Project Improvements</header>
              <ul className="text-gray-700 text-lg list-disc">
                <li>Implement multi-face detection</li>
                <li>Implement user score board feature</li>
                <li>Adjust design for mobile</li>
              </ul>
            </div>
          </div>
          <div className="px-6 text-center text-white">
            <span className="tag">React</span>
            <span className="tag">NodeJs</span>
            <span className="tag">Postgresql</span>
          </div>
          <div className="px-6 pb-2 text-center text-white">
            <span className="inline-block px-3 py-1 text-sm font-semibold mr-2 mb-2 button">Live</span>
            <span className="inline-block px-3 py-1 text-sm font-semibold mr-2 mb-2 button">Github</span>
          </div>
        </div>


      </div>
      <div className='flex w-full justify-end px-16 opacity-90'>
        <Link to="cover-container" smooth={true} className="button buttonBounce rounded-large p-5 mb-5 text-blue-dark"><FaArrowUp size={25}/></Link>
      </div>
    </div>

  );
}

export default Projects;
