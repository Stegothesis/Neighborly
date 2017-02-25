import React from 'react';
import Maps from './Map.jsx';
import Data from './Data.jsx';
import Dropdown from './Dropdown.jsx';
import Review from './Review.jsx';
import ReviewMap from '../containers/ReviewMap.jsx';
import GoogleMap from '../containers/GoogleMap.jsx';
import NeighborhoodDetail from '../containers/neighborhood-detail.jsx';

const Neighborhood = (props) => {
  return <div>
    <div className="text-center">
      <Maps />
    </div>
    <GoogleMap />
    <Data />
    <Dropdown />
    <ReviewMap />
    <NeighborhoodDetail />
  </div>
}

module.exports = Neighborhood;