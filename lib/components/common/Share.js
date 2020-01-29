"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Share = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _core = require("../core");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Library
var Share = function Share(props) {
  return <_reactNative.TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]} activeOpacity={0.7}>
        <_core.Icon name="share" color={_utils.Colors.white} style={styles.icon} />
    </_reactNative.TouchableOpacity>;
};

exports.Share = Share;

var styles = _reactNative.StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: _utils.Colors.primary,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    height: 15,
    width: 15
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9TaGFyZS50c3giXSwibmFtZXMiOlsiU2hhcmUiLCJwcm9wcyIsIm9uUHJlc3MiLCJzdHlsZXMiLCJjb250YWluZXIiLCJzdHlsZSIsIkNvbG9ycyIsIndoaXRlIiwiaWNvbiIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmltYXJ5IiwiaGVpZ2h0Iiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQVFBOztBQUNBOzs7Ozs7QUFGQTtBQVNBLElBQU1BLEtBQTJCLEdBQUcsU0FBOUJBLEtBQThCLENBQUFDLEtBQUs7QUFBQSxTQUNyQywrQkFDSSxRQUFRLENBQUNBLEtBQUssQ0FBQ0MsT0FBUCxDQURaLENBRUksTUFBTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUixFQUFtQkgsS0FBSyxDQUFDSSxLQUF6QixDQUFELENBRlYsQ0FHSSxjQUFjLENBQUMsR0FBRCxDQUhsQjtRQUtJLFlBQU0sS0FBSyxPQUFYLENBQW1CLE1BQU0sQ0FBQ0MsY0FBT0MsS0FBUixDQUF6QixDQUF3QyxNQUFNLENBQUNKLE1BQU0sQ0FBQ0ssSUFBUixDQUE5QztJQUNKLGdDQVBxQztBQUFBLENBQXpDOzs7O0FBVUEsSUFBTUwsTUFBTSxHQUFHTSx3QkFBV0MsTUFBWCxDQUFrQjtBQUM3Qk4sRUFBQUEsU0FBUyxFQUFFO0FBQ1BPLElBQUFBLFlBQVksRUFBRSxFQURQO0FBRVBDLElBQUFBLGVBQWUsRUFBRU4sY0FBT08sT0FGakI7QUFHUEMsSUFBQUEsTUFBTSxFQUFFLEVBSEQ7QUFJUEMsSUFBQUEsS0FBSyxFQUFFLEVBSkE7QUFLUEMsSUFBQUEsVUFBVSxFQUFFLFFBTEw7QUFNUEMsSUFBQUEsY0FBYyxFQUFFO0FBTlQsR0FEa0I7QUFTN0JULEVBQUFBLElBQUksRUFBRTtBQUNGTSxJQUFBQSxNQUFNLEVBQUUsRUFETjtBQUVGQyxJQUFBQSxLQUFLLEVBQUU7QUFGTDtBQVR1QixDQUFsQixDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgICBTdHlsZVNoZWV0LFxuICAgIFN0eWxlUHJvcCxcbiAgICBWaWV3U3R5bGUsXG4gICAgVG91Y2hhYmxlT3BhY2l0eSxcbn0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gTGlicmFyeVxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2NvbXBvbmVudHMvY29yZSc7XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICd1dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hhcmVQcm9wcyB7XG4gICAgb25QcmVzcz86ICgpID0+IHZvaWQ7XG4gICAgc3R5bGU/OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcbn1cblxuY29uc3QgU2hhcmU6IFJlYWN0LkZDPFNoYXJlUHJvcHM+ID0gcHJvcHMgPT4gKFxuICAgIDxUb3VjaGFibGVPcGFjaXR5XG4gICAgICAgIG9uUHJlc3M9e3Byb3BzLm9uUHJlc3N9XG4gICAgICAgIHN0eWxlPXtbc3R5bGVzLmNvbnRhaW5lciwgcHJvcHMuc3R5bGVdfVxuICAgICAgICBhY3RpdmVPcGFjaXR5PXswLjd9XG4gICAgPlxuICAgICAgICA8SWNvbiBuYW1lPVwic2hhcmVcIiBjb2xvcj17Q29sb3JzLndoaXRlfSBzdHlsZT17c3R5bGVzLmljb259IC8+XG4gICAgPC9Ub3VjaGFibGVPcGFjaXR5PlxuKTtcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENvbG9ycy5wcmltYXJ5LFxuICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICAgIGhlaWdodDogMTUsXG4gICAgICAgIHdpZHRoOiAxNSxcbiAgICB9LFxufSk7XG5cbmV4cG9ydCB7IFNoYXJlIH07XG4iXX0=