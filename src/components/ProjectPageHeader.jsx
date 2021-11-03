
import '../styles/project-page.css';
import { useState } from 'react';

export const ProjectPageHeader = ({projectName, setView}) => {
    
    const handleClick = (event) => {
        event.preventDefault();
        setView(event.target.name);
      }

    return (
        <section className='project-page-header'>
            <h3>{projectName}</h3>
            
            <section>
                <button 
                    name="map" 
                    className='map_btn' 
                    onClick={(event) => {handleClick(event)}}>
                    map
                </button>

                <button 
                    name="table" 
                    className='table_btn' 
                    onClick={(event) => {handleClick(event)}}>
                    table
                </button>
            </section>
        </section>
    )
}