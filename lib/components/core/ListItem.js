"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _index = require("./index");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Library
var ListItem = function ListItem(props) {
  return <_reactNative.TouchableOpacity activeOpacity={0.7} onPress={props.onPress} disabled={!props.onPress} style={[styles.container, props.style]}>
        {props.value === undefined && <_index.Text style={styles.label}>{props.label}</_index.Text>}
        {!!props.value && <_reactNative.View>
                <_index.Text uppercase small>
                    {props.label}
                </_index.Text>
                <_index.Text style={styles.value}>{props.value}</_index.Text>
            </_reactNative.View>}
        <_index.Icon name="arrowRightBold" style={styles.icon} />
    </_reactNative.TouchableOpacity>;
};

exports.ListItem = ListItem;

var styles = _reactNative.StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: _utils.Colors.greyLight,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  label: {
    color: _utils.Colors.neutralLight
  },
  value: {
    color: _utils.Colors.neutralLight
  },
  icon: {
    height: 10
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvcmUvTGlzdEl0ZW0udHN4Il0sIm5hbWVzIjpbIkxpc3RJdGVtIiwicHJvcHMiLCJvblByZXNzIiwic3R5bGVzIiwiY29udGFpbmVyIiwic3R5bGUiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImxhYmVsIiwiaWNvbiIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJib3JkZXJCb3R0b21XaWR0aCIsImJvcmRlckJvdHRvbUNvbG9yIiwiQ29sb3JzIiwiZ3JleUxpZ2h0IiwicGFkZGluZ1ZlcnRpY2FsIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsImNvbG9yIiwibmV1dHJhbExpZ2h0IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFTQTs7QUFDQTs7Ozs7O0FBRkE7QUFXQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFEO0FBQUEsU0FDYiwrQkFDSSxjQUFjLENBQUMsR0FBRCxDQURsQixDQUVJLFFBQVEsQ0FBQ0EsS0FBSyxDQUFDQyxPQUFQLENBRlosQ0FHSSxTQUFTLENBQUMsQ0FBQ0QsS0FBSyxDQUFDQyxPQUFSLENBSGIsQ0FJSSxNQUFNLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxTQUFSLEVBQW1CSCxLQUFLLENBQUNJLEtBQXpCLENBQUQsQ0FKVjtRQU1JLENBQUNKLEtBQUssQ0FBQ0ssS0FBTixLQUFnQkMsU0FBaEIsSUFDRyxhQUFNLE1BQU0sQ0FBQ0osTUFBTSxDQUFDSyxLQUFSLENBQVosQ0FBMkIsQ0FBQ1AsS0FBSyxDQUFDTyxLQUFQLENBQWEsY0FENUM7UUFHQSxDQUFDLENBQUMsQ0FBQ1AsS0FBSyxDQUFDSyxLQUFSLElBQ0c7Z0JBQ0ksYUFBTSxTQUFOLENBQWdCLEtBQWhCO29CQUNJLENBQUNMLEtBQUssQ0FBQ08sS0FBUDtnQkFDSjtnQkFDQSxhQUFNLE1BQU0sQ0FBQ0wsTUFBTSxDQUFDRyxLQUFSLENBQVosQ0FBMkIsQ0FBQ0wsS0FBSyxDQUFDSyxLQUFQLENBQWE7WUFDNUMsb0JBTko7UUFRQSxhQUFNLEtBQUssZ0JBQVgsQ0FBNEIsTUFBTSxDQUFDSCxNQUFNLENBQUNNLElBQVIsQ0FBbEM7SUFDSixnQ0FuQmE7QUFBQSxDQUFqQjs7OztBQXNCQSxJQUFNTixNQUFNLEdBQUdPLHdCQUFXQyxNQUFYLENBQWtCO0FBQzdCUCxFQUFBQSxTQUFTLEVBQUU7QUFDUFEsSUFBQUEsaUJBQWlCLEVBQUUsQ0FEWjtBQUVQQyxJQUFBQSxpQkFBaUIsRUFBRUMsY0FBT0MsU0FGbkI7QUFHUEMsSUFBQUEsZUFBZSxFQUFFLEVBSFY7QUFJUEMsSUFBQUEsVUFBVSxFQUFFLFFBSkw7QUFLUEMsSUFBQUEsY0FBYyxFQUFFLGVBTFQ7QUFNUEMsSUFBQUEsYUFBYSxFQUFFO0FBTlIsR0FEa0I7QUFTN0JYLEVBQUFBLEtBQUssRUFBRTtBQUNIWSxJQUFBQSxLQUFLLEVBQUVOLGNBQU9PO0FBRFgsR0FUc0I7QUFZN0JmLEVBQUFBLEtBQUssRUFBRTtBQUNIYyxJQUFBQSxLQUFLLEVBQUVOLGNBQU9PO0FBRFgsR0Fac0I7QUFlN0JaLEVBQUFBLElBQUksRUFBRTtBQUNGYSxJQUFBQSxNQUFNLEVBQUU7QUFETjtBQWZ1QixDQUFsQixDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgICBTdHlsZVNoZWV0LFxuICAgIFN0eWxlUHJvcCxcbiAgICBWaWV3LFxuICAgIFZpZXdTdHlsZSxcbiAgICBUb3VjaGFibGVPcGFjaXR5LFxufSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBMaWJyYXJ5XG5pbXBvcnQgeyBUZXh0LCBJY29uIH0gZnJvbSAnY29tcG9uZW50cy9jb3JlJztcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gJ3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBMaXN0SXRlbVByb3BzIHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHZhbHVlPzogc3RyaW5nO1xuICAgIG9uUHJlc3M6ICgpID0+IHZvaWQ7XG4gICAgc3R5bGU/OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcbn1cblxuY29uc3QgTGlzdEl0ZW0gPSAocHJvcHM6IExpc3RJdGVtUHJvcHMpID0+IChcbiAgICA8VG91Y2hhYmxlT3BhY2l0eVxuICAgICAgICBhY3RpdmVPcGFjaXR5PXswLjd9XG4gICAgICAgIG9uUHJlc3M9e3Byb3BzLm9uUHJlc3N9XG4gICAgICAgIGRpc2FibGVkPXshcHJvcHMub25QcmVzc31cbiAgICAgICAgc3R5bGU9e1tzdHlsZXMuY29udGFpbmVyLCBwcm9wcy5zdHlsZV19XG4gICAgPlxuICAgICAgICB7cHJvcHMudmFsdWUgPT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmxhYmVsfT57cHJvcHMubGFiZWx9PC9UZXh0PlxuICAgICAgICApfVxuICAgICAgICB7ISFwcm9wcy52YWx1ZSAmJiAoXG4gICAgICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgICAgICA8VGV4dCB1cHBlcmNhc2Ugc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy52YWx1ZX0+e3Byb3BzLnZhbHVlfTwvVGV4dD5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgKX1cbiAgICAgICAgPEljb24gbmFtZT1cImFycm93UmlnaHRCb2xkXCIgc3R5bGU9e3N0eWxlcy5pY29ufSAvPlxuICAgIDwvVG91Y2hhYmxlT3BhY2l0eT5cbik7XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6IDEsXG4gICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiBDb2xvcnMuZ3JleUxpZ2h0LFxuICAgICAgICBwYWRkaW5nVmVydGljYWw6IDE2LFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgICBjb2xvcjogQ29sb3JzLm5ldXRyYWxMaWdodCxcbiAgICB9LFxuICAgIHZhbHVlOiB7XG4gICAgICAgIGNvbG9yOiBDb2xvcnMubmV1dHJhbExpZ2h0LFxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgICBoZWlnaHQ6IDEwLFxuICAgIH0sXG59KTtcblxuZXhwb3J0IHsgTGlzdEl0ZW0gfTtcbiJdfQ==