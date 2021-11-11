import '../styles/project-page.css';
import { useState, useEffect, useContext } from 'react';
import { ProjectPageHeader } from './ProjectPageHeader';
import { ProjectMap } from './ProjectMap';
import { ProjectTable } from './table-components/ProjectTable';
import { useParams } from 'react-router';
import { TableContext } from '../wrappers/TableContext';
import { getReceptorsByProjID, getAssessmentAreabyProjId } from '../utils/api';
import { useLoading } from '../hooks/useLoadingHook';

export const ProjectPage = () => {
    const { projData, setProjData } = useContext(TableContext);
    const { isLoading, setIsLoading } = useLoading();
    const [featureCollection, setFeatureCollection] = useState({
        type: 'FeatureCollection',
        features: [],
    });
    // make receptors state

    const { project_id } = useParams();
    useEffect(() => {
        const featuresArray = [];
        const multiShapeGeoJson = {
            type: 'FeatureCollection',
            features: featuresArray,
        };
        // if the project has data
        getAssessmentAreabyProjId(project_id)
            .then((result) => {
                // if there are features
                if (result.assessment_area.features !== null) {
                    // setAssessmentArea(result.assessment_area);
                    const assessmentArea = result.assessment_area.features[0];
                    assessmentArea.properties.api_id = 0;
                    if (result.type === 'Point') {
                        assessmentArea.properties.point_type = 0;
                    } else if (result.type === 'LineString') {
                        assessmentArea.properties.point_type = 1;
                    } else {
                        assessmentArea.properties.point_type = 2;
                    }
                    featuresArray.push(assessmentArea);
                    return true;
                }
            })
            .then((response) => {
                if (response) {
                    getReceptorsByProjID(project_id)
                        .then((data) => {
                            setProjData(data);
                        })
                        .then(() => {
                            if (projData) {
                                projData.forEach((receptor) => {
                                    const feature =
                                        receptor.geometry.features[0];
                                    feature.properties = {
                                        ...receptor.properties,
                                    };

                                    if (receptor.type === 'LineString') {
                                        feature.properties.api_id = 6;
                                    } else {
                                        feature.properties.api_id =
                                            receptor.api_id;
                                    }

                                    if (receptor.type === 'Point') {
                                        feature.properties.point_type = 0;
                                    } else if (receptor.type === 'LineString') {
                                        feature.properties.point_type = 1;
                                    } else {
                                        feature.properties.point_type = 2;
                                    }
                                    featuresArray.push(feature);
                                });
                            }
                        })
                        .then(() => {
                            setFeatureCollection(multiShapeGeoJson);
                            setIsLoading(false);
                        });
                }
            });
    }, [project_id, featureCollection, setProjData]);

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
                    featureCollection={featureCollection}
                />
            ) : (
                <ProjectTable projData={projData} isLoading={isLoading} />
            )}
        </section>
    );
};
