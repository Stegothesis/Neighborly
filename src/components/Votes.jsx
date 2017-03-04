import React from 'react'
import { Component } from 'react'
import $ from 'jquery'

export default class Votes extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  postVote(positiveVote) {
    if (!this.props.token) {
      this.setState({
        feedback: "Please log in"
      });
    } else {
    var that = this;
      $.ajax({
        type: "POST",
        url: '/api/votes',
        data: JSON.stringify({
          positiveVote: positiveVote,
          reviewId: this.props.reviewId
        }),
        headers: {
          Authorization: "Bearer " + this.props.token
        },
        success: function(data) {
          console.log("Post vote successful", data);
          that.setState({
            feedback: "Thanks!"
          })
        },
        error: function (error) {
          console.log("Error: Post vote failed", error);
          that.setState({
            feedback: "Already voted on this review"
          })
        },
        contentType: 'application/json',
        dataType: 'json'
      });
    }
  }

  render() {
    var feedback = this.state.feedback ? (<div className="modal-fade">{this.state.feedback}</div>) : null
    return (
      <div className="review-votes">
        <div className="vote_count">Helpfulness: {this.props.vote_count}</div>
        <button className="thumbup-button" onClick={()=>this.postVote(true)}>
          <i className="fa fa-thumbs-up"></i>
        </button>
        <button className="thumbdown-button" onClick={()=>this.postVote(false)}>
          <i className="fa fa-thumbs-down"></i>
        </button>
        {feedback}
      </div>
      );
  }
}
