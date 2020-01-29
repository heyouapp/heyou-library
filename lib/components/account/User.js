"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _core = require("../core");

var _ProfilePicture = require("./ProfilePicture");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Library
var User = function User(props) {
  return <_reactNative.View style={[styles.container, props.style]}>
        <_ProfilePicture.ProfilePicture size="small" />
        <_reactNative.View style={styles.content}>
            <_core.Text type="semibold">{props.fullName}</_core.Text>
            <_core.Text small style={styles.userName}>
                @{props.userName}
            </_core.Text>
        </_reactNative.View>
    </_reactNative.View>;
};

exports.User = User;

var styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    marginLeft: 10
  },
  userName: {
    color: _utils.Colors.neutralLight
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FjY291bnQvVXNlci50c3giXSwibmFtZXMiOlsiVXNlciIsInByb3BzIiwic3R5bGVzIiwiY29udGFpbmVyIiwic3R5bGUiLCJjb250ZW50IiwiZnVsbE5hbWUiLCJ1c2VyTmFtZSIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcmdpbkxlZnQiLCJjb2xvciIsIkNvbG9ycyIsIm5ldXRyYWxMaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUhBO0FBV0EsSUFBTUEsSUFBeUIsR0FBRyxTQUE1QkEsSUFBNEIsQ0FBQUMsS0FBSztBQUFBLFNBQ25DLG1CQUFNLE1BQU0sQ0FBQyxDQUFDQyxNQUFNLENBQUNDLFNBQVIsRUFBbUJGLEtBQUssQ0FBQ0csS0FBekIsQ0FBRCxDQUFaO1FBQ0ksZ0NBQWdCLEtBQUssT0FBckI7UUFDQSxtQkFBTSxNQUFNLENBQUNGLE1BQU0sQ0FBQ0csT0FBUixDQUFaO1lBQ0ksWUFBTSxLQUFLLFVBQVgsQ0FBc0IsQ0FBQ0osS0FBSyxDQUFDSyxRQUFQLENBQWdCO1lBQ3RDLFlBQU0sS0FBTixDQUFZLE1BQU0sQ0FBQ0osTUFBTSxDQUFDSyxRQUFSLENBQWxCO2lCQUNLLENBQUNOLEtBQUssQ0FBQ00sUUFBUDtZQUNMO1FBQ0o7SUFDSixvQkFUbUM7QUFBQSxDQUF2Qzs7OztBQVlBLElBQU1MLE1BQU0sR0FBR00sd0JBQVdDLE1BQVgsQ0FBa0I7QUFDN0JOLEVBQUFBLFNBQVMsRUFBRTtBQUNQTyxJQUFBQSxhQUFhLEVBQUUsS0FEUjtBQUVQQyxJQUFBQSxVQUFVLEVBQUU7QUFGTCxHQURrQjtBQUs3Qk4sRUFBQUEsT0FBTyxFQUFFO0FBQ0xPLElBQUFBLFVBQVUsRUFBRTtBQURQLEdBTG9CO0FBUTdCTCxFQUFBQSxRQUFRLEVBQUU7QUFDTk0sSUFBQUEsS0FBSyxFQUFFQyxjQUFPQztBQURSO0FBUm1CLENBQWxCLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBTdHlsZVByb3AsIFZpZXcsIFZpZXdTdHlsZSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbi8vIExpYnJhcnlcbmltcG9ydCB7IFRleHQgfSBmcm9tICdjb21wb25lbnRzL2NvcmUnO1xuaW1wb3J0IHsgUHJvZmlsZVBpY3R1cmUgfSBmcm9tICcuL1Byb2ZpbGVQaWN0dXJlJztcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gJ3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyUHJvcHMge1xuICAgIHN0eWxlPzogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG4gICAgZnVsbE5hbWU6IHN0cmluZztcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBVc2VyOiBSZWFjdC5GQzxVc2VyUHJvcHM+ID0gcHJvcHMgPT4gKFxuICAgIDxWaWV3IHN0eWxlPXtbc3R5bGVzLmNvbnRhaW5lciwgcHJvcHMuc3R5bGVdfT5cbiAgICAgICAgPFByb2ZpbGVQaWN0dXJlIHNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICA8VGV4dCB0eXBlPVwic2VtaWJvbGRcIj57cHJvcHMuZnVsbE5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgc21hbGwgc3R5bGU9e3N0eWxlcy51c2VyTmFtZX0+XG4gICAgICAgICAgICAgICAgQHtwcm9wcy51c2VyTmFtZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9WaWV3PlxuICAgIDwvVmlldz5cbik7XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgY29udGVudDoge1xuICAgICAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgICB9LFxuICAgIHVzZXJOYW1lOiB7XG4gICAgICAgIGNvbG9yOiBDb2xvcnMubmV1dHJhbExpZ2h0LFxuICAgIH0sXG59KTtcblxuZXhwb3J0IHsgVXNlciB9O1xuIl19