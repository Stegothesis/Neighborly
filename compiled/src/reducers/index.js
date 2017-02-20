'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reviews = require('./reviews.js');

var _reviews2 = _interopRequireDefault(_reviews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _redux.combineReducers)({
  addReview: _reviews2.default
});

exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJhZGRSZXZpZXciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNLDRCQUFpQjtBQUMzQkM7QUFEMkIsQ0FBakIsQ0FBWjs7a0JBSWVELEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBhZGRSZXZpZXcgZnJvbSAnLi9yZXZpZXdzLmpzJ1xuXG5jb25zdCBhcHAgPSBjb21iaW5lUmVkdWNlcnMgKHtcbiAgYWRkUmV2aWV3XG59KVxuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG5cbiJdfQ==