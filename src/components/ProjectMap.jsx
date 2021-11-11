import '../styles/project-map.css';
import ReactMapGL from 'react-map-gl';
import { Source, Layer } from 'react-map-gl';
import { useState, useCallback, useRef } from 'react';
// const shapeGeojson = require('./data/test-data-box.json');
// const multiShapeGeoJson = require('./data/test-data-multiple-poly.json');
// new modules for drawing polygons
import { Editor, DrawPolygonMode, EditingMode } from 'react-map-gl-draw';
import { getFeatureStyle, getEditHandleStyle } from '../styles/draw-style.js';
import { InsetGraph } from './InsetGraph';
import { useParams } from 'react-router-dom';
import {
    postAssessmentArea,
    initiatePublicApi,
    getReceptorsByProjID,
    getAssessmentAreabyProjId,
} from '../utils/api';
import { useEffect } from 'react';
import {
    polygonLayerStyle,
    pointLayerStyle,
    linestringLayerStyle,
} from '../components/map-components/map-draw-styles';
import { useLoading } from '../hooks/useLoadingHook';
import { MapLoading } from './map-components/MapLoading';
import { updateViewport } from '../utils/viewport.utils';

// TEST DATA
//const multiShapeGeoJson = require('../data/test-GEOjson.json');

export const ProjectMap = ({ setProjData, featureCollection }) => {
    // viewport settings for the map - in a state so can dynamically change

    const { isLoading, setIsLoading } = useLoading();

    const { project_id } = useParams();

    const [viewport, setViewport] = useState({
        latitude: 54.55,
        longitude: -2.4333,
        height: '100%',
        width: '100%',
        zoom: 4.5,
    });

    const [mode, setMode] = useState(null);
    const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(null);

    const editorRef = useRef(null);

    // on select handler for drawing polygon on map
    const onSelect = useCallback((options) => {
        setSelectedFeatureIndex(options && options.selectedFeatureIndex);
    }, []);

    // on delete handler for drawing polygon on map
    const onDelete = useCallback(() => {
        if (selectedFeatureIndex !== null && selectedFeatureIndex >= 0) {
            editorRef.current.deleteFeatures(selectedFeatureIndex);
        }
    }, [selectedFeatureIndex]);

    // on update handler for drawing polygon on map
    const onUpdate = useCallback(({ editType }) => {
        if (editType === 'addFeature') {
            setMode(new EditingMode());
        }
    }, []);

    useEffect(() => {}, [isLoading, viewport]);

    const handleGetDataByPoly = () => {
        setIsLoading(true);
        //console.log(editorRef.current);
        // will return lat long coordinates
        const boundingPoly =
            editorRef.current.getFeatures()[0].geometry.coordinates[0];
        postAssessmentArea(boundingPoly, project_id)
            .then((response) => {
                console.log('1 posted the assessment area --------');
                if (response.status === 201) {
                    console.log('2 response true for assessment area --------');
                    return true;
                } else {
                    return false;
                }
            })
            .then((response) => {
                console.log('3 check public apis --------');
                if (response) {
                    return initiatePublicApi(project_id).then((response) => {
                        console.log(response);
                        if (response) {
                            console.log('4 public apis worked --------');
                            getReceptorsByProjID(project_id).then(
                                (response) => {
                                    setProjData(response);
                                    console.log(
                                        '5 we have set projData --------'
                                    );
                                }
                            );
                        }
                    });
                }
            })
            .then(() => {
                getAssessmentAreabyProjId(project_id).then((response) => {
                    setViewport(
                        updateViewport(
                            response.assessment_area.features[0].geometry
                                .coordinates[0]
                        )
                    );
                });
            })
            .then(() => {
                setIsLoading(false);
            });
    };

    // draw tools buttons
    // TODO - export this to button components later
    const drawTools = (
        <div className="mapboxgl-ctrl-top-left">
            <div className="mapboxgl-ctrl-group mapboxgl-ctrl">
                <button
                    className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon"
                    title="Polygon tool (p)"
                    onClick={() => setMode(new DrawPolygonMode())}
                >
                    +
                </button>
                <button
                    className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_trash"
                    title="Delete"
                    onClick={onDelete}
                >
                    🪣
                </button>
                <button
                    className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_trash"
                    title="Delete"
                    onClick={handleGetDataByPoly}
                >
                    GO!
                </button>
            </div>
        </div>
    );

    const [showSummary, setShowSummary] = useState(false);
    const summaryTools = (
        <div className="mapboxgl-ctrl-top-right">
            <div className="mapboxgl-ctrl-group mapboxgl-ctrl">
                <button
                    className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon"
                    title="Polygon tool (p)"
                    style={{
                        width: `fit-content`,
                        padding: `3px 3px`,
                    }}
                    onClick={() => setShowSummary(!showSummary)}
                >
                    {showSummary ? `Hide Summary` : `Show Summary`}
                </button>
            </div>
        </div>
    );

    return (
        <section className="project-map-section">
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={(viewport) => {
                    setViewport(viewport);
                }}
                mapStyle="mapbox://styles/dod900/ckv9v08x7154f15qs9d29virx"
            >
                <Editor
                    ref={editorRef}
                    style={{ width: '100%', height: '100%' }}
                    clickRadius={12}
                    mode={mode}
                    onSelect={onSelect}
                    onUpdate={onUpdate}
                    editHandleShape={'circle'}
                    featureStyle={getFeatureStyle}
                    editHandleStyle={getEditHandleStyle}
                />
                {drawTools}
                {summaryTools}
                {isLoading && <MapLoading />}
                <Source type="geojson" data={featureCollection}>
                    <Layer {...polygonLayerStyle} />
                    <Layer {...linestringLayerStyle} />
                    <Layer {...pointLayerStyle} />
                </Source>
            </ReactMapGL>
            {showSummary && <InsetGraph />}
        </section>
    );
};
