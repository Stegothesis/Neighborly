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
      state:''
    };

    this.onCityInputChange = this.onCityInputChange.bind(this);
    this.onStateInputChange = this.onStateInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCityInputChange(event) {
    this.setState({city: event.target.value})
  }

  onStateInputChange(event) {
    this.setState({state: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
    //reroute to city component
    hashHistory.push(`/city/${this.state.city}/${this.state.state}`);
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
                                placeholder="Choose a city: "
                                className="form-control"
                                value={this.state.city}
                                onChange={this.onCityInputChange}
                              />
                              <input
                                placeholder="Choose a state"
                                className="form-control"
                                value={this.state.state}
                                onChange={this.onStateInputChange}
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
                                placeholder="Choose a city: "
                                className="form-control"
                                value={this.state.city}
                                onChange={this.onCityInputChange}
                              />
                              <input
                                placeholder="Choose a state"
                                className="form-control"
                                value={this.state.state}
                                onChange={this.onStateInputChange}
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
                                placeholder="Choose a city: "
                                className="form-control"
                                value={this.state.city}
                                onChange={this.onCityInputChange}
                              />
                              <input
                                placeholder="Choose a state"
                                className="form-control"
                                value={this.state.state}
                                onChange={this.onStateInputChange}
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



