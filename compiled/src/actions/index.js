'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addReview = undefined;

var _actionTypes = require('../constants/actionTypes.jsx');

var addReview = exports.addReview = function addReview(review) {
  return function (dispatch) {
    return {
      type: addReview,
      review: review
    };
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJhZGRSZXZpZXciLCJyZXZpZXciLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRU8sSUFBTUEsZ0NBQVksU0FBWkEsU0FBWSxDQUFDQyxNQUFEO0FBQUEsU0FBWTtBQUFBLFdBQWE7QUFDaERDLFlBQU1GLFNBRDBDO0FBRWhEQztBQUZnRCxLQUFiO0FBQUEsR0FBWjtBQUFBLENBQWxCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUREX1JFVklFVyB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb25UeXBlcy5qc3gnXG5cbmV4cG9ydCBjb25zdCBhZGRSZXZpZXcgPSAocmV2aWV3KSA9PiBkaXNwYXRjaCA9PiAoe1xuICB0eXBlOiBhZGRSZXZpZXcsXG4gIHJldmlld1xufSk7XG5cbiJdfQ==