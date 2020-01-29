"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.InputInnerStyle = exports.InputStyle = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Text = require("./Text");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputStyle = _objectSpread({
  borderWidth: 2,
  borderColor: 'transparent',
  borderRadius: 12,
  backgroundColor: _utils.Colors.white
}, _utils.Shadows.secondary);

exports.InputStyle = InputStyle;

var InputInnerStyle = _objectSpread({
  height: '100%',
  width: '100%',
  paddingHorizontal: 15,
  color: _utils.Colors.greyDark
}, _Text.TextStyle);

exports.InputInnerStyle = InputInnerStyle;

var Input = function Input(props) {
  return <_reactNative.View style={props.style}>
        {props.label && <_Text.Text style={styles.label}>{props.label}</_Text.Text>}
        <_reactNative.View style={[InputStyle, props.error ? styles.input_error : null]}>
            <_reactNative.TextInput {...props} children={undefined} underlineColorAndroid="rgba(0, 0, 0, 0)" placeholderTextColor={_utils.Colors.neutralLight} style={[InputInnerStyle, props.multiline ? styles.input_multiline : styles.input]} />
            {props.children}
        </_reactNative.View>
        {props.maxLength !== undefined && <_Text.Text style={styles.counter} small>
                {props.value && props.value.length || 0}/{props.maxLength}
            </_Text.Text>}
        <_Text.Text style={styles.error} small>
            {props.error}
        </_Text.Text>
    </_reactNative.View>;
};

exports.Input = Input;

