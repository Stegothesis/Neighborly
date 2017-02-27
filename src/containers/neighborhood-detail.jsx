import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewSubmit from './ReviewSubmit.jsx';
import GoogleMap from './GoogleMap.jsx'

class NeighborhoodDetail extends Component {
  render() {
    console.log("this.props.neighborhood skjflskjflskjf", this.props.activeNeighborhood)

    if (!this.props.neighborhood) {
      return <div></div>;
    }
    return (
      <div>
        <h3>Details for: </h3>
        <div>
          Name: {this.props.neighborhood.name} <br/>
          Average Home Price: {this.props.neighborhood.homePrice}
        </div>
        <GoogleMap lat={this.props.neighborhood.latitude} lng={this.props.neighborhood.longitude} />
        <ReviewSubmit />
      </div>
      );
  }
}

function mapStateToProps(state) {
//Whatever is returned here will show up as props inside of BookList Container
  return {
    neighborhood: state.activeNeighborhood
  };
}

export default connect(mapStateToProps)(NeighborhoodDetail);