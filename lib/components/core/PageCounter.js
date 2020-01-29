"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageCounter = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var PageCounter = function PageCounter(props) {
  return <_reactNative.View style={[styles.container, props.style]}>
        {_toConsumableArray(new Array(props.amount)).map(function (_item, index) {
      return <_reactNative.View style={[styles.dot, props.active === index ? styles.dot_active : null]} key={index.toString()} />;
    })}
    </_reactNative.View>;
};

exports.PageCounter = PageCounter;

var styles = _reactNative.StyleSheet.create({
  container: {
    marginHorizontal: -3,
    flexDirection: 'row'
  },
  dot: {
    borderRadius: 3,
    backgroundColor: _utils.Colors.primaryLight,
    height: 6,
    width: 14,
    marginHorizontal: 3
  },
  dot_active: {
    backgroundColor: _utils.Colors.primary
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvcmUvUGFnZUNvdW50ZXIudHN4Il0sIm5hbWVzIjpbIlBhZ2VDb3VudGVyIiwicHJvcHMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJzdHlsZSIsIkFycmF5IiwiYW1vdW50IiwibWFwIiwiX2l0ZW0iLCJpbmRleCIsImRvdCIsImFjdGl2ZSIsImRvdF9hY3RpdmUiLCJ0b1N0cmluZyIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJtYXJnaW5Ib3Jpem9udGFsIiwiZmxleERpcmVjdGlvbiIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsIkNvbG9ycyIsInByaW1hcnlMaWdodCIsImhlaWdodCIsIndpZHRoIiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7Ozs7O0FBUUEsSUFBTUEsV0FBdUMsR0FBRyxTQUExQ0EsV0FBMEMsQ0FBQUMsS0FBSztBQUFBLFNBQ2pELG1CQUFNLE1BQU0sQ0FBQyxDQUFDQyxNQUFNLENBQUNDLFNBQVIsRUFBbUJGLEtBQUssQ0FBQ0csS0FBekIsQ0FBRCxDQUFaO1FBQ0ksQ0FBQyxtQkFBSSxJQUFJQyxLQUFKLENBQVVKLEtBQUssQ0FBQ0ssTUFBaEIsQ0FBSixFQUE2QkMsR0FBN0IsQ0FBaUMsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsYUFDOUIsbUJBQ0ksTUFBTSxDQUFDLENBQ0hQLE1BQU0sQ0FBQ1EsR0FESixFQUVIVCxLQUFLLENBQUNVLE1BQU4sS0FBaUJGLEtBQWpCLEdBQXlCUCxNQUFNLENBQUNVLFVBQWhDLEdBQTZDLElBRjFDLENBQUQsQ0FEVixDQUtJLElBQUksQ0FBQ0gsS0FBSyxDQUFDSSxRQUFOLEVBQUQsQ0FMUixHQUQ4QjtBQUFBLEtBQWpDLENBQUQ7SUFTSixvQkFYaUQ7QUFBQSxDQUFyRDs7OztBQWNBLElBQU1YLE1BQU0sR0FBR1ksd0JBQVdDLE1BQVgsQ0FBa0I7QUFDN0JaLEVBQUFBLFNBQVMsRUFBRTtBQUNQYSxJQUFBQSxnQkFBZ0IsRUFBRSxDQUFDLENBRFo7QUFFUEMsSUFBQUEsYUFBYSxFQUFFO0FBRlIsR0FEa0I7QUFLN0JQLEVBQUFBLEdBQUcsRUFBRTtBQUNEUSxJQUFBQSxZQUFZLEVBQUUsQ0FEYjtBQUVEQyxJQUFBQSxlQUFlLEVBQUVDLGNBQU9DLFlBRnZCO0FBR0RDLElBQUFBLE1BQU0sRUFBRSxDQUhQO0FBSURDLElBQUFBLEtBQUssRUFBRSxFQUpOO0FBS0RQLElBQUFBLGdCQUFnQixFQUFFO0FBTGpCLEdBTHdCO0FBWTdCSixFQUFBQSxVQUFVLEVBQUU7QUFDUk8sSUFBQUEsZUFBZSxFQUFFQyxjQUFPSTtBQURoQjtBQVppQixDQUFsQixDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgU3R5bGVQcm9wLCBWaWV3LCBWaWV3U3R5bGUgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBMaWJyYXJ5XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICd1dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUNvdW50ZXJQcm9wcyB7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgYWN0aXZlOiBudW1iZXI7XG4gICAgc3R5bGU/OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcbn1cblxuY29uc3QgUGFnZUNvdW50ZXI6IFJlYWN0LkZDPFBhZ2VDb3VudGVyUHJvcHM+ID0gcHJvcHMgPT4gKFxuICAgIDxWaWV3IHN0eWxlPXtbc3R5bGVzLmNvbnRhaW5lciwgcHJvcHMuc3R5bGVdfT5cbiAgICAgICAge1suLi5uZXcgQXJyYXkocHJvcHMuYW1vdW50KV0ubWFwKChfaXRlbSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICBzdHlsZT17W1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXMuZG90LFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5hY3RpdmUgPT09IGluZGV4ID8gc3R5bGVzLmRvdF9hY3RpdmUgOiBudWxsLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleC50b1N0cmluZygpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgPC9WaWV3PlxuKTtcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBtYXJnaW5Ib3Jpem9udGFsOiAtMyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgfSxcbiAgICBkb3Q6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAzLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENvbG9ycy5wcmltYXJ5TGlnaHQsXG4gICAgICAgIGhlaWdodDogNixcbiAgICAgICAgd2lkdGg6IDE0LFxuICAgICAgICBtYXJnaW5Ib3Jpem9udGFsOiAzLFxuICAgIH0sXG4gICAgZG90X2FjdGl2ZToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG59KTtcblxuZXhwb3J0IHsgUGFnZUNvdW50ZXIgfTtcbiJdfQ==