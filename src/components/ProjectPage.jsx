
import '../styles/project-page.css';
import { useState, useEffect, useContext } from 'react';
import {ProjectPageHeader} from './ProjectPageHeader';
import { ProjectMap } from './ProjectMap';
import { ProjectTable } from './table-components/ProjectTable';
import { useParams } from 'react-router';
import { TableContext } from '../wrappers/TableContext';
import { getReceptorsByProjID } from '../utils/api';

// TEST FILES ONLY - REMOVE WHEN API CALLS IMPLEMENTED
const file  = require('../data/testReceptorData.json');
const testData = file.data;



export const ProjectPage = ( ) => {
    const { projData, setProjData } = useContext(TableContext);
    // make receptors state
  
    const { project_id } = useParams();
    useEffect(()=>{
        getReceptorsByProjID(project_id)
        .then((data)=>{
            setProjData(data)
        })
        // if theres a response - add it to the page else just do nothing
        // setProjData(testData)
    },[setProjData])

    // console.log(projData);

    const [view, setView] = useState('map');
    return (
        <section className="project-page">
            <ProjectPageHeader 
                projectName={`HardcodedProjectName`} 
                setView={setView}/>
            { view === 'map' ?
                <ProjectMap projData={projData} /> : 
                <ProjectTable projData={projData}/>}
        </section>
    )
}