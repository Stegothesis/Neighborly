'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reviews = require('./reviews.jsx');

var _reviews2 = _interopRequireDefault(_reviews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Mapping of state
var rootReducer = (0, _redux.combineReducers)({
  reviews: _reviews2.default
});

exports.default = rootReducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZWR1Y2Vycy9pbmRleC5qc3giXSwibmFtZXMiOlsicm9vdFJlZHVjZXIiLCJyZXZpZXdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBQ0E7QUFDQSxJQUFNQSxjQUFjLDRCQUFpQjtBQUNuQ0M7QUFEbUMsQ0FBakIsQ0FBcEI7O2tCQUllRCxXIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgYWRkUmV2aWV3IGZyb20gJy4vcmV2aWV3cy5qc3gnXG4vL01hcHBpbmcgb2Ygc3RhdGVcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzICh7XG4gIHJldmlld3M6IGFkZFJldmlld1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG4iXX0=