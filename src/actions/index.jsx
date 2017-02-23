import { ADD_REVIEW } from '../constants/actionTypes.jsx'
import $ from 'jquery'

export const postReview = review => (dispatch) =>
    $.ajax({
      type: "POST",
      url: '/api/neighborhoods/reviews',
      data: JSON.stringify({
        hash: "1", //auth0 hash for an existing user
        name: "hydepark", //name of the neighborhood
        city: "austin", //name of the city
        state: "texas", //lower case, 2 letter state abbreviation (e.g. tx)
        stars_overall: review//... a bunch of categories for ratings
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



