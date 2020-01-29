"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Video = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _index = require("./index");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Library
var Video = function Video(props) {
  return <_reactNative.TouchableWithoutFeedback onPress={function () {
    return props.onVolumeChange(!props.volume);
  }} disabled={!props.onVolumeChange}>
        <_reactNative.View style={[styles.container, props.style]}>
            {props.children}
            {props.volume !== undefined && <_reactNative.View style={styles.volume}>
                    <_index.Icon name={props.volume ? 'volumeOn' : 'volumeOff'} color={_utils.Colors.white} style={styles.icon} />
                </_reactNative.View>}
        </_reactNative.View>
    </_reactNative.TouchableWithoutFeedback>;
};

exports.Video = Video;

var styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: _utils.Colors.placeholder,
    height: 200,
    overflow: 'hidden'
  },
  volume: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    borderRadius: 15,
    backgroundColor: (0, _utils.ColorOpacity)(_utils.Colors.black, 0.7),
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  icon: {
    height: 18,
    width: 18
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvcmUvVmlkZW8udHN4Il0sIm5hbWVzIjpbIlZpZGVvIiwicHJvcHMiLCJvblZvbHVtZUNoYW5nZSIsInZvbHVtZSIsInN0eWxlcyIsImNvbnRhaW5lciIsInN0eWxlIiwiY2hpbGRyZW4iLCJ1bmRlZmluZWQiLCJDb2xvcnMiLCJ3aGl0ZSIsImljb24iLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwiYmFja2dyb3VuZENvbG9yIiwicGxhY2Vob2xkZXIiLCJoZWlnaHQiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwicmlnaHQiLCJib3R0b20iLCJib3JkZXJSYWRpdXMiLCJibGFjayIsIndpZHRoIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiekluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFRQTs7QUFDQTs7Ozs7O0FBRkE7QUFTQSxJQUFNQSxLQUEyQixHQUFHLFNBQTlCQSxLQUE4QixDQUFBQyxLQUFLO0FBQUEsU0FDckMsdUNBQ0ksUUFBUSxDQUFDO0FBQUEsV0FBTUEsS0FBSyxDQUFDQyxjQUFOLENBQXFCLENBQUNELEtBQUssQ0FBQ0UsTUFBNUIsQ0FBTjtBQUFBLEdBQUQsQ0FEWixDQUVJLFNBQVMsQ0FBQyxDQUFDRixLQUFLLENBQUNDLGNBQVIsQ0FGYjtRQUlJLG1CQUFNLE1BQU0sQ0FBQyxDQUFDRSxNQUFNLENBQUNDLFNBQVIsRUFBbUJKLEtBQUssQ0FBQ0ssS0FBekIsQ0FBRCxDQUFaO1lBQ0ksQ0FBQ0wsS0FBSyxDQUFDTSxRQUFQO1lBQ0EsQ0FBQ04sS0FBSyxDQUFDRSxNQUFOLEtBQWlCSyxTQUFqQixJQUNHLG1CQUFNLE1BQU0sQ0FBQ0osTUFBTSxDQUFDRCxNQUFSLENBQVo7b0JBQ0ksYUFDSSxLQUFLLENBQUNGLEtBQUssQ0FBQ0UsTUFBTixHQUFlLFVBQWYsR0FBNEIsV0FBN0IsQ0FEVCxDQUVJLE1BQU0sQ0FBQ00sY0FBT0MsS0FBUixDQUZWLENBR0ksTUFBTSxDQUFDTixNQUFNLENBQUNPLElBQVIsQ0FIVjtnQkFLSixvQkFQSjtRQVNKO0lBQ0osd0NBakJxQztBQUFBLENBQXpDOzs7O0FBb0JBLElBQU1QLE1BQU0sR0FBR1Esd0JBQVdDLE1BQVgsQ0FBa0I7QUFDN0JSLEVBQUFBLFNBQVMsRUFBRTtBQUNQUyxJQUFBQSxlQUFlLEVBQUVMLGNBQU9NLFdBRGpCO0FBRVBDLElBQUFBLE1BQU0sRUFBRSxHQUZEO0FBR1BDLElBQUFBLFFBQVEsRUFBRTtBQUhILEdBRGtCO0FBTTdCZCxFQUFBQSxNQUFNLEVBQUU7QUFDSmUsSUFBQUEsUUFBUSxFQUFFLFVBRE47QUFFSkMsSUFBQUEsS0FBSyxFQUFFLEVBRkg7QUFHSkMsSUFBQUEsTUFBTSxFQUFFLEVBSEo7QUFJSkMsSUFBQUEsWUFBWSxFQUFFLEVBSlY7QUFLSlAsSUFBQUEsZUFBZSxFQUFFLHlCQUFhTCxjQUFPYSxLQUFwQixFQUEyQixHQUEzQixDQUxiO0FBTUpOLElBQUFBLE1BQU0sRUFBRSxFQU5KO0FBT0pPLElBQUFBLEtBQUssRUFBRSxFQVBIO0FBUUpDLElBQUFBLFVBQVUsRUFBRSxRQVJSO0FBU0pDLElBQUFBLGNBQWMsRUFBRSxRQVRaO0FBVUpDLElBQUFBLE1BQU0sRUFBRTtBQVZKLEdBTnFCO0FBa0I3QmYsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZLLElBQUFBLE1BQU0sRUFBRSxFQUROO0FBRUZPLElBQUFBLEtBQUssRUFBRTtBQUZMO0FBbEJ1QixDQUFsQixDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgICBTdHlsZVNoZWV0LFxuICAgIFZpZXcsXG4gICAgVmlld1Byb3BzLFxuICAgIFRvdWNoYWJsZVdpdGhvdXRGZWVkYmFjayxcbn0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gTGlicmFyeVxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2NvbXBvbmVudHMvY29yZSc7XG5pbXBvcnQgeyBDb2xvcnMsIENvbG9yT3BhY2l0eSB9IGZyb20gJ3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBWaWRlb1Byb3BzIGV4dGVuZHMgVmlld1Byb3BzIHtcbiAgICB2b2x1bWU6IGJvb2xlYW47XG4gICAgb25Wb2x1bWVDaGFuZ2U6ICh2b2x1bWU6IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IFZpZGVvOiBSZWFjdC5GQzxWaWRlb1Byb3BzPiA9IHByb3BzID0+IChcbiAgICA8VG91Y2hhYmxlV2l0aG91dEZlZWRiYWNrXG4gICAgICAgIG9uUHJlc3M9eygpID0+IHByb3BzLm9uVm9sdW1lQ2hhbmdlKCFwcm9wcy52b2x1bWUpfVxuICAgICAgICBkaXNhYmxlZD17IXByb3BzLm9uVm9sdW1lQ2hhbmdlfVxuICAgID5cbiAgICAgICAgPFZpZXcgc3R5bGU9e1tzdHlsZXMuY29udGFpbmVyLCBwcm9wcy5zdHlsZV19PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAge3Byb3BzLnZvbHVtZSAhPT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnZvbHVtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtwcm9wcy52b2x1bWUgPyAndm9sdW1lT24nIDogJ3ZvbHVtZU9mZid9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17Q29sb3JzLndoaXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pY29ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvVmlldz5cbiAgICA8L1RvdWNoYWJsZVdpdGhvdXRGZWVkYmFjaz5cbik7XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDb2xvcnMucGxhY2Vob2xkZXIsXG4gICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgfSxcbiAgICB2b2x1bWU6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHJpZ2h0OiAxMCxcbiAgICAgICAgYm90dG9tOiAxMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxNSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDb2xvck9wYWNpdHkoQ29sb3JzLmJsYWNrLCAwLjcpLFxuICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgICAgaGVpZ2h0OiAxOCxcbiAgICAgICAgd2lkdGg6IDE4LFxuICAgIH0sXG59KTtcblxuZXhwb3J0IHsgVmlkZW8gfTtcbiJdfQ==