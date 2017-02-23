import React, { Component } from 'react';
import { connect } from 'react-redux';

class NeighborhoodDetail extends Component {
  render() {
    console.log("this.props.neighborhood skjflskjflskjf", this.props.neighborhood)
    if (!this.props.neighborhood) {
      return <div>Select a neighborhood</div>;
    }
    return (
      <div>
        <h3>Details for: </h3>
        <div>
          Name: {this.props.neighborhood.name}
        </div>
        <div>
          Population: {this.props.neighborhood.population}
        </div>
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