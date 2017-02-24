 export function selectNeighborhood(neighborhood) {
  console.log(neighborhood);
  return {
    type: 'NEIGHBORHOOD_SELECTED',
    payload: neighborhood
  };
 }