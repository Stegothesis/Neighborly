import React from 'react';
import { Component } from 'react'
import { connect } from 'react-redux';
import { selectNeighborhood, postReview } from '../actions/action_select_Neighborhood.jsx';
import { bindActionCreators } from 'redux';
//
export class City extends Component {
  renderList() {
    return this.props.neighborhoods.map((neighborhood) => {
      return (
        <div>
        <li key={neighborhood.name}
        onClick={ () => this.props.selectNeighborhood(neighborhood) }
        className="list-group-item">{neighborhood.name}</li>
        </div>
        );
    });
  }

  render() {
    return (
      <div>
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
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
  return bindActionCreators({ selectNeighborhood: selectNeighborhood }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);