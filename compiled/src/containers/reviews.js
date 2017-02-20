'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Review = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

  return Review;
}(_react.Component);

/*
function mapStateToProps(state, ownProps) {
  return state[ownProps.id]
}
*/

/*
connect() is a function that injecst Redux-related props into your component
Inject data and callbacks that change that data by dispatching actions
The purpose of connect() is that you don't have to think about subscribing to the store
and instead specify hwo to get props based on Redux store state
Given redux state, return props.
Given redux dispatch, return callback props
*/
//const connectReview = connect(mapStateToProps, actions)(Review)
//export default connectReview;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250YWluZXJzL3Jldmlld3MuanMiXSwibmFtZXMiOlsiYWN0aW9ucyIsIlJldmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUE7O0FBQ0E7O0lBQVlBLE87Ozs7Ozs7Ozs7OztBQUVaOztJQUVhQyxNLFdBQUFBLE07Ozs7Ozs7Ozs7OztBQUliOzs7Ozs7QUFNQTs7Ozs7Ozs7QUFRQTtBQUNBIiwiZmlsZSI6InJldmlld3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucydcblxuLyogQ29udGFpbmVyIGNvbXBvbmVudCBoYW5kbGluZyBzdGF0ZXMsIGV2ZW50IGhhbmRsZXJzLCBhbmQgcGFzc2luZyBkb3duIHByb3BzICovXG5cbmV4cG9ydCBjbGFzcyBSZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG59XG5cbi8qXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gIHJldHVybiBzdGF0ZVtvd25Qcm9wcy5pZF1cbn1cbiovXG5cbi8qXG5jb25uZWN0KCkgaXMgYSBmdW5jdGlvbiB0aGF0IGluamVjc3QgUmVkdXgtcmVsYXRlZCBwcm9wcyBpbnRvIHlvdXIgY29tcG9uZW50XG5JbmplY3QgZGF0YSBhbmQgY2FsbGJhY2tzIHRoYXQgY2hhbmdlIHRoYXQgZGF0YSBieSBkaXNwYXRjaGluZyBhY3Rpb25zXG5UaGUgcHVycG9zZSBvZiBjb25uZWN0KCkgaXMgdGhhdCB5b3UgZG9uJ3QgaGF2ZSB0byB0aGluayBhYm91dCBzdWJzY3JpYmluZyB0byB0aGUgc3RvcmVcbmFuZCBpbnN0ZWFkIHNwZWNpZnkgaHdvIHRvIGdldCBwcm9wcyBiYXNlZCBvbiBSZWR1eCBzdG9yZSBzdGF0ZVxuR2l2ZW4gcmVkdXggc3RhdGUsIHJldHVybiBwcm9wcy5cbkdpdmVuIHJlZHV4IGRpc3BhdGNoLCByZXR1cm4gY2FsbGJhY2sgcHJvcHNcbiovXG4vL2NvbnN0IGNvbm5lY3RSZXZpZXcgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucykoUmV2aWV3KVxuLy9leHBvcnQgZGVmYXVsdCBjb25uZWN0UmV2aWV3OyJdfQ==