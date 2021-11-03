import react from 'react';
import '../styles/project-card.css'
import { Link } from 'react-router-dom';

//test data import

export const ProjectCard = (props) => {
  const {project} = props;
    return ( 
      <Link className="project_link" to={`/projects/${project.project_id}`}>
        <div className="project_card" >
          <p className="project_card_item_name" >{`${project.project_name}`}</p>
          <div>
            <img src={project.img_url} alt={project.project_name}/>
          </div>
        </div>
      </Link>
    )
}