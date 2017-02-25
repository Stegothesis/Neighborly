import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing.jsx';
import Neighborhood from './Neighborhood.jsx';
import Footer from './Footer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
          <Landing />
          <Neighborhood />
          <Footer />
      </div>
    );
  }
}

