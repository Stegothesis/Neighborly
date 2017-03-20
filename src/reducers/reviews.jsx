/*
export default function () {
  return [
  { review: 'This is a customer review' },
  { review: 'This is a second customer review'}
  ]
}
*/

import { GET_REVIEWS } from '../constants/actionTypes.jsx'

export default function (state = [], action){
  switch(action.type) {
  case 'GET_REVIEWS':
    return action.payload;
  }
  return state;
}
