import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Link, Router, Route, browserHistory } from 'react-router';
import App from './components/App.jsx'
import Landing from './components/Landing.jsx'
import City from './components/City.jsx'
import Neighborhood from './components/Neighborhood.jsx'
import Rate from './components/Rate.jsx'
import User from './components/User.jsx'


//Get app id from static html page
const app = document.getElementById('app');

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route
      path="/"
      component={ App } />

    <Route
      path="/city"
      component={ City }/>

    <Route
      path="/neighborhood"
      component={ Neighborhood }/>

    <Route
      path="/rate"
      component={ Rate  }/>

    <Route
      path="/user"
      component={ User }/>

    </Router>
  , app
  );