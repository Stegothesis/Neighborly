import React, { Component } from 'react';
import { connect } from 'react-redux';

//this.props.defaultCoordinates is an object containing default coordinates
//so that GoogleMap is not null on default

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
      center: this.state.setCoordinates
    });
    console.log(this.state.setCoordinates);
  }

  componentDidUpdate() {
    this.updateSetCoordinates();
  }

  updateSetCoordinates() {
    var context = this;
    console.log(this.props.activeNeighborhood.latitude);
    console.log(this.state.setCoordinates.lat);
    if (this.props.activeNeighborhood.latitude !== this.state.setCoordinates.lat && this.props.activeNeighborhood.longitude !== this.state.setCoordinates.lng) {
      this.setState( this.state.setCoordinates : {
        lat: context.props.activeNeighborhood.latitude,
        lng: context.props.activeNeighborhood.longitude
      });
    }
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
