import { ProjectCard } from './ProjectCard';
import '../styles/project-card.css';
import { Redirect } from 'react-router';

// return (
//   <Redirect to='/'/>
// )
const RedirectProject = (project_id) => {

  return <Redirect to={`/projects/${project_id}`}/>;
}

export const Projects = ({ projectsData }) => {

  return ( 
    <div className="proj_list_display_container">
      <p>Projects</p>
      <div className='proj_list_display'>
        {projectsData && projectsData.map((project) =>{
          console.log(project)
          return (
            <ProjectCard project={project} onclick={RedirectProject(project.project_id)}/>
          )
        })}
      </div>
    </div>
  )
}