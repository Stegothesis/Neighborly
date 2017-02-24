import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReviewSubmit from '../containers/ReviewSubmit.jsx';
import ReviewMap from '../containers/ReviewMap.jsx';
import Neighborhood from './Neighborhood.jsx';
import City from '../containers/City.jsx';
import Rate from './Rate.jsx';
import User from './User.jsx';
import SearchBar from '../containers/SearchBar.jsx';
import NeighborhoodDetail from '../containers/neighborhood-detail.jsx';
import NavbarContainer from '../containers/NavbarContainer.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Landing from './Landing.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">

        <div>
          <NavbarContainer />
        </div>

        <div>
          <Landing />
        </div>

        <hr />

        <div>
<<<<<<< 11c23d8d240b867b4b31e2b6c027c0bfda34ed86
          <Neighborhood />
=======
          <NeighborhoodDetail />
>>>>>>> Add vote count and timestamp to reviews
        </div>

        <div>
          <Footer />
        </div>

      </div>
    );
  }
}

