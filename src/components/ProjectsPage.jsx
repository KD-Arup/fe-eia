import '../styles/projects-page.css'
import react from 'react';
import { Link } from 'react-router-dom';
import { CreateProject } from './CreateProject';
import { Projects } from './Projects';

//test data import
import testData from '../data/test-data.json'

export const ProjectsPage = () => {
    return ( 
      <section className='projects_page'>
        <CreateProject/>
        <Projects/>
      </section>
    )
}