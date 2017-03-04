import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../containers/SearchBar.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <section id="bottom">
          <div className="container wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
            <div className="row"></div>
          </div>
        </section>

        <div>
          {this.props.children}
        </div>

        <Footer />
      </div>
    );
  }
}




