"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notification = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _core = require("../core");

var _account = require("../account");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Library
var Notification = function Notification(props) {
  return <_core.Card style={[styles.container, props.style]} onPress={props.onPress}>
        <_reactNative.View style={styles.header}>
            <_reactNative.View style={styles.content}>
                <_account.ProfilePicture />
                <_core.Text style={styles.label} type="semibold">
                    {props.label}
                </_core.Text>
            </_reactNative.View>
            <_core.Text style={styles.time} small>
                {props.createdLabel}
            </_core.Text>
        </_reactNative.View>
        <_core.Text>{props.description}</_core.Text>
    </_core.Card>;
};

exports.Notification = Notification;

var styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: _utils.Colors.greyLight,
    paddingHorizontal: 15
  },
  header: {
    marginBottom: 7.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  label: {
    marginLeft: 10
  },
  time: {
    color: _utils.Colors.neutralLight
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9Ob3RpZmljYXRpb24udHN4Il0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvbiIsInByb3BzIiwic3R5bGVzIiwiY29udGFpbmVyIiwic3R5bGUiLCJvblByZXNzIiwiaGVhZGVyIiwiY29udGVudCIsImxhYmVsIiwidGltZSIsImNyZWF0ZWRMYWJlbCIsImRlc2NyaXB0aW9uIiwiU3R5bGVTaGVldCIsImNyZWF0ZSIsImJhY2tncm91bmRDb2xvciIsIkNvbG9ycyIsImdyZXlMaWdodCIsInBhZGRpbmdIb3Jpem9udGFsIiwibWFyZ2luQm90dG9tIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkxlZnQiLCJjb2xvciIsIm5ldXRyYWxMaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUhBO0FBYUEsSUFBTUEsWUFBeUMsR0FBRyxTQUE1Q0EsWUFBNEMsQ0FBQUMsS0FBSztBQUFBLFNBQ25ELFlBQU0sTUFBTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUixFQUFtQkYsS0FBSyxDQUFDRyxLQUF6QixDQUFELENBQVosQ0FBOEMsUUFBUSxDQUFDSCxLQUFLLENBQUNJLE9BQVAsQ0FBdEQ7UUFDSSxtQkFBTSxNQUFNLENBQUNILE1BQU0sQ0FBQ0ksTUFBUixDQUFaO1lBQ0ksbUJBQU0sTUFBTSxDQUFDSixNQUFNLENBQUNLLE9BQVIsQ0FBWjtnQkFDSTtnQkFDQSxZQUFNLE1BQU0sQ0FBQ0wsTUFBTSxDQUFDTSxLQUFSLENBQVosQ0FBMkIsS0FBSyxVQUFoQztvQkFDSSxDQUFDUCxLQUFLLENBQUNPLEtBQVA7Z0JBQ0o7WUFDSjtZQUNBLFlBQU0sTUFBTSxDQUFDTixNQUFNLENBQUNPLElBQVIsQ0FBWixDQUEwQixLQUExQjtnQkFDSSxDQUFDUixLQUFLLENBQUNTLFlBQVA7WUFDSjtRQUNKO1FBQ0EsWUFBTSxDQUFDVCxLQUFLLENBQUNVLFdBQVAsQ0FBbUI7SUFDN0IsYUFkbUQ7QUFBQSxDQUF2RDs7OztBQWlCQSxJQUFNVCxNQUFNLEdBQUdVLHdCQUFXQyxNQUFYLENBQWtCO0FBQzdCVixFQUFBQSxTQUFTLEVBQUU7QUFDUFcsSUFBQUEsZUFBZSxFQUFFQyxjQUFPQyxTQURqQjtBQUVQQyxJQUFBQSxpQkFBaUIsRUFBRTtBQUZaLEdBRGtCO0FBSzdCWCxFQUFBQSxNQUFNLEVBQUU7QUFDSlksSUFBQUEsWUFBWSxFQUFFLEdBRFY7QUFFSkMsSUFBQUEsVUFBVSxFQUFFLFFBRlI7QUFHSkMsSUFBQUEsY0FBYyxFQUFFLGVBSFo7QUFJSkMsSUFBQUEsYUFBYSxFQUFFO0FBSlgsR0FMcUI7QUFXN0JkLEVBQUFBLE9BQU8sRUFBRTtBQUNMWSxJQUFBQSxVQUFVLEVBQUUsUUFEUDtBQUVMRSxJQUFBQSxhQUFhLEVBQUU7QUFGVixHQVhvQjtBQWU3QmIsRUFBQUEsS0FBSyxFQUFFO0FBQ0hjLElBQUFBLFVBQVUsRUFBRTtBQURULEdBZnNCO0FBa0I3QmIsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZjLElBQUFBLEtBQUssRUFBRVIsY0FBT1M7QUFEWjtBQWxCdUIsQ0FBbEIsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIFN0eWxlUHJvcCwgVmlldywgVmlld1N0eWxlIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gTGlicmFyeVxuaW1wb3J0IHsgVGV4dCwgQ2FyZCB9IGZyb20gJ2NvbXBvbmVudHMvY29yZSc7XG5pbXBvcnQgeyBQcm9maWxlUGljdHVyZSB9IGZyb20gJ2NvbXBvbmVudHMvYWNjb3VudCc7XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICd1dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uUHJvcHMge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBjcmVhdGVkTGFiZWw6IHN0cmluZztcbiAgICBvblByZXNzPzogKCkgPT4gdm9pZDtcbiAgICBzdHlsZT86IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xufVxuXG5jb25zdCBOb3RpZmljYXRpb246IFJlYWN0LkZDPE5vdGlmaWNhdGlvblByb3BzPiA9IHByb3BzID0+IChcbiAgICA8Q2FyZCBzdHlsZT17W3N0eWxlcy5jb250YWluZXIsIHByb3BzLnN0eWxlXX0gb25QcmVzcz17cHJvcHMub25QcmVzc30+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVQaWN0dXJlIC8+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5sYWJlbH0gdHlwZT1cInNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRpbWV9IHNtYWxsPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jcmVhdGVkTGFiZWx9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvVmlldz5cbiAgICAgICAgPFRleHQ+e3Byb3BzLmRlc2NyaXB0aW9ufTwvVGV4dD5cbiAgICA8L0NhcmQ+XG4pO1xuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQ29sb3JzLmdyZXlMaWdodCxcbiAgICAgICAgcGFkZGluZ0hvcml6b250YWw6IDE1LFxuICAgIH0sXG4gICAgaGVhZGVyOiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogNy41LFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IDEwLFxuICAgIH0sXG4gICAgdGltZToge1xuICAgICAgICBjb2xvcjogQ29sb3JzLm5ldXRyYWxMaWdodCxcbiAgICB9LFxufSk7XG5cbmV4cG9ydCB7IE5vdGlmaWNhdGlvbiB9O1xuIl19