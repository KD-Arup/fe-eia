import { ProjectCard } from './ProjectCard';
import '../styles/project-card.css';
import { Redirect } from 'react-router';

const RedirectProject = (project_id) => {
  return <Redirect to={`/projects/${project_id}`}/>;
}

export const Projects = ({ projectsData, setProjectsData, isLoading }) => {

  //console.log(projectsData);
  if (isLoading) return <section className='loading'>LOADING...</section>
  return ( 
    <div className="proj_list_display_container">
      <p>Projects</p>
      <div className='proj_list_display'>
        {projectsData && projectsData.map((project) =>{
          return (
            <ProjectCard key={project.project_id + '_proj'}
                         project={project} 
                         onclick={RedirectProject(project.project_id)}
                         setProjectsData={setProjectsData}/>
          )
        })}
      </div>
    </div>
  )
}