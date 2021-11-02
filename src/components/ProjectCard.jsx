import react from 'react';
import '../styles/project-card.css'

//test data import

export const ProjectCard = (props) => {
  const {project} = props;
    return ( 
      <div className="project_card" >
        <div>
          <p className="product-card-item_name" >{`${project.project_name}`}</p>
        </div>
        <div>
          <img src={project.img_url} alt={project.project_name}/>
        </div>
        <div>
          <button>{`Open project`}</button>
        </div>
      </div>
    )
}