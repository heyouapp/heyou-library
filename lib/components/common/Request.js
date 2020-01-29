"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Request = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _core = require("../core");

var _account = require("../account");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Library
var Request = function Request(props) {
  return <_core.Card style={[styles.container, props.style]} onPress={props.onPress}>
        <_account.ProfilePicture size="medium" squared />
        <_reactNative.View style={styles.content}>
            <_reactNative.View>
                <_core.Text type="semibold" style={styles.fullName}>
                    {props.fullName}
                </_core.Text>
                <_core.Text>{props.recipientLabel}</_core.Text>
                <_core.Text style={styles.time} small>
                    {props.status}
                </_core.Text>
            </_reactNative.View>
            <_core.Button type="secondary" small>
                {props.buttonText}
            </_core.Button>
        </_reactNative.View>
    </_core.Card>;
};

exports.Request = Request;

var styles = _reactNative.StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'row'
  },
  content: {
    marginLeft: 15,
    justifyContent: 'space-between'
  },
  fullName: {
    lineHeight: 18
  },
  time: {
    marginTop: 5,
    color: _utils.Colors.neutralLight
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9SZXF1ZXN0LnRzeCJdLCJuYW1lcyI6WyJSZXF1ZXN0IiwicHJvcHMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJzdHlsZSIsIm9uUHJlc3MiLCJjb250ZW50IiwiZnVsbE5hbWUiLCJyZWNpcGllbnRMYWJlbCIsInRpbWUiLCJzdGF0dXMiLCJidXR0b25UZXh0IiwiU3R5bGVTaGVldCIsImNyZWF0ZSIsInBhZGRpbmdIb3Jpem9udGFsIiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkxlZnQiLCJqdXN0aWZ5Q29udGVudCIsImxpbmVIZWlnaHQiLCJtYXJnaW5Ub3AiLCJjb2xvciIsIkNvbG9ycyIsIm5ldXRyYWxMaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUhBO0FBY0EsSUFBTUEsT0FBK0IsR0FBRyxTQUFsQ0EsT0FBa0MsQ0FBQUMsS0FBSztBQUFBLFNBQ3pDLFlBQU0sTUFBTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUixFQUFtQkYsS0FBSyxDQUFDRyxLQUF6QixDQUFELENBQVosQ0FBOEMsUUFBUSxDQUFDSCxLQUFLLENBQUNJLE9BQVAsQ0FBdEQ7UUFDSSx5QkFBZ0IsS0FBSyxRQUFyQixDQUE4QixPQUE5QjtRQUNBLG1CQUFNLE1BQU0sQ0FBQ0gsTUFBTSxDQUFDSSxPQUFSLENBQVo7WUFDSTtnQkFDSSxZQUFNLEtBQUssVUFBWCxDQUFzQixNQUFNLENBQUNKLE1BQU0sQ0FBQ0ssUUFBUixDQUE1QjtvQkFDSSxDQUFDTixLQUFLLENBQUNNLFFBQVA7Z0JBQ0o7Z0JBQ0EsWUFBTSxDQUFDTixLQUFLLENBQUNPLGNBQVAsQ0FBc0I7Z0JBQzVCLFlBQU0sTUFBTSxDQUFDTixNQUFNLENBQUNPLElBQVIsQ0FBWixDQUEwQixLQUExQjtvQkFDSSxDQUFDUixLQUFLLENBQUNTLE1BQVA7Z0JBQ0o7WUFDSjtZQUNBLGNBQVEsS0FBSyxXQUFiLENBQXlCLEtBQXpCO2dCQUNJLENBQUNULEtBQUssQ0FBQ1UsVUFBUDtZQUNKO1FBQ0o7SUFDSixhQWpCeUM7QUFBQSxDQUE3Qzs7OztBQW9CQSxJQUFNVCxNQUFNLEdBQUdVLHdCQUFXQyxNQUFYLENBQWtCO0FBQzdCVixFQUFBQSxTQUFTLEVBQUU7QUFDUFcsSUFBQUEsaUJBQWlCLEVBQUUsRUFEWjtBQUVQQyxJQUFBQSxhQUFhLEVBQUU7QUFGUixHQURrQjtBQUs3QlQsRUFBQUEsT0FBTyxFQUFFO0FBQ0xVLElBQUFBLFVBQVUsRUFBRSxFQURQO0FBRUxDLElBQUFBLGNBQWMsRUFBRTtBQUZYLEdBTG9CO0FBUzdCVixFQUFBQSxRQUFRLEVBQUU7QUFDTlcsSUFBQUEsVUFBVSxFQUFFO0FBRE4sR0FUbUI7QUFZN0JULEVBQUFBLElBQUksRUFBRTtBQUNGVSxJQUFBQSxTQUFTLEVBQUUsQ0FEVDtBQUVGQyxJQUFBQSxLQUFLLEVBQUVDLGNBQU9DO0FBRlo7QUFadUIsQ0FBbEIsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIFN0eWxlUHJvcCwgVmlldywgVmlld1N0eWxlIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gTGlicmFyeVxuaW1wb3J0IHsgVGV4dCwgQnV0dG9uLCBDYXJkIH0gZnJvbSAnY29tcG9uZW50cy9jb3JlJztcbmltcG9ydCB7IFByb2ZpbGVQaWN0dXJlIH0gZnJvbSAnY29tcG9uZW50cy9hY2NvdW50JztcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gJ3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UHJvcHMge1xuICAgIGZ1bGxOYW1lOiBzdHJpbmc7XG4gICAgcmVjaXBpZW50TGFiZWw6IHN0cmluZztcbiAgICBzdGF0dXM6IHN0cmluZztcbiAgICBidXR0b25UZXh0OiBzdHJpbmc7XG4gICAgb25QcmVzczogKCkgPT4gdm9pZDtcbiAgICBzdHlsZT86IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xufVxuXG5jb25zdCBSZXF1ZXN0OiBSZWFjdC5GQzxSZXF1ZXN0UHJvcHM+ID0gcHJvcHMgPT4gKFxuICAgIDxDYXJkIHN0eWxlPXtbc3R5bGVzLmNvbnRhaW5lciwgcHJvcHMuc3R5bGVdfSBvblByZXNzPXtwcm9wcy5vblByZXNzfT5cbiAgICAgICAgPFByb2ZpbGVQaWN0dXJlIHNpemU9XCJtZWRpdW1cIiBzcXVhcmVkIC8+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgICAgICA8VGV4dCB0eXBlPVwic2VtaWJvbGRcIiBzdHlsZT17c3R5bGVzLmZ1bGxOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmZ1bGxOYW1lfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dD57cHJvcHMucmVjaXBpZW50TGFiZWx9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGltZX0gc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zdGF0dXN9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic2Vjb25kYXJ5XCIgc21hbGw+XG4gICAgICAgICAgICAgICAge3Byb3BzLmJ1dHRvblRleHR9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9WaWV3PlxuICAgIDwvQ2FyZD5cbik7XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgICAgcGFkZGluZ0hvcml6b250YWw6IDE1LFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgbWFyZ2luTGVmdDogMTUsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgfSxcbiAgICBmdWxsTmFtZToge1xuICAgICAgICBsaW5lSGVpZ2h0OiAxOCxcbiAgICB9LFxuICAgIHRpbWU6IHtcbiAgICAgICAgbWFyZ2luVG9wOiA1LFxuICAgICAgICBjb2xvcjogQ29sb3JzLm5ldXRyYWxMaWdodCxcbiAgICB9LFxufSk7XG5cbmV4cG9ydCB7IFJlcXVlc3QgfTtcbiJdfQ==