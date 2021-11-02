
import '../styles/project-page.css';
import { useState } from 'react';

export const ProjectPageHeader = ({projectName, setView}) => {
    const handleClick = (event) => {
        event.preventDefault();
        setView(event.target.name);
      }

    return (
        <section>
            <p>{projectName}</p>
            <button 
                name="map" 
                className='map_btn' 
                onClick={(event) => {handleClick(event)}}>
                Map
            </button>
            <button 
                name="table" 
                className='table_btn' 
                onClick={(event) => {handleClick(event)}}>
                Table
            </button>
        </section>
    )
}