export const polygonLayerStyle = {
    id: 'data',
    type: 'fill',
    paint: {
        'fill-color': {
            property: 'api_id',
            stops: [
                [0, '#3288bd'],
                [1, '#66c2a5'],
                [2, '#abdda4'],
                [3, '#e6f598'],
                [4, '#ffffbf'],
                [5, '#f54281'],
            ],
        },
        'fill-opacity': {
            property: 'api_id',
            stops: [
                [0, 0.2],
                [1, 0.8],
                [2, 0.8],
                [3, 0.8],
                [4, 0.8],
                [4, 0.8],
            ],
        },
    },
};

export const pointLayerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
        // this could be a proportion of the zoom?
        'circle-radius': {
            property: 'point_type',
            stops: [
                [0, 4],
                [1, 0],
                [2, 0],
            ],
        },
        'circle-color': {
            property: 'point_type',
            stops: [
                [0, '#e66e23'],
                [1, '#1b4a22'],
                [2, '#1b4a22'],
            ],
        },
    },
};
export const linestringLayerStyle = {
    id: 'lineLayer',
    type: 'line',
    source: 'my-data',
    layout: {
        'line-join': 'round',
        'line-cap': 'round',
    },
    paint: {
        'line-color': '#eb34ab',
        'line-width': 0,
    },
};
