import { ADD_REVIEW } from '../constants/actionTypes.jsx'
import { GET_REVIEWS } from '../constants/actionTypes.jsx'
import $ from 'jquery'

export const postReview = (review, neighborhood, token, callback) => (dispatch) =>
    $.ajax({
      type: "POST",
      url: '/api/neighborhoods/reviews',
      headers: {
        Authorization: "Bearer " + token
      },
      data: JSON.stringify(Object.assign(
        //combining the review object with the location -- ultimately the review object should hold the neighborhood data
        neighborhood, review)), //lower case, 2 letter state abbreviation (e.g. tx),
      success: function(data) {
        if (callback) {
          callback()
        }
      },
      error: function (error) {
      },
      contentType: 'application/json',
      accepts: 'application/json',
      dataType: 'json'
    });

export function getReview(response) {
  return {
    type: 'GET_REVIEWS',
    payload: response
  }
}


