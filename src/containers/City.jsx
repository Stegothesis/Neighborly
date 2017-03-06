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
import NeighborhoodDetail from './neighborhood-detail.jsx';
import { sendZoom } from '../actions/action_zoom.jsx';
import { sendWalkScore } from '../actions/action_walkScore.jsx';

export class City extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.sendZoom({zoom: 10});
    const url = '/api/neighborhoods/searchbycity/' + this.props.params.city + '/' + this.props.params.state;
    var that = this;
    axios.get(url).then(function(response) {
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
        return hood;
      });
      let defaultCoordinates = {
        lat: mappedData[0].latitude,
        lng: mappedData[0].longitude
      }
      that.props.fetchNeighborhoodData(mappedData);
      that.props.sendDefaultCoordinates(defaultCoordinates);
    });
  }

  renderList() {
    return this.props.neighborhoods.map((neighborhood) => {
      return (
        <li className="btn btn-xs btn-primary" key={neighborhood.name}
        onClick={ () => {
          console.log('NEIGHBORHOOD HAS BEEN CLICKED ON', neighborhood);
          this.props.selectNeighborhood(neighborhood);
          global.latitude = neighborhood.latitude;
          global.longitude = neighborhood.longitude;
            hashHistory.push(`/neighborhood/${neighborhood.name}/${this.props.params.city}/${this.props.params.state}`);
          }}
        >{neighborhood.name}</li>
        );
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Hey There, Neighbor! Welcome to {this.props.params.city}></h1>
        <div className="widget tags">
          <ul className="tag-cloud">
            <h2>Click on a neighborhood below and check it out!</h2>
            <GoogleMap  />
            {this.props.neighborhoods.map((neighborhood) => {
              return (
              <li className="btn btn-xs btn-primary" key={neighborhood.name}
              onClick={ () => {
              console.log('NEIGHBORHOOD HAS BEEN CLICKED ON', neighborhood);
              this.props.selectNeighborhood(neighborhood);
              global.latitude = neighborhood.latitude;
              global.longitude = neighborhood.longitude;
                hashHistory.push(`/neighborhood/${neighborhood.name}/${this.props.params.city}/${this.props.params.state}`);
              }}
            >{neighborhood.name}</li>
            );
           })}
          </ul>
        </div>
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
  return bindActionCreators({ sendWalkScore, selectNeighborhood, sendDefaultCoordinates, fetchNeighborhoodData, sendZoom }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(City);