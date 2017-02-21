'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _App = require('./components/App.jsx');

var _App2 = _interopRequireDefault(_App);

var _Landing = require('./components/Landing.jsx');

var _Landing2 = _interopRequireDefault(_Landing);

var _City = require('./components/City.jsx');

var _City2 = _interopRequireDefault(_City);

var _Neighborhood = require('./components/Neighborhood.jsx');

var _Neighborhood2 = _interopRequireDefault(_Neighborhood);

var _Rate = require('./components/Rate.jsx');

var _Rate2 = _interopRequireDefault(_Rate);

var _User = require('./components/User.jsx');

var _User2 = _interopRequireDefault(_User);

var _store = require('./store.jsx');

var _store2 = _interopRequireDefault(_store);

var _reactRedux = require('react-redux');

var _index = require('./reducers/index.jsx');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const history = syncHistoryWithStore(browserHistory, store);

//console.log(store.getState());

//Get app id from static html page
var app = document.getElementById('app');

//Provider sends props to all components in the app
_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: (0, _store2.default)(_index2.default) },
  _react2.default.createElement(_App2.default, null)
), document.getElementById('app'));

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxJQUFNQSxNQUFNQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQVo7O0FBRUE7QUFDQSxtQkFBU0MsTUFBVCxDQUNFO0FBQUE7QUFBQSxJQUFVLE9BQU8scUNBQWpCO0FBQ0U7QUFERixDQURGLEVBSUlGLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FKSjs7QUFNQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEluZGV4Um91dGUsIExpbmssIFJvdXRlciwgUm91dGUsIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC5qc3gnXG5pbXBvcnQgTGFuZGluZyBmcm9tICcuL2NvbXBvbmVudHMvTGFuZGluZy5qc3gnXG5pbXBvcnQgQ2l0eSBmcm9tICcuL2NvbXBvbmVudHMvQ2l0eS5qc3gnXG5pbXBvcnQgTmVpZ2hib3Job29kIGZyb20gJy4vY29tcG9uZW50cy9OZWlnaGJvcmhvb2QuanN4J1xuaW1wb3J0IFJhdGUgZnJvbSAnLi9jb21wb25lbnRzL1JhdGUuanN4J1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9jb21wb25lbnRzL1VzZXIuanN4J1xuaW1wb3J0IG1ha2VTdG9yZSBmcm9tICcuL3N0b3JlLmpzeCdcbmltcG9ydCB7IHN5bmNIaXN0b3J5V2l0aFN0b3JlIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvaW5kZXguanN4J1xuXG4vL2NvbnN0IGhpc3RvcnkgPSBzeW5jSGlzdG9yeVdpdGhTdG9yZShicm93c2VySGlzdG9yeSwgc3RvcmUpO1xuXG4vL2NvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpO1xuXG4vL0dldCBhcHAgaWQgZnJvbSBzdGF0aWMgaHRtbCBwYWdlXG5jb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbi8vUHJvdmlkZXIgc2VuZHMgcHJvcHMgdG8gYWxsIGNvbXBvbmVudHMgaW4gdGhlIGFwcFxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e21ha2VTdG9yZShyZWR1Y2Vycyl9PlxuICAgIDxBcHAgLz5cbiAgPC9Qcm92aWRlcj5cbiAgLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG4vKlxuY29uc3QgUm91dGVzID0gKCkgPT5cbjxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICA8QXBwIC8+XG4gIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XG4gICAgPFJvdXRlXG4gICAgICBwYXRoPVwiL1wiXG4gICAgICBjb21wb25lbnQ9eyBBcHAgfSAvPlxuXG4gICAgPFJvdXRlXG4gICAgICBwYXRoPVwiL2NpdHlcIlxuICAgICAgY29tcG9uZW50PXsgQ2l0eSB9Lz5cblxuICAgIDxSb3V0ZVxuICAgICAgcGF0aD1cIi9uZWlnaGJvcmhvb2RcIlxuICAgICAgY29tcG9uZW50PXsgTmVpZ2hib3Job29kIH0vPlxuXG4gICAgPFJvdXRlXG4gICAgICBwYXRoPVwiL3JhdGVcIlxuICAgICAgY29tcG9uZW50PXsgUmF0ZSAgfS8+XG5cbiAgICA8Um91dGVcbiAgICAgIHBhdGg9XCIvdXNlclwiXG4gICAgICBjb21wb25lbnQ9eyBVc2VyIH0vPlxuXG4gICAgPC9Sb3V0ZXI+XG4gIDwvUHJvdmlkZXI+O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcztcbiovIl19