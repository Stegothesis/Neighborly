import { createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import { render } from 'react-dom'
import React from 'react'
import rootReducer from './reducers/index.jsx'
import { addReview } from './actions/index.jsx'

//redux-logger creates a logger in the console
//applyMiddleware function from redux that applies npm modules

//{subscribe, dispatch, getState}

/*
createStore(reducer, [preloadedState], [enhancer])
Creates a redux store that holds the complete state tree of app
reducer - function that returns next state tree given the current state
and an action to handle
preloadedState - the intial state
enhancer - store enhancer/action
Returns an object that holds complete state of app
*/
const makeStore = () => {
  const logger = createLogger();
  return createStore(rootReducer, applyMiddleware(logger));
}

export default makeStore;