import { ADD_REVIEW } from '../constants/actionTypes.jsx'

export const postReview = (review) =>
  fetch('/api/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  });

export const addReview = review => (dispatch) => {
  postReview(review)
  .then((user) => {
    console.log('Post review to user successful', user);
  });
};

export const getReview = (review) =>
  fetch('/api/users', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  });

export const retrieveReview = (review) => (dispatch) => {
  getReview(review)
  .then((user) => {
    console.log('Get review from user sucessful', user);
  });
}
