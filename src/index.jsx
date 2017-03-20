import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Link, Router, Route, hashHistory, Redirect, IndexRedirect } from 'react-router';
import App from './components/App.jsx';
import SearchBar from './containers/SearchBar.jsx';
import City from './containers/City.jsx';
import Neighborhood from './components/Neighborhood.jsx';
import makeStore from './store.jsx';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index.jsx';
import { createStore, applyMiddleware } from 'redux';

const store = makeStore(reducers);
const history = syncHistoryWithStore(hashHistory, store);
const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SearchBar} />
        <Route path="city/:city/:state" component={City} />
        <Route path="neighborhood/:hood/:city/:state" component={Neighborhood} />
        <Redirect from="*" to="/" />
      </Route>
    </Router>
  </Provider>
, document.getElementById('app'));


