import React from 'react';
import SearchBar from '../containers/SearchBar.jsx';
import City from '../containers/City.jsx';

const Landing = (props) => {
  return(
      <div>
        <SearchBar />
        <City />
      </div>
      );
}

module.exports = Landing;