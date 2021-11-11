exports.updateViewport = (coordinatesList) => {
    const noPoints = coordinatesList.length;
    let longSum = 0;
    let latSum = 0;
    coordinatesList.forEach((point) => {
        longSum += parseFloat(point[0]);
        latSum += parseFloat(point[1]);
    });

    const updatedLat = latSum / noPoints;
    const updatedLong = longSum / noPoints;
    return {
        latitude: updatedLat,
        longitude: updatedLong,
        height: '100%',
        width: '100%',
        zoom: 15,
    };
};
