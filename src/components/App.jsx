import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Review from '../containers/reviews.jsx'
import Rate from './Rate.jsx'
import User from './User.jsx'
import Landing from './Landing.jsx'
import Neighborhood from './Neighborhood.jsx'
import City from './City.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
      <Review />
      <Landing />
      <Neighborhood />
      <City />
      <User />
      <Rate />
      </div>
    );
  }
}

