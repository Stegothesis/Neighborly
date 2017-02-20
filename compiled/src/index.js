'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _store = require('./store.js');

var _store2 = _interopRequireDefault(_store);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _store2.default)();
var history = (0, _reactRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

store.dispatch(addReview('customer review'));

console.log(store.getState());

//Get app id from static html page
var app = document.getElementById('app');

//Provider sends props to all components in the app
var Routes = function Routes() {
  return _react2.default.createElement(
    Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouter.Router,
      { history: history },
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
    )
  );
};

exports.default = Routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImhpc3RvcnkiLCJkaXNwYXRjaCIsImFkZFJldmlldyIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsImFwcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSb3V0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsUUFBUSxzQkFBZDtBQUNBLElBQU1DLFVBQVUsbUVBQXFDRCxLQUFyQyxDQUFoQjs7QUFFQUEsTUFBTUUsUUFBTixDQUFlQyxVQUFVLGlCQUFWLENBQWY7O0FBRUFDLFFBQVFDLEdBQVIsQ0FBWUwsTUFBTU0sUUFBTixFQUFaOztBQUVBO0FBQ0EsSUFBTUMsTUFBTUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUFaOztBQUVBO0FBQ0EsSUFBTUMsU0FBUyxTQUFUQSxNQUFTO0FBQUEsU0FDZjtBQUFDLFlBQUQ7QUFBQSxNQUFVLE9BQU9WLEtBQWpCO0FBQ0U7QUFBQTtBQUFBLFFBQVEsU0FBU0MsT0FBakI7QUFDRTtBQUNFLGNBQUssR0FEUDtBQUVFLGdDQUZGLEdBREY7QUFLRTtBQUNFLGNBQUssT0FEUDtBQUVFLGlDQUZGLEdBTEY7QUFTRTtBQUNFLGNBQUssZUFEUDtBQUVFLHlDQUZGLEdBVEY7QUFhRTtBQUNFLGNBQUssT0FEUDtBQUVFLGlDQUZGLEdBYkY7QUFpQkU7QUFDRSxjQUFLLE9BRFA7QUFFRSxpQ0FGRjtBQWpCRjtBQURGLEdBRGU7QUFBQSxDQUFmOztrQkEwQmVTLE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBJbmRleFJvdXRlLCBMaW5rLCBSb3V0ZXIsIFJvdXRlLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAuanN4J1xuaW1wb3J0IExhbmRpbmcgZnJvbSAnLi9jb21wb25lbnRzL0xhbmRpbmcuanN4J1xuaW1wb3J0IENpdHkgZnJvbSAnLi9jb21wb25lbnRzL0NpdHkuanN4J1xuaW1wb3J0IE5laWdoYm9yaG9vZCBmcm9tICcuL2NvbXBvbmVudHMvTmVpZ2hib3Job29kLmpzeCdcbmltcG9ydCBSYXRlIGZyb20gJy4vY29tcG9uZW50cy9SYXRlLmpzeCdcbmltcG9ydCBVc2VyIGZyb20gJy4vY29tcG9uZW50cy9Vc2VyLmpzeCdcbmltcG9ydCBtYWtlU3RvcmUgZnJvbSAnLi9zdG9yZS5qcydcbmltcG9ydCB7IHN5bmNIaXN0b3J5V2l0aFN0b3JlIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmNvbnN0IHN0b3JlID0gbWFrZVN0b3JlKCk7XG5jb25zdCBoaXN0b3J5ID0gc3luY0hpc3RvcnlXaXRoU3RvcmUoYnJvd3Nlckhpc3RvcnksIHN0b3JlKTtcblxuc3RvcmUuZGlzcGF0Y2goYWRkUmV2aWV3KCdjdXN0b21lciByZXZpZXcnKSk7XG5cbmNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpO1xuXG4vL0dldCBhcHAgaWQgZnJvbSBzdGF0aWMgaHRtbCBwYWdlXG5jb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbi8vUHJvdmlkZXIgc2VuZHMgcHJvcHMgdG8gYWxsIGNvbXBvbmVudHMgaW4gdGhlIGFwcFxuY29uc3QgUm91dGVzID0gKCkgPT5cbjxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgIDxSb3V0ZVxuICAgICAgcGF0aD1cIi9cIlxuICAgICAgY29tcG9uZW50PXsgQXBwIH0gLz5cblxuICAgIDxSb3V0ZVxuICAgICAgcGF0aD1cIi9jaXR5XCJcbiAgICAgIGNvbXBvbmVudD17IENpdHkgfS8+XG5cbiAgICA8Um91dGVcbiAgICAgIHBhdGg9XCIvbmVpZ2hib3Job29kXCJcbiAgICAgIGNvbXBvbmVudD17IE5laWdoYm9yaG9vZCB9Lz5cblxuICAgIDxSb3V0ZVxuICAgICAgcGF0aD1cIi9yYXRlXCJcbiAgICAgIGNvbXBvbmVudD17IFJhdGUgIH0vPlxuXG4gICAgPFJvdXRlXG4gICAgICBwYXRoPVwiL3VzZXJcIlxuICAgICAgY29tcG9uZW50PXsgVXNlciB9Lz5cblxuICAgIDwvUm91dGVyPlxuICA8L1Byb3ZpZGVyPjtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVzOyJdfQ==