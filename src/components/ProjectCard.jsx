import '../styles/project-card.css'
import { Link } from 'react-router-dom';
import { deleteProjectById } from '../utils/api';


export const ProjectCard = ({ project, setProjectsCardsData} ) => {

    const handleDeleteProject = (project_id) => {
      setProjectsCardsData((curProjectsData) => {
        return curProjectsData.filter((project) => {
          if (project_id !== project.project_id) {
            return true
          } else {
            return false
          }
        })
      })
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
                  onClick={(event) => {handleDeleteProject(project.project_id)}
                  }>🪣</button>
        </div>
    )
}