import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Link, Router, Route, browserHistory } from 'react-router';
import App from './components/App.jsx'
import Landing from './components/Landing.jsx'
import City from './components/City.jsx'
import Neighborhood from './components/Neighborhood.jsx'
import Rate from './components/Rate.jsx'
import User from './components/User.jsx'
import makeStore from './store.jsx'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index.jsx'

const store = makeStore(reducers);
const history = syncHistoryWithStore(browserHistory, store);

//console.log(store.getState());

//Get app id from static html page
const app = document.getElementById('app');

//Provider sends props to all components in the app
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={ App } />
      <Route path="/city" component={ City }/>
      <Route path="/neighborhood" component={ Neighborhood }/>
      <Route path="/rate" component={ Rate  }/>
      <Route path="/user" component={ User }/>
    </Router>
  </Provider>
  , document.getElementById('app'));

/*
const Routes = () =>
<Provider store={store}>
  <App />
  <Router history={history}>
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
  </Provider>;


export default Routes;
*/