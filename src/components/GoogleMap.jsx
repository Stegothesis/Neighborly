import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map"></div>
  }
}

export deafult GoogleMap;

//ref system in react allows us to get a direct refernce to an html element that has been rendered to the page
