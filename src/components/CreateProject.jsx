import react from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/proj-input-form.css'



export const CreateProject = () => {

    const [displayForm, setDisplayForm] = useState(false);


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
          <button className='add_proj_btn' onClick={(event) => {handleClick(event)}}>
            +
          </button>
       </section>

       {displayForm && 
        <form className='project_input_form'>
          <label for="projTitle" className='proj_create_label'>project title:</label>
          <input type="text" id="projTitle" name="projTitle" className='proj_create_input'/>
          <label for="jobNo" className='proj_create_label'>job number:</label>
          <input type="text" id="jobNo" name="jobNo" className='proj_create_input'/>
          <label for="projType" className='proj_create_label'>project type:</label>
          <input type="text" id="projTpe" name="projType" className='proj_create_input'/>
          <input type="submit" value="save" className='save_proj_btn'/>
        </form>
        }
      </section>

    )
}