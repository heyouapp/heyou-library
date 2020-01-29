"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _ = require("./..");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Library
var Header = function Header(props) {
  var styles = generateTheme(_utils.Colors[props.theme === 'white' ? 'white' : 'primary'], _utils.Colors[props.theme === 'white' ? 'neutral' : 'white']);
  return <_reactNative.SafeAreaView style={styles.wrapper}>
            <_reactNative.View style={styles.container}>
                <_reactNative.View style={styles.content}>
                    {!!props.onPressBack && <_reactNative.TouchableWithoutFeedback onPress={props.onPressBack} disabled={!props.onPressBack}>
                            <_reactNative.View>
                                <_.Icon name="arrowBack" style={styles.icon} />
                            </_reactNative.View>
                        </_reactNative.TouchableWithoutFeedback>}
                    <_.Text style={styles.title} type="bold" numberOfLines={1}>
                        {props.title}
                    </_.Text>
                    {!!props.onPressClose && <_reactNative.TouchableWithoutFeedback onPress={props.onPressClose} disabled={!props.onPressClose}>
                            <_reactNative.View>
                                <_.Icon name="close" style={styles.icon} />
                            </_reactNative.View>
                        </_reactNative.TouchableWithoutFeedback>}
                </_reactNative.View>
            </_reactNative.View>
        </_reactNative.SafeAreaView>;
};

exports.Header = Header;

