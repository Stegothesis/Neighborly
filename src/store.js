import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//redux-logger creates a logger in the console
//applyMiddleware function from redux that applies npm modules

//combineReducers
export default combineReducers({
  app,
  routing: routerReducer
})


const store = () => {
  const logger = createLogger();
  return createStore(rootReducer, applyMiddleware(logger));
}

export default store;