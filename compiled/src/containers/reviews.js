'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Review = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Container component handling states, event handlers, and passing down props */

var Review = exports.Review = function (_Component) {
  _inherits(Review, _Component);

  function Review() {
    _classCallCheck(this, Review);

    return _possibleConstructorReturn(this, (Review.__proto__ || Object.getPrototypeOf(Review)).apply(this, arguments));
  }

  _createClass(Review, [{
    key: 'renderList',
    value: function renderList() {
      return this.props.reviews.map(function (review) {
        return _react2.default.createElement(
          'li',
          { key: review.review, className: 'review-list-item' },
          ' ',
          review.review,
          ' '
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: 'list-item col-sm-4' },
        this.renderList()
      );
    }
  }]);

  return Review;
}(_react.Component);

function mapStateToProps(state) {
  return {
    reviews: state.reviews
  };
}

/*
connect() is a function that injecst Redux-related props into your component
Inject data and callbacks that change that data by dispatching actions
The purpose of connect() is that you don't have to think about subscribing to the store
and instead specify hwo to get props based on Redux store state
Given redux state, return props.
Given redux dispatch, return callback props
*/
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Review);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250YWluZXJzL3Jldmlld3MuanN4Il0sIm5hbWVzIjpbIlJldmlldyIsInByb3BzIiwicmV2aWV3cyIsIm1hcCIsInJldmlldyIsInJlbmRlckxpc3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7Ozs7OztBQUVBOztJQUVhQSxNLFdBQUFBLE07Ozs7Ozs7Ozs7O2lDQUNFO0FBQ1gsYUFBTyxLQUFLQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUNDLE1BQUQsRUFBWTtBQUN4QyxlQUNFO0FBQUE7QUFBQSxZQUFJLEtBQUtBLE9BQU9BLE1BQWhCLEVBQXdCLFdBQVUsa0JBQWxDO0FBQUE7QUFBdURBLGlCQUFPQSxNQUE5RDtBQUFBO0FBQUEsU0FERjtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7NkJBRVE7QUFDUCxhQUNJO0FBQUE7QUFBQSxVQUFJLFdBQVUsb0JBQWQ7QUFDRyxhQUFLQyxVQUFMO0FBREgsT0FESjtBQUtEOzs7Ozs7QUFJSCxTQUFTQyxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM5QixTQUFPO0FBQ0xMLGFBQVNLLE1BQU1MO0FBRFYsR0FBUDtBQUdEOztBQUdEOzs7Ozs7OztrQkFRZSx5QkFBUUksZUFBUixFQUF5Qk4sTUFBekIsQyIsImZpbGUiOiJyZXZpZXdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbi8qIENvbnRhaW5lciBjb21wb25lbnQgaGFuZGxpbmcgc3RhdGVzLCBldmVudCBoYW5kbGVycywgYW5kIHBhc3NpbmcgZG93biBwcm9wcyAqL1xuXG5leHBvcnQgY2xhc3MgUmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5yZXZpZXdzLm1hcCgocmV2aWV3KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtyZXZpZXcucmV2aWV3fSBjbGFzc05hbWU9XCJyZXZpZXctbGlzdC1pdGVtXCI+IHtyZXZpZXcucmV2aWV3fSA8L2xpPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1pdGVtIGNvbC1zbS00XCI+XG4gICAgICAgICAge3RoaXMucmVuZGVyTGlzdCgpfVxuICAgICAgICA8L3VsPlxuICAgICAgKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHJldmlld3M6IHN0YXRlLnJldmlld3NcbiAgfTtcbn1cblxuXG4vKlxuY29ubmVjdCgpIGlzIGEgZnVuY3Rpb24gdGhhdCBpbmplY3N0IFJlZHV4LXJlbGF0ZWQgcHJvcHMgaW50byB5b3VyIGNvbXBvbmVudFxuSW5qZWN0IGRhdGEgYW5kIGNhbGxiYWNrcyB0aGF0IGNoYW5nZSB0aGF0IGRhdGEgYnkgZGlzcGF0Y2hpbmcgYWN0aW9uc1xuVGhlIHB1cnBvc2Ugb2YgY29ubmVjdCgpIGlzIHRoYXQgeW91IGRvbid0IGhhdmUgdG8gdGhpbmsgYWJvdXQgc3Vic2NyaWJpbmcgdG8gdGhlIHN0b3JlXG5hbmQgaW5zdGVhZCBzcGVjaWZ5IGh3byB0byBnZXQgcHJvcHMgYmFzZWQgb24gUmVkdXggc3RvcmUgc3RhdGVcbkdpdmVuIHJlZHV4IHN0YXRlLCByZXR1cm4gcHJvcHMuXG5HaXZlbiByZWR1eCBkaXNwYXRjaCwgcmV0dXJuIGNhbGxiYWNrIHByb3BzXG4qL1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFJldmlldyk7XG4iXX0=