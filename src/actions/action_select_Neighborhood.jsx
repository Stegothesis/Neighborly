 export function selectNeighborhood(neighborhood) {
  return {
    type: 'NEIGHBORHOOD_SELECTED',
    payload: neighborhood
  };
 }