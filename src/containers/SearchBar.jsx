import React, { Component } from 'react';
import axios from 'axios';
import City from './City.jsx';
import { hashHistory } from 'react-router';
import { push } from 'react-router-redux';
import GoogleMap from './GoogleMap.jsx';
import Team from '../components/Team.jsx';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      state:'',
      location: '',
      autocomplete: ''
    };

    this.onLocationInputChange = this.onLocationInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    let input = document.getElementById('pac-input');
    const options = {
      types: ['(cities)'],
      componentRestrictions: {country: "us"}
    };
    let autocomplete = new google.maps.places.Autocomplete(input, options);
    this.setState({autocomplete: autocomplete});
  }

  onLocationInputChange(event) {
    this.setState({location: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
    const context = this;
    google.maps.event.addListener(this.state.autocomplete, 'place_changed', function() {
      fillInAddress();
    });
    function fillInAddress() {
      let place = context.state.autocomplete.getPlace();
      let cityAuto = place.address_components[0].long_name;
      let stateAuto = place.address_components[2].short_name;
      context.setState({
        city: cityAuto,
        state: stateAuto
      }, () => {
        hashHistory.push(`/city/${context.state.city}/${context.state.state}`);
      });
    }
  }

  render() {
    var divStyle1 = {
      backgroundImage: 'url(images/slider/bg1.jpg)'
    };
    var divStyle2 = {
      backgroundImage: 'url(images/slider/bg2.jpg)'
    };
    var divStyle3 = {
      backgroundImage: 'url(images/slider/bg3.jpg)'
    };

    return (
    <div>
      <section id="main-slider" className="no-margin">
        <div className="carousel slide">
            <ol className="carousel-indicators">
                <li data-target="#main-slider" data-slide-to="0" className="active"></li>
                <li data-target="#main-slider" data-slide-to="1"></li>
                <li data-target="#main-slider" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">

                <div className="item active" style={divStyle1}>
                    <div className="container">
                        <div className="row slide-margin">

                          <div className="center wow fadeInDown">
                            <h1 id="header-font">Neighborly</h1>
                            <p className="neighborhood-header">Find your next neighborhood</p>
                          </div>

                          <div className="center">
                            <form onSubmit={(e)=>this.onFormSubmit(e)} className="input-group">
                              <p className="neighborhood-header">Please enter a city and state to see its neighborhood details.</p>
                              <input
                                placeholder="Enter a location"
                                className="form-control"
                                id="pac-input"
                                type="text"
                                value={this.state.location}
                                onChange={this.onLocationInputChange}
                              />
                              <span className="input-group-btn">
                                  <button type="submit" className="btn btn-primary">Submit</button>
                              </span>
                            </form>
                          </div>

                        </div>
                    </div>
                </div>

                 <div className="item" style={divStyle2}>
                    <div className="container">
                        <div className="row slide-margin">

                          <div className="center wow fadeInDown">
                            <h1 id="header-font">Neighborly</h1>
                            <p className="neighborhood-header">Find your next neighborhood</p>
                          </div>

                          <div className="center">
                            <form onSubmit={(e)=>this.onFormSubmit(e)} className="input-group">
                              <p className="neighborhood-header">Please enter a city and state to see its neighborhood details.</p>
                              <input
                                placeholder="Enter a location"
                                className="form-control"
                                id="pac-input"
                                type="text"
                                value={this.state.location}
                                onChange={this.onLocationInputChange}
                              />
                              <span className="input-group-btn">
                                  <button type="submit" className="btn btn-primary">Submit</button>
                              </span>
                            </form>
                          </div>

                        </div>
                    </div>
                </div>

                <div className="item" style={divStyle3}>
                    <div className="container">
                        <div className="row slide-margin">

                          <div className="center wow fadeInDown">
                            <h1 id="header-font">Neighborly</h1>
                            <p className="neighborhood-header">Find your next neighborhood</p>
                          </div>

                          <div className="center">
                            <form onSubmit={(e)=>this.onFormSubmit(e)} className="input-group">
                              <p className="neighborhood-header">Please enter a city and state to see its neighborhood details.</p>
                              <input
                                placeholder="Enter a location"
                                className="form-control"
                                id="pac-input"
                                type="text"
                                value={this.state.location}
                                onChange={this.onLocationInputChange}
                              />
                              <span className="input-group-btn">
                                  <button type="submit" className="btn btn-primary">Submit</button>
                              </span>
                            </form>
                          </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        <a className="prev hidden-xs" href="#main-slider" data-slide="prev">
            <i className="fa fa-chevron-left"></i>
        </a>
        <a className="next hidden-xs" href="#main-slider" data-slide="next">
            <i className="fa fa-chevron-right"></i>
        </a>
    </section>

          <section id="bottom">
          <div className="container wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
            <div className="row"></div>
          </div>
        </section>

        <Team />
  </div>

    );
  }
}



