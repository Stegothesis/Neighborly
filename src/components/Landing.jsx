import React from 'react';
import SearchBar from '../containers/SearchBar.jsx';
import ReviewSubmit from '../containers/ReviewSubmit.jsx';
import NeighborhoodDetail from '../containers/neighborhood-detail.jsx';
import ReviewMap from '../containers/ReviewMap.jsx';
import City from '../containers/City.jsx';

const Landing = (props) => {
  return(
      <div>
          <div>
            <SearchBar />
          </div>
          <div>
            <ReviewSubmit />
          </div>
          <div>
            <NeighborhoodDetail />
          </div>
          <div>
            <ReviewMap />
          </div>
          <div>
            <City />
          </div>
      </div>
      );
}

module.exports = Landing;