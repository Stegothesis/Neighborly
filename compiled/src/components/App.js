'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reviews = require('../containers/reviews.jsx');

var _reviews2 = _interopRequireDefault(_reviews);

var _Rate = require('./Rate.jsx');

var _Rate2 = _interopRequireDefault(_Rate);

var _User = require('./User.jsx');

var _User2 = _interopRequireDefault(_User);

var _Landing = require('./Landing.jsx');

var _Landing2 = _interopRequireDefault(_Landing);

var _Neighborhood = require('./Neighborhood.jsx');

var _Neighborhood2 = _interopRequireDefault(_Neighborhood);

var _City = require('./City.jsx');

var _City2 = _interopRequireDefault(_City);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reviews2.default, null),
        _react2.default.createElement(_Landing2.default, null),
        _react2.default.createElement(_Neighborhood2.default, null),
        _react2.default.createElement(_City2.default, null),
        _react2.default.createElement(_User2.default, null),
        _react2.default.createElement(_Rate2.default, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsRzs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNBLDhEQURBO0FBRUEsOERBRkE7QUFHQSxtRUFIQTtBQUlBLDJEQUpBO0FBS0EsMkRBTEE7QUFNQTtBQU5BLE9BREY7QUFVRDs7OztFQVo4QixnQkFBTUMsUzs7a0JBQWxCRCxHIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi4vY29udGFpbmVycy9yZXZpZXdzLmpzeCdcbmltcG9ydCBSYXRlIGZyb20gJy4vUmF0ZS5qc3gnXG5pbXBvcnQgVXNlciBmcm9tICcuL1VzZXIuanN4J1xuaW1wb3J0IExhbmRpbmcgZnJvbSAnLi9MYW5kaW5nLmpzeCdcbmltcG9ydCBOZWlnaGJvcmhvb2QgZnJvbSAnLi9OZWlnaGJvcmhvb2QuanN4J1xuaW1wb3J0IENpdHkgZnJvbSAnLi9DaXR5LmpzeCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPFJldmlldyAvPlxuICAgICAgPExhbmRpbmcgLz5cbiAgICAgIDxOZWlnaGJvcmhvb2QgLz5cbiAgICAgIDxDaXR5IC8+XG4gICAgICA8VXNlciAvPlxuICAgICAgPFJhdGUgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuIl19