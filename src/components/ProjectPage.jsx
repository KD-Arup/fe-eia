
import '../styles/project-page.css';
import { useState, useEffect } from 'react';
import {ProjectPageHeader} from './ProjectPageHeader';
import { ProjectMap } from './ProjectMap';
import { ProjectTable } from './table-components/ProjectTable';
import { useParams } from 'react-router';
const file  = require('../data/testReceptorData.json');
const testData = file.data;

export const ProjectPage = () => {
    const [ projectData, setProjectData] = useState();
    // const { project_id } = useParams();
    useEffect(()=>{
        // getTableDataByProjID(project_id)
        // .then((data)=>{
        //     setProjectData(data)
        // })
        setProjectData(testData)
    },[setProjectData])

    const [view, setView] = useState('map');
    return (
        <section className="project-page">
            <ProjectPageHeader 
                projectName={`HardcodedProjectName`} 
                setView={setView}/>
            { view === 'map' ? <ProjectMap projectData={projectData}/> : <ProjectTable data={projectData}/> }
        </section>
    )
}