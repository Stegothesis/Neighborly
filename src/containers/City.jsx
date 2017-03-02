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
import $ from 'jquery';

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
          this.props.params.latitude = neighborhood.latitude;
          this.props.params.longitude = neighborhood.longitude;
          console.log('PROPS PARAMS', this.props.params);
          var context = this;
          const apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.props.params.latitude + ',' + this.props.params.longitude + '&key=' + 'AIzaSyDh4nd5J3XJwQvcz_Iz88A2hgHcFRJ3K3k';
           axios.get(apiUrl).then(function(geocode) {
             console.log('geo response', geocode);
             var addressObj = {};
             addressObj.address = geocode.data.results[0].address_components[0].short_name + " " + geocode.data.results[0].address_components[1].long_name + " " + geocode.data.results[0].address_components[3].long_name + " " + geocode.data.results[0].address_components[5].short_name + " " + geocode.data.results[0].address_components[7].long_name;
             context.props.params.address = addressObj.address;
             console.log(addressObj.address);
             // $.ajax({
             //    method: "GET",
             //    url: "../../server/walkscore.php",
             //    data: {"address": addressObj.address,
             //           "lat": parseFloat(neighborhood.latitude),
             //           "lon": parseFloat(neighborhood.longitude),
             //  },
             //  success: function(response) {
             //    console.log(response);
             //    var obj = $.jsonParse(response);
             //    console.log('WALK SCORE', obj.walkscore);
             //  },
             //  error: function(error) {
             //    console.log('WALK SCORE ERROR', error);
             //  },
             //  contentType: 'application/json',
             //  accepts: 'application/json',
             //  dataType: 'json'
             // });

             //No calls can be made from client-side because Walk Score does not support CORS
             const walkScoreUrl = '/api/walk/' + context.props.params.address + '/' + context.props.params.latitude + '/' + context.props.params.longitude;
              axios.get(walkScoreUrl).then(function(response) {
                console.log('walk score', response);
              })
             })
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