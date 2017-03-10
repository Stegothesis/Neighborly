import React, { Component } from 'react';
import Auth from './Auth.jsx';
import { hashHistory } from 'react-router';
import { push } from 'react-router-redux';


export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      state:'',
      location: '',
      autocompleteNav: ''
    };

    this.onLocationInputChange = this.onLocationInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    let input = document.getElementById('navbar-input');
    const options = {
      types: ['(cities)'],
      componentRestrictions: {country: "us"}
    };
    let autocompleteNav = new google.maps.places.Autocomplete(input, options);
    this.setState({autocompleteNav: autocompleteNav});
  }

  onLocationInputChange(event) {
    this.setState({location: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
    const context = this;
    google.maps.event.addListener(this.state.autocompleteNav, 'place_changed', function() {
      fillInAddress();
    });
    function fillInAddress() {
      let place = context.state.autocompleteNav.getPlace();
      console.log('PLACE', place);
      let cityAuto = place.address_components[0].long_name;
      let stateAuto;
      if (place.address_components[2].short_name === "US") {
        stateAuto = place.address_components[1].short_name;
      } else {
        stateAuto = place.address_components[2].short_name;
      }
      context.setState({
        city: cityAuto,
        state: stateAuto,
        location: ''
      }, () => {
        hashHistory.push(`/city/${context.state.city}/${context.state.state}`);
      });
    }
  }

  render() {
  return (
    <div>
    <header id="header">
      <nav className="navbar navbar-inverse" role="banner">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/"><img src="images/logo.png" className="image1" alt="logo"/></a>
          </div>

          <div className="collapse navbar-collapse navbar-center">
            <form onSubmit={(e)=>this.onFormSubmit(e)} className="input-group">
              <input
                placeholder="Enter a location"
                className="form-control"
                id="navbar-input"
                type="text"
                value={this.state.location}
                onChange={this.onLocationInputChange}
              />

              <span id="hide-button" className="input-group-btn">
                  <button></button>
              </span>
              </form>
             </div>

          <div className="collapse navbar-collapse navbar-right">
            <ul className="nav navbar-nav">
              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div>
      {this.props.children}
    </div>
    </div>
  )
}
};








