import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNeighborhoodData } from '../actions/action_fetchNeighborhoods.jsx';
import axios from 'axios';
import City from './City.jsx';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    console.log("THIS.PROPS INSIDE SERACHBAR", this.props)
    event.preventDefault();
    const url = '/api/neighborhoods/searchbycity/austin/tx';
    var that = this;
    const request = axios.get(url).then(function(response) {
      console.log('whats response', response);
      var mappedData = response.data.map(function(hood) {
        console.log('HOOD', hood);
        return {
          name: hood.name[0],
          latitude: hood.latitude[0],
          longitude: hood.longitude[0]
        }
      })
      console.log(mappedData);
      that.props.fetchNeighborhoodData(mappedData);
    });
    this.setState({ term: ''});
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        placeholder="Choose a city: "
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
      <City />
      </div>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNeighborhoodData }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);