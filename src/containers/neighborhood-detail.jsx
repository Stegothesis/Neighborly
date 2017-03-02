import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewSubmit from './ReviewSubmit.jsx';
import GoogleMap from './GoogleMap.jsx'

class NeighborhoodDetail extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    if (!this.props.activeNeighborhood) {
      return <div></div>;
    }
    return (
      <div>
        <h3>Details for: </h3>
        <div>
          Name: {this.props.activeNeighborhood.name} <br/>
          Average Home Price: {this.props.activeNeighborhood.homePrice} <br/>
          User Ratings: <br/>
          Overall: {Math.round(this.props.activeNeighborhood.avg_star_rating * 10) / 10} <br/>
          Sense of Community: {Math.round(this.props.activeNeighborhood.avg_sense_of_community * 10) / 10} <br/>
          Good for Singles: {Math.round(this.props.activeNeighborhood.avg_singles_friendly * 10) / 10} <br/>
          Kid-Friendly: {Math.round(this.props.activeNeighborhood.avg_kid_friendly * 10) / 10} <br/>
          Good for Retirees: {Math.round(this.props.activeNeighborhood.avg_retirees * 10) / 10} <br/>
          Entertainment: {Math.round(this.props.activeNeighborhood.avg_entertainment * 10) / 10} <br/>
          Nightlife: {Math.round(this.props.activeNeighborhood.avg_nightlife * 10) / 10} <br/>
          Culture and Arts: {Math.round(this.props.activeNeighborhood.avg_culture_arts * 10) / 10} <br/>
          Schools: {Math.round(this.props.activeNeighborhood.avg_schools * 10) / 10} <br/>
          Safety: {Math.round(this.props.activeNeighborhood.avg_safety * 10) / 10} <br/>
          Amenities: {Math.round(this.props.activeNeighborhood.avg_ameneties * 10) / 10} <br/>
          Hipster Factor: {Math.round(this.props.activeNeighborhood.avg_hipster_rating * 10) / 10} <br/>
          Affordability: {Math.round(this.props.activeNeighborhood.avg_affordability * 10) / 10} <br/>
        </div>
        <ReviewSubmit />
        <GoogleMap />
      </div>
      );
  }
}

function mapStateToProps(state) {
//Whatever is returned here will show up as props inside of BookList Container
  return {
    activeNeighborhood: state.activeNeighborhood
  };
}


export default connect(mapStateToProps)(NeighborhoodDetail);