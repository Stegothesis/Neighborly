import { ADD_REVIEW } from '../constants/actionTypes.jsx'
import { GET_REVIEWS } from '../constants/actionTypes.jsx'
import $ from 'jquery'

export const postReview = (review, token) => (dispatch) =>
    $.ajax({
      type: "POST",
      url: '/api/neighborhoods/reviews',
      headers: {
        Authorization: "Bearer " + token
      },
      data: JSON.stringify({
        hash: "5", //auth0 hash for an existing user
        name: "downtown", //name of the neighborhood
        city: "austin", //name of the city
        state: "texas", //lower case, 2 letter state abbreviation (e.g. tx)
        text: review//... a bunch of categories for ratings
      }),
      success: function(data) {
        console.log("Post review to user successful", data);
      },
      error: function (error) {
        console.log("Error: Post review failed", error);
      },
      contentType: 'application/json',
      accepts: 'application/json',
      dataType: 'json'
    });

export function getReview(response) {
  console.log('getReview Response:', response);
  return {
    type: 'GET_REVIEWS',
    payload: response
  }
}


