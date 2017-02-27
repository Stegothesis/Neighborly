import React, { Component } from 'react';
import { connect } from 'react-redux';

export class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setCoordinates: {lat: 30.0, lng: -97.0}
    }
  }

  componentDidMount() {
    console.log('Google Maps Rendered');
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.state.setCoordinates.lat,
        lng: this.state.setCoordinates.lng
      }
    });
    console.log('Set Coordinates', this.state.setCoordinates);
  }

  componentDidUpdate() {
    this.updateSetCoordinates();
  }

  updateSetCoordinates() {
    var context = this;
    console.log('New Coordinates', parseFloat(this.props.activeNeighborhood.latitude));
    console.log('Current Coordinates', this.state.setCoordinates.lat);
    if (parseFloat(this.props.activeNeighborhood.latitude) !== this.state.setCoordinates.lat && parseFloat(this.props.activeNeighborhood.longitude) !== this.state.setCoordinates.lng) {
      context.setState( { setCoordinates : {
        lat: parseFloat(context.props.activeNeighborhood.latitude),
        lng: parseFloat(context.props.activeNeighborhood.longitude)
        }
      });
      context.componentDidMount();
    }
  }

  render() {
    return <div style={{height: "600px", width:"600px"}} ref="map"></div>;
  }
}

function mapStateToProps(state) {
  return {
    activeNeighborhood: state.activeNeighborhood
  };
}

export default connect(mapStateToProps)(GoogleMap);
//ref system in react allows us to get a direct refernce to an html element that has been rendered to the page
