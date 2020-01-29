"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Selector = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _utils = require("../../utils");

var _Text = require("./Text");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Library
var Selector = function Selector(props) {
  if (!props.data) {
    return null;
  }

  return <_reactNative.View style={[styles.container, props.style]}>
            {props.data.map(function (item, index) {
      return <_reactNative.TouchableOpacity onPress={function () {
        return props.onChange && props.onChange(index);
      }} disabled={!props.onChange} style={[styles.tab, props.value === index ? styles.tab_active : null, index === 0 ? styles.tab_start : null, index === props.data.length - 1 ? styles.tab_end : null]} key={index.toString()} activeOpacity={0.7}>
                    <_Text.Text style={[styles.text, props.value === index ? styles.text_active : null]} type="bold" small>
                        {item}
                    </_Text.Text>
                </_reactNative.TouchableOpacity>;
    })}
        </_reactNative.View>;
};

exports.Selector = Selector;

var styles = _reactNative.StyleSheet.create({
  container: {
    height: 30,
    marginLeft: 1,
    flexDirection: 'row'
  },
  tab: {
    borderWidth: 1,
    borderColor: _utils.Colors.primary,
    marginLeft: -1,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  tab_start: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
  tab_end: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15
  },
  tab_active: {
    backgroundColor: _utils.Colors.primary
  },
  text: {
    color: _utils.Colors.primary
  },
  text_active: {
    color: _utils.Colors.white
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvcmUvU2VsZWN0b3IudHN4Il0sIm5hbWVzIjpbIlNlbGVjdG9yIiwicHJvcHMiLCJkYXRhIiwic3R5bGVzIiwiY29udGFpbmVyIiwic3R5bGUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJvbkNoYW5nZSIsInRhYiIsInZhbHVlIiwidGFiX2FjdGl2ZSIsInRhYl9zdGFydCIsImxlbmd0aCIsInRhYl9lbmQiLCJ0b1N0cmluZyIsInRleHQiLCJ0ZXh0X2FjdGl2ZSIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJoZWlnaHQiLCJtYXJnaW5MZWZ0IiwiZmxleERpcmVjdGlvbiIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJDb2xvcnMiLCJwcmltYXJ5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleCIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwid2hpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQVNBOztBQUNBOzs7Ozs7QUFGQTtBQVdBLElBQU1BLFFBQWlDLEdBQUcsU0FBcENBLFFBQW9DLENBQUFDLEtBQUssRUFBSTtBQUMvQyxNQUFJLENBQUNBLEtBQUssQ0FBQ0MsSUFBWCxFQUFpQjtBQUNiLFdBQU8sSUFBUDtBQUNIOztBQUVELFNBQ0ksbUJBQU0sTUFBTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUixFQUFtQkgsS0FBSyxDQUFDSSxLQUF6QixDQUFELENBQVo7WUFDSSxDQUFDSixLQUFLLENBQUNDLElBQU4sQ0FBV0ksR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBZUMsS0FBZjtBQUFBLGFBQ1osK0JBQ0ksUUFBUSxDQUFDO0FBQUEsZUFBTVAsS0FBSyxDQUFDUSxRQUFOLElBQWtCUixLQUFLLENBQUNRLFFBQU4sQ0FBZUQsS0FBZixDQUF4QjtBQUFBLE9BQUQsQ0FEWixDQUVJLFNBQVMsQ0FBQyxDQUFDUCxLQUFLLENBQUNRLFFBQVIsQ0FGYixDQUdJLE1BQU0sQ0FBQyxDQUNITixNQUFNLENBQUNPLEdBREosRUFFSFQsS0FBSyxDQUFDVSxLQUFOLEtBQWdCSCxLQUFoQixHQUF3QkwsTUFBTSxDQUFDUyxVQUEvQixHQUE0QyxJQUZ6QyxFQUdISixLQUFLLEtBQUssQ0FBVixHQUFjTCxNQUFNLENBQUNVLFNBQXJCLEdBQWlDLElBSDlCLEVBSUhMLEtBQUssS0FBS1AsS0FBSyxDQUFDQyxJQUFOLENBQVdZLE1BQVgsR0FBb0IsQ0FBOUIsR0FBa0NYLE1BQU0sQ0FBQ1ksT0FBekMsR0FBbUQsSUFKaEQsQ0FBRCxDQUhWLENBU0ksSUFBSSxDQUFDUCxLQUFLLENBQUNRLFFBQU4sRUFBRCxDQVRSLENBVUksY0FBYyxDQUFDLEdBQUQsQ0FWbEI7b0JBWUksWUFDSSxNQUFNLENBQUMsQ0FDSGIsTUFBTSxDQUFDYyxJQURKLEVBRUhoQixLQUFLLENBQUNVLEtBQU4sS0FBZ0JILEtBQWhCLEdBQXdCTCxNQUFNLENBQUNlLFdBQS9CLEdBQTZDLElBRjFDLENBQUQsQ0FEVixDQUtJLEtBQUssTUFMVCxDQU1JLEtBTko7d0JBUUksQ0FBQ1gsSUFBRDtvQkFDSjtnQkFDSixnQ0F2Qlk7QUFBQSxLQUFmLENBQUQ7UUF5Qkosb0JBM0JKO0FBNkJILENBbENEOzs7O0FBb0NBLElBQU1KLE1BQU0sR0FBR2dCLHdCQUFXQyxNQUFYLENBQWtCO0FBQzdCaEIsRUFBQUEsU0FBUyxFQUFFO0FBQ1BpQixJQUFBQSxNQUFNLEVBQUUsRUFERDtBQUVQQyxJQUFBQSxVQUFVLEVBQUUsQ0FGTDtBQUdQQyxJQUFBQSxhQUFhLEVBQUU7QUFIUixHQURrQjtBQU03QmIsRUFBQUEsR0FBRyxFQUFFO0FBQ0RjLElBQUFBLFdBQVcsRUFBRSxDQURaO0FBRURDLElBQUFBLFdBQVcsRUFBRUMsY0FBT0MsT0FGbkI7QUFHREwsSUFBQUEsVUFBVSxFQUFFLENBQUMsQ0FIWjtBQUlETSxJQUFBQSxVQUFVLEVBQUUsUUFKWDtBQUtEQyxJQUFBQSxjQUFjLEVBQUUsUUFMZjtBQU1EQyxJQUFBQSxJQUFJLEVBQUU7QUFOTCxHQU53QjtBQWM3QmpCLEVBQUFBLFNBQVMsRUFBRTtBQUNQa0IsSUFBQUEsbUJBQW1CLEVBQUUsRUFEZDtBQUVQQyxJQUFBQSxzQkFBc0IsRUFBRTtBQUZqQixHQWRrQjtBQWtCN0JqQixFQUFBQSxPQUFPLEVBQUU7QUFDTGtCLElBQUFBLG9CQUFvQixFQUFFLEVBRGpCO0FBRUxDLElBQUFBLHVCQUF1QixFQUFFO0FBRnBCLEdBbEJvQjtBQXNCN0J0QixFQUFBQSxVQUFVLEVBQUU7QUFDUnVCLElBQUFBLGVBQWUsRUFBRVQsY0FBT0M7QUFEaEIsR0F0QmlCO0FBeUI3QlYsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZtQixJQUFBQSxLQUFLLEVBQUVWLGNBQU9DO0FBRFosR0F6QnVCO0FBNEI3QlQsRUFBQUEsV0FBVyxFQUFFO0FBQ1RrQixJQUFBQSxLQUFLLEVBQUVWLGNBQU9XO0FBREw7QUE1QmdCLENBQWxCLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIFN0eWxlU2hlZXQsXG4gICAgU3R5bGVQcm9wLFxuICAgIFZpZXcsXG4gICAgVmlld1N0eWxlLFxuICAgIFRvdWNoYWJsZU9wYWNpdHksXG59IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbi8vIExpYnJhcnlcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gJ3V0aWxzJztcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuL1RleHQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdG9yUHJvcHMge1xuICAgIGRhdGE6IHN0cmluZ1tdO1xuICAgIHZhbHVlPzogbnVtYmVyO1xuICAgIG9uQ2hhbmdlPzogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gICAgc3R5bGU/OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcbn1cblxuY29uc3QgU2VsZWN0b3I6IFJlYWN0LkZDPFNlbGVjdG9yUHJvcHM+ID0gcHJvcHMgPT4ge1xuICAgIGlmICghcHJvcHMuZGF0YSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBzdHlsZT17W3N0eWxlcy5jb250YWluZXIsIHByb3BzLnN0eWxlXX0+XG4gICAgICAgICAgICB7cHJvcHMuZGF0YS5tYXAoKGl0ZW06IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICAgIDxUb3VjaGFibGVPcGFjaXR5XG4gICAgICAgICAgICAgICAgICAgIG9uUHJlc3M9eygpID0+IHByb3BzLm9uQ2hhbmdlICYmIHByb3BzLm9uQ2hhbmdlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFwcm9wcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy50YWIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy52YWx1ZSA9PT0gaW5kZXggPyBzdHlsZXMudGFiX2FjdGl2ZSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gMCA/IHN0eWxlcy50YWJfc3RhcnQgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IHByb3BzLmRhdGEubGVuZ3RoIC0gMSA/IHN0eWxlcy50YWJfZW5kIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleC50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVPcGFjaXR5PXswLjd9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMudGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy52YWx1ZSA9PT0gaW5kZXggPyBzdHlsZXMudGV4dF9hY3RpdmUgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9Ub3VjaGFibGVPcGFjaXR5PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICBtYXJnaW5MZWZ0OiAxLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICB9LFxuICAgIHRhYjoge1xuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IENvbG9ycy5wcmltYXJ5LFxuICAgICAgICBtYXJnaW5MZWZ0OiAtMSxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgZmxleDogMSxcbiAgICB9LFxuICAgIHRhYl9zdGFydDoge1xuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAxNSxcbiAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogMTUsXG4gICAgfSxcbiAgICB0YWJfZW5kOiB7XG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAxNSxcbiAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDE1LFxuICAgIH0sXG4gICAgdGFiX2FjdGl2ZToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgICBjb2xvcjogQ29sb3JzLnByaW1hcnksXG4gICAgfSxcbiAgICB0ZXh0X2FjdGl2ZToge1xuICAgICAgICBjb2xvcjogQ29sb3JzLndoaXRlLFxuICAgIH0sXG59KTtcblxuZXhwb3J0IHsgU2VsZWN0b3IgfTtcbiJdfQ==