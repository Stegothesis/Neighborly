import { ADD_REVIEW } from '../constants/actionTypes.jsx'

export const addReview = (review) => dispatch => ({
  type: addReview,
  review
});

