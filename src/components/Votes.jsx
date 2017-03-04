import React from 'react'
import { Component } from 'react'
import $ from 'jquery'

export default class Votes extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  postVote(positiveVote) {
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
          voted: true
        })
      },
      error: function (error) {
        console.log("Error: Post vote failed", error);
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  render() {
    var feedback = null
    if (this.state.voted) {
      feedback = (<div>Thanks for your feedback!</div>);
    }
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
