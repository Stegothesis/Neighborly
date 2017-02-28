import React from 'react';
import ReviewMap from '../containers/ReviewMap.jsx';
import GoogleMap from '../containers/GoogleMap.jsx';
import NeighborhoodDetail from '../containers/neighborhood-detail.jsx';

const Neighborhood = (props) => {
  console.log("LON IN NEIGHBORHOOD")
  return <div>
    <ReviewMap />
    <NeighborhoodDetail />
  </div>
}

module.exports = Neighborhood;