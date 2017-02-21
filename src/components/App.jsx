import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Review from '../containers/reviews.jsx'
import Neighborhood from './Neighborhood.jsx'
import City from '../containers/City.jsx'
import Rate from './Rate.jsx'
import User from './User.jsx'
import Landing from '../containers/Landing.jsx'
import NeighborhoodDetail from '../containers/neighborhood-detail.jsx'
import NavbarContainer from '../containers/NavbarContainer.jsx'

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
      <div>
        <City />
      </div>
      <div>
        <NeighborhoodDetail />
      </div>
      </div>
    );
  }
}

