import { combineReducers } from 'redux'
import addReview from './reviews.jsx'
import { routerReducer } from 'react-router-redux'

//Mapping of state
const rootReducer = combineReducers ({
  reviews: addReview,
  routing: routerReducer
});

export default rootReducer;

