"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomNav = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _utils = require("../../utils");

var _BottomNavIcon = _interopRequireDefault(require("./BottomNavIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BottomNav = function BottomNav(props) {
  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      active = _React$useState2[0],
      setActive = _React$useState2[1];

  React.useEffect(function () {
    props.data[active].onPress();
  }, [active, props.data]);
  return <_reactNative.SafeAreaView style={styles.wrapper}>
            <_reactNative.View style={styles.container}>
                {
        /*
        <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={10}
        />*/
      }
                {props.data.map(function (item, index) {
        return <_BottomNavIcon.default name={item.iconName} active={active === index} onPress={function () {
          return setActive(index);
        }} key={index.toString()} />;
      })}
            </_reactNative.View>
        </_reactNative.SafeAreaView>;
};

exports.BottomNav = BottomNav;

var styles = _reactNative.StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 15,
    right: 15
  },
  container: _objectSpread({
    borderRadius: 20,
    backgroundColor: (0, _utils.ColorOpacity)(_utils.Colors.white, 0.7),
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  }, _utils.Shadows.primary),
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3N0cnVjdHVyZS9Cb3R0b21OYXYudHN4Il0sIm5hbWVzIjpbIkJvdHRvbU5hdiIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInVzZUVmZmVjdCIsImRhdGEiLCJvblByZXNzIiwic3R5bGVzIiwid3JhcHBlciIsImNvbnRhaW5lciIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImljb25OYW1lIiwidG9TdHJpbmciLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwicG9zaXRpb24iLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJDb2xvcnMiLCJ3aGl0ZSIsImhlaWdodCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJTaGFkb3dzIiwicHJpbWFyeSIsImFic29sdXRlIiwidG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFVQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBMkI7QUFBQSx3QkFDYkMsS0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQURhO0FBQUE7QUFBQSxNQUNsQ0MsTUFEa0M7QUFBQSxNQUMxQkMsU0FEMEI7O0FBRXpDSCxFQUFBQSxLQUFLLENBQUNJLFNBQU4sQ0FBZ0IsWUFBTTtBQUNsQkwsSUFBQUEsS0FBSyxDQUFDTSxJQUFOLENBQVdILE1BQVgsRUFBbUJJLE9BQW5CO0FBQ0gsR0FGRCxFQUVHLENBQUNKLE1BQUQsRUFBU0gsS0FBSyxDQUFDTSxJQUFmLENBRkg7QUFJQSxTQUNJLDJCQUFjLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDQyxPQUFSLENBQXBCO1lBQ0ksbUJBQU0sTUFBTSxDQUFDRCxNQUFNLENBQUNFLFNBQVIsQ0FBWjtnQkFDSTtBQUFDOzs7Ozs7QUFBRDtnQkFNQSxDQUFDVixLQUFLLENBQUNNLElBQU4sQ0FBV0ssR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBd0JDLEtBQXhCO0FBQUEsZUFDWix3QkFDSSxLQUFLLENBQUNELElBQUksQ0FBQ0UsUUFBTixDQURULENBRUksT0FBTyxDQUFDWCxNQUFNLEtBQUtVLEtBQVosQ0FGWCxDQUdJLFFBQVEsQ0FBQztBQUFBLGlCQUFNVCxTQUFTLENBQUNTLEtBQUQsQ0FBZjtBQUFBLFNBQUQsQ0FIWixDQUlJLElBQUksQ0FBQ0EsS0FBSyxDQUFDRSxRQUFOLEVBQUQsQ0FKUixHQURZO0FBQUEsT0FBZixDQUFEO1lBUUo7UUFDSiw0QkFsQko7QUFvQkgsQ0ExQkQ7Ozs7QUE0QkEsSUFBTVAsTUFBTSxHQUFHUSx3QkFBV0MsTUFBWCxDQUFrQjtBQUM3QlIsRUFBQUEsT0FBTyxFQUFFO0FBQ0xTLElBQUFBLFFBQVEsRUFBRSxVQURMO0FBRUxDLElBQUFBLE1BQU0sRUFBRSxDQUZIO0FBR0xDLElBQUFBLElBQUksRUFBRSxFQUhEO0FBSUxDLElBQUFBLEtBQUssRUFBRTtBQUpGLEdBRG9CO0FBTzdCWCxFQUFBQSxTQUFTO0FBQ0xZLElBQUFBLFlBQVksRUFBRSxFQURUO0FBRUxDLElBQUFBLGVBQWUsRUFBRSx5QkFBYUMsY0FBT0MsS0FBcEIsRUFBMkIsR0FBM0IsQ0FGWjtBQUdMQyxJQUFBQSxNQUFNLEVBQUUsRUFISDtBQUlMQyxJQUFBQSxVQUFVLEVBQUUsUUFKUDtBQUtMQyxJQUFBQSxjQUFjLEVBQUUsY0FMWDtBQU1MQyxJQUFBQSxhQUFhLEVBQUU7QUFOVixLQU9GQyxlQUFRQyxPQVBOLENBUG9CO0FBZ0I3QkMsRUFBQUEsUUFBUSxFQUFFO0FBQ05kLElBQUFBLFFBQVEsRUFBRSxVQURKO0FBRU5lLElBQUFBLEdBQUcsRUFBRSxDQUZDO0FBR05iLElBQUFBLElBQUksRUFBRSxDQUhBO0FBSU5DLElBQUFBLEtBQUssRUFBRSxDQUpEO0FBS05GLElBQUFBLE1BQU0sRUFBRTtBQUxGO0FBaEJtQixDQUFsQixDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgICBTdHlsZVNoZWV0LFxuICAgIFN0eWxlUHJvcCxcbiAgICBWaWV3U3R5bGUsXG4gICAgU2FmZUFyZWFWaWV3LFxuICAgIFZpZXcsXG59IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG4vLyBpbXBvcnQgeyBCbHVyVmlldyB9IGZyb20gJ0ByZWFjdC1uYXRpdmUtY29tbXVuaXR5L2JsdXInO1xuXG4vLyBMaWJyYXJ5XG5pbXBvcnQgeyBTaGFkb3dzLCBDb2xvck9wYWNpdHksIENvbG9ycyB9IGZyb20gJ3V0aWxzJztcbmltcG9ydCBCb3R0b21OYXZJY29uIGZyb20gJy4vQm90dG9tTmF2SWNvbic7XG5cbmV4cG9ydCB0eXBlIEJvdHRvbU5hdk9wdGlvbiA9IHtcbiAgICBpY29uTmFtZTogc3RyaW5nO1xuICAgIG9uUHJlc3M6ICgpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEJvdHRvbU5hdlByb3BzIHtcbiAgICBkYXRhOiBCb3R0b21OYXZPcHRpb25bXTtcbiAgICBzdHlsZT86IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xufVxuXG5jb25zdCBCb3R0b21OYXYgPSAocHJvcHM6IEJvdHRvbU5hdlByb3BzKSA9PiB7XG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHByb3BzLmRhdGFbYWN0aXZlXS5vblByZXNzKCk7XG4gICAgfSwgW2FjdGl2ZSwgcHJvcHMuZGF0YV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNhZmVBcmVhVmlldyBzdHlsZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICA8Qmx1clZpZXdcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYWJzb2x1dGV9XG4gICAgICAgICAgICAgICAgICAgICBibHVyVHlwZT1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgIGJsdXJBbW91bnQ9ezEwfVxuICAgICAgICAgICAgICAgICAvPiovfVxuICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLm1hcCgoaXRlbTogQm90dG9tTmF2T3B0aW9uLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxCb3R0b21OYXZJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLmljb25OYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmUgPT09IGluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25QcmVzcz17KCkgPT4gc2V0QWN0aXZlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXgudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9TYWZlQXJlYVZpZXc+XG4gICAgKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICB3cmFwcGVyOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIGxlZnQ6IDE1LFxuICAgICAgICByaWdodDogMTUsXG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAyMCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDb2xvck9wYWNpdHkoQ29sb3JzLndoaXRlLCAwLjcpLFxuICAgICAgICBoZWlnaHQ6IDYwLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgLi4uU2hhZG93cy5wcmltYXJ5LFxuICAgIH0sXG4gICAgYWJzb2x1dGU6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICB9LFxufSk7XG5cbmV4cG9ydCB7IEJvdHRvbU5hdiB9O1xuIl19