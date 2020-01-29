"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.TextStyle = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Library
var TextStyle = {
  fontSize: 14,
  color: _utils.Colors.neutral,
  letterSpacing: 1
};
exports.TextStyle = TextStyle;

var Text = function Text(props) {
  return <_reactNative.Text {...props} {...{
    small: undefined,
    type: undefined,
    uppercase: undefined
  }} style={[TextStyle, styles.text, styles[props.type || 'regular'], props.small ? styles.small : null, props.uppercase ? styles.uppercase : null, props.style]} />;
};

exports.Text = Text;

var styles = _reactNative.StyleSheet.create({
  text: {
    lineHeight: 22
  },
  small: {
    fontSize: 12,
    lineHeight: 18
  },
  uppercase: {
    textTransform: 'uppercase'
  },
  regular: {
    fontWeight: '300'
  },
  semibold: {
    fontWeight: '600'
  },
  bold: {
    fontWeight: '700'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvcmUvVGV4dC50c3giXSwibmFtZXMiOlsiVGV4dFN0eWxlIiwiZm9udFNpemUiLCJjb2xvciIsIkNvbG9ycyIsIm5ldXRyYWwiLCJsZXR0ZXJTcGFjaW5nIiwiVGV4dCIsInByb3BzIiwic21hbGwiLCJ1bmRlZmluZWQiLCJ0eXBlIiwidXBwZXJjYXNlIiwic3R5bGVzIiwidGV4dCIsInN0eWxlIiwiU3R5bGVTaGVldCIsImNyZWF0ZSIsImxpbmVIZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwicmVndWxhciIsImZvbnRXZWlnaHQiLCJzZW1pYm9sZCIsImJvbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQU9BOzs7Ozs7QUFEQTtBQVNPLElBQU1BLFNBQVMsR0FBRztBQUNyQkMsRUFBQUEsUUFBUSxFQUFFLEVBRFc7QUFFckJDLEVBQUFBLEtBQUssRUFBRUMsY0FBT0MsT0FGTztBQUdyQkMsRUFBQUEsYUFBYSxFQUFFO0FBSE0sQ0FBbEI7OztBQU1QLElBQU1DLElBQXlCLEdBQUcsU0FBNUJBLElBQTRCLENBQUFDLEtBQUs7QUFBQSxTQUNuQyxtQkFDSSxJQUFJQSxLQUFKLENBREosQ0FFSSxJQUFJO0FBQUVDLElBQUFBLEtBQUssRUFBRUMsU0FBVDtBQUFvQkMsSUFBQUEsSUFBSSxFQUFFRCxTQUExQjtBQUFxQ0UsSUFBQUEsU0FBUyxFQUFFRjtBQUFoRCxHQUFKLENBRkosQ0FHSSxNQUFNLENBQUMsQ0FDSFQsU0FERyxFQUVIWSxNQUFNLENBQUNDLElBRkosRUFHSEQsTUFBTSxDQUFDTCxLQUFLLENBQUNHLElBQU4sSUFBYyxTQUFmLENBSEgsRUFJSEgsS0FBSyxDQUFDQyxLQUFOLEdBQWNJLE1BQU0sQ0FBQ0osS0FBckIsR0FBNkIsSUFKMUIsRUFLSEQsS0FBSyxDQUFDSSxTQUFOLEdBQWtCQyxNQUFNLENBQUNELFNBQXpCLEdBQXFDLElBTGxDLEVBTUhKLEtBQUssQ0FBQ08sS0FOSCxDQUFELENBSFYsR0FEbUM7QUFBQSxDQUF2Qzs7OztBQWVBLElBQU1GLE1BQU0sR0FBR0csd0JBQVdDLE1BQVgsQ0FBa0I7QUFDN0JILEVBQUFBLElBQUksRUFBRTtBQUNGSSxJQUFBQSxVQUFVLEVBQUU7QUFEVixHQUR1QjtBQUk3QlQsRUFBQUEsS0FBSyxFQUFFO0FBQ0hQLElBQUFBLFFBQVEsRUFBRSxFQURQO0FBRUhnQixJQUFBQSxVQUFVLEVBQUU7QUFGVCxHQUpzQjtBQVE3Qk4sRUFBQUEsU0FBUyxFQUFFO0FBQ1BPLElBQUFBLGFBQWEsRUFBRTtBQURSLEdBUmtCO0FBVzdCQyxFQUFBQSxPQUFPLEVBQUU7QUFDTEMsSUFBQUEsVUFBVSxFQUFFO0FBRFAsR0FYb0I7QUFjN0JDLEVBQUFBLFFBQVEsRUFBRTtBQUNORCxJQUFBQSxVQUFVLEVBQUU7QUFETixHQWRtQjtBQWlCN0JFLEVBQUFBLElBQUksRUFBRTtBQUNGRixJQUFBQSxVQUFVLEVBQUU7QUFEVjtBQWpCdUIsQ0FBbEIsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gICAgU3R5bGVTaGVldCxcbiAgICBUZXh0IGFzIFJOVGV4dCxcbiAgICBUZXh0UHJvcHMgYXMgUk5UZXh0UHJvcHMsXG59IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbi8vIExpYnJhcnlcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gJ3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBUZXh0UHJvcHMgZXh0ZW5kcyBSTlRleHRQcm9wcyB7XG4gICAgdXBwZXJjYXNlPzogYm9vbGVhbjtcbiAgICB0eXBlPzogJ3JlZ3VsYXInIHwgJ3NlbWlib2xkJyB8ICdib2xkJztcbiAgICBzbWFsbD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBUZXh0U3R5bGUgPSB7XG4gICAgZm9udFNpemU6IDE0LFxuICAgIGNvbG9yOiBDb2xvcnMubmV1dHJhbCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAxLFxufTtcblxuY29uc3QgVGV4dDogUmVhY3QuRkM8VGV4dFByb3BzPiA9IHByb3BzID0+IChcbiAgICA8Uk5UZXh0XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgey4uLnsgc21hbGw6IHVuZGVmaW5lZCwgdHlwZTogdW5kZWZpbmVkLCB1cHBlcmNhc2U6IHVuZGVmaW5lZCB9fVxuICAgICAgICBzdHlsZT17W1xuICAgICAgICAgICAgVGV4dFN0eWxlLFxuICAgICAgICAgICAgc3R5bGVzLnRleHQsXG4gICAgICAgICAgICBzdHlsZXNbcHJvcHMudHlwZSB8fCAncmVndWxhciddLFxuICAgICAgICAgICAgcHJvcHMuc21hbGwgPyBzdHlsZXMuc21hbGwgOiBudWxsLFxuICAgICAgICAgICAgcHJvcHMudXBwZXJjYXNlID8gc3R5bGVzLnVwcGVyY2FzZSA6IG51bGwsXG4gICAgICAgICAgICBwcm9wcy5zdHlsZSxcbiAgICAgICAgXX1cbiAgICAvPlxuKTtcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICAgIHRleHQ6IHtcbiAgICAgICAgbGluZUhlaWdodDogMjIsXG4gICAgfSxcbiAgICBzbWFsbDoge1xuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDE4LFxuICAgIH0sXG4gICAgdXBwZXJjYXNlOiB7XG4gICAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIH0sXG4gICAgcmVndWxhcjoge1xuICAgICAgICBmb250V2VpZ2h0OiAnMzAwJyxcbiAgICB9LFxuICAgIHNlbWlib2xkOiB7XG4gICAgICAgIGZvbnRXZWlnaHQ6ICc2MDAnLFxuICAgIH0sXG4gICAgYm9sZDoge1xuICAgICAgICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgICB9LFxufSk7XG5cbmV4cG9ydCB7IFRleHQgfTtcbiJdfQ==