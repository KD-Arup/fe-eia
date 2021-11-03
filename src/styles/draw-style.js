import {RENDER_STATE} from 'react-map-gl-draw';

export function getEditHandleStyle({feature, state}) {
  switch (state) {
    case RENDER_STATE.SELECTED:
    case RENDER_STATE.HOVERED:
    case RENDER_STATE.UNCOMMITTED:
      return {
        fill: '#ffffff',
        fillOpacity: 0.8,
        stroke: 'rgb(255, 255, 255)',
        strokeWidth: 2,
        r: 7
      };

    default:
      return {
        fill: '#e61e28',
        fillOpacity: 1,
        stroke: 'rgb(255, 255, 255)',
        strokeWidth: 2,
        r: 5
      };
  }
}

export function getFeatureStyle({feature, index, state}) {
  switch (state) {
    case RENDER_STATE.SELECTED:
    case RENDER_STATE.HOVERED:
    case RENDER_STATE.UNCOMMITTED:
    case RENDER_STATE.CLOSING:
      return {
        stroke: '#e61e28',
        strokeWidth: 2,
        fill: 'rgb(255, 255, 255)',
        fillOpacity: 0.3,
        strokeDasharray: '4,2'
      };

    default:
      return {
        stroke: '#E61E28',
        strokeWidth: 2,
        fill: '#91767D',
        fillOpacity: 0.1
      };
  }
}