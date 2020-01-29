"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Text = require("./Text");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Library
var Button = function Button(props) {
  return <_reactNative.TouchableOpacity {...props} activeOpacity={0.7} style={[styles.container, styles[props.type || 'primary'], props.position ? styles[props.position] : null, props.small ? styles.small : null, props.style]}>
        <_Text.Text style={styles["".concat(props.type || 'primary', "_text")]} type="semibold" small>
            {props.children}
        </_Text.Text>
    </_reactNative.TouchableOpacity>;
};

exports.Button = Button;

var styles = _reactNative.StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 25,
    height: 45,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  primary: {
    backgroundColor: _utils.Colors.primary
  },
  primary_text: {
    color: _utils.Colors.white
  },
  secondary: {
    borderColor: _utils.Colors.primary,
    backgroundColor: _utils.Colors.white
  },
  secondary_text: {
    color: _utils.Colors.primary
  },
  small: {
    borderRadius: 15,
    height: 30
  },
  start: {
    alignSelf: 'flex-start'
  },
  end: {
    alignSelf: 'flex-end'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvcmUvQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJCdXR0b24iLCJwcm9wcyIsInN0eWxlcyIsImNvbnRhaW5lciIsInR5cGUiLCJwb3NpdGlvbiIsInNtYWxsIiwic3R5bGUiLCJjaGlsZHJlbiIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJib3JkZXJXaWR0aCIsImJvcmRlckNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwicGFkZGluZ0hvcml6b250YWwiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwcmltYXJ5IiwiYmFja2dyb3VuZENvbG9yIiwiQ29sb3JzIiwicHJpbWFyeV90ZXh0IiwiY29sb3IiLCJ3aGl0ZSIsInNlY29uZGFyeSIsInNlY29uZGFyeV90ZXh0Iiwic3RhcnQiLCJhbGlnblNlbGYiLCJlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQU9BOztBQUNBOzs7Ozs7QUFGQTtBQVVPLElBQU1BLE1BQTZCLEdBQUcsU0FBaENBLE1BQWdDLENBQUFDLEtBQUs7QUFBQSxTQUM5QywrQkFDSSxJQUFJQSxLQUFKLENBREosQ0FFSSxjQUFjLENBQUMsR0FBRCxDQUZsQixDQUdJLE1BQU0sQ0FBQyxDQUNIQyxNQUFNLENBQUNDLFNBREosRUFFSEQsTUFBTSxDQUFDRCxLQUFLLENBQUNHLElBQU4sSUFBYyxTQUFmLENBRkgsRUFHSEgsS0FBSyxDQUFDSSxRQUFOLEdBQWlCSCxNQUFNLENBQUNELEtBQUssQ0FBQ0ksUUFBUCxDQUF2QixHQUEwQyxJQUh2QyxFQUlISixLQUFLLENBQUNLLEtBQU4sR0FBY0osTUFBTSxDQUFDSSxLQUFyQixHQUE2QixJQUoxQixFQUtITCxLQUFLLENBQUNNLEtBTEgsQ0FBRCxDQUhWO1FBV0ksWUFDSSxNQUFNLENBQUNMLE1BQU0sV0FBSUQsS0FBSyxDQUFDRyxJQUFOLElBQWMsU0FBbEIsV0FBUCxDQURWLENBRUksS0FBSyxVQUZULENBR0ksS0FISjtZQUtJLENBQUNILEtBQUssQ0FBQ08sUUFBUDtRQUNKO0lBQ0osZ0NBbkI4QztBQUFBLENBQTNDOzs7O0FBc0JQLElBQU1OLE1BQVcsR0FBR08sd0JBQVdDLE1BQVgsQ0FBa0I7QUFDbENQLEVBQUFBLFNBQVMsRUFBRTtBQUNQUSxJQUFBQSxXQUFXLEVBQUUsQ0FETjtBQUVQQyxJQUFBQSxXQUFXLEVBQUUsYUFGTjtBQUdQQyxJQUFBQSxZQUFZLEVBQUUsRUFIUDtBQUlQQyxJQUFBQSxNQUFNLEVBQUUsRUFKRDtBQUtQQyxJQUFBQSxpQkFBaUIsRUFBRSxFQUxaO0FBTVBDLElBQUFBLFVBQVUsRUFBRSxRQU5MO0FBT1BDLElBQUFBLGNBQWMsRUFBRTtBQVBULEdBRHVCO0FBVWxDQyxFQUFBQSxPQUFPLEVBQUU7QUFDTEMsSUFBQUEsZUFBZSxFQUFFQyxjQUFPRjtBQURuQixHQVZ5QjtBQWFsQ0csRUFBQUEsWUFBWSxFQUFFO0FBQ1ZDLElBQUFBLEtBQUssRUFBRUYsY0FBT0c7QUFESixHQWJvQjtBQWdCbENDLEVBQUFBLFNBQVMsRUFBRTtBQUNQWixJQUFBQSxXQUFXLEVBQUVRLGNBQU9GLE9BRGI7QUFFUEMsSUFBQUEsZUFBZSxFQUFFQyxjQUFPRztBQUZqQixHQWhCdUI7QUFvQmxDRSxFQUFBQSxjQUFjLEVBQUU7QUFDWkgsSUFBQUEsS0FBSyxFQUFFRixjQUFPRjtBQURGLEdBcEJrQjtBQXVCbENaLEVBQUFBLEtBQUssRUFBRTtBQUNITyxJQUFBQSxZQUFZLEVBQUUsRUFEWDtBQUVIQyxJQUFBQSxNQUFNLEVBQUU7QUFGTCxHQXZCMkI7QUEyQmxDWSxFQUFBQSxLQUFLLEVBQUU7QUFDSEMsSUFBQUEsU0FBUyxFQUFFO0FBRFIsR0EzQjJCO0FBOEJsQ0MsRUFBQUEsR0FBRyxFQUFFO0FBQ0RELElBQUFBLFNBQVMsRUFBRTtBQURWO0FBOUI2QixDQUFsQixDQUFwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gICAgU3R5bGVTaGVldCxcbiAgICBUb3VjaGFibGVPcGFjaXR5LFxuICAgIFRvdWNoYWJsZU9wYWNpdHlQcm9wcyxcbn0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gTGlicmFyeVxuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4vVGV4dCc7XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uUHJvcHMgZXh0ZW5kcyBUb3VjaGFibGVPcGFjaXR5UHJvcHMge1xuICAgIHR5cGU/OiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JztcbiAgICBwb3NpdGlvbj86ICdzdGFydCcgfCAnZW5kJztcbiAgICBzbWFsbD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LkZDPEJ1dHRvblByb3BzPiA9IHByb3BzID0+IChcbiAgICA8VG91Y2hhYmxlT3BhY2l0eVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGFjdGl2ZU9wYWNpdHk9ezAuN31cbiAgICAgICAgc3R5bGU9e1tcbiAgICAgICAgICAgIHN0eWxlcy5jb250YWluZXIsXG4gICAgICAgICAgICBzdHlsZXNbcHJvcHMudHlwZSB8fCAncHJpbWFyeSddLFxuICAgICAgICAgICAgcHJvcHMucG9zaXRpb24gPyBzdHlsZXNbcHJvcHMucG9zaXRpb25dIDogbnVsbCxcbiAgICAgICAgICAgIHByb3BzLnNtYWxsID8gc3R5bGVzLnNtYWxsIDogbnVsbCxcbiAgICAgICAgICAgIHByb3BzLnN0eWxlLFxuICAgICAgICBdfVxuICAgID5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXNbYCR7cHJvcHMudHlwZSB8fCAncHJpbWFyeSd9X3RleHRgXX1cbiAgICAgICAgICAgIHR5cGU9XCJzZW1pYm9sZFwiXG4gICAgICAgICAgICBzbWFsbFxuICAgICAgICA+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvVGV4dD5cbiAgICA8L1RvdWNoYWJsZU9wYWNpdHk+XG4pO1xuXG5jb25zdCBzdHlsZXM6IGFueSA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgIGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDI1LFxuICAgICAgICBoZWlnaHQ6IDQ1LFxuICAgICAgICBwYWRkaW5nSG9yaXpvbnRhbDogMzAsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBwcmltYXJ5OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQ29sb3JzLnByaW1hcnksXG4gICAgfSxcbiAgICBwcmltYXJ5X3RleHQ6IHtcbiAgICAgICAgY29sb3I6IENvbG9ycy53aGl0ZSxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgICBib3JkZXJDb2xvcjogQ29sb3JzLnByaW1hcnksXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQ29sb3JzLndoaXRlLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5X3RleHQ6IHtcbiAgICAgICAgY29sb3I6IENvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgc21hbGw6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxNSxcbiAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICB9LFxuICAgIHN0YXJ0OiB7XG4gICAgICAgIGFsaWduU2VsZjogJ2ZsZXgtc3RhcnQnLFxuICAgIH0sXG4gICAgZW5kOiB7XG4gICAgICAgIGFsaWduU2VsZjogJ2ZsZXgtZW5kJyxcbiAgICB9LFxufSk7XG4iXX0=