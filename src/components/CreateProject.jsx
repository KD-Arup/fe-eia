import { useState } from 'react';
import '../styles/proj-input-form.css'
//import { ErrorMessage } from './ErrorMessage';
import { postProject } from '../utils/api';


export const CreateProject = ({ setProjectsData }) => {

    const [displayForm, setDisplayForm] = useState(false);
    const [formInput, setFormInput] = useState({project_name: '', image_url: '' });
    //const [error, setError] = useState(false);
    

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setFormInput(values => ({...values, [name]: value }))
    }

    const projectSubmit = (event) => {
      event.preventDefault();
      postProject( formInput )
      .then( response => {
        console.log('project submitted------>', response);
        setProjectsData((currProjectsData) => {
          return [...currProjectsData, {...formInput, project_id: response.project.project_id}]
        });

      })
     

      
      
  
      setDisplayForm(false);
      setFormInput({project_id: '', project_name: '', image_url: '' });

    }

     
    // TODO - add request to server to send info
    const handleClick = (event) => {
      event.preventDefault();
      setDisplayForm((curDisplay) => {
        return !curDisplay;
      });
    }

    return ( 
      <section className='create_project'>

        <section className='add_proj_btn_container'>
          <h4 className='add_proj_btn_label'>
            create project
          </h4>
          {/* TODO - small animation on the plus sign */}
          <button className='add_proj_btn' onClick={(event) => {handleClick(event)}}>
            +
          </button>
       </section>

       {displayForm && 
        <form className='project_input_form' onSubmit={projectSubmit}>
          <label htmlFor="project_name" className='proj_create_label'>project title:</label>
          <input type="text" 
                 id="project_name" 
                 name="project_name" 
                 className='proj_create_input'
                 onChange={handleChange} 
                 required/>
                 {/* { error ? <ErrorMessage error={error}/> : null }  */}
          <label htmlFor="image_url" className='proj_create_label'>image URL:</label>
          <input type="text" 
                 id="image_url" 
                 name="image_url" 
                 className='proj_create_input'
                 onChange={handleChange} 
                 required/>
                 {/* { error ? <ErrorMessage error={error}/> : null }  */}
          <input type="submit" value="save" className='save_proj_btn'/>
        </form>
        }
      </section>

    )
}