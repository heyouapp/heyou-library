"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Library
var Icon = function Icon(props) {
  var source = _utils.Icons[props.name];

  if (!source) {
    return null;
  }

  return <_reactNative.Image source={source} style={[styles.icon, {
    tintColor: props.color || _utils.Colors.neutralLight
  }, props.style]} />;
};

exports.Icon = Icon;

var styles = _reactNative.StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvcmUvSWNvbi50c3giXSwibmFtZXMiOlsiSWNvbiIsInByb3BzIiwic291cmNlIiwiSWNvbnMiLCJuYW1lIiwic3R5bGVzIiwiaWNvbiIsInRpbnRDb2xvciIsImNvbG9yIiwiQ29sb3JzIiwibmV1dHJhbExpZ2h0Iiwic3R5bGUiLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwiaGVpZ2h0Iiwid2lkdGgiLCJyZXNpemVNb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFHQTs7Ozs7O0FBREE7QUFTQSxJQUFNQSxJQUF5QixHQUFHLFNBQTVCQSxJQUE0QixDQUFBQyxLQUFLLEVBQUk7QUFDdkMsTUFBTUMsTUFBTSxHQUFHQyxhQUFNRixLQUFLLENBQUNHLElBQVosQ0FBZjs7QUFFQSxNQUFJLENBQUNGLE1BQUwsRUFBYTtBQUNULFdBQU8sSUFBUDtBQUNIOztBQUVELFNBQ0ksb0JBQ0ksT0FBTyxDQUFDQSxNQUFELENBRFgsQ0FFSSxNQUFNLENBQUMsQ0FDSEcsTUFBTSxDQUFDQyxJQURKLEVBRUg7QUFBRUMsSUFBQUEsU0FBUyxFQUFFTixLQUFLLENBQUNPLEtBQU4sSUFBZUMsY0FBT0M7QUFBbkMsR0FGRyxFQUdIVCxLQUFLLENBQUNVLEtBSEgsQ0FBRCxDQUZWLEdBREo7QUFVSCxDQWpCRDs7OztBQW1CQSxJQUFNTixNQUFNLEdBQUdPLHdCQUFXQyxNQUFYLENBQWtCO0FBQzdCUCxFQUFBQSxJQUFJLEVBQUU7QUFDRlEsSUFBQUEsTUFBTSxFQUFFLEVBRE47QUFFRkMsSUFBQUEsS0FBSyxFQUFFLEVBRkw7QUFHRkMsSUFBQUEsVUFBVSxFQUFFO0FBSFY7QUFEdUIsQ0FBbEIsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIFN0eWxlUHJvcCwgSW1hZ2UsIEltYWdlU3R5bGUgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBMaWJyYXJ5XG5pbXBvcnQgeyBDb2xvcnMsIEljb25zIH0gZnJvbSAndXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25Qcm9wcyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIHN0eWxlPzogU3R5bGVQcm9wPEltYWdlU3R5bGU+O1xufVxuXG5jb25zdCBJY29uOiBSZWFjdC5GQzxJY29uUHJvcHM+ID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHNvdXJjZSA9IEljb25zW3Byb3BzLm5hbWVdO1xuXG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzb3VyY2U9e3NvdXJjZX1cbiAgICAgICAgICAgIHN0eWxlPXtbXG4gICAgICAgICAgICAgICAgc3R5bGVzLmljb24sXG4gICAgICAgICAgICAgICAgeyB0aW50Q29sb3I6IHByb3BzLmNvbG9yIHx8IENvbG9ycy5uZXV0cmFsTGlnaHQgfSxcbiAgICAgICAgICAgICAgICBwcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIF19XG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICBpY29uOiB7XG4gICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgIHdpZHRoOiAyMCxcbiAgICAgICAgcmVzaXplTW9kZTogJ2NvbnRhaW4nLFxuICAgIH0sXG59KTtcblxuZXhwb3J0IHsgSWNvbiB9O1xuIl19