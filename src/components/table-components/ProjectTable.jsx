import { useEffect, useState } from 'react';
import '../../styles/project-table.css';
import { Table } from './Table';

export const ProjectTable = ({ projectData, setProjectData }) => {

    return (
        <section className='project_tables_container'>
            {projectData.map((categoryObj) => {
                return (
                    <Table 
                        key={categoryObj.category+'table-'}
                        setProjectData={setProjectData}
                        categoryObj={categoryObj}/>
                )
            })}
        </section>
    )
}