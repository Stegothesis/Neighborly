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
        feedback: "Please log in to vote on reviews"
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
            feedback: "Thanks for your feedback"
          })
        },
        error: function (error) {
          console.log("Error: Post vote failed", error);
          that.setState({
            feedback: "You've already voted on this review!"
          })
        },
        contentType: 'application/json',
        dataType: 'json'
      });
    }
  }

  render() {
    var feedback = this.state.feedback || null
    return (
      <div>
        <div className="vote_count">Vote Count: {this.props.vote_count}</div>
        <button onClick={()=>this.postVote(true)}>+</button>
        <button onClick={()=>this.postVote(false)}>-</button>
        {feedback}
      </div>
      );
  }
}
