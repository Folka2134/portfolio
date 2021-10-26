import React from 'react';

const Banner = () => {
  return (
    <div id="banner" className="banner-container text-center h-96 py-24 text-3xl" >
      <p>Hey my name is Otis and I'm a software developer <br/>based in Brighton, uk </p>
      <footer className="mt-10 text-base text-white">
        <a href="#." className="button">Resume</a>
        <a href="#." className="button">Linkedin</a>
        <a href="#." className="button">Github</a>
      </footer>
    </div>
  );
}

export default Banner;
