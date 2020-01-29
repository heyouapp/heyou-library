"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Talent = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _core = require("../core");

var _ProfilePicture = require("./ProfilePicture");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Library
var Talent = function Talent(props) {
  return <_reactNative.TouchableOpacity onPress={props.onPress} style={props.style} activeOpacity={0.7}>
        <_ProfilePicture.ProfilePicture size={props.size || 'large'} squared>
            <_reactNative.View style={styles.price}>
                <_core.Text type="semibold" style={styles.price_inner} small>
                    {props.talentFeeAmount}€
                </_core.Text>
            </_reactNative.View>
        </_ProfilePicture.ProfilePicture>
        <_core.Text style={styles.type} uppercase small>
            {props.mainTopic}
        </_core.Text>
        <_core.Text>{props.fullName}</_core.Text>
    </_reactNative.TouchableOpacity>;
};

exports.Talent = Talent;

var styles = _reactNative.StyleSheet.create({
  price: {
    position: 'absolute',
    top: 5,
    right: 5,
    borderRadius: 5,
    backgroundColor: (0, _utils.ColorOpacity)(_utils.Colors.black, 0.4),
    paddingVertical: 2,
    paddingHorizontal: 5
  },
  price_inner: {
    color: _utils.Colors.white
  },
  type: {
    marginVertical: 2,
    color: _utils.Colors.neutralLight
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FjY291bnQvVGFsZW50LnRzeCJdLCJuYW1lcyI6WyJUYWxlbnQiLCJwcm9wcyIsIm9uUHJlc3MiLCJzdHlsZSIsInNpemUiLCJzdHlsZXMiLCJwcmljZSIsInByaWNlX2lubmVyIiwidGFsZW50RmVlQW1vdW50IiwidHlwZSIsIm1haW5Ub3BpYyIsImZ1bGxOYW1lIiwiU3R5bGVTaGVldCIsImNyZWF0ZSIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJDb2xvcnMiLCJibGFjayIsInBhZGRpbmdWZXJ0aWNhbCIsInBhZGRpbmdIb3Jpem9udGFsIiwiY29sb3IiLCJ3aGl0ZSIsIm1hcmdpblZlcnRpY2FsIiwibmV1dHJhbExpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFTQTs7QUFDQTs7QUFDQTs7Ozs7O0FBSEE7QUFjQSxJQUFNQSxNQUE2QixHQUFHLFNBQWhDQSxNQUFnQyxDQUFBQyxLQUFLO0FBQUEsU0FDdkMsK0JBQ0ksUUFBUSxDQUFDQSxLQUFLLENBQUNDLE9BQVAsQ0FEWixDQUVJLE1BQU0sQ0FBQ0QsS0FBSyxDQUFDRSxLQUFQLENBRlYsQ0FHSSxjQUFjLENBQUMsR0FBRCxDQUhsQjtRQUtJLGdDQUFnQixLQUFLLENBQUNGLEtBQUssQ0FBQ0csSUFBTixJQUFjLE9BQWYsQ0FBckIsQ0FBNkMsT0FBN0M7WUFDSSxtQkFBTSxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsS0FBUixDQUFaO2dCQUNJLFlBQU0sS0FBSyxVQUFYLENBQXNCLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDRSxXQUFSLENBQTVCLENBQWlELEtBQWpEO29CQUNJLENBQUNOLEtBQUssQ0FBQ08sZUFBUCxDQUF1QjtnQkFDM0I7WUFDSjtRQUNKO1FBQ0EsWUFBTSxNQUFNLENBQUNILE1BQU0sQ0FBQ0ksSUFBUixDQUFaLENBQTBCLFNBQTFCLENBQW9DLEtBQXBDO1lBQ0ksQ0FBQ1IsS0FBSyxDQUFDUyxTQUFQO1FBQ0o7UUFDQSxZQUFNLENBQUNULEtBQUssQ0FBQ1UsUUFBUCxDQUFnQjtJQUMxQixnQ0FqQnVDO0FBQUEsQ0FBM0M7Ozs7QUFvQkEsSUFBTU4sTUFBTSxHQUFHTyx3QkFBV0MsTUFBWCxDQUFrQjtBQUM3QlAsRUFBQUEsS0FBSyxFQUFFO0FBQ0hRLElBQUFBLFFBQVEsRUFBRSxVQURQO0FBRUhDLElBQUFBLEdBQUcsRUFBRSxDQUZGO0FBR0hDLElBQUFBLEtBQUssRUFBRSxDQUhKO0FBSUhDLElBQUFBLFlBQVksRUFBRSxDQUpYO0FBS0hDLElBQUFBLGVBQWUsRUFBRSx5QkFBYUMsY0FBT0MsS0FBcEIsRUFBMkIsR0FBM0IsQ0FMZDtBQU1IQyxJQUFBQSxlQUFlLEVBQUUsQ0FOZDtBQU9IQyxJQUFBQSxpQkFBaUIsRUFBRTtBQVBoQixHQURzQjtBQVU3QmYsRUFBQUEsV0FBVyxFQUFFO0FBQ1RnQixJQUFBQSxLQUFLLEVBQUVKLGNBQU9LO0FBREwsR0FWZ0I7QUFhN0JmLEVBQUFBLElBQUksRUFBRTtBQUNGZ0IsSUFBQUEsY0FBYyxFQUFFLENBRGQ7QUFFRkYsSUFBQUEsS0FBSyxFQUFFSixjQUFPTztBQUZaO0FBYnVCLENBQWxCLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIFN0eWxlU2hlZXQsXG4gICAgU3R5bGVQcm9wLFxuICAgIFZpZXcsXG4gICAgVmlld1N0eWxlLFxuICAgIFRvdWNoYWJsZU9wYWNpdHksXG59IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbi8vIExpYnJhcnlcbmltcG9ydCB7IFRleHQgfSBmcm9tICdjb21wb25lbnRzL2NvcmUnO1xuaW1wb3J0IHsgUHJvZmlsZVBpY3R1cmUsIFByb2ZpbGVQaWN0dXJlU2l6ZSB9IGZyb20gJy4vUHJvZmlsZVBpY3R1cmUnO1xuaW1wb3J0IHsgQ29sb3JzLCBDb2xvck9wYWNpdHkgfSBmcm9tICd1dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFsZW50UHJvcHMge1xuICAgIHN0eWxlPzogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG4gICAgb25QcmVzcz86ICgpID0+IHZvaWQ7XG4gICAgZnVsbE5hbWU6IHN0cmluZztcbiAgICBtYWluVG9waWM6IHN0cmluZztcbiAgICB0YWxlbnRGZWVBbW91bnQ6IG51bWJlcjtcbiAgICBzaXplPzogUHJvZmlsZVBpY3R1cmVTaXplO1xufVxuXG5jb25zdCBUYWxlbnQ6IFJlYWN0LkZDPFRhbGVudFByb3BzPiA9IHByb3BzID0+IChcbiAgICA8VG91Y2hhYmxlT3BhY2l0eVxuICAgICAgICBvblByZXNzPXtwcm9wcy5vblByZXNzfVxuICAgICAgICBzdHlsZT17cHJvcHMuc3R5bGV9XG4gICAgICAgIGFjdGl2ZU9wYWNpdHk9ezAuN31cbiAgICA+XG4gICAgICAgIDxQcm9maWxlUGljdHVyZSBzaXplPXtwcm9wcy5zaXplIHx8ICdsYXJnZSd9IHNxdWFyZWQ+XG4gICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnByaWNlfT5cbiAgICAgICAgICAgICAgICA8VGV4dCB0eXBlPVwic2VtaWJvbGRcIiBzdHlsZT17c3R5bGVzLnByaWNlX2lubmVyfSBzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnRhbGVudEZlZUFtb3VudH3igqxcbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvUHJvZmlsZVBpY3R1cmU+XG4gICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudHlwZX0gdXBwZXJjYXNlIHNtYWxsPlxuICAgICAgICAgICAge3Byb3BzLm1haW5Ub3BpY31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD57cHJvcHMuZnVsbE5hbWV9PC9UZXh0PlxuICAgIDwvVG91Y2hhYmxlT3BhY2l0eT5cbik7XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICBwcmljZToge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiA1LFxuICAgICAgICByaWdodDogNSxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENvbG9yT3BhY2l0eShDb2xvcnMuYmxhY2ssIDAuNCksXG4gICAgICAgIHBhZGRpbmdWZXJ0aWNhbDogMixcbiAgICAgICAgcGFkZGluZ0hvcml6b250YWw6IDUsXG4gICAgfSxcbiAgICBwcmljZV9pbm5lcjoge1xuICAgICAgICBjb2xvcjogQ29sb3JzLndoaXRlLFxuICAgIH0sXG4gICAgdHlwZToge1xuICAgICAgICBtYXJnaW5WZXJ0aWNhbDogMixcbiAgICAgICAgY29sb3I6IENvbG9ycy5uZXV0cmFsTGlnaHQsXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgeyBUYWxlbnQgfTtcbiJdfQ==