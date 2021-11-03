import '../styles/projects-page.css'
import react from 'react';
import { Link } from 'react-router-dom';
import { CreateProject } from './CreateProject';
import { Projects } from './Projects';


export const ProjectsPage = () => {
    return ( 
      <>
      <section className='projects_page'>
        <CreateProject/>
        <Projects/>
      </section>
      <footer className="footer">
      </footer>
      </>
    )
}