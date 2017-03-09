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

  componentWillUnmount() {
    this.props.getReview(null);
  }

  renderList() {

    if (this.props.reviews) {
      return this.props.reviews.sort((review1, review2) =>
        review1.vote_count < review2.vote_count
      ).map((review) => {
        return (
          <div className="panel transparent-bg review-container">
            <div className="panel-heading review-header">
              <div className="review-username">{review.user.username}</div>
              {review.stars_overall ? (<div className="stars_overall"> Overall: {review.stars_overall}/5</div>) : null}
              <Votes vote_count={review.vote_count} token={this.props.user.token} reviewId={review.id}/>
            </div>
            <div className="panel-body review-body">
              <div className="review-categories">
                <div className="category-head">Categories:</div>
                {review.kid_friendly ? (<div className="kid_friendly category-review"> Kids: {review.kid_friendly}/5</div>) : null}
                {review.retirees ? (<div className="retirees category-review"> Retirees: {review.retirees}/5</div>) : null}
                {review.sense_of_community ? (<div className="sense_of_community category-review"> Community: {review.sense_of_community}/5</div>) : null}
                {review.singles_friendly ? (<div className="singles_friendly category-review"> Singles: {review.singles_friendly}/5</div>) : null}
                {review.nightlife ? (<div className="nightlife category-review"> Nightlife: {review.nightlife}/5</div>) : null}
                {review.entertainment ? (<div className="entertainment category-review"> Entertainment: {review.entertainment}/5</div>) : null}
                {review.affordability ? (<div className="affordability category-review"> Affordability: {review.affordability}/5</div>) : null}
                {review.amenities ? (<div className="amenities category-review"> Amenities: {review.amenities}/5</div>) : null}
                {review.safety ? (<div className="safety category-review"> Safety: {review.safety}/5</div>) : null}
                {review.culture_arts ? (<div className="culture_arts category-review"> Culture & Arts: {review.culture_arts}/5</div>) : null}
                {review.schools ? (<div className="schools category-review"> Schools: {review.schools}/5</div>) : null}
                {review.crime ? (<div className="crime category-review"> Crime: {review.crime}/5</div>) : null}
                {review.hipster_rating ? (<div className="hipster_rating category-review"> Hipster: {review.hipster_rating}/5</div>) : null}
              </div>
              <div className="review-text">
                <div>{review.text}</div>
              </div>
            </div>
          </div>
        );
      });
  }
}


  render() {
    return (
        <section className="features transparent-bg">
          <div className="container">
            <div>
              {this.props.activeNeighborhood ? (<h1 className="neighborhood-font reviews-heading">Reviews for {this.props.activeNeighborhood.name}</h1>) : null}
              <div className="row">
                <div className="features">
                  {this.renderList()}
                </div>
              </div>
            </div>
          </div>
        </section>
      );
  }
}


function mapStateToProps(state) {
  return {
    activeNeighborhood: state.activeNeighborhood,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getReview }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewMap);
