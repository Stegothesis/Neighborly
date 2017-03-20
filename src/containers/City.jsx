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
    this.state = {
      loading: true,
      notFound: false,
      render: false
    }
  }

  componentDidMount() {
    this.props.sendZoom({zoom: 10});
    console.log(this.props.params.city);
    const url = '/api/neighborhoods/searchbycity/' + this.props.params.city + '/' + this.props.params.state;
    const context = this;
    axios.get(url).then(function(response) {
      var mappedData = response.data.map(function(hood) {
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
      context.setState({loading: false});
      context.props.fetchNeighborhoodData(mappedData);
      context.props.sendDefaultCoordinates(defaultCoordinates);
    })
    .catch(function(error) {
      context.setState({
        loading: false,
        notFound: true
      });
    })
  }

  componentWillReceiveProps(nextProps) {
    const context = this;
    if (this.props.params.city !== nextProps.params.city) {
      context.props.params.city = nextProps.params.city;
      context.props.params.state = nextProps.params.state;
      context.setState({loading: true});
      context.componentDidMount();
    }
  }

  componentWillUnmount() {
    this.props.defaultCoordinate.load = true;
  }

  renderList() {
    return this.props.neighborhoods.map((neighborhood) => {
      return (
        <li className="btn btn-xs btn-primary" key={neighborhood.name}
        onClick={ () => {
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
    if (this.state.loading) {
      return (
        <div className="loading-page">
          <div className="loading-page-text">Finding Neighborhoods in {this.props.params.city}, {this.props.params.state}...</div>
          <img className="loading-gif" src="images/rolling.gif"></img>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      );
    } else if (this.state.notFound) {
      return (
        <div className="loading-page">
          <div className="loading-page-text">Sorry! We couldn't find anything for "{this.props.params.city}, {this.props.params.state}."</div>
        </div>)
    } else {
      return (
        <div className="container">
          <div className="widget tags">
            <ul className="tag-cloud">
              <h2>Welcome to {this.props.params.city}!</h2>
              <h2>Click on a neighborhood below.</h2>
              <GoogleMap  />
              {this.props.neighborhoods.map((neighborhood) => {
                return (
                <li className="btn btn-primary" key={neighborhood.name}
                onClick={ () => {
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
}

function mapStateToProps(state) {
  return {
    neighborhoods: state.neighborhoods,
    activeNeighborhood: state.activeNeighborhood,
    defaultCoordinate: state.defaultCoordinate
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendWalkScore, selectNeighborhood, sendDefaultCoordinates, fetchNeighborhoodData, sendZoom }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(City);