var generateTheme = function generateTheme(principalColor, contentColor) {
  return _reactNative.StyleSheet.create({
    wrapper: {
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
      backgroundColor: principalColor,
      marginBottom: 25,
      overflow: 'hidden'
    },
    container: {
      height: 50,
      paddingTop: 15
    },
    content: {
      position: 'relative',
      height: 20,
      paddingHorizontal: 15,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row'
    },
    title: {
      position: 'absolute',
      left: 45,
      right: 45,
      fontSize: 16,
      color: contentColor,
      textAlign: 'center'
    },
    icon: {
      height: 16,
      tintColor: contentColor
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3N0cnVjdHVyZS9IZWFkZXIudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwic3R5bGVzIiwiZ2VuZXJhdGVUaGVtZSIsIkNvbG9ycyIsInRoZW1lIiwid3JhcHBlciIsImNvbnRhaW5lciIsImNvbnRlbnQiLCJvblByZXNzQmFjayIsImljb24iLCJ0aXRsZSIsIm9uUHJlc3NDbG9zZSIsInByaW5jaXBhbENvbG9yIiwiY29udGVudENvbG9yIiwiU3R5bGVTaGVldCIsImNyZWF0ZSIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkJvdHRvbSIsIm92ZXJmbG93IiwiaGVpZ2h0IiwicGFkZGluZ1RvcCIsInBvc2l0aW9uIiwicGFkZGluZ0hvcml6b250YWwiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwibGVmdCIsInJpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsInRleHRBbGlnbiIsInRpbnRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBUUE7O0FBQ0E7Ozs7OztBQUZBO0FBV0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUF3QjtBQUNuQyxNQUFNQyxNQUFNLEdBQUdDLGFBQWEsQ0FDeEJDLGNBQU9ILEtBQUssQ0FBQ0ksS0FBTixLQUFnQixPQUFoQixHQUEwQixPQUExQixHQUFvQyxTQUEzQyxDQUR3QixFQUV4QkQsY0FBT0gsS0FBSyxDQUFDSSxLQUFOLEtBQWdCLE9BQWhCLEdBQTBCLFNBQTFCLEdBQXNDLE9BQTdDLENBRndCLENBQTVCO0FBS0EsU0FDSSwyQkFBYyxNQUFNLENBQUNILE1BQU0sQ0FBQ0ksT0FBUixDQUFwQjtZQUNJLG1CQUFNLE1BQU0sQ0FBQ0osTUFBTSxDQUFDSyxTQUFSLENBQVo7Z0JBQ0ksbUJBQU0sTUFBTSxDQUFDTCxNQUFNLENBQUNNLE9BQVIsQ0FBWjtvQkFDSSxDQUFDLENBQUMsQ0FBQ1AsS0FBSyxDQUFDUSxXQUFSLElBQ0csdUNBQ0ksUUFBUSxDQUFDUixLQUFLLENBQUNRLFdBQVAsQ0FEWixDQUVJLFNBQVMsQ0FBQyxDQUFDUixLQUFLLENBQUNRLFdBQVIsQ0FGYjs0QkFJSTtnQ0FDSSxRQUFNLEtBQUssV0FBWCxDQUF1QixNQUFNLENBQUNQLE1BQU0sQ0FBQ1EsSUFBUixDQUE3Qjs0QkFDSjt3QkFDSix3Q0FSSjtvQkFVQSxRQUFNLE1BQU0sQ0FBQ1IsTUFBTSxDQUFDUyxLQUFSLENBQVosQ0FBMkIsS0FBSyxNQUFoQyxDQUF1QyxjQUFjLENBQUMsQ0FBRCxDQUFyRDt3QkFDSSxDQUFDVixLQUFLLENBQUNVLEtBQVA7b0JBQ0o7b0JBQ0EsQ0FBQyxDQUFDLENBQUNWLEtBQUssQ0FBQ1csWUFBUixJQUNHLHVDQUNJLFFBQVEsQ0FBQ1gsS0FBSyxDQUFDVyxZQUFQLENBRFosQ0FFSSxTQUFTLENBQUMsQ0FBQ1gsS0FBSyxDQUFDVyxZQUFSLENBRmI7NEJBSUk7Z0NBQ0ksUUFBTSxLQUFLLE9BQVgsQ0FBbUIsTUFBTSxDQUFDVixNQUFNLENBQUNRLElBQVIsQ0FBekI7NEJBQ0o7d0JBQ0osd0NBUko7Z0JBVUo7WUFDSjtRQUNKLDRCQTdCSjtBQStCSCxDQXJDRDs7OztBQXVDQSxJQUFNUCxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNVLGNBQUQsRUFBeUJDLFlBQXpCO0FBQUEsU0FDbEJDLHdCQUFXQyxNQUFYLENBQWtCO0FBQ2RWLElBQUFBLE9BQU8sRUFBRTtBQUNMVyxNQUFBQSxzQkFBc0IsRUFBRSxFQURuQjtBQUVMQyxNQUFBQSx1QkFBdUIsRUFBRSxFQUZwQjtBQUdMQyxNQUFBQSxlQUFlLEVBQUVOLGNBSFo7QUFJTE8sTUFBQUEsWUFBWSxFQUFFLEVBSlQ7QUFLTEMsTUFBQUEsUUFBUSxFQUFFO0FBTEwsS0FESztBQVFkZCxJQUFBQSxTQUFTLEVBQUU7QUFDUGUsTUFBQUEsTUFBTSxFQUFFLEVBREQ7QUFFUEMsTUFBQUEsVUFBVSxFQUFFO0FBRkwsS0FSRztBQVlkZixJQUFBQSxPQUFPLEVBQUU7QUFDTGdCLE1BQUFBLFFBQVEsRUFBRSxVQURMO0FBRUxGLE1BQUFBLE1BQU0sRUFBRSxFQUZIO0FBR0xHLE1BQUFBLGlCQUFpQixFQUFFLEVBSGQ7QUFJTEMsTUFBQUEsY0FBYyxFQUFFLGVBSlg7QUFLTEMsTUFBQUEsVUFBVSxFQUFFLFFBTFA7QUFNTEMsTUFBQUEsYUFBYSxFQUFFO0FBTlYsS0FaSztBQW9CZGpCLElBQUFBLEtBQUssRUFBRTtBQUNIYSxNQUFBQSxRQUFRLEVBQUUsVUFEUDtBQUVISyxNQUFBQSxJQUFJLEVBQUUsRUFGSDtBQUdIQyxNQUFBQSxLQUFLLEVBQUUsRUFISjtBQUlIQyxNQUFBQSxRQUFRLEVBQUUsRUFKUDtBQUtIQyxNQUFBQSxLQUFLLEVBQUVsQixZQUxKO0FBTUhtQixNQUFBQSxTQUFTLEVBQUU7QUFOUixLQXBCTztBQTRCZHZCLElBQUFBLElBQUksRUFBRTtBQUNGWSxNQUFBQSxNQUFNLEVBQUUsRUFETjtBQUVGWSxNQUFBQSxTQUFTLEVBQUVwQjtBQUZUO0FBNUJRLEdBQWxCLENBRGtCO0FBQUEsQ0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIFN0eWxlU2hlZXQsXG4gICAgU2FmZUFyZWFWaWV3LFxuICAgIFZpZXcsXG4gICAgVG91Y2hhYmxlV2l0aG91dEZlZWRiYWNrLFxufSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBMaWJyYXJ5XG5pbXBvcnQgeyBUZXh0LCBJY29uIH0gZnJvbSAnY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICd1dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xuICAgIHRpdGxlOiBSZWFjdC5SZWFjdE5vZGUgfCBzdHJpbmc7XG4gICAgdGhlbWU/OiAnd2hpdGUnIHwgJ3ByaW1hcnknO1xuICAgIG9uUHJlc3NCYWNrPzogKCkgPT4gdm9pZDtcbiAgICBvblByZXNzQ2xvc2U/OiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBIZWFkZXIgPSAocHJvcHM6IEhlYWRlclByb3BzKSA9PiB7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2VuZXJhdGVUaGVtZShcbiAgICAgICAgQ29sb3JzW3Byb3BzLnRoZW1lID09PSAnd2hpdGUnID8gJ3doaXRlJyA6ICdwcmltYXJ5J10sXG4gICAgICAgIENvbG9yc1twcm9wcy50aGVtZSA9PT0gJ3doaXRlJyA/ICduZXV0cmFsJyA6ICd3aGl0ZSddLFxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2FmZUFyZWFWaWV3IHN0eWxlPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICAgICAgeyEhcHJvcHMub25QcmVzc0JhY2sgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvdWNoYWJsZVdpdGhvdXRGZWVkYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJlc3M9e3Byb3BzLm9uUHJlc3NCYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcHJvcHMub25QcmVzc0JhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJhcnJvd0JhY2tcIiBzdHlsZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub3VjaGFibGVXaXRob3V0RmVlZGJhY2s+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGl0bGV9IHR5cGU9XCJib2xkXCIgbnVtYmVyT2ZMaW5lcz17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgeyEhcHJvcHMub25QcmVzc0Nsb3NlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb3VjaGFibGVXaXRob3V0RmVlZGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblByZXNzPXtwcm9wcy5vblByZXNzQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFwcm9wcy5vblByZXNzQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjbG9zZVwiIHN0eWxlPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RvdWNoYWJsZVdpdGhvdXRGZWVkYmFjaz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvU2FmZUFyZWFWaWV3PlxuICAgICk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVRoZW1lID0gKHByaW5jaXBhbENvbG9yOiBzdHJpbmcsIGNvbnRlbnRDb2xvcjogc3RyaW5nKSA9PlxuICAgIFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICAgICAgd3JhcHBlcjoge1xuICAgICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogMTYsXG4gICAgICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogMTYsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW5jaXBhbENvbG9yLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAyNSxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogMTUsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgIHBhZGRpbmdIb3Jpem9udGFsOiAxNSxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBsZWZ0OiA0NSxcbiAgICAgICAgICAgIHJpZ2h0OiA0NSxcbiAgICAgICAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgICAgICAgIGNvbG9yOiBjb250ZW50Q29sb3IsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICB9LFxuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2LFxuICAgICAgICAgICAgdGludENvbG9yOiBjb250ZW50Q29sb3IsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbmV4cG9ydCB7IEhlYWRlciB9O1xuIl19