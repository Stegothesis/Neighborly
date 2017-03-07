export function sendAmenitiesCoordinates(coordinates) {
  return {
    type: 'AMENITIES_COORDINATES',
    payload: coordinates
  };
 }