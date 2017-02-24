import React, { Component } from 'react';
import { connect } from 'react-redux';

export class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        //lat: this.props.activeNeighborhood.latitude,
        //lng: this.props.activeNeighborhood.longitude
      }
    });
  }

  render() {
    return <div ref="map"></div>
  }
}

function mapStateToProps(state) {
  return {
    activeNeighborhood: state.activeNeighborhood
  };
}

export default connect(mapStateToProps)(GoogleMap);
//ref system in react allows us to get a direct refernce to an html element that has been rendered to the page
