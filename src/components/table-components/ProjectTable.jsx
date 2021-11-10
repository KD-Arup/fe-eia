import { useEffect, useState } from 'react';
import '../../styles/project-table.css';
import { Table } from './Table';
import { getCategories } from '../../utils/api'

export const ProjectTable = ({ projData, isLoading }) => {
    const [categories, setCategories ] = useState([]);
    /* map over categories and for each category generate a distinct 
        table component for formatting purposes. */
    console.log(projData);
    useEffect(()=>{
        getCategories()
        .then((data)=>{
            setCategories(data)
        })
    },[]);

    if (isLoading) return <section className='loading'>LOADING...</section>
    return (
        <section className='project_tables_container'>
            {/* <Table key={'summaryTable'} receptors={projData}/> */}

            {categories.map((category) => {
                // filter
                const receptorsArr = projData.filter((receptor) => {
                    return receptor.api_id === category.api_id
                })
                //console.dir(receptorsArr);
                return (
                    <Table key={'summaryTable'} category={category} receptors={receptorsArr}/>
                    // <Table 
                    //     key={categoryObj.category+'table-'}
                    //     categoryObj={categoryObj}/>
                )
            })}
        </section>
    )
}