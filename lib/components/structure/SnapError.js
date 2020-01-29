"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SnapError = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _core = require("../core");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Library
var SnapError = function SnapError(props) {
  return <_reactNative.SafeAreaView style={styles.container}>
        <_reactNative.View style={styles.content}>
            <_core.Text type="semibold" style={styles.text}>
                {props.message}
            </_core.Text>
            <_core.Button type="secondary" position="end" small onPress={props.onClose} style={styles.button}>
                {props.closeText || 'OK'}
            </_core.Button>
        </_reactNative.View>
    </_reactNative.SafeAreaView>;
};

exports.SnapError = SnapError;

var styles = _reactNative.StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: _utils.Colors.error,
    zIndex: 10
  },
  content: {
    padding: 15
  },
  text: {
    marginBottom: 10,
    color: _utils.Colors.white
  },
  button: {
    borderColor: 'transparent'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3N0cnVjdHVyZS9TbmFwRXJyb3IudHN4Il0sIm5hbWVzIjpbIlNuYXBFcnJvciIsInByb3BzIiwic3R5bGVzIiwiY29udGFpbmVyIiwiY29udGVudCIsInRleHQiLCJtZXNzYWdlIiwib25DbG9zZSIsImJ1dHRvbiIsImNsb3NlVGV4dCIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJyaWdodCIsImJhY2tncm91bmRDb2xvciIsIkNvbG9ycyIsImVycm9yIiwiekluZGV4IiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwid2hpdGUiLCJib3JkZXJDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7O0FBQ0E7Ozs7OztBQUZBO0FBVUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFNBQ2QsMkJBQWMsTUFBTSxDQUFDQyxNQUFNLENBQUNDLFNBQVIsQ0FBcEI7UUFDSSxtQkFBTSxNQUFNLENBQUNELE1BQU0sQ0FBQ0UsT0FBUixDQUFaO1lBQ0ksWUFBTSxLQUFLLFVBQVgsQ0FBc0IsTUFBTSxDQUFDRixNQUFNLENBQUNHLElBQVIsQ0FBNUI7Z0JBQ0ksQ0FBQ0osS0FBSyxDQUFDSyxPQUFQO1lBQ0o7WUFDQSxjQUNJLEtBQUssV0FEVCxDQUVJLFNBQVMsS0FGYixDQUdJLEtBSEosQ0FJSSxRQUFRLENBQUNMLEtBQUssQ0FBQ00sT0FBUCxDQUpaLENBS0ksTUFBTSxDQUFDTCxNQUFNLENBQUNNLE1BQVIsQ0FMVjtnQkFPSSxDQUFDUCxLQUFLLENBQUNRLFNBQU4sSUFBbUIsSUFBcEI7WUFDSjtRQUNKO0lBQ0osNEJBaEJjO0FBQUEsQ0FBbEI7Ozs7QUFtQkEsSUFBTVAsTUFBTSxHQUFHUSx3QkFBV0MsTUFBWCxDQUFrQjtBQUM3QlIsRUFBQUEsU0FBUyxFQUFFO0FBQ1BTLElBQUFBLFFBQVEsRUFBRSxVQURIO0FBRVBDLElBQUFBLEdBQUcsRUFBRSxDQUZFO0FBR1BDLElBQUFBLElBQUksRUFBRSxDQUhDO0FBSVBDLElBQUFBLEtBQUssRUFBRSxDQUpBO0FBS1BDLElBQUFBLGVBQWUsRUFBRUMsY0FBT0MsS0FMakI7QUFNUEMsSUFBQUEsTUFBTSxFQUFFO0FBTkQsR0FEa0I7QUFTN0JmLEVBQUFBLE9BQU8sRUFBRTtBQUNMZ0IsSUFBQUEsT0FBTyxFQUFFO0FBREosR0FUb0I7QUFZN0JmLEVBQUFBLElBQUksRUFBRTtBQUNGZ0IsSUFBQUEsWUFBWSxFQUFFLEVBRFo7QUFFRkMsSUFBQUEsS0FBSyxFQUFFTCxjQUFPTTtBQUZaLEdBWnVCO0FBZ0I3QmYsRUFBQUEsTUFBTSxFQUFFO0FBQ0pnQixJQUFBQSxXQUFXLEVBQUU7QUFEVDtBQWhCcUIsQ0FBbEIsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIFNhZmVBcmVhVmlldywgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbi8vIExpYnJhcnlcbmltcG9ydCB7IFRleHQsIEJ1dHRvbiB9IGZyb20gJ2NvbXBvbmVudHMvY29yZSc7XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICd1dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU25hcEVycm9yUHJvcHMge1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBjbG9zZVRleHQ/OiBzdHJpbmc7XG4gICAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgU25hcEVycm9yID0gKHByb3BzOiBTbmFwRXJyb3JQcm9wcykgPT4gKFxuICAgIDxTYWZlQXJlYVZpZXcgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgICAgPFRleHQgdHlwZT1cInNlbWlib2xkXCIgc3R5bGU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgICAgICB7cHJvcHMubWVzc2FnZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImVuZFwiXG4gICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICBvblByZXNzPXtwcm9wcy5vbkNsb3NlfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jbG9zZVRleHQgfHwgJ09LJ31cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1ZpZXc+XG4gICAgPC9TYWZlQXJlYVZpZXc+XG4pO1xuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENvbG9ycy5lcnJvcixcbiAgICAgICAgekluZGV4OiAxMCxcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgcGFkZGluZzogMTUsXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgICAgIGNvbG9yOiBDb2xvcnMud2hpdGUsXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgeyBTbmFwRXJyb3IgfTtcbiJdfQ==