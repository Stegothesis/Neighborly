import { combineReducers } from 'redux'
import addReview from './reviews.jsx'
import NeighborhoodsReducer from './reducer_neighborhoods.jsx'
import ActiveNeighborhood from './reducer_active_neighborhood.jsx'
//Mapping of state
const rootReducer = combineReducers ({
  reviews: addReview,
  neighborhoods : NeighborhoodsReducer,
  activeNeighborhood: ActiveNeighborhood
});

export default rootReducer;

