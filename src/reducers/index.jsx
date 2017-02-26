import { combineReducers } from 'redux';
import addReview from './reviews.jsx';
import NeighborhoodsReducer from './reducer_neighborhoods.jsx';
import ActiveNeighborhood from './reducer_active_neighborhood.jsx';
import { routerReducer } from 'react-router-redux';
import userReducer from './reducer_auth.jsx';

//Mapping of state
const rootReducer = combineReducers ({
  reviews: addReview,
  neighborhoods : NeighborhoodsReducer,
  activeNeighborhood: ActiveNeighborhood,
  routing: routerReducer,
  user: userReducer
});

export default rootReducer;

