"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardVideo = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _core = require("../core");

var _index = require("./index");

var _account = require("../account");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Library
var CardVideo = function CardVideo(props) {
  return <_core.Card style={props.style}>
        <_reactNative.View style={styles.header}>
            <_reactNative.View style={styles.content}>
                <_account.ProfilePicture />
                <_reactNative.View style={styles.label}>
                    <_core.Text type="semibold">{props.recipientLabel}</_core.Text>
                    <_core.Text style={styles.time} small>
                        {props.createdLabel}
                    </_core.Text>
                </_reactNative.View>
            </_reactNative.View>
            <_index.Share onPress={props.onShare} />
        </_reactNative.View>
        <_core.Video volume={props.volume} onVolumeChange={props.onVolumeChange}>
            {props.children}
        </_core.Video>
    </_core.Card>;
};

exports.CardVideo = CardVideo;

var styles = _reactNative.StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    marginLeft: 10
  },
  time: {
    color: _utils.Colors.neutralLight
  },
  review: {
    paddingTop: 15,
    paddingHorizontal: 15
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9DYXJkVmlkZW8udHN4Il0sIm5hbWVzIjpbIkNhcmRWaWRlbyIsInByb3BzIiwic3R5bGUiLCJzdHlsZXMiLCJoZWFkZXIiLCJjb250ZW50IiwibGFiZWwiLCJyZWNpcGllbnRMYWJlbCIsInRpbWUiLCJjcmVhdGVkTGFiZWwiLCJvblNoYXJlIiwidm9sdW1lIiwib25Wb2x1bWVDaGFuZ2UiLCJjaGlsZHJlbiIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJwYWRkaW5nSG9yaXpvbnRhbCIsInBhZGRpbmdCb3R0b20iLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luTGVmdCIsImNvbG9yIiwiQ29sb3JzIiwibmV1dHJhbExpZ2h0IiwicmV2aWV3IiwicGFkZGluZ1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUpBO0FBYUEsSUFBTUEsU0FBbUMsR0FBRyxTQUF0Q0EsU0FBc0MsQ0FBQUMsS0FBSztBQUFBLFNBQzdDLFlBQU0sTUFBTSxDQUFDQSxLQUFLLENBQUNDLEtBQVAsQ0FBWjtRQUNJLG1CQUFNLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxNQUFSLENBQVo7WUFDSSxtQkFBTSxNQUFNLENBQUNELE1BQU0sQ0FBQ0UsT0FBUixDQUFaO2dCQUNJO2dCQUNBLG1CQUFNLE1BQU0sQ0FBQ0YsTUFBTSxDQUFDRyxLQUFSLENBQVo7b0JBQ0ksWUFBTSxLQUFLLFVBQVgsQ0FBc0IsQ0FBQ0wsS0FBSyxDQUFDTSxjQUFQLENBQXNCO29CQUM1QyxZQUFNLE1BQU0sQ0FBQ0osTUFBTSxDQUFDSyxJQUFSLENBQVosQ0FBMEIsS0FBMUI7d0JBQ0ksQ0FBQ1AsS0FBSyxDQUFDUSxZQUFQO29CQUNKO2dCQUNKO1lBQ0o7WUFDQSxjQUFPLFFBQVEsQ0FBQ1IsS0FBSyxDQUFDUyxPQUFQLENBQWY7UUFDSjtRQUNBLGFBQU8sT0FBTyxDQUFDVCxLQUFLLENBQUNVLE1BQVAsQ0FBZCxDQUE2QixlQUFlLENBQUNWLEtBQUssQ0FBQ1csY0FBUCxDQUE1QztZQUNJLENBQUNYLEtBQUssQ0FBQ1ksUUFBUDtRQUNKO0lBQ0osYUFqQjZDO0FBQUEsQ0FBakQ7Ozs7QUFvQkEsSUFBTVYsTUFBTSxHQUFHVyx3QkFBV0MsTUFBWCxDQUFrQjtBQUM3QlgsRUFBQUEsTUFBTSxFQUFFO0FBQ0pZLElBQUFBLGlCQUFpQixFQUFFLEVBRGY7QUFFSkMsSUFBQUEsYUFBYSxFQUFFLEVBRlg7QUFHSkMsSUFBQUEsYUFBYSxFQUFFLEtBSFg7QUFJSkMsSUFBQUEsVUFBVSxFQUFFLFFBSlI7QUFLSkMsSUFBQUEsY0FBYyxFQUFFO0FBTFosR0FEcUI7QUFRN0JmLEVBQUFBLE9BQU8sRUFBRTtBQUNMYSxJQUFBQSxhQUFhLEVBQUUsS0FEVjtBQUVMQyxJQUFBQSxVQUFVLEVBQUU7QUFGUCxHQVJvQjtBQVk3QmIsRUFBQUEsS0FBSyxFQUFFO0FBQ0hlLElBQUFBLFVBQVUsRUFBRTtBQURULEdBWnNCO0FBZTdCYixFQUFBQSxJQUFJLEVBQUU7QUFDRmMsSUFBQUEsS0FBSyxFQUFFQyxjQUFPQztBQURaLEdBZnVCO0FBa0I3QkMsRUFBQUEsTUFBTSxFQUFFO0FBQ0pDLElBQUFBLFVBQVUsRUFBRSxFQURSO0FBRUpWLElBQUFBLGlCQUFpQixFQUFFO0FBRmY7QUFsQnFCLENBQWxCLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBTdHlsZVByb3AsIFZpZXcsIFZpZXdTdHlsZSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbi8vIExpYnJhcnlcbmltcG9ydCB7IFRleHQsIENhcmQsIFZpZGVvLCBWaWRlb1Byb3BzIH0gZnJvbSAnY29tcG9uZW50cy9jb3JlJztcbmltcG9ydCB7IFNoYXJlIH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nO1xuaW1wb3J0IHsgUHJvZmlsZVBpY3R1cmUgfSBmcm9tICdjb21wb25lbnRzL2FjY291bnQnO1xuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSAndXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRWaWRlb1Byb3BzIGV4dGVuZHMgVmlkZW9Qcm9wcyB7XG4gICAgY3JlYXRlZExhYmVsOiBzdHJpbmc7XG4gICAgcmVjaXBpZW50TGFiZWw6IHN0cmluZztcbiAgICBvblNoYXJlOiAoKSA9PiB2b2lkO1xuICAgIHN0eWxlPzogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG59XG5cbmNvbnN0IENhcmRWaWRlbzogUmVhY3QuRkM8Q2FyZFZpZGVvUHJvcHM+ID0gcHJvcHMgPT4gKFxuICAgIDxDYXJkIHN0eWxlPXtwcm9wcy5zdHlsZX0+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVQaWN0dXJlIC8+XG4gICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IHR5cGU9XCJzZW1pYm9sZFwiPntwcm9wcy5yZWNpcGllbnRMYWJlbH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGltZX0gc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY3JlYXRlZExhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPFNoYXJlIG9uUHJlc3M9e3Byb3BzLm9uU2hhcmV9IC8+XG4gICAgICAgIDwvVmlldz5cbiAgICAgICAgPFZpZGVvIHZvbHVtZT17cHJvcHMudm9sdW1lfSBvblZvbHVtZUNoYW5nZT17cHJvcHMub25Wb2x1bWVDaGFuZ2V9PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L1ZpZGVvPlxuICAgIDwvQ2FyZD5cbik7XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICBoZWFkZXI6IHtcbiAgICAgICAgcGFkZGluZ0hvcml6b250YWw6IDEwLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiAxNSxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIH0sXG4gICAgY29udGVudDoge1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgICB9LFxuICAgIHRpbWU6IHtcbiAgICAgICAgY29sb3I6IENvbG9ycy5uZXV0cmFsTGlnaHQsXG4gICAgfSxcbiAgICByZXZpZXc6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogMTUsXG4gICAgICAgIHBhZGRpbmdIb3Jpem9udGFsOiAxNSxcbiAgICB9LFxufSk7XG5cbmV4cG9ydCB7IENhcmRWaWRlbyB9O1xuIl19