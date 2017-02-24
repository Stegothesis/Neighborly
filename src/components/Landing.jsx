import React from 'react';
import SearchBar from '../containers/SearchBar.jsx';
import ReviewSubmit from '../containers/ReviewSubmit.jsx';
import NeighborhoodDetail from '../containers/neighborhood-detail.jsx';
import ReviewMap from '../containers/ReviewMap.jsx';
import City from '../containers/City.jsx';

const Landing = (props) => {
  return  <div>
    <div className="container">
      <h2>Austin</h2>
      <img src="http://www.laketravisproperties.com/images/downtown_1024.jpg" className="img-responsive center-block img-rounded" />
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
  </div>
}

module.exports = Landing;