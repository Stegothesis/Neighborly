import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Review from '../containers/reviews.jsx'
import Neighborhood from './Neighborhood.jsx'
import City from '../containers/City.jsx'
import Rate from './Rate.jsx'
import User from './User.jsx'
import Landing from '../containers/Landing.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
      <Landing />
      <City />
      </div>
    );
  }
}

