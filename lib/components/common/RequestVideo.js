"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestVideo = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _core = require("../core");

var _index = require("./index");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Library
var RequestVideo = function RequestVideo(props) {
  return <_core.Card style={[styles.container, props.style]}>
        <_reactNative.View style={styles.header}>
            <_core.Text small>
                Video completed on{' '}
                <_core.Text type="semibold" small>
                    {props.completedLabel}
                </_core.Text>
            </_core.Text>
            <_index.Share onPress={props.onShare} />
        </_reactNative.View>
        <_core.Video {...props} />
        {props.review && <_index.Review {...props.review} style={styles.review} />}
    </_core.Card>;
};

exports.RequestVideo = RequestVideo;

var styles = _reactNative.StyleSheet.create({
  container: {
    paddingTop: 0
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 7.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  review: {
    paddingTop: 15,
    paddingHorizontal: 15
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9SZXF1ZXN0VmlkZW8udHN4Il0sIm5hbWVzIjpbIlJlcXVlc3RWaWRlbyIsInByb3BzIiwic3R5bGVzIiwiY29udGFpbmVyIiwic3R5bGUiLCJoZWFkZXIiLCJjb21wbGV0ZWRMYWJlbCIsIm9uU2hhcmUiLCJyZXZpZXciLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwicGFkZGluZ1RvcCIsInBhZGRpbmdIb3Jpem9udGFsIiwicGFkZGluZ1ZlcnRpY2FsIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7O0FBQ0E7Ozs7OztBQUZBO0FBV0EsSUFBTUEsWUFBeUMsR0FBRyxTQUE1Q0EsWUFBNEMsQ0FBQUMsS0FBSztBQUFBLFNBQ25ELFlBQU0sTUFBTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUixFQUFtQkYsS0FBSyxDQUFDRyxLQUF6QixDQUFELENBQVo7UUFDSSxtQkFBTSxNQUFNLENBQUNGLE1BQU0sQ0FBQ0csTUFBUixDQUFaO1lBQ0ksWUFBTSxLQUFOO2tDQUNzQixDQUFDLEdBQUQ7Z0JBQ2xCLFlBQU0sS0FBSyxVQUFYLENBQXNCLEtBQXRCO29CQUNJLENBQUNKLEtBQUssQ0FBQ0ssY0FBUDtnQkFDSjtZQUNKO1lBQ0EsY0FBTyxRQUFRLENBQUNMLEtBQUssQ0FBQ00sT0FBUCxDQUFmO1FBQ0o7UUFDQSxhQUFPLElBQUlOLEtBQUosQ0FBUDtRQUNBLENBQUNBLEtBQUssQ0FBQ08sTUFBTixJQUFnQixlQUFRLElBQUlQLEtBQUssQ0FBQ08sTUFBVixDQUFSLENBQTBCLE1BQU0sQ0FBQ04sTUFBTSxDQUFDTSxNQUFSLENBQWhDLEdBQWpCO0lBQ0osYUFibUQ7QUFBQSxDQUF2RDs7OztBQWdCQSxJQUFNTixNQUFNLEdBQUdPLHdCQUFXQyxNQUFYLENBQWtCO0FBQzdCUCxFQUFBQSxTQUFTLEVBQUU7QUFDUFEsSUFBQUEsVUFBVSxFQUFFO0FBREwsR0FEa0I7QUFJN0JOLEVBQUFBLE1BQU0sRUFBRTtBQUNKTyxJQUFBQSxpQkFBaUIsRUFBRSxFQURmO0FBRUpDLElBQUFBLGVBQWUsRUFBRSxHQUZiO0FBR0pDLElBQUFBLGFBQWEsRUFBRSxLQUhYO0FBSUpDLElBQUFBLFVBQVUsRUFBRSxRQUpSO0FBS0pDLElBQUFBLGNBQWMsRUFBRTtBQUxaLEdBSnFCO0FBVzdCUixFQUFBQSxNQUFNLEVBQUU7QUFDSkcsSUFBQUEsVUFBVSxFQUFFLEVBRFI7QUFFSkMsSUFBQUEsaUJBQWlCLEVBQUU7QUFGZjtBQVhxQixDQUFsQixDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgU3R5bGVQcm9wLCBWaWV3LCBWaWV3U3R5bGUgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBMaWJyYXJ5XG5pbXBvcnQgeyBUZXh0LCBDYXJkLCBWaWRlbywgVmlkZW9Qcm9wcyB9IGZyb20gJ2NvbXBvbmVudHMvY29yZSc7XG5pbXBvcnQgeyBTaGFyZSwgUmV2aWV3LCBSZXZpZXdQcm9wcyB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0VmlkZW9Qcm9wcyBleHRlbmRzIFZpZGVvUHJvcHMge1xuICAgIHJldmlldz86IFJldmlld1Byb3BzO1xuICAgIGNvbXBsZXRlZExhYmVsOiBzdHJpbmc7XG4gICAgb25TaGFyZTogKCkgPT4gdm9pZDtcbiAgICBzdHlsZT86IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xufVxuXG5jb25zdCBSZXF1ZXN0VmlkZW86IFJlYWN0LkZDPFJlcXVlc3RWaWRlb1Byb3BzPiA9IHByb3BzID0+IChcbiAgICA8Q2FyZCBzdHlsZT17W3N0eWxlcy5jb250YWluZXIsIHByb3BzLnN0eWxlXX0+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgIDxUZXh0IHNtYWxsPlxuICAgICAgICAgICAgICAgIFZpZGVvIGNvbXBsZXRlZCBvbnsnICd9XG4gICAgICAgICAgICAgICAgPFRleHQgdHlwZT1cInNlbWlib2xkXCIgc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jb21wbGV0ZWRMYWJlbH1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8U2hhcmUgb25QcmVzcz17cHJvcHMub25TaGFyZX0gLz5cbiAgICAgICAgPC9WaWV3PlxuICAgICAgICA8VmlkZW8gey4uLnByb3BzfSAvPlxuICAgICAgICB7cHJvcHMucmV2aWV3ICYmIDxSZXZpZXcgey4uLnByb3BzLnJldmlld30gc3R5bGU9e3N0eWxlcy5yZXZpZXd9IC8+fVxuICAgIDwvQ2FyZD5cbik7XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogMCxcbiAgICB9LFxuICAgIGhlYWRlcjoge1xuICAgICAgICBwYWRkaW5nSG9yaXpvbnRhbDogMTAsXG4gICAgICAgIHBhZGRpbmdWZXJ0aWNhbDogNy41LFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgfSxcbiAgICByZXZpZXc6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogMTUsXG4gICAgICAgIHBhZGRpbmdIb3Jpem9udGFsOiAxNSxcbiAgICB9LFxufSk7XG5cbmV4cG9ydCB7IFJlcXVlc3RWaWRlbyB9O1xuIl19