import { ProjectCard } from './ProjectCard';
import '../styles/project-card.css';

export const Projects = ({ projectsData }) => {

  return ( 
    <div className="proj_list_display_container">
      <p>Projects</p>
      <div className='proj_list_display'>
        {projectsData && projectsData.map((project) =>{
          return (
            <ProjectCard project={project}/>
          )
        })}
      </div>
    </div>
  )
}