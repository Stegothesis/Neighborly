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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Get app id from static html page
var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(_reactRouter.Route, {
    path: '/',
    component: _App2.default }),
  _react2.default.createElement(_reactRouter.Route, {
    path: '/city',
    component: _City2.default }),
  _react2.default.createElement(_reactRouter.Route, {
    path: '/neighborhood',
    component: _Neighborhood2.default }),
  _react2.default.createElement(_reactRouter.Route, {
    path: '/rate',
    component: _Rate2.default }),
  _react2.default.createElement(_reactRouter.Route, {
    path: '/user',
    component: _User2.default })
), app);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQTtBQUNBLElBQU1BLE1BQU1DLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWjs7QUFFQSxtQkFBU0MsTUFBVCxDQUNFO0FBQUE7QUFBQSxJQUFRLG9DQUFSO0FBQ0U7QUFDRSxVQUFLLEdBRFA7QUFFRSw0QkFGRixHQURGO0FBS0U7QUFDRSxVQUFLLE9BRFA7QUFFRSw2QkFGRixHQUxGO0FBU0U7QUFDRSxVQUFLLGVBRFA7QUFFRSxxQ0FGRixHQVRGO0FBYUU7QUFDRSxVQUFLLE9BRFA7QUFFRSw2QkFGRixHQWJGO0FBaUJFO0FBQ0UsVUFBSyxPQURQO0FBRUUsNkJBRkY7QUFqQkYsQ0FERixFQXVCSUgsR0F2QkoiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBJbmRleFJvdXRlLCBMaW5rLCBSb3V0ZXIsIFJvdXRlLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAuanN4J1xuaW1wb3J0IExhbmRpbmcgZnJvbSAnLi9jb21wb25lbnRzL0xhbmRpbmcuanN4J1xuaW1wb3J0IENpdHkgZnJvbSAnLi9jb21wb25lbnRzL0NpdHkuanN4J1xuaW1wb3J0IE5laWdoYm9yaG9vZCBmcm9tICcuL2NvbXBvbmVudHMvTmVpZ2hib3Job29kLmpzeCdcbmltcG9ydCBSYXRlIGZyb20gJy4vY29tcG9uZW50cy9SYXRlLmpzeCdcbmltcG9ydCBVc2VyIGZyb20gJy4vY29tcG9uZW50cy9Vc2VyLmpzeCdcblxuXG4vL0dldCBhcHAgaWQgZnJvbSBzdGF0aWMgaHRtbCBwYWdlXG5jb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFJvdXRlciBoaXN0b3J5PXsgYnJvd3Nlckhpc3RvcnkgfT5cbiAgICA8Um91dGVcbiAgICAgIHBhdGg9XCIvXCJcbiAgICAgIGNvbXBvbmVudD17IEFwcCB9IC8+XG5cbiAgICA8Um91dGVcbiAgICAgIHBhdGg9XCIvY2l0eVwiXG4gICAgICBjb21wb25lbnQ9eyBDaXR5IH0vPlxuXG4gICAgPFJvdXRlXG4gICAgICBwYXRoPVwiL25laWdoYm9yaG9vZFwiXG4gICAgICBjb21wb25lbnQ9eyBOZWlnaGJvcmhvb2QgfS8+XG5cbiAgICA8Um91dGVcbiAgICAgIHBhdGg9XCIvcmF0ZVwiXG4gICAgICBjb21wb25lbnQ9eyBSYXRlICB9Lz5cblxuICAgIDxSb3V0ZVxuICAgICAgcGF0aD1cIi91c2VyXCJcbiAgICAgIGNvbXBvbmVudD17IFVzZXIgfS8+XG5cbiAgICA8L1JvdXRlcj5cbiAgLCBhcHBcbiAgKTsiXX0=