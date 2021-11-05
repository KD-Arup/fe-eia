import '../styles/projects-page.css'
import { CreateProject } from './CreateProject';
import { Projects } from './Projects';
import { useState, useEffect } from 'react';
import { getAllProjects } from '../utils/api';

export const ProjectsPage = () => {
  const [ projectsData, setProjectsData ] = useState();

  useEffect(()=>{
    getAllProjects()
    .then(( projects ) => {
      // console.log(projects);
      // console.dir(projects);

      setProjectsData(projects);
    })
  },[]);

    return ( 
      <>
      <section className='projects_page'>
        <CreateProject setProjectsData={setProjectsData}/>
        <Projects projectsData={projectsData}/>
      </section>
      <footer className="footer">
      </footer>
      </>
    )
}