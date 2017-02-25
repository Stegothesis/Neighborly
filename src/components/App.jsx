import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../containers/SearchBar.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header clearfix">
          <h1 className="text-muted">Community</h1>
        </div>
        <SearchBar />
        <footer className="navbar-default navbar-fixed-bottom">
  <div className="container-fluid">
    <span>&copy; 2017 Community</span>
  </div>
</footer>
      </div>
    );
  }
}


