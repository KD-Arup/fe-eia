import '../styles/projects-page.css'
import { CreateProject } from './CreateProject';
import { Projects } from './Projects';
import { useState, useEffect } from 'react';
import { getAllProjects } from '../utils/api';
import { useLoading } from '../hooks/useLoadingHook';

export const ProjectsPage = () => {
  const [ projectsCardsData, setProjectsCardsData ] = useState();
  const {isLoading, setIsLoading} = useLoading()

  useEffect(()=>{
    setIsLoading(true)
    getAllProjects()
    .then(( projects ) => {
      setProjectsCardsData(projects);
      setIsLoading(false);
    })
  },[setIsLoading]);
  
  return ( 
    <>
    <section className='projects_page'>
      <CreateProject setProjectsCardsData={setProjectsCardsData}/>
      <Projects projectsCardsData={projectsCardsData} 
                setProjectsCardsData={setProjectsCardsData} 
                isLoading={isLoading}/>
    </section>
    <footer className="footer"/>
    </>
  )
}