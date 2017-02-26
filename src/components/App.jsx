import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../containers/SearchBar.jsx';
//;fsdog

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header clearfix">
          <h1 className="text-muted">Community</h1>
        </div>
        <SearchBar />
        {this.props.children}
        <footer className="navbar-default navbar-fixed-bottom">
  <div className="container-fluid">
    <span>&copy; 2017 Community</span>
  </div>
</footer>
      </div>
    );
  }
}


