import { createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import { render } from 'react-dom'
import React from 'react'
import rootReducer from './reducers/index.jsx'
import { addReview } from './actions/index.jsx'
import thunk from 'redux-thunk';

const makeStore = () => {
   const logger = createLogger();
   return createStore(rootReducer, applyMiddleware(thunk, logger));
}

export default makeStore;