import { useState } from 'react';
import '../styles/proj-input-form.css'
//import { ErrorMessage } from './ErrorMessage';
import { postProject } from '../utils/api';


export const CreateProject = () => {

    const [displayForm, setDisplayForm] = useState(false);
    const [formInput, setFormInput] = useState({username: ''});
    //const [error, setError] = useState(false);
    

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setFormInput(values => ({...values, [name]: value }))
    }

    const LoginSubmit = (event) => {
      event.preventDefault();
      postProject( formInput )
      // TODO - at this point we want to redirect to the project page
      // .then(projectData => {
      //   //TODO - want tell user project successful or not.
      //   // TODO - tell user here if the error was part of the form
          //    otherwise we can redirect them to the error page.
      // })
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
        <form className='project_input_form' onSubmit={LoginSubmit}>
          <label htmlFor="projTitle" className='proj_create_label'>project title:</label>
          <input type="text" 
                 id="projTitle" 
                 name="projTitle" 
                 className='proj_create_input'
                 onChange={handleChange} 
                 required/>
                 {/* { error ? <ErrorMessage error={error}/> : null }  */}
          <label htmlFor="jobNo" className='proj_create_label'>job number:</label>
          <input type="text" 
                 id="jobNo" 
                 name="jobNo" 
                 className='proj_create_input'
                 onChange={handleChange} 
                 required/>
                 {/* { error ? <ErrorMessage error={error}/> : null }  */}
          <label htmlFor="projType" className='proj_create_label'>project type:</label>
          <input type="text" 
                 id="projType" 
                 name="projType" 
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