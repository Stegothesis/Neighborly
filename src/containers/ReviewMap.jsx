import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { getReview } from '../actions/index.jsx'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import $ from 'jquery'
import Votes from '../components/Votes.jsx'

/* Container component handling states, event handlers, and passing down props */

export class ReviewMap extends Component {

  constructor(props) {
    super(props);
  }

  loadReviewsFromServer() {
    var that = this;
    $.ajax({
      type: "GET",
      url: '/api/neighborhoods/reviews/' + that.props.activeNeighborhood.name + '/' + that.props.activeNeighborhood.city + '/' + that.props.activeNeighborhood.state,
      success: function(data) {
        console.log("Get review successful", data);
        that.props.getReview(data);
      },
      error: function (error) {
        console.log("Error: Get review failed", error);
      },
      contentType: 'application/json',
      Accept: 'application/json',
      dataType: 'json'
    });
  }

  componentWillMount() {
    console.log('ReviewMap component mounted');
    this.loadReviewsFromServer();
  }

  renderList() {
  if (this.props.reviews) {
    return this.props.reviews.sort((review1, review2) =>
      review1.vote_count > review2.vote_count
    ).map((review) => {
      return (
        <div className="panel panel-default">
        <div className="panel-body"> This neighbor said: {review.text}</div>
        <div className="retirees"> Overall Rating: {review.stars_overall}</div>
        <div className="kid_friendly"> Kid Friendly: {review.kid_friendly}</div>
        <div className="retirees"> Retiree Friendly: {review.retirees}</div>
        <div className="sense_of_community"> Sense of Community: {review.sense_of_community}</div>
        <div className="singles_friendly"> Single Friendly: {review.singles_friendly}</div>
        <div className="nightlife"> Nightlife: {review.nightlife}</div>
        <div className="entertainment"> Entertainment: {review.entertainment}</div>
        <div className="affordability"> Affordability: {review.affordability}</div>
        <div className="amenities"> Amenities: {review.amenities}</div>
        <div className="safety"> Safety: {review.safety}</div>
        <div className="culture_arts"> Culture & Arts: {review.culture_arts}</div>
        <div className="schools"> Schools: {review.schools}</div>
        <div className="crime"> Crime: {review.crime}</div>
        <div className="hipster_rating"> Hipster: {review.hipster_rating}</div>
        <Votes vote_count={review.vote_count} token={this.props.user.token} reviewId={review.id}/>
        </div>
      );
    });
  }
}


  render() {
    return (
        <ul className="list-item col-sm-4">
          {this.renderList()}
        </ul>
      );
  }
}


function mapStateToProps(state) {
  return {
    reviews: state.reviews,
    activeNeighborhood: state.activeNeighborhood,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getReview }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewMap);
