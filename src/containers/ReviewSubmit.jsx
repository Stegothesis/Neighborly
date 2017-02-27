import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postReview } from '../actions/index.jsx';
import { addReview } from '../actions/index.jsx';


class ReviewSubmit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({rating: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.postReview(this.state.rating, this.props.user.token);
    this.setState({ rating: ''});
}

  render() {
    return (
      <div>
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        placeholder="What do you think? "
        className="form-control"
        value={this.state.rating}
        onChange={this.onInputChange}
        />
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