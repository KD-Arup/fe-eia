import '../styles/project-page.css';
import { useState, useEffect, useContext } from 'react';
import { ProjectPageHeader } from './ProjectPageHeader';
import { ProjectMap } from './ProjectMap';
import { ProjectTable } from './table-components/ProjectTable';
import { useParams } from 'react-router';
import { TableContext } from '../wrappers/TableContext';
import { getReceptorsByProjID } from '../utils/api';
import { useLoading } from '../hooks/useLoadingHook';

export const ProjectPage = () => {
    const { projData, setProjData } = useContext(TableContext);
    const { isLoading, setIsLoading } = useLoading();
    // make receptors state

    const { project_id } = useParams();
    console.log('----> proj id', project_id);
    useEffect(() => {
        setIsLoading(true);
        getReceptorsByProjID(project_id)
            .then((data) => {
            setProjData(data);
            setIsLoading(false);
        });
        // if theres a response - add it to the page else just do nothing
        // setProjData(testData)
    }, [setProjData, setIsLoading, project_id]);

    // console.log(projData);

    const [view, setView] = useState('map');
    return (
        <section className="project-page">
            <ProjectPageHeader
                projectName={`HardcodedProjectName`}
                setView={setView}
            />
            {view === 'map' ? (
                <ProjectMap
                    projData={projData}
                    isLoading={isLoading}
                    setProjData={setProjData}
                />
            ) : (
                <ProjectTable projData={projData} isLoading={isLoading} />
            )}
        </section>
    );
};
