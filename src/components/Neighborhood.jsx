import React from 'react';
import Maps from './Map.jsx';
import Data from './Data.jsx';
import Dropdown from './Dropdown.jsx';
import Review from './Review.jsx';

const Neighborhood = (props) => {
  return <div>
    <div className="text-center">
      <Maps />
    </div>
    <Data />
    <Dropdown />
    <Review />
    <Review />
    <Review />
  </div>
}

module.exports = Neighborhood;