import '../styles/project-map.css';
import ReactMapGL from 'react-map-gl'
//import { Source, Layer } from 'react-map-gl';
import { useState, useCallback, useRef } from 'react';
// const shapeGeojson = require('./data/test-data-box.json');
// const multiShapeGeoJson = require('./data/test-data-multiple-poly.json');
// new modules for drawing polygons
import {Editor, DrawPolygonMode, EditingMode} from 'react-map-gl-draw';
import {getFeatureStyle, getEditHandleStyle} from '../styles/draw-style.js';
import { InsetGraph } from './InsetGraph';
import { useParams } from 'react-router-dom';
import { postAssessmentArea } from '../utils/api'

export const ProjectMap = ({ isLoading }) => {
    // viewport settings for the map - in a state so can dynamically change
    const [viewport, setViewport] = useState({
        latitude: 54.5500, 
        longitude: -2.4333, 
        height: '100%',
        width: '100%',
        zoom: 4.5
    })

    // states for drawing polygon on map
    const [mode, setMode] = useState(null);
    const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(null);
    const { project_id }  = useParams();
    const [projectData, setProjectData] = useState(null);
    const editorRef = useRef(null);

    // on select handler for drawing polygon on map
    const onSelect = useCallback(options => {
        setSelectedFeatureIndex(options && options.selectedFeatureIndex);
      }, []);
    
    // on delete handler for drawing polygon on map
    const onDelete = useCallback(() => {
    if (selectedFeatureIndex !== null && selectedFeatureIndex >= 0) {
        editorRef.current.deleteFeatures(selectedFeatureIndex);
    }
    }, [selectedFeatureIndex]);

    // on update handler for drawing polygon on map
    const onUpdate = useCallback(({editType}) => {
        if (editType === 'addFeature') {
          setMode(new EditingMode());
        }
      }, []);


    const handleGetDataByPoly = () => {
        //console.log(editorRef.current);
        // will return lat long coordinates
        const boundingPoly = editorRef.current.getFeatures()[0].geometry.coordinates[0];
        console.log(boundingPoly);
        postAssessmentArea(boundingPoly, project_id)
        .then( (projectData ) => {
            //setProjectData(projectData)
            console.log('assessment area posted')
        })
    }
    
    // draw tools buttons 
    // TODO - export this to button components later
    const drawTools = (
    <div className="mapboxgl-ctrl-top-left">
        <div className="mapboxgl-ctrl-group mapboxgl-ctrl">
        <button
            className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon"
            title="Polygon tool (p)"
            onClick={() => setMode(new DrawPolygonMode())}
        >+</button>
        <button
            className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_trash"
            title="Delete"
            onClick={onDelete}
        >🪣</button>
        <button
            className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_trash"
            title="Delete"
            onClick={handleGetDataByPoly}
        >GO!</button>
        </div>
    </div>
    );

    //const features = editorRef.current && editorRef.current.getFeatures();
    //const selectedFeature =
      //features && (features[selectedFeatureIndex] || features[features.length - 1]);
      const [showSummary, setShowSummary] = useState(false);
      const summaryTools = (
        <div className="mapboxgl-ctrl-top-right">
            <div className="mapboxgl-ctrl-group mapboxgl-ctrl">
            <button
                className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon"
                title="Polygon tool (p)"
                style={
                  {
                      "width": `fit-content`,
                      "padding": `3px 3px`
                  }}
                onClick={() => setShowSummary(!showSummary)}
            >{showSummary ? `Hide Summary`:`Show Summary`}</button>
            </div>
        </div>
        );

    if (isLoading) return <section className='loading'>LOADING...</section>
    return (
       <section className='project-map-section'>
        <ReactMapGL 
        {...viewport } 
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={( viewport ) => {setViewport(viewport)}}
        mapStyle="mapbox://styles/dod900/ckv9v08x7154f15qs9d29virx"
        >   
        <Editor
          ref={editorRef}
          style={{width: '100%', height: '100%'}}
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
        {/* can probs add map function here to draw polygons */}
        </ReactMapGL>
        {showSummary && <InsetGraph />}
        {/* TODO - add div over map to denote loading/ stop further action */}
       </section>
    )
}