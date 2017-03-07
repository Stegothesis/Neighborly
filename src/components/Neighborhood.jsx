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
import { getReview } from '../actions/index.jsx'
import { sendAmenitiesCoordinates } from '../actions/action_amenitiesCoordinates.jsx';

export class Neighborhood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
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
        that.setState({loading: false});
        that.props.sendZoom({zoom: 14});
        that.props.selectNeighborhood(mappedData[0]);
        global.latitude = mappedData[0].latitude;
        global.longitude = mappedData[0].longitude;
        that.callWalkScore();
        that.callDemographics();
        that.callAmenities();
        that.loadReviewsFromServer();
      });
    } else {
        this.callDemographics();
        this.callAmenities();
        this.callWalkScore();
        this.loadReviewsFromServer();
        this.props.sendZoom({zoom: 14});
        this.setState({loading: false});
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

  callAmenities() {
    console.log('CALL AMENITIES');
    const context = this;
    const amenitiesUrl = '/api/neighborhoods/amenities/' + global.latitude + '/' + global.longitude;
    axios.get(amenitiesUrl).then(function(response) {
      console.log('AMENITIES FRONT-END', response);
      let amenitiesNames = [];
      let amenitiesCoordinates = {coordinates: [], names: []};
      for (let i = 0; i < response.data.amenities.length; i++) {
        amenitiesCoordinates.coordinates.push([response.data.amenities[i].geometry[0].location[0].lat[0], response.data.amenities[i].geometry[0].location[0].lng[0], response.data.amenities[i].name[0], response.data.amenities[i].type[0]]);
      }
      context.props.sendAmenitiesCoordinates(amenitiesCoordinates.coordinates);
      if (amenitiesCoordinates) {
        amenitiesCoordinates.coordinates.map(function(coordinates) {
            var marker = new google.maps.Marker({
              position: {lat: parseFloat(coordinates[0]), lng: parseFloat(coordinates[1])},
              map: global.map,
              title: 'Amenities Marker'
            });
            var infowindow = new google.maps.InfoWindow({
              content: coordinates[2]
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.open(map, marker);
            });
        });
      }
    })
  }

  loadReviewsFromServer() {
    var that = this;
    $.ajax({
      type: "GET",
      url: '/api/neighborhoods/reviews/' + that.props.neighborhood.name + '/' + that.props.neighborhood.city + '/' + that.props.neighborhood.state,
      success: function(data) {
        console.log("Get review successful", data);
        that.props.getReview(data);
      },
      error: function (error) {
        console.log("Error: Get review failed", error);
      },
      contentType: 'application/json',
      Accept: 'application/json',
      dataType: 'json'
    });
  }

render() {
  if (this.state.loading) {
    return (
      <div className="loading-page">
        <div className="loading-page-text">Finding data on {this.props.params.hood}...</div>
        <img className="loading-gif" src="images/rolling.gif"></img>
      </div>
    );
  } else {
    return (
      <div>
        <NeighborhoodDetail />
        <ReviewMap reviews={this.props.reviews}/>
      </div>
    );
   }
  }
}

function mapStateToProps(state) {
  return {
    neighborhood: state.activeNeighborhood,
    neighborhoods: state.neighborhoods,
    reviews: state.reviews
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendAmenitiesCoordinates, sendWalkScore, fetchNeighborhoodData, selectNeighborhood, sendZoom, sendZillowDemographics, getReview }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Neighborhood);