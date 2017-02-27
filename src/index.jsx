import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Link, Router, Route, browserHistory } from 'react-router';
import App from './components/App.jsx'
import SearchBar from './containers/SearchBar.jsx'
import City from './containers/City.jsx'
import Neighborhood from './components/Neighborhood.jsx'
import Rate from './components/Rate.jsx'
import User from './components/User.jsx'
import makeStore from './store.jsx'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index.jsx'
import { createStore, applyMiddleware } from 'redux';

const store = makeStore(reducers);
const history = syncHistoryWithStore(browserHistory, store);

//console.log(store.getState());

//Get app id from static html page
const app = document.getElementById('app');

 ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/city" component={City}>
          <Route path="/neighborhood" component={Neighborhood} />
        </Route>
      </Route>
    </Router>
  </Provider>

  , document.getElementById('app'));


