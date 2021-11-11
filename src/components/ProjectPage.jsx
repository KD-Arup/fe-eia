import '../styles/project-page.css';
import { useState, useEffect, useContext } from 'react';
import { ProjectPageHeader } from './ProjectPageHeader';
import { ProjectMap } from './ProjectMap';
import { ProjectTable } from './table-components/ProjectTable';
import { useParams } from 'react-router';
import { TableContext } from '../wrappers/TableContext';
import { getReceptorsByProjID, getProjectByID } from '../utils/api';
import { useLoading } from '../hooks/useLoadingHook';

export const ProjectPage = () => {
    const { projData, setProjData } = useContext(TableContext);
    const { isLoading, setIsLoading } = useLoading();
    // make receptors state

    const [projectAttributes, setProjectAttributes] = useState('');
  
    const { project_id } = useParams();
    useEffect(() => {
        setIsLoading(true);
        getReceptorsByProjID(project_id)

        .then((data) => {
            console.log('ProjectPage projData\n:', data)
            setProjData(data);
            setIsLoading(false);
    });
    }, [setProjData, setIsLoading, project_id]);

    useEffect(()=>{
        getProjectByID(project_id)
        .then((data)=>{
           setProjectAttributes(data); 
           console.log(projData);
        })
    },[])


    const [view, setView] = useState('map');
    return (
        <section className="project-page">

            <ProjectPageHeader 
                projectName={projectAttributes.project_name} 
                setView={setView}/>
            { view === 'map' ?
                <ProjectMap projData={projData} 
                            isLoading={isLoading}
                            setProjData={setProjData}/> : 
                <ProjectTable projData={projData} isLoading={isLoading}/>}
        </section>
    );
};
