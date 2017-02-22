import { ADD_REVIEW } from '../constants/actionTypes.jsx'
import $ from 'jquery'

export const postReview = review => (dispatch) =>
    $.ajax({
      type: "POST",
      url: '/api/neighborhoods/reviews',
      data: JSON.stringify({
        stars_overall: review
      }),
      success: function(data) {
        console.log("Post review to user successful");
      },
      error: function (error) {
        console.log("Error: Post review failed", error);
      },
      contentType: 'application/json',
      dataType: 'json'
    });

export const getReview = review => (dispatch) =>
  $.ajax({
    type: 'GET',
    url: '/api/neighborhoods/reviews',
    success: function(data) {
      console.log('Get Reviews Success!', data);
    },
    error: function(error) {
      console.log('Error: Get Review Failed', error);
    },
    contentType: 'application/json',
    dataType: 'json'
  });



