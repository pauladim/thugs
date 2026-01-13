import React from 'react';
import ProjectHero from './ProjectHero';
import Gallery from './Gallery';
import './Project.css';





const Project = () => {
  return (

   <>
    <ProjectHero />
    <h2 className='gold'>PROJECTS</h2>
    <Gallery />
   </>
    
  );
};

export default Project;