"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfilePicture = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Library
var ProfilePicture = function ProfilePicture(props) {
  return <_reactNative.View style={[styles.container, styles["".concat(props.size || 'small').concat(props.squared ? '_squared' : '')] || styles.small, props.style]}>
        {props.src && <_reactNative.Image source={props.src} />}
        {props.children}
    </_reactNative.View>;
};

exports.ProfilePicture = ProfilePicture;

var styles = _reactNative.StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: _utils.Colors.placeholder,
    overflow: 'hidden'
  },
  small: {
    borderRadius: 22.5,
    height: 45,
    width: 45
  },
  medium: {
    borderRadius: 30,
    height: 60,
    width: 60
  },
  large: {
    borderRadius: 45,
    height: 90,
    width: 90
  },
  small_squared: {
    height: 90,
    width: 90
  },
  medium_squared: {
    height: 120,
    width: 90
  },
  large_squared: {
    height: 150,
    width: 120
  },
  xlarge_squared: {
    height: 180,
    width: 180
  },
  xxlarge_squared: {
    height: 200,
    width: 160
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FjY291bnQvUHJvZmlsZVBpY3R1cmUudHN4Il0sIm5hbWVzIjpbIlByb2ZpbGVQaWN0dXJlIiwicHJvcHMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJzaXplIiwic3F1YXJlZCIsInNtYWxsIiwic3R5bGUiLCJzcmMiLCJjaGlsZHJlbiIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJDb2xvcnMiLCJwbGFjZWhvbGRlciIsIm92ZXJmbG93IiwiaGVpZ2h0Iiwid2lkdGgiLCJtZWRpdW0iLCJsYXJnZSIsInNtYWxsX3NxdWFyZWQiLCJtZWRpdW1fc3F1YXJlZCIsImxhcmdlX3NxdWFyZWQiLCJ4bGFyZ2Vfc3F1YXJlZCIsInh4bGFyZ2Vfc3F1YXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBVUE7Ozs7OztBQURBO0FBa0JBLElBQU1BLGNBQTZDLEdBQUcsU0FBaERBLGNBQWdELENBQUFDLEtBQUs7QUFBQSxTQUN2RCxtQkFDSSxNQUFNLENBQUMsQ0FDSEMsTUFBTSxDQUFDQyxTQURKLEVBRUhELE1BQU0sV0FDQ0QsS0FBSyxDQUFDRyxJQUFOLElBQWMsT0FEZixTQUN5QkgsS0FBSyxDQUFDSSxPQUFOLEdBQWdCLFVBQWhCLEdBQTZCLEVBRHRELEVBQU4sSUFFS0gsTUFBTSxDQUFDSSxLQUpULEVBS0hMLEtBQUssQ0FBQ00sS0FMSCxDQUFELENBRFY7UUFTSSxDQUFDTixLQUFLLENBQUNPLEdBQU4sSUFBYSxvQkFBTyxPQUFPLENBQUNQLEtBQUssQ0FBQ08sR0FBUCxDQUFkLEdBQWQ7UUFDQSxDQUFDUCxLQUFLLENBQUNRLFFBQVA7SUFDSixvQkFadUQ7QUFBQSxDQUEzRDs7OztBQWVBLElBQU1QLE1BQWlDLEdBQUdRLHdCQUFXQyxNQUFYLENBQWtCO0FBQ3hEUixFQUFBQSxTQUFTLEVBQUU7QUFDUFMsSUFBQUEsWUFBWSxFQUFFLEVBRFA7QUFFUEMsSUFBQUEsZUFBZSxFQUFFQyxjQUFPQyxXQUZqQjtBQUdQQyxJQUFBQSxRQUFRLEVBQUU7QUFISCxHQUQ2QztBQU14RFYsRUFBQUEsS0FBSyxFQUFFO0FBQ0hNLElBQUFBLFlBQVksRUFBRSxJQURYO0FBRUhLLElBQUFBLE1BQU0sRUFBRSxFQUZMO0FBR0hDLElBQUFBLEtBQUssRUFBRTtBQUhKLEdBTmlEO0FBV3hEQyxFQUFBQSxNQUFNLEVBQUU7QUFDSlAsSUFBQUEsWUFBWSxFQUFFLEVBRFY7QUFFSkssSUFBQUEsTUFBTSxFQUFFLEVBRko7QUFHSkMsSUFBQUEsS0FBSyxFQUFFO0FBSEgsR0FYZ0Q7QUFnQnhERSxFQUFBQSxLQUFLLEVBQUU7QUFDSFIsSUFBQUEsWUFBWSxFQUFFLEVBRFg7QUFFSEssSUFBQUEsTUFBTSxFQUFFLEVBRkw7QUFHSEMsSUFBQUEsS0FBSyxFQUFFO0FBSEosR0FoQmlEO0FBcUJ4REcsRUFBQUEsYUFBYSxFQUFFO0FBQ1hKLElBQUFBLE1BQU0sRUFBRSxFQURHO0FBRVhDLElBQUFBLEtBQUssRUFBRTtBQUZJLEdBckJ5QztBQXlCeERJLEVBQUFBLGNBQWMsRUFBRTtBQUNaTCxJQUFBQSxNQUFNLEVBQUUsR0FESTtBQUVaQyxJQUFBQSxLQUFLLEVBQUU7QUFGSyxHQXpCd0M7QUE2QnhESyxFQUFBQSxhQUFhLEVBQUU7QUFDWE4sSUFBQUEsTUFBTSxFQUFFLEdBREc7QUFFWEMsSUFBQUEsS0FBSyxFQUFFO0FBRkksR0E3QnlDO0FBaUN4RE0sRUFBQUEsY0FBYyxFQUFFO0FBQ1pQLElBQUFBLE1BQU0sRUFBRSxHQURJO0FBRVpDLElBQUFBLEtBQUssRUFBRTtBQUZLLEdBakN3QztBQXFDeERPLEVBQUFBLGVBQWUsRUFBRTtBQUNiUixJQUFBQSxNQUFNLEVBQUUsR0FESztBQUViQyxJQUFBQSxLQUFLLEVBQUU7QUFGTTtBQXJDdUMsQ0FBbEIsQ0FBMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIFN0eWxlU2hlZXQsXG4gICAgU3R5bGVQcm9wLFxuICAgIFZpZXcsXG4gICAgVmlld1N0eWxlLFxuICAgIEltYWdlLFxuICAgIEltYWdlU291cmNlUHJvcFR5cGUsXG59IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbi8vIExpYnJhcnlcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gJ3V0aWxzJztcblxuZXhwb3J0IHR5cGUgUHJvZmlsZVBpY3R1cmVTaXplID1cbiAgICB8ICdzbWFsbCdcbiAgICB8ICdtZWRpdW0nXG4gICAgfCAnbGFyZ2UnXG4gICAgfCAneGxhcmdlJ1xuICAgIHwgJ3h4bGFyZ2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2ZpbGVQaWN0dXJlUHJvcHMge1xuICAgIHN0eWxlPzogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG4gICAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG4gICAgc2l6ZT86IFByb2ZpbGVQaWN0dXJlU2l6ZTtcbiAgICBzcXVhcmVkPzogYm9vbGVhbjtcbiAgICBzcmM/OiBJbWFnZVNvdXJjZVByb3BUeXBlO1xufVxuXG5jb25zdCBQcm9maWxlUGljdHVyZTogUmVhY3QuRkM8UHJvZmlsZVBpY3R1cmVQcm9wcz4gPSBwcm9wcyA9PiAoXG4gICAgPFZpZXdcbiAgICAgICAgc3R5bGU9e1tcbiAgICAgICAgICAgIHN0eWxlcy5jb250YWluZXIsXG4gICAgICAgICAgICBzdHlsZXNbXG4gICAgICAgICAgICAgICAgYCR7cHJvcHMuc2l6ZSB8fCAnc21hbGwnfSR7cHJvcHMuc3F1YXJlZCA/ICdfc3F1YXJlZCcgOiAnJ31gXG4gICAgICAgICAgICBdIHx8IHN0eWxlcy5zbWFsbCxcbiAgICAgICAgICAgIHByb3BzLnN0eWxlLFxuICAgICAgICBdfVxuICAgID5cbiAgICAgICAge3Byb3BzLnNyYyAmJiA8SW1hZ2Ugc291cmNlPXtwcm9wcy5zcmN9IC8+fVxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9WaWV3PlxuKTtcblxuY29uc3Qgc3R5bGVzOiB7IFtrZXk6IHN0cmluZ106IE9iamVjdCB9ID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBib3JkZXJSYWRpdXM6IDE1LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENvbG9ycy5wbGFjZWhvbGRlcixcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIH0sXG4gICAgc21hbGw6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAyMi41LFxuICAgICAgICBoZWlnaHQ6IDQ1LFxuICAgICAgICB3aWR0aDogNDUsXG4gICAgfSxcbiAgICBtZWRpdW06IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAzMCxcbiAgICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICAgd2lkdGg6IDYwLFxuICAgIH0sXG4gICAgbGFyZ2U6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0NSxcbiAgICAgICAgaGVpZ2h0OiA5MCxcbiAgICAgICAgd2lkdGg6IDkwLFxuICAgIH0sXG4gICAgc21hbGxfc3F1YXJlZDoge1xuICAgICAgICBoZWlnaHQ6IDkwLFxuICAgICAgICB3aWR0aDogOTAsXG4gICAgfSxcbiAgICBtZWRpdW1fc3F1YXJlZDoge1xuICAgICAgICBoZWlnaHQ6IDEyMCxcbiAgICAgICAgd2lkdGg6IDkwLFxuICAgIH0sXG4gICAgbGFyZ2Vfc3F1YXJlZDoge1xuICAgICAgICBoZWlnaHQ6IDE1MCxcbiAgICAgICAgd2lkdGg6IDEyMCxcbiAgICB9LFxuICAgIHhsYXJnZV9zcXVhcmVkOiB7XG4gICAgICAgIGhlaWdodDogMTgwLFxuICAgICAgICB3aWR0aDogMTgwLFxuICAgIH0sXG4gICAgeHhsYXJnZV9zcXVhcmVkOiB7XG4gICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICB3aWR0aDogMTYwLFxuICAgIH0sXG59KTtcblxuZXhwb3J0IHsgUHJvZmlsZVBpY3R1cmUgfTtcbiJdfQ==