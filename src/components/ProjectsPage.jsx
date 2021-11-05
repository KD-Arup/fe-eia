import '../styles/projects-page.css'
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