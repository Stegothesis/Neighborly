import { combineReducers } from 'redux'
import addReview from './reviews.jsx'
import NeighborhoodsReducer from './reducer_neighborhoods.jsx'
import ActiveNeighborhood from './reducer_active_neighborhood.jsx'
import { routerReducer } from 'react-router-redux'

//Mapping of state
const rootReducer = combineReducers ({
  reviews: addReview,
  neighborhoods : NeighborhoodsReducer,
  activeNeighborhood: ActiveNeighborhood,
  routing: routerReducer
});

export default rootReducer;

