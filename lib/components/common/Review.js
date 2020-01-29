"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Review = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _core = require("../core");

var _account = require("../account");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var Review = function Review(props) {
  return <_reactNative.View style={props.style}>
        <_account.User fullName={props.fullName} userName={props.userName} />
        <_reactNative.View style={styles.stars}>
            {_toConsumableArray(new Array(5)).map(function (_item, index) {
        return <_core.Icon name={index < props.rating ? 'starFull' : 'starEmpty'} color={_utils.Colors.primary} style={styles.star} />;
      })}
        </_reactNative.View>
        <_core.Text style={styles.text}>“{props.description}”</_core.Text>
    </_reactNative.View>;
};

exports.Review = Review;

var styles = _reactNative.StyleSheet.create({
  stars: {
    marginTop: 10,
    marginBottom: 15,
    marginHorizontal: -5,
    flexDirection: 'row'
  },
  star: {
    marginHorizontal: 5
  },
  text: {
    fontStyle: 'italic'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9SZXZpZXcudHN4Il0sIm5hbWVzIjpbIlJldmlldyIsInByb3BzIiwic3R5bGUiLCJmdWxsTmFtZSIsInVzZXJOYW1lIiwic3R5bGVzIiwic3RhcnMiLCJBcnJheSIsIm1hcCIsIl9pdGVtIiwiaW5kZXgiLCJyYXRpbmciLCJDb2xvcnMiLCJwcmltYXJ5Iiwic3RhciIsInRleHQiLCJkZXNjcmlwdGlvbiIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ib3Jpem9udGFsIiwiZmxleERpcmVjdGlvbiIsImZvbnRTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsQ0FBQUMsS0FBSztBQUFBLFNBQ3ZDLG1CQUFNLE1BQU0sQ0FBQ0EsS0FBSyxDQUFDQyxLQUFQLENBQVo7UUFDSSxlQUFNLFNBQVMsQ0FBQ0QsS0FBSyxDQUFDRSxRQUFQLENBQWYsQ0FBZ0MsU0FBUyxDQUFDRixLQUFLLENBQUNHLFFBQVAsQ0FBekM7UUFDQSxtQkFBTSxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsS0FBUixDQUFaO1lBQ0ksQ0FBQyxtQkFBSSxJQUFJQyxLQUFKLENBQVUsQ0FBVixDQUFKLEVBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxlQUNuQixZQUNJLEtBQUssQ0FBQ0EsS0FBSyxHQUFHVCxLQUFLLENBQUNVLE1BQWQsR0FBdUIsVUFBdkIsR0FBb0MsV0FBckMsQ0FEVCxDQUVJLE1BQU0sQ0FBQ0MsY0FBT0MsT0FBUixDQUZWLENBR0ksTUFBTSxDQUFDUixNQUFNLENBQUNTLElBQVIsQ0FIVixHQURtQjtBQUFBLE9BQXRCLENBQUQ7UUFPSjtRQUNBLFlBQU0sTUFBTSxDQUFDVCxNQUFNLENBQUNVLElBQVIsQ0FBWixDQUEwQixDQUFDLENBQUNkLEtBQUssQ0FBQ2UsV0FBUCxDQUFtQixDQUFDO0lBQ25ELG9CQWJ1QztBQUFBLENBQTNDOzs7O0FBZ0JBLElBQU1YLE1BQU0sR0FBR1ksd0JBQVdDLE1BQVgsQ0FBa0I7QUFDN0JaLEVBQUFBLEtBQUssRUFBRTtBQUNIYSxJQUFBQSxTQUFTLEVBQUUsRUFEUjtBQUVIQyxJQUFBQSxZQUFZLEVBQUUsRUFGWDtBQUdIQyxJQUFBQSxnQkFBZ0IsRUFBRSxDQUFDLENBSGhCO0FBSUhDLElBQUFBLGFBQWEsRUFBRTtBQUpaLEdBRHNCO0FBTzdCUixFQUFBQSxJQUFJLEVBQUU7QUFDRk8sSUFBQUEsZ0JBQWdCLEVBQUU7QUFEaEIsR0FQdUI7QUFVN0JOLEVBQUFBLElBQUksRUFBRTtBQUNGUSxJQUFBQSxTQUFTLEVBQUU7QUFEVDtBQVZ1QixDQUFsQixDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgU3R5bGVQcm9wLCBWaWV3LCBWaWV3U3R5bGUgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBMaWJyYXJ5XG5pbXBvcnQgeyBJY29uLCBUZXh0IH0gZnJvbSAnY29tcG9uZW50cy9jb3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdjb21wb25lbnRzL2FjY291bnQnO1xuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSAndXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJldmlld1Byb3BzIHtcbiAgICBzdHlsZT86IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuICAgIGZ1bGxOYW1lOiBzdHJpbmc7XG4gICAgdXNlck5hbWU6IHN0cmluZztcbiAgICByYXRpbmc6IG51bWJlcjtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCBSZXZpZXc6IFJlYWN0LkZDPFJldmlld1Byb3BzPiA9IHByb3BzID0+IChcbiAgICA8VmlldyBzdHlsZT17cHJvcHMuc3R5bGV9PlxuICAgICAgICA8VXNlciBmdWxsTmFtZT17cHJvcHMuZnVsbE5hbWV9IHVzZXJOYW1lPXtwcm9wcy51c2VyTmFtZX0gLz5cbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zdGFyc30+XG4gICAgICAgICAgICB7Wy4uLm5ldyBBcnJheSg1KV0ubWFwKChfaXRlbSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2luZGV4IDwgcHJvcHMucmF0aW5nID8gJ3N0YXJGdWxsJyA6ICdzdGFyRW1wdHknfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Q29sb3JzLnByaW1hcnl9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuc3Rhcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvVmlldz5cbiAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50ZXh0fT7igJx7cHJvcHMuZGVzY3JpcHRpb2594oCdPC9UZXh0PlxuICAgIDwvVmlldz5cbik7XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICBzdGFyczoge1xuICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDE1LFxuICAgICAgICBtYXJnaW5Ib3Jpem9udGFsOiAtNSxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgfSxcbiAgICBzdGFyOiB7XG4gICAgICAgIG1hcmdpbkhvcml6b250YWw6IDUsXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgeyBSZXZpZXcgfTtcbiJdfQ==