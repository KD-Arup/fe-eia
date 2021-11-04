import { useEffect, useState } from 'react';
import '../styles/project-table.css';
import { Table } from './Table';

export const ProjectTable = ({ data }) => {

    console.dir(`data:\n${data}`);
    return (

        <section className='project_table_container'>
            {data.map((categoryObj) => {
                return (
                    <Table key={categoryObj.category+'table-'} categoryObj={categoryObj}/>
                )
            })}
        </section>
    )
}