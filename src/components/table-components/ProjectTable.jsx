//import { useEffect, useState } from 'react';
import '../../styles/project-table.css';
import { Table } from './Table';

export const ProjectTable = ({ projData }) => {

    /* map over categories and for each category generate a distinct 
        table component for formatting purposes. */
    return (
        <section className='project_tables_container'>
            {projData.map((categoryObj) => {
                return (
                    <Table 
                        key={categoryObj.category+'table-'}
                        categoryObj={categoryObj}/>
                )
            })}
        </section>
    )
}