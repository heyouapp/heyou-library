"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Card = function Card(props) {
  return <_reactNative.TouchableWithoutFeedback onPress={props.onPress} disabled={!props.onPress}>
        <_reactNative.View style={[styles.container, props.style]}>{props.children}</_reactNative.View>
    </_reactNative.TouchableWithoutFeedback>;
};

exports.Card = Card;

var styles = _reactNative.StyleSheet.create({
  container: _objectSpread({
    borderRadius: 10,
    backgroundColor: _utils.Colors.white,
    paddingVertical: 15
  }, _utils.Shadows.primary)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvcmUvQ2FyZC50c3giXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwib25QcmVzcyIsInN0eWxlcyIsImNvbnRhaW5lciIsInN0eWxlIiwiY2hpbGRyZW4iLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiQ29sb3JzIiwid2hpdGUiLCJwYWRkaW5nVmVydGljYWwiLCJTaGFkb3dzIiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBU0E7Ozs7Ozs7Ozs7OztBQVFBLElBQU1BLElBQXlCLEdBQUcsU0FBNUJBLElBQTRCLENBQUFDLEtBQUs7QUFBQSxTQUNuQyx1Q0FBMEIsUUFBUSxDQUFDQSxLQUFLLENBQUNDLE9BQVAsQ0FBbEMsQ0FBa0QsU0FBUyxDQUFDLENBQUNELEtBQUssQ0FBQ0MsT0FBUixDQUEzRDtRQUNJLG1CQUFNLE1BQU0sQ0FBQyxDQUFDQyxNQUFNLENBQUNDLFNBQVIsRUFBbUJILEtBQUssQ0FBQ0ksS0FBekIsQ0FBRCxDQUFaLENBQThDLENBQUNKLEtBQUssQ0FBQ0ssUUFBUCxDQUFnQjtJQUNsRSx3Q0FIbUM7QUFBQSxDQUF2Qzs7OztBQU1BLElBQU1ILE1BQU0sR0FBR0ksd0JBQVdDLE1BQVgsQ0FBa0I7QUFDN0JKLEVBQUFBLFNBQVM7QUFDTEssSUFBQUEsWUFBWSxFQUFFLEVBRFQ7QUFFTEMsSUFBQUEsZUFBZSxFQUFFQyxjQUFPQyxLQUZuQjtBQUdMQyxJQUFBQSxlQUFlLEVBQUU7QUFIWixLQUlGQyxlQUFRQyxPQUpOO0FBRG9CLENBQWxCLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIFN0eWxlU2hlZXQsXG4gICAgU3R5bGVQcm9wLFxuICAgIFZpZXdTdHlsZSxcbiAgICBWaWV3LFxuICAgIFRvdWNoYWJsZVdpdGhvdXRGZWVkYmFjayxcbn0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gTGlicmFyeVxuaW1wb3J0IHsgQ29sb3JzLCBTaGFkb3dzIH0gZnJvbSAndXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRQcm9wcyB7XG4gICAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG4gICAgc3R5bGU/OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcbiAgICBvblByZXNzPzogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgQ2FyZDogUmVhY3QuRkM8Q2FyZFByb3BzPiA9IHByb3BzID0+IChcbiAgICA8VG91Y2hhYmxlV2l0aG91dEZlZWRiYWNrIG9uUHJlc3M9e3Byb3BzLm9uUHJlc3N9IGRpc2FibGVkPXshcHJvcHMub25QcmVzc30+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtbc3R5bGVzLmNvbnRhaW5lciwgcHJvcHMuc3R5bGVdfT57cHJvcHMuY2hpbGRyZW59PC9WaWV3PlxuICAgIDwvVG91Y2hhYmxlV2l0aG91dEZlZWRiYWNrPlxuKTtcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENvbG9ycy53aGl0ZSxcbiAgICAgICAgcGFkZGluZ1ZlcnRpY2FsOiAxNSxcbiAgICAgICAgLi4uU2hhZG93cy5wcmltYXJ5LFxuICAgIH0sXG59KTtcblxuZXhwb3J0IHsgQ2FyZCB9O1xuIl19