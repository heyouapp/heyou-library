"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _utils = require("../../utils");

var _index = require("./index");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Tag = function Tag(props) {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      pressed = _React$useState2[0],
      setPressed = _React$useState2[1];

  return <_reactNative.TouchableHighlight activeOpacity={1} onPress={props.onPress} disabled={!props.onPress} onHideUnderlay={function () {
    return setPressed(false);
  }} onShowUnderlay={function () {
    return setPressed(true);
  }} underlayColor={_utils.Colors.primary} style={[styles.tag, props.active ? styles.tag_active : null, props.style]}>
            <_reactNative.View style={styles.content}>
                <_index.Text style={[styles.text, props.active || pressed ? styles.text_active : null]} small>
                    {props.children}
                </_index.Text>
                {props["delete"] && <_index.Icon name="close" color={_utils.Colors[props.active || pressed ? 'white' : 'primary']} style={styles.icon} />}
            </_reactNative.View>
        </_reactNative.TouchableHighlight>;
};

exports.Tag = Tag;

var styles = _reactNative.StyleSheet.create({
  tag: {
    borderWidth: 1,
    borderColor: _utils.Colors.primary,
    borderRadius: 15,
    backgroundColor: _utils.Colors.white,
    height: 30,
    margin: 3.75,
    alignSelf: 'flex-start'
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  tag_active: {
    backgroundColor: _utils.Colors.primary
  },
  text: {
    paddingHorizontal: 15,
    color: _utils.Colors.primary
  },
  text_active: {
    color: _utils.Colors.white
  },
  icon: {
    height: 10,
    width: 10,
    marginRight: 10
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvcmUvVGFnLnRzeCJdLCJuYW1lcyI6WyJUYWciLCJwcm9wcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJwcmVzc2VkIiwic2V0UHJlc3NlZCIsIm9uUHJlc3MiLCJDb2xvcnMiLCJwcmltYXJ5Iiwic3R5bGVzIiwidGFnIiwiYWN0aXZlIiwidGFnX2FjdGl2ZSIsInN0eWxlIiwiY29udGVudCIsInRleHQiLCJ0ZXh0X2FjdGl2ZSIsImNoaWxkcmVuIiwiaWNvbiIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJib3JkZXJXaWR0aCIsImJvcmRlckNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwid2hpdGUiLCJoZWlnaHQiLCJtYXJnaW4iLCJhbGlnblNlbGYiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJwYWRkaW5nSG9yaXpvbnRhbCIsImNvbG9yIiwid2lkdGgiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBU0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBTUEsR0FBdUIsR0FBRyxTQUExQkEsR0FBMEIsQ0FBQUMsS0FBSyxFQUFJO0FBQUEsd0JBQ1BDLEtBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FETztBQUFBO0FBQUEsTUFDOUJDLE9BRDhCO0FBQUEsTUFDckJDLFVBRHFCOztBQUdyQyxTQUNJLGlDQUNJLGNBQWMsQ0FBQyxDQUFELENBRGxCLENBRUksUUFBUSxDQUFDSixLQUFLLENBQUNLLE9BQVAsQ0FGWixDQUdJLFNBQVMsQ0FBQyxDQUFDTCxLQUFLLENBQUNLLE9BQVIsQ0FIYixDQUlJLGVBQWUsQ0FBQztBQUFBLFdBQU1ELFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsR0FBRCxDQUpuQixDQUtJLGVBQWUsQ0FBQztBQUFBLFdBQU1BLFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUEsR0FBRCxDQUxuQixDQU1JLGNBQWMsQ0FBQ0UsY0FBT0MsT0FBUixDQU5sQixDQU9JLE1BQU0sQ0FBQyxDQUNIQyxNQUFNLENBQUNDLEdBREosRUFFSFQsS0FBSyxDQUFDVSxNQUFOLEdBQWVGLE1BQU0sQ0FBQ0csVUFBdEIsR0FBbUMsSUFGaEMsRUFHSFgsS0FBSyxDQUFDWSxLQUhILENBQUQsQ0FQVjtZQWFJLG1CQUFNLE1BQU0sQ0FBQ0osTUFBTSxDQUFDSyxPQUFSLENBQVo7Z0JBQ0ksYUFDSSxNQUFNLENBQUMsQ0FDSEwsTUFBTSxDQUFDTSxJQURKLEVBRUhkLEtBQUssQ0FBQ1UsTUFBTixJQUFnQlAsT0FBaEIsR0FBMEJLLE1BQU0sQ0FBQ08sV0FBakMsR0FBK0MsSUFGNUMsQ0FBRCxDQURWLENBS0ksS0FMSjtvQkFPSSxDQUFDZixLQUFLLENBQUNnQixRQUFQO2dCQUNKO2dCQUNBLENBQUNoQixLQUFLLFVBQUwsSUFDRyxhQUNJLEtBQUssT0FEVCxDQUVJLE1BQU0sQ0FDRk0sY0FDSU4sS0FBSyxDQUFDVSxNQUFOLElBQWdCUCxPQUFoQixHQUEwQixPQUExQixHQUFvQyxTQUR4QyxDQURFLENBRlYsQ0FPSSxNQUFNLENBQUNLLE1BQU0sQ0FBQ1MsSUFBUixDQVBWLEdBREo7WUFXSjtRQUNKLGtDQXBDSjtBQXNDSCxDQXpDRDs7OztBQTJDQSxJQUFNVCxNQUFNLEdBQUdVLHdCQUFXQyxNQUFYLENBQWtCO0FBQzdCVixFQUFBQSxHQUFHLEVBQUU7QUFDRFcsSUFBQUEsV0FBVyxFQUFFLENBRFo7QUFFREMsSUFBQUEsV0FBVyxFQUFFZixjQUFPQyxPQUZuQjtBQUdEZSxJQUFBQSxZQUFZLEVBQUUsRUFIYjtBQUlEQyxJQUFBQSxlQUFlLEVBQUVqQixjQUFPa0IsS0FKdkI7QUFLREMsSUFBQUEsTUFBTSxFQUFFLEVBTFA7QUFNREMsSUFBQUEsTUFBTSxFQUFFLElBTlA7QUFPREMsSUFBQUEsU0FBUyxFQUFFO0FBUFYsR0FEd0I7QUFVN0JkLEVBQUFBLE9BQU8sRUFBRTtBQUNMZSxJQUFBQSxVQUFVLEVBQUUsUUFEUDtBQUVMQyxJQUFBQSxhQUFhLEVBQUUsS0FGVjtBQUdMQyxJQUFBQSxJQUFJLEVBQUU7QUFIRCxHQVZvQjtBQWU3Qm5CLEVBQUFBLFVBQVUsRUFBRTtBQUNSWSxJQUFBQSxlQUFlLEVBQUVqQixjQUFPQztBQURoQixHQWZpQjtBQWtCN0JPLEVBQUFBLElBQUksRUFBRTtBQUNGaUIsSUFBQUEsaUJBQWlCLEVBQUUsRUFEakI7QUFFRkMsSUFBQUEsS0FBSyxFQUFFMUIsY0FBT0M7QUFGWixHQWxCdUI7QUFzQjdCUSxFQUFBQSxXQUFXLEVBQUU7QUFDVGlCLElBQUFBLEtBQUssRUFBRTFCLGNBQU9rQjtBQURMLEdBdEJnQjtBQXlCN0JQLEVBQUFBLElBQUksRUFBRTtBQUNGUSxJQUFBQSxNQUFNLEVBQUUsRUFETjtBQUVGUSxJQUFBQSxLQUFLLEVBQUUsRUFGTDtBQUdGQyxJQUFBQSxXQUFXLEVBQUU7QUFIWDtBQXpCdUIsQ0FBbEIsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gICAgU3R5bGVTaGVldCxcbiAgICBTdHlsZVByb3AsXG4gICAgVmlld1N0eWxlLFxuICAgIFZpZXcsXG4gICAgVG91Y2hhYmxlSGlnaGxpZ2h0LFxufSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBMaWJyYXJ5XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICd1dGlscyc7XG5pbXBvcnQgeyBUZXh0LCBJY29uIH0gZnJvbSAnY29tcG9uZW50cy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUYWdQcm9wcyB7XG4gICAgY2hpbGRyZW46IHN0cmluZztcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIGRlbGV0ZT86IGJvb2xlYW47XG4gICAgb25QcmVzcz86ICgpID0+IHZvaWQ7XG4gICAgc3R5bGU/OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcbn1cblxuY29uc3QgVGFnOiBSZWFjdC5GQzxUYWdQcm9wcz4gPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgW3ByZXNzZWQsIHNldFByZXNzZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRvdWNoYWJsZUhpZ2hsaWdodFxuICAgICAgICAgICAgYWN0aXZlT3BhY2l0eT17MX1cbiAgICAgICAgICAgIG9uUHJlc3M9e3Byb3BzLm9uUHJlc3N9XG4gICAgICAgICAgICBkaXNhYmxlZD17IXByb3BzLm9uUHJlc3N9XG4gICAgICAgICAgICBvbkhpZGVVbmRlcmxheT17KCkgPT4gc2V0UHJlc3NlZChmYWxzZSl9XG4gICAgICAgICAgICBvblNob3dVbmRlcmxheT17KCkgPT4gc2V0UHJlc3NlZCh0cnVlKX1cbiAgICAgICAgICAgIHVuZGVybGF5Q29sb3I9e0NvbG9ycy5wcmltYXJ5fVxuICAgICAgICAgICAgc3R5bGU9e1tcbiAgICAgICAgICAgICAgICBzdHlsZXMudGFnLFxuICAgICAgICAgICAgICAgIHByb3BzLmFjdGl2ZSA/IHN0eWxlcy50YWdfYWN0aXZlIDogbnVsbCxcbiAgICAgICAgICAgICAgICBwcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIF19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy50ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuYWN0aXZlIHx8IHByZXNzZWQgPyBzdHlsZXMudGV4dF9hY3RpdmUgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICB7cHJvcHMuZGVsZXRlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3JzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5hY3RpdmUgfHwgcHJlc3NlZCA/ICd3aGl0ZScgOiAncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmljb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9Ub3VjaGFibGVIaWdobGlnaHQ+XG4gICAgKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICB0YWc6IHtcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgIGJvcmRlckNvbG9yOiBDb2xvcnMucHJpbWFyeSxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxNSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDb2xvcnMud2hpdGUsXG4gICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgIG1hcmdpbjogMy43NSxcbiAgICAgICAgYWxpZ25TZWxmOiAnZmxleC1zdGFydCcsXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgZmxleDogMSxcbiAgICB9LFxuICAgIHRhZ19hY3RpdmU6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDb2xvcnMucHJpbWFyeSxcbiAgICB9LFxuICAgIHRleHQ6IHtcbiAgICAgICAgcGFkZGluZ0hvcml6b250YWw6IDE1LFxuICAgICAgICBjb2xvcjogQ29sb3JzLnByaW1hcnksXG4gICAgfSxcbiAgICB0ZXh0X2FjdGl2ZToge1xuICAgICAgICBjb2xvcjogQ29sb3JzLndoaXRlLFxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgICBoZWlnaHQ6IDEwLFxuICAgICAgICB3aWR0aDogMTAsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICB9LFxufSk7XG5cbmV4cG9ydCB7IFRhZyB9O1xuIl19