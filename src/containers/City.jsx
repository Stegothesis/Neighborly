import React from 'react';
import { Component } from 'react'
import { connect } from 'react-redux';
import { selectNeighborhood } from '../actions/action_select_Neighborhood.jsx';
import { bindActionCreators } from 'redux';

export class City extends Component {
  renderList() {
    return this.props.neighborhoods.map((neighborhood) => {
      return (
        <li key={neighborhood.name}
        className="list-group-item">{neighborhood.name}</li>
        );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
      );
  }
}

function mapStateToProps(state) {

  return {
    neighborhoods: state.neighborhoods
  };
}

export default connect(mapStateToProps)(City);