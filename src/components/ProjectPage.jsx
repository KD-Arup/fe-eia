
import '../styles/project-page.css';
import { useEffect, useState } from 'react';
import {ProjectPageHeader} from './ProjectPageHeader';
import { ProjectMap } from './ProjectMap';
import { ProjectTable } from './ProjectTable';

export const ProjectPage = () => {
    const [view, setView] = useState('map');
    return (
        <section className="project-page">
            <ProjectPageHeader 
                projectName={`HardcodedProjectName`} 
                setView={setView}/>
            { view === 'map' ? <ProjectMap/> : <ProjectTable/> }
        </section>
    )
}