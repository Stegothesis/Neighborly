import { combineReducers } from 'redux'
import addReview from './reviews.jsx'
//Mapping of state
const rootReducer = combineReducers ({
  reviews: addReview
});

export default rootReducer;

