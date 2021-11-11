import { useEffect, useState } from 'react';
import '../../styles/project-table.css';
import { Table } from './Table';
import { getCategories } from '../../utils/api'

export const ProjectTable = ({ projData, isLoading }) => {
    const [categories, setCategories ] = useState([]);
    /* map over categories and for each category generate a distinct 
        table component for formatting purposes. */
    useEffect(()=>{
        getCategories()
        .then((data)=>{
            setCategories(data)
        })
    },[]);

    if (isLoading) return <section className='loading'>LOADING...</section>
    return (
        <section className='project_tables_container'>
            {categories.map((category) => {
                const receptorsArr = projData.filter((receptor) => {
                    return receptor.api_id === category.api_id
                })
                return (
                    <Table key={`summaryTable-${category.keywords}`} category={category} receptors={receptorsArr}/>
                )
            })}
        </section>
    )
}