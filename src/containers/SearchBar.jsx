import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNeighborhoodData } from '../actions/action_fetchNeighborhoods.jsx';
import { sendDefaultCoordinates } from '../actions/action_coordinates.jsx';
import axios from 'axios';
import City from './City.jsx';
import{ Link }from 'react-router';
import { push } from 'react-router-redux'
import GoogleMap from './GoogleMap.jsx';



class SearchBar extends Component {
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
    //grab city and state from this.state.city and this.state.state
    const url = '/api/neighborhoods/searchbycity/' + this.state.city + '/' + this.state.state;
    var that = this;
    const request = axios.get(url).then(function(response) {
      console.log('whats response', response);
      function parseUrlState(url) {
        return url.substring(33,35);
      }
      function parseUrlCity(url) {
        return url.substring(36).split('/')[0];
      }
      var mappedData = response.data.map(function(hood) {
        console.log('HOOD', hood);
        let homePrice;
        if (hood.zindex === undefined) {
          return {
            name: hood.name[0],
            city: parseUrlCity(hood.url[0]),
            state: parseUrlState(hood.url[0]),
            latitude: hood.latitude[0],
            longitude: hood.longitude[0],
            homePrice: "Housing Price Not Available"
          }
        } else {
          return {
            name: hood.name[0],
            city: parseUrlCity(hood.url[0]),
            state: parseUrlState(hood.url[0]),
            latitude: hood.latitude[0],
            longitude: hood.longitude[0],
            homePrice: hood.zindex[0]._ + " " + hood.zindex[0].$.currency
          }
        }
      });
      //send the first neighborhood's latitude and longitude to GoogleMap container
        let defaultCoordinates = {
          lat: response.data[0].latitude[0],
          lng: response.data[0].longitude[0]
        }
      console.log('DEFAULT COORDINATES SENT FROM SEARCHBAR', defaultCoordinates);
      that.props.fetchNeighborhoodData(mappedData);
      that.props.sendDefaultCoordinates(defaultCoordinates);
    });

  }

/*
  getAddress(hood) {
    const geocodeUrl = '/api/neighborhoods/address/' + hood.latitude[0] + '/' + hood.longitude[0]
    var that = this;
     const request = axios.get(geocodeUrl).then(function(response) {
      console.log('**GEOCODE URL**', response);
      var mappedData = response.data.map(function(geocode) {
        console.log('geocode', geocode);
      });
      console.log(mappedData);
      that.props.fetchNeighborhoodData(mappedData);
    });
  }

*/

  render() {
    return (
      <div>
      <form onSubmit={(e)=>this.onFormSubmit(e)} className="input-group">
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
          <button type="submit" className="btn btn-secondary">Submit</button>
          />
        }
        }
        }
        </span>
      </form>
      <City />
      </div>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNeighborhoodData, sendDefaultCoordinates }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);