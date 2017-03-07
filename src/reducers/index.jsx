import { combineReducers } from 'redux';
import addReview from './reviews.jsx';
import NeighborhoodsReducer from './reducer_neighborhoods.jsx';
import ActiveNeighborhood from './reducer_active_neighborhood.jsx';
import { routerReducer } from 'react-router-redux';
import userReducer from './reducer_auth.jsx';
import defaultCoordinatesReducer from './reducer_defaultCoordinates.jsx';
import zoomReducer from './reducer_zoom.jsx';
import walkScoreReducer from './reducer_walkScore.jsx';
import zillowDemographicsReducer from './reducer_zillowDemographics.jsx';
import amenitiesReducer from './reducer_amenitiesCoordinates.jsx';

//Mapping of state
const rootReducer = combineReducers ({
  reviews: addReview,
  neighborhoods : NeighborhoodsReducer,
  activeNeighborhood: ActiveNeighborhood,
  amenitiesCoordinates: amenitiesReducer,
  routing: routerReducer,
  user: userReducer,
  defaultCoordinate: defaultCoordinatesReducer,
  zoomSetting: zoomReducer,
  zillowDemographics: zillowDemographicsReducer,
  walkScores: walkScoreReducer,
});

export default rootReducer;

