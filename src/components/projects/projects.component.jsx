import React from 'react';

const Projects = () => {
  return (
    <div className="projects-container  bg-dark-white h-auto pb-10">
      <h1 className="mb-8 text-3xl font-medium text-center">Projects</h1>
      <div className="project-list grid grid-cols-1 md:grid-cols-3">
        <div class="rounded overflow-hidden shadow-xl mx-5 mb-8">
          <img class="w-full" src="https://images.squarespace-cdn.com/content/v1/55cfb535e4b061baebe310df/1587472623697-IC8B3J3ZIZI0AMIE7U8G/sky+photo+for+website+home+page.jpeg?format=2500w" alt="Mountain" />
          <div class="px-6 py-4 flex">
            <div className="flex-1 border-r-4">
              <header class="font-bold text-xl mb-2">Face Detection App</header>
              <p class="text-gray-700 text-lg">
                In this App I lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex-1 pl-6">
              <header class="font-bold text-xl mb-2">Project Improvements</header>
              <ul class="text-gray-700 text-lg list-disc">
                <li>Implement multi-face detection</li>
                <li>Implement user score board feature</li>
                <li>Adjust design for mobile</li>
              </ul>
            </div>
          </div>
          <div class="px-6 text-center text-white">
            <span class="tag">React</span>
            <span class="tag">NodeJs</span>
            <span class="tag">Postgresql</span>
          </div>
          <div class="px-6 pb-2 text-center text-white">
            <span class="inline-block px-3 py-1 text-sm font-semibold mr-2 mb-2 button">Live</span>
            <span class="inline-block px-3 py-1 text-sm font-semibold mr-2 mb-2 button">Github</span>
          </div>
        </div>

      </div>
    </div>

  );
}

export default Projects;
