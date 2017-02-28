import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { selectNeighborhood, postReview } from '../actions/action_select_Neighborhood.jsx';
import { bindActionCreators } from 'redux';
import Neighborhood from '../components/Neighborhood.jsx';
import GoogleMap from './GoogleMap.jsx';

export class City extends Component {
  constructor(props) {
    super(props);

  }

  renderList() {
    return this.props.neighborhoods.map((neighborhood) => {
      return (
        <li className="btn btn-xs btn-primary" key={neighborhood.name}
        onClick={ () => this.props.selectNeighborhood(neighborhood) }
        >{neighborhood.name}</li>
        );
    });
  }

  render() {
    return (
      <div className="widget tags">
        <ul className="tag-cloud">
          <h2>After entering the city and state, click on a neighborhood below to see its information below.</h2>
          {this.renderList()}
        </ul>
      <GoogleMap lat={30.0} lng={-97.0} />
      <Neighborhood />
      </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    neighborhoods: state.neighborhoods,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectNeighborhood: selectNeighborhood }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);