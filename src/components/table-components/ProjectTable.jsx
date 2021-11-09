//import { useEffect, useState } from 'react';
import '../../styles/project-table.css';
import { Table } from './Table';

export const ProjectTable = ({ projData }) => {

    /* map over categories and for each category generate a distinct 
        table component for formatting purposes. */
        console.log(projData);
    return (
        <section className='project_tables_container'>
            <Table key={'summaryTable'} receptors={projData}/>
            {/* {projData.map((categoryObj) => {
                return (
                    <Table key={'summaryTable'} receptors={categoryObj}/>
                    // <Table 
                    //     key={categoryObj.category+'table-'}
                    //     categoryObj={categoryObj}/>
                )
            })} */}
        </section>
    )
}