import '../styles/project-map.css';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import { useEffect, useState, useCallback } from 'react';
// const shapeGeojson = require('./data/test-data-box.json');
// const multiShapeGeoJson = require('./data/test-data-multiple-poly.json');

export const ProjectMap = () => {

    const [viewport, setViewport] = useState({
        latitude: 54.5500, 
        longitude: -2.4333, 
        height: '100%',
        width: '100%',
        zoom: 4.5
      })



    return (
       <section className='project-map-section'>
        <ReactMapGL 
        {...viewport } 
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={( viewport ) => {setViewport(viewport)}}
        mapStyle="mapbox://styles/dod900/ckv9v08x7154f15qs9d29virx"
        >    
        </ReactMapGL>
       </section>
    )
}