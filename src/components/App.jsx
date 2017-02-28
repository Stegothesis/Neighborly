import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../containers/SearchBar.jsx';
import Navbar from './Navbar.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />


        <section id="partner">
          <div className="container">
            <div className="center wow fadeInDown">
              <h1>Community</h1>
              <p className="lead">A fun new way to get neighborhood information.</p>
            </div>
          </div>
        </section>

        <div className="container">
          {this.props.children}
        </div>

        <section id="bottom">
          <div class="container wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
            <div class="row"></div>
          </div>
        </section>

        <footer id="footer" className="midnight-blue">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        &copy; 2017 Community. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
      </div>
    );
  }
}




