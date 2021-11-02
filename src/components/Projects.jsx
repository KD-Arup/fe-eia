import react from 'react';
import { Link } from 'react-router-dom';

import { ProjectCard } from './ProjectCard';
import '../styles/project-card.css';

const data = require('../data/test-data.json');
const projects = data.projects;
export const Projects = () => {
    return ( 
      <div className="proj_list_display_container">
        <p>Projects</p>
      <div className='proj_list_display'>
      {projects.map((project) =>{
        return (
          <ProjectCard project={project}/>
        )
      })}
      </div>
      </div>
    )
}