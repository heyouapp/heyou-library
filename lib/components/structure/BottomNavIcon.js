"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _core = require("../core");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Library
var BottomNavIcon = function BottomNavIcon(props) {
  return <_reactNative.TouchableOpacity onPress={props.onPress} activeOpacity={0.7} style={styles.container}>
        <_core.Icon {...props} color={_utils.Colors[props.active ? 'primary' : 'grey']} style={styles.icon} />
        {props.active && <_reactNative.View style={styles.dot} />}
    </_reactNative.TouchableOpacity>;
};

var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  icon: {
    height: 20
  },
  dot: {
    borderRadius: 4,
    backgroundColor: _utils.Colors.primary,
    height: 8,
    width: 8,
    marginTop: 6
  }
});

var _default = BottomNavIcon;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3N0cnVjdHVyZS9Cb3R0b21OYXZJY29uLnRzeCJdLCJuYW1lcyI6WyJCb3R0b21OYXZJY29uIiwicHJvcHMiLCJvblByZXNzIiwic3R5bGVzIiwiY29udGFpbmVyIiwiQ29sb3JzIiwiYWN0aXZlIiwiaWNvbiIsImRvdCIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwicHJpbWFyeSIsIndpZHRoIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFHQTs7QUFDQTs7Ozs7O0FBRkE7QUFTQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQ7QUFBQSxTQUNsQiwrQkFDSSxRQUFRLENBQUNBLEtBQUssQ0FBQ0MsT0FBUCxDQURaLENBRUksY0FBYyxDQUFDLEdBQUQsQ0FGbEIsQ0FHSSxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUixDQUhWO1FBS0ksWUFDSSxJQUFJSCxLQUFKLENBREosQ0FFSSxNQUFNLENBQUNJLGNBQU9KLEtBQUssQ0FBQ0ssTUFBTixHQUFlLFNBQWYsR0FBMkIsTUFBbEMsQ0FBRCxDQUZWLENBR0ksTUFBTSxDQUFDSCxNQUFNLENBQUNJLElBQVIsQ0FIVjtRQUtBLENBQUNOLEtBQUssQ0FBQ0ssTUFBTixJQUFnQixtQkFBTSxNQUFNLENBQUNILE1BQU0sQ0FBQ0ssR0FBUixDQUFaLEdBQWpCO0lBQ0osZ0NBWmtCO0FBQUEsQ0FBdEI7O0FBZUEsSUFBTUwsTUFBTSxHQUFHTSx3QkFBV0MsTUFBWCxDQUFrQjtBQUM3Qk4sRUFBQUEsU0FBUyxFQUFFO0FBQ1BPLElBQUFBLFVBQVUsRUFBRTtBQURMLEdBRGtCO0FBSTdCSixFQUFBQSxJQUFJLEVBQUU7QUFDRkssSUFBQUEsTUFBTSxFQUFFO0FBRE4sR0FKdUI7QUFPN0JKLEVBQUFBLEdBQUcsRUFBRTtBQUNESyxJQUFBQSxZQUFZLEVBQUUsQ0FEYjtBQUVEQyxJQUFBQSxlQUFlLEVBQUVULGNBQU9VLE9BRnZCO0FBR0RILElBQUFBLE1BQU0sRUFBRSxDQUhQO0FBSURJLElBQUFBLEtBQUssRUFBRSxDQUpOO0FBS0RDLElBQUFBLFNBQVMsRUFBRTtBQUxWO0FBUHdCLENBQWxCLENBQWY7O2VBZ0JlakIsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIFRvdWNoYWJsZU9wYWNpdHksIFZpZXcgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBMaWJyYXJ5XG5pbXBvcnQgeyBJY29uLCBJY29uUHJvcHMgfSBmcm9tICdjb21wb25lbnRzL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSAndXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJvdHRvbU5hdkljb25Qcm9wcyBleHRlbmRzIEljb25Qcm9wcyB7XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICBvblByZXNzOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBCb3R0b21OYXZJY29uID0gKHByb3BzOiBCb3R0b21OYXZJY29uUHJvcHMpID0+IChcbiAgICA8VG91Y2hhYmxlT3BhY2l0eVxuICAgICAgICBvblByZXNzPXtwcm9wcy5vblByZXNzfVxuICAgICAgICBhY3RpdmVPcGFjaXR5PXswLjd9XG4gICAgICAgIHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfVxuICAgID5cbiAgICAgICAgPEljb25cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGNvbG9yPXtDb2xvcnNbcHJvcHMuYWN0aXZlID8gJ3ByaW1hcnknIDogJ2dyZXknXX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaWNvbn1cbiAgICAgICAgLz5cbiAgICAgICAge3Byb3BzLmFjdGl2ZSAmJiA8VmlldyBzdHlsZT17c3R5bGVzLmRvdH0gLz59XG4gICAgPC9Ub3VjaGFibGVPcGFjaXR5PlxuKTtcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICB9LFxuICAgIGRvdDoge1xuICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQ29sb3JzLnByaW1hcnksXG4gICAgICAgIGhlaWdodDogOCxcbiAgICAgICAgd2lkdGg6IDgsXG4gICAgICAgIG1hcmdpblRvcDogNixcbiAgICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJvdHRvbU5hdkljb247XG4iXX0=