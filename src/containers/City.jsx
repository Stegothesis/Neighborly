import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { selectNeighborhood, postReview } from '../actions/action_select_Neighborhood.jsx';
import { bindActionCreators } from 'redux';
import Neighborhood from '../components/Neighborhood.jsx';
import GoogleMap from './GoogleMap.jsx';
import axios from 'axios';
import { fetchNeighborhoodData } from '../actions/action_fetchNeighborhoods.jsx';
import { sendDefaultCoordinates } from '../actions/action_coordinates.jsx';
import NeighborhoodDetail from './neighborhood-detail.jsx'
import { sendZoom } from '../actions/action_zoom.jsx';

export class City extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.sendZoom({zoom: 10});
    const url = '/api/neighborhoods/searchbycity/' + this.props.params.city + '/' + this.props.params.state;
    var that = this;
    axios.get(url).then(function(response) {
      console.log('whats response', response);
      var mappedData = response.data.map(function(hood) {
        console.log('HOOD', hood);
        hood.name = hood.name[0];
        hood.latitude = hood.latitude[0];
        hood.longitude = hood.longitude[0];
        if(!hood.zindex) {
          hood.homePrice = "Housing Price Not Available";
        } else {
          hood.homePrice = hood.zindex[0]._ + " " + hood.zindex[0].$.currency;
        }
        console.log('mapped hooood----', hood);
        return hood;
      });
      let defaultCoordinates = {
        lat: mappedData[0].latitude,
        lng: mappedData[0].longitude
      }
      that.props.fetchNeighborhoodData(mappedData);
      console.log('City Component Mounted', defaultCoordinates);
      that.props.sendDefaultCoordinates(defaultCoordinates);
    });
  }

  renderList() {
    return this.props.neighborhoods.map((neighborhood) => {
      return (
        <li className="btn btn-xs btn-primary" key={neighborhood.name}
        onClick={ () => {
          this.props.selectNeighborhood(neighborhood);
          hashHistory.push(`/neighborhood/${neighborhood.name}/${this.props.params.city}/${this.props.params.state}`);
        }}
        >{neighborhood.name}</li>
        );
    });
  }

  render() {
    return (
      <div className="widget tags">
        <ul className="tag-cloud">
          <h2>After entering the city and state, click on a neighborhood below to see its information below.</h2>
          {this.renderList()}
        </ul>
      <GoogleMap  />

      </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    neighborhoods: state.neighborhoods
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectNeighborhood, sendDefaultCoordinates, fetchNeighborhoodData, sendZoom }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(City);