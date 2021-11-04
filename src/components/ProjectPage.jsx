
import '../styles/project-page.css';
import { useState /*useEffect*/ } from 'react';
import {ProjectPageHeader} from './ProjectPageHeader';
import { ProjectMap } from './ProjectMap';
import { ProjectTable } from './ProjectTable';
// import { useParams } from 'react-router';
const file  = require('../data/testReceptorData.json');
const testData = file.data;

export const ProjectPage = () => {
    // const [ projectData, setProjectData] = useState();
    // const { project_id } = useParams();
    // useEffect(()=>{
    //     getTableDataByProjID(project_id)
    //     .then((data)=>{
    //         setProjectData(data)
    //     })
    // },[project_id, setProjectData])

    const [view, setView] = useState('map');
    return (
        <section className="project-page">
            <ProjectPageHeader 
                projectName={`HardcodedProjectName`} 
                setView={setView}/>
            { view === 'map' ? <ProjectMap/> : <ProjectTable data={testData}/> }
        </section>
    )
}