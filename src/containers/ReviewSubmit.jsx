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
      submitted: false
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
    this.props.postReview(this.state, this.props.neighborhood, this.props.user.token, function() {
      this.props.justReviewed();
      this.setState({
        rating: '',
        submitted: true,
      });
      this.props.loadReviewsFromServer();
    }.bind(this));

}

  render() {
    //list of review values and their descriptions
    var categories = [
      ['stars_overall', 'Your overall rating (required)', true],
      ['singles_friendly', 'Singles scene'],
      ['kid_friendly', 'Kid-friendly?'],
      ['retirees', 'Retiree-friendly?'],
      ['sense_of_community', 'Is there a sense of community?'],
      ['nightlife', "Nightlife"],
      ['entertainment', 'Entertainment options'],
      ['affordability', 'Affordability'],
      ['ameneties', 'Ameneties: is everything you need close by?'],
      ['safety', 'How safe do you feel?'],
      ['culture_arts', "Culture and arts"],
      ['schools', 'Schools'],
      ['crime', 'Crime'],
      ['hipster_rating', 'Hipster Factor (you know what we mean)']
    ];
    if (this.state.submitted) {
      return (<div className="neighborhood-header">Thanks for your feedback!</div>)
    }
    return (
      <div className="media-body post_reply_comments">
        <form onSubmit={this.onFormSubmit} className="form-group">
          <div className="form-group">
            <label className="review-submit-category">
            Your written review (required)
              <textarea
                placeholder="What do you think? "
                className="form-control"
                value={this.state.text}
                name='text'
                onChange={this.onInputChange}
                rows="5"
                required
              ></textarea>
            </label>
          </div>
          {categories.map((category) => {
            //map each category to jsx
            //can add "required" to the select tag if we want to validate the forms
            return (
              <div className="form-group">
              <label className="review-submit-category">
                {category[1]}
                <select className="form-control" name={category[0]} onChange={this.onInputChange} required={category[2] ? "true": false}>
                  <option value="" disabled selected>Stars</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </label>
              </div>
            )
          })}
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary btn-lg">Submit Review</button>
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
    user: state.user,
    neighborhood: state.activeNeighborhood
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewSubmit);