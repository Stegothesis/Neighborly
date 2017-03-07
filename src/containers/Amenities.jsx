import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

//Get latitude and longitude pairs of all incoming amenities
//Put it all in an array of arrays
//Send the array through redux
//Have Google Map container map each pin on to the front-end

//List each amenity and its photo/information about it

class Amenities extends Component {
  constructor(props) {
    super(props);

  }

}

function mapStateToProps(state) {
  return {
    amenitiesCoordinates: state.amenitiesCoordinates
  };
}

export default connect(mapStateToProps)(Amenities);