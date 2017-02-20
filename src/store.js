import { createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { render } from 'react-dom'
import React from 'react'
import app from './reducers/index.js'
import { addReview } from './actions/index.js'

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
  return createStore(app, applyMiddleware(logger));
}

export default makeSstore;