var styles = _reactNative.StyleSheet.create({
  label: {
    marginBottom: 7.5
  },
  counter: {
    marginTop: 5,
    color: _utils.Colors.neutralLight,
    alignSelf: 'flex-end'
  },
  error: {
    marginTop: 7.5,
    color: _utils.Colors.error,
    textTransform: 'uppercase'
  },
  input: {
    height: 45
  },
  input_multiline: {
    height: 90,
    paddingVertical: 15
  },
  input_error: {
    borderColor: _utils.Colors.error
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvcmUvSW5wdXQudHN4Il0sIm5hbWVzIjpbIklucHV0U3R5bGUiLCJib3JkZXJXaWR0aCIsImJvcmRlckNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiQ29sb3JzIiwid2hpdGUiLCJTaGFkb3dzIiwic2Vjb25kYXJ5IiwiSW5wdXRJbm5lclN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYWRkaW5nSG9yaXpvbnRhbCIsImNvbG9yIiwiZ3JleURhcmsiLCJUZXh0U3R5bGUiLCJJbnB1dCIsInByb3BzIiwic3R5bGUiLCJsYWJlbCIsInN0eWxlcyIsImVycm9yIiwiaW5wdXRfZXJyb3IiLCJ1bmRlZmluZWQiLCJuZXV0cmFsTGlnaHQiLCJtdWx0aWxpbmUiLCJpbnB1dF9tdWx0aWxpbmUiLCJpbnB1dCIsImNoaWxkcmVuIiwibWF4TGVuZ3RoIiwiY291bnRlciIsInZhbHVlIiwibGVuZ3RoIiwiU3R5bGVTaGVldCIsImNyZWF0ZSIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsImFsaWduU2VsZiIsInRleHRUcmFuc2Zvcm0iLCJwYWRkaW5nVmVydGljYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUdBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFRTyxJQUFNQSxVQUFVO0FBQ25CQyxFQUFBQSxXQUFXLEVBQUUsQ0FETTtBQUVuQkMsRUFBQUEsV0FBVyxFQUFFLGFBRk07QUFHbkJDLEVBQUFBLFlBQVksRUFBRSxFQUhLO0FBSW5CQyxFQUFBQSxlQUFlLEVBQUVDLGNBQU9DO0FBSkwsR0FLaEJDLGVBQVFDLFNBTFEsQ0FBaEI7Ozs7QUFRQSxJQUFNQyxlQUFlO0FBQ3hCQyxFQUFBQSxNQUFNLEVBQUUsTUFEZ0I7QUFFeEJDLEVBQUFBLEtBQUssRUFBRSxNQUZpQjtBQUd4QkMsRUFBQUEsaUJBQWlCLEVBQUUsRUFISztBQUl4QkMsRUFBQUEsS0FBSyxFQUFFUixjQUFPUztBQUpVLEdBS3JCQyxlQUxxQixDQUFyQjs7OztBQVFQLElBQU1DLEtBQTJCLEdBQUcsU0FBOUJBLEtBQThCLENBQUFDLEtBQUs7QUFBQSxTQUNyQyxtQkFBTSxNQUFNLENBQUNBLEtBQUssQ0FBQ0MsS0FBUCxDQUFaO1FBQ0ksQ0FBQ0QsS0FBSyxDQUFDRSxLQUFOLElBQWUsWUFBTSxNQUFNLENBQUNDLE1BQU0sQ0FBQ0QsS0FBUixDQUFaLENBQTJCLENBQUNGLEtBQUssQ0FBQ0UsS0FBUCxDQUFhLGFBQXhEO1FBQ0EsbUJBQU0sTUFBTSxDQUFDLENBQUNuQixVQUFELEVBQWFpQixLQUFLLENBQUNJLEtBQU4sR0FBY0QsTUFBTSxDQUFDRSxXQUFyQixHQUFtQyxJQUFoRCxDQUFELENBQVo7WUFDSSx3QkFDSSxJQUFJTCxLQUFKLENBREosQ0FFSSxTQUFTLENBQUNNLFNBQUQsQ0FGYixDQUdJLHNCQUFzQixrQkFIMUIsQ0FJSSxxQkFBcUIsQ0FBQ2xCLGNBQU9tQixZQUFSLENBSnpCLENBS0ksTUFBTSxDQUFDLENBQ0hmLGVBREcsRUFFSFEsS0FBSyxDQUFDUSxTQUFOLEdBQWtCTCxNQUFNLENBQUNNLGVBQXpCLEdBQTJDTixNQUFNLENBQUNPLEtBRi9DLENBQUQsQ0FMVjtZQVVBLENBQUNWLEtBQUssQ0FBQ1csUUFBUDtRQUNKO1FBQ0EsQ0FBQ1gsS0FBSyxDQUFDWSxTQUFOLEtBQW9CTixTQUFwQixJQUNHLFlBQU0sTUFBTSxDQUFDSCxNQUFNLENBQUNVLE9BQVIsQ0FBWixDQUE2QixLQUE3QjtnQkFDSSxDQUFFYixLQUFLLENBQUNjLEtBQU4sSUFBZWQsS0FBSyxDQUFDYyxLQUFOLENBQVlDLE1BQTVCLElBQXVDLENBQXhDLENBQTBDLENBQUMsQ0FBQ2YsS0FBSyxDQUFDWSxTQUFQO1lBQy9DLGFBSEo7UUFLQSxZQUFNLE1BQU0sQ0FBQ1QsTUFBTSxDQUFDQyxLQUFSLENBQVosQ0FBMkIsS0FBM0I7WUFDSSxDQUFDSixLQUFLLENBQUNJLEtBQVA7UUFDSjtJQUNKLG9CQXhCcUM7QUFBQSxDQUF6Qzs7OztBQTJCQSxJQUFNRCxNQUFNLEdBQUdhLHdCQUFXQyxNQUFYLENBQWtCO0FBQzdCZixFQUFBQSxLQUFLLEVBQUU7QUFDSGdCLElBQUFBLFlBQVksRUFBRTtBQURYLEdBRHNCO0FBSTdCTCxFQUFBQSxPQUFPLEVBQUU7QUFDTE0sSUFBQUEsU0FBUyxFQUFFLENBRE47QUFFTHZCLElBQUFBLEtBQUssRUFBRVIsY0FBT21CLFlBRlQ7QUFHTGEsSUFBQUEsU0FBUyxFQUFFO0FBSE4sR0FKb0I7QUFTN0JoQixFQUFBQSxLQUFLLEVBQUU7QUFDSGUsSUFBQUEsU0FBUyxFQUFFLEdBRFI7QUFFSHZCLElBQUFBLEtBQUssRUFBRVIsY0FBT2dCLEtBRlg7QUFHSGlCLElBQUFBLGFBQWEsRUFBRTtBQUhaLEdBVHNCO0FBYzdCWCxFQUFBQSxLQUFLLEVBQUU7QUFDSGpCLElBQUFBLE1BQU0sRUFBRTtBQURMLEdBZHNCO0FBaUI3QmdCLEVBQUFBLGVBQWUsRUFBRTtBQUNiaEIsSUFBQUEsTUFBTSxFQUFFLEVBREs7QUFFYjZCLElBQUFBLGVBQWUsRUFBRTtBQUZKLEdBakJZO0FBcUI3QmpCLEVBQUFBLFdBQVcsRUFBRTtBQUNUcEIsSUFBQUEsV0FBVyxFQUFFRyxjQUFPZ0I7QUFEWDtBQXJCZ0IsQ0FBbEIsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIFZpZXcsIFRleHRJbnB1dCwgVGV4dElucHV0UHJvcHMgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBMaWJyYXJ5XG5pbXBvcnQgeyBUZXh0LCBUZXh0U3R5bGUgfSBmcm9tICcuL1RleHQnO1xuaW1wb3J0IHsgQ29sb3JzLCBTaGFkb3dzIH0gZnJvbSAndXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJvcHMgZXh0ZW5kcyBUZXh0SW5wdXRQcm9wcyB7XG4gICAgbGFiZWw/OiBzdHJpbmc7XG4gICAgdXBwZXJjYXNlPzogYm9vbGVhbjtcbiAgICBlcnJvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IElucHV0U3R5bGUgPSB7XG4gICAgYm9yZGVyV2lkdGg6IDIsXG4gICAgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgYm9yZGVyUmFkaXVzOiAxMixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IENvbG9ycy53aGl0ZSxcbiAgICAuLi5TaGFkb3dzLnNlY29uZGFyeSxcbn07XG5cbmV4cG9ydCBjb25zdCBJbnB1dElubmVyU3R5bGUgPSB7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwYWRkaW5nSG9yaXpvbnRhbDogMTUsXG4gICAgY29sb3I6IENvbG9ycy5ncmV5RGFyayxcbiAgICAuLi5UZXh0U3R5bGUsXG59O1xuXG5jb25zdCBJbnB1dDogUmVhY3QuRkM8SW5wdXRQcm9wcz4gPSBwcm9wcyA9PiAoXG4gICAgPFZpZXcgc3R5bGU9e3Byb3BzLnN0eWxlfT5cbiAgICAgICAge3Byb3BzLmxhYmVsICYmIDxUZXh0IHN0eWxlPXtzdHlsZXMubGFiZWx9Pntwcm9wcy5sYWJlbH08L1RleHQ+fVxuICAgICAgICA8VmlldyBzdHlsZT17W0lucHV0U3R5bGUsIHByb3BzLmVycm9yID8gc3R5bGVzLmlucHV0X2Vycm9yIDogbnVsbF19PlxuICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICBjaGlsZHJlbj17dW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgIHVuZGVybGluZUNvbG9yQW5kcm9pZD1cInJnYmEoMCwgMCwgMCwgMClcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dENvbG9yPXtDb2xvcnMubmV1dHJhbExpZ2h0fVxuICAgICAgICAgICAgICAgIHN0eWxlPXtbXG4gICAgICAgICAgICAgICAgICAgIElucHV0SW5uZXJTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMubXVsdGlsaW5lID8gc3R5bGVzLmlucHV0X211bHRpbGluZSA6IHN0eWxlcy5pbnB1dCxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9WaWV3PlxuICAgICAgICB7cHJvcHMubWF4TGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgKFxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5jb3VudGVyfSBzbWFsbD5cbiAgICAgICAgICAgICAgICB7KHByb3BzLnZhbHVlICYmIHByb3BzLnZhbHVlLmxlbmd0aCkgfHwgMH0ve3Byb3BzLm1heExlbmd0aH1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5lcnJvcn0gc21hbGw+XG4gICAgICAgICAgICB7cHJvcHMuZXJyb3J9XG4gICAgICAgIDwvVGV4dD5cbiAgICA8L1ZpZXc+XG4pO1xuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gICAgbGFiZWw6IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiA3LjUsXG4gICAgfSxcbiAgICBjb3VudGVyOiB7XG4gICAgICAgIG1hcmdpblRvcDogNSxcbiAgICAgICAgY29sb3I6IENvbG9ycy5uZXV0cmFsTGlnaHQsXG4gICAgICAgIGFsaWduU2VsZjogJ2ZsZXgtZW5kJyxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICAgIG1hcmdpblRvcDogNy41LFxuICAgICAgICBjb2xvcjogQ29sb3JzLmVycm9yLFxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICAgIGhlaWdodDogNDUsXG4gICAgfSxcbiAgICBpbnB1dF9tdWx0aWxpbmU6IHtcbiAgICAgICAgaGVpZ2h0OiA5MCxcbiAgICAgICAgcGFkZGluZ1ZlcnRpY2FsOiAxNSxcbiAgICB9LFxuICAgIGlucHV0X2Vycm9yOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiBDb2xvcnMuZXJyb3IsXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgeyBJbnB1dCB9O1xuIl19