import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postReview } from '../actions/index.jsx';
import { addReview } from '../actions/index.jsx';


class ReviewSubmit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      // stars_overall: null,
      // kid_friendly: null,
      // singles_friendly: null,
      // retirees: null,
      // sense_of_community: null,
      // nightlife: null,
      // entertainment: null,
      // affordability: null,
      // ameneties: null,
      // safety: null,
      // culture_arts: null,
      // schools: null,
      // crime: null,
      // hipster_rating: null
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    var state = {};
    state[event.target.name] = event.target.value;
    this.setState(state)
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.postReview(this.state, this.props.user.token);
    this.setState({ rating: ''});
}

  render() {
    //list of state values and their descriptions
    var categories = [
      ['stars_overall', 'Overall'],
      ['singles_friendly', 'Singles Friendly'],
      ['kid_friendly', 'Kid Friendly'],
      ['singles_friendly', 'Singles Friendly'],
      ['retirees', 'Retiree Friendly'],
      ['sense_of_community', 'Sense of Community'],
      ['nightlife', 'Nightlife'],
      ['entertainment', 'Entertainment'],
      ['affordability', 'Affordability'],
      ['ameneties', 'Ameneties'],
      ['safety', 'Safety'],
      ['culture_arts', 'Culture and Arts'],
      ['schools', 'School Quality'],
      ['crime', 'Crime'],
      ['hipster_rating', 'Hipster Rating']
    ];
    return (
      <div>
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        placeholder="What do you think? "
        className="form-control"
        value={this.state.rating}
        name='text'
        onChange={this.onInputChange}
        required
        />
        {categories.map((category) => {
          //map each category and
          return (<label>
            {category[1]}
            <select name={category[0]} onChange={this.onInputChange}>
              <option value="" disabled selected>Rate</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </label>)
        })}
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit Review</button>
        </span>
      </form>
      </div>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postReview }, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewSubmit);