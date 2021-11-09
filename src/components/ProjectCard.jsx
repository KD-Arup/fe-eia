import '../styles/project-card.css'
import { Link } from 'react-router-dom';
import { deleteProjectById } from '../utils/api';


export const ProjectCard = ({ project } ) => {

    const handleDeleteProject = (project_id) => {
      deleteProjectById(project_id)
      .then( result => {
        //console.log(result)
      })
    }

    return ( 
      
        <div className="project_card" >
          <p className="project_card_item_name" >{`${project.project_name}`}</p>
          <div>
            <Link className="project_link" to={`/projects/${project.project_id}`}>
              <img src={project.image_url} alt={project.project_name}/>
            </Link>
          </div>
          <button className='delete_proj_btn' 
                  onClick={() => handleDeleteProject(project.project_id)
                  }>🪣</button>
        </div>
    )
}