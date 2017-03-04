export function sendDefaultCoordinates(coordinates) {
  return {
    type: 'DEFAULT_COORDINATES',
    payload: coordinates
  };
 }