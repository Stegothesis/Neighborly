'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rate = require('./Rate.jsx');
var User = require('./User.jsx');
var Landing = require('./Landing.jsx');
var Neighborhood = require('./Neighborhood.jsx');
var City = require('./City.jsx');

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(Landing, null),
        _react2.default.createElement(Neighborhood, null),
        _react2.default.createElement(City, null),
        _react2.default.createElement(User, null),
        _react2.default.createElement(Rate, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiUmF0ZSIsInJlcXVpcmUiLCJVc2VyIiwiTGFuZGluZyIsIk5laWdoYm9yaG9vZCIsIkNpdHkiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsWUFBUixDQUFYO0FBQ0EsSUFBSUMsT0FBT0QsUUFBUSxZQUFSLENBQVg7QUFDQSxJQUFJRSxVQUFVRixRQUFRLGVBQVIsQ0FBZDtBQUNBLElBQUlHLGVBQWVILFFBQVEsb0JBQVIsQ0FBbkI7QUFDQSxJQUFJSSxPQUFPSixRQUFRLFlBQVIsQ0FBWDs7SUFFTUssRzs7O0FBQ0osZUFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLDBHQUNaQSxLQURZOztBQUdsQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUhrQjtBQU1uQjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0Esc0NBQUMsT0FBRCxPQURBO0FBRUEsc0NBQUMsWUFBRCxPQUZBO0FBR0Esc0NBQUMsSUFBRCxPQUhBO0FBSUEsc0NBQUMsSUFBRCxPQUpBO0FBS0Esc0NBQUMsSUFBRDtBQUxBLE9BREY7QUFTRDs7OztFQW5CZSxnQkFBTUMsUzs7a0JBd0JUSCxHIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxudmFyIFJhdGUgPSByZXF1aXJlKCcuL1JhdGUuanN4Jyk7XG52YXIgVXNlciA9IHJlcXVpcmUoJy4vVXNlci5qc3gnKTtcbnZhciBMYW5kaW5nID0gcmVxdWlyZSgnLi9MYW5kaW5nLmpzeCcpO1xudmFyIE5laWdoYm9yaG9vZCA9IHJlcXVpcmUoJy4vTmVpZ2hib3Job29kLmpzeCcpO1xudmFyIENpdHkgPSByZXF1aXJlKCcuL0NpdHkuanN4Jyk7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8TGFuZGluZyAvPlxuICAgICAgPE5laWdoYm9yaG9vZCAvPlxuICAgICAgPENpdHkgLz5cbiAgICAgIDxVc2VyIC8+XG4gICAgICA8UmF0ZSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXX0=