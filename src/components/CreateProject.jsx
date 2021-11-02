import react from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';



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

          <button className='add_proj_btn' onClick={(event) => {handleClick(event)}}>
            +
          </button>
          <p className='add_proj_btn_label'>
            create project
          </p>
       </section>

       {displayForm && 
        <form className='project_input_form'>
          <label for="projTitle">project title:</label>
          <input type="text" id="projTitle" name="projTitle"/>
          <label for="jobNo">job number:</label>
          <input type="text" id="jobNo" name="jobNo"/>
          <label for="projType">project type:</label>
          <input type="text" id="projTpe" name="projType"/>
          <input type="submit" value="Save"/>
        </form>
        }
      </section>

    )
}