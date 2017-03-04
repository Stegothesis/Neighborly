import React from 'react';
import { Component } from 'react';
import ReviewMap from '../containers/ReviewMap.jsx';
import GoogleMap from '../containers/GoogleMap.jsx';
import { bindActionCreators } from 'redux';
import NeighborhoodDetail from '../containers/neighborhood-detail.jsx';
import { connect } from 'react-redux';
import axios from 'axios';
import { selectNeighborhood } from '../actions/action_select_Neighborhood.jsx';
import { sendZoom } from '../actions/action_zoom.jsx';
import { fetchNeighborhoodData } from '../actions/action_fetchNeighborhoods.jsx';
import { sendWalkScore } from '../actions/action_walkScore.jsx';
import { sendZillowDemographics } from '../actions/action_zillowDemographics.jsx';

export class Neighborhood extends Component {
  constructor(props) {
    super(props)

  }


  componentDidMount() {
    this.callDemographics();
    this.callWalkScore();
    this.props.sendZoom({zoom: 14});
    if (!this.props.neighborhood) {
      var that = this;
      const url = '/api/neighborhoods/searchbycity/' + that.props.params.city + '/' + that.props.params.state;
      axios.get(url).then(function(response) {
        function parseUrlState(url) {
          return url.substring(33,35);
        }
        function parseUrlCity(url) {
          return url.substring(36).split('/')[0];
        }
        var mappedData = response.data.filter(function(hood) {
          return hood.name[0] === that.props.params.hood;
        }).map(function(hood) {
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
          that.props.selectNeighborhood(mappedData[0]);
        });
    }
  }

  callDemographics() {
    const context = this;
    const demographicsUrl = '/api/neighborhoods/demographics/' + this.props.neighborhood.neighborhood_name + '/' + this.props.neighborhood.city
    axios.get(demographicsUrl).then(function(demographics) {
      console.log('callDemographics', demographics);
      var demographicsObj = {};
      if (demographics.data[0].values[0].neighborhood) {
      demographicsObj.income = parseInt(demographics.data[0].values[0].neighborhood[0].value[0]._).toString();
      demographicsObj.singleMalesPercent = Math.floor(demographics.data[1].values[0].neighborhood[0].value[0]._ * 100);
      demographicsObj.singleFemalePercent = Math.floor(demographics.data[2].values[0].neighborhood[0].value[0]._ * 100);
      demographicsObj.averageAge = demographics.data[3].values[0].neighborhood[0].value[0];
      demographicsObj.averageCommuteTime = parseInt(demographics.data[6].values[0].neighborhood[0].value[0]);
      } else {
      demographicsObj.income = parseInt(demographics.data[0].values[0].city[0].value[0]._).toString();
      demographicsObj.singleMalesPercent = Math.floor(demographics.data[1].values[0].city[0].value[0]._ * 100);
      demographicsObj.singleFemalePercent = Math.floor(demographics.data[2].values[0].city[0].value[0]._ * 100);
      demographicsObj.averageAge = demographics.data[3].values[0].city[0].value[0];
      demographicsObj.averageCommuteTime = parseInt(demographics.data[6].values[0].city[0].value[0]);
      }
      context.props.sendZillowDemographics(demographicsObj);
    })
  }

  callWalkScore() {
  console.log('CALL WALKSCORE');
    const context = this;
    const apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + global.latitude + ',' + global.longitude + '&key=' + 'AIzaSyDh4nd5J3XJwQvcz_Iz88A2hgHcFRJ3K3k';
    axios.get(apiUrl).then(function(geocode) {
    let addressObj = {};
      if (geocode.data.results[0]) {
        addressObj.address = geocode.data.results[0].address_components[0].short_name + " " + geocode.data.results[0].address_components[1].long_name + " " + geocode.data.results[0].address_components[3].long_name + " " + geocode.data.results[0].address_components[5].short_name + " " + geocode.data.results[0].address_components[7].long_name;
          global.address = addressObj.address;
          let walkScoreUrl = '/api/neighborhoods/walk/' + global.address + '/' + global.latitude + '/' + global.longitude;
            axios.get(walkScoreUrl).then(function(response) {
              let walkScoreObj = {};
              walkScoreObj.walkScore = response.data.walkscore;
              walkScoreObj.description = response.data.description;
              context.props.sendWalkScore(walkScoreObj);
          });
      }
    });
  }

render() {
  return (
    <div>
      <NeighborhoodDetail />
      <ReviewMap />
    </div>
  );
 }
}

function mapStateToProps(state) {
  return {
    neighborhood: state.activeNeighborhood,
    neighborhoods: state.neighborhoods
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendWalkScore, fetchNeighborhoodData, selectNeighborhood, sendZoom, sendZillowDemographics }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Neighborhood);