export function sendDefaultCoordinates(coordinates) {
  console.log('Default Coordinates', coordinates);
  return {
    type: 'DEFAULT_COORDINATES',
    payload: coordinates
  };
 }