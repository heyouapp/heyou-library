var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.ListItem=void 0;var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _index=require("./index");var _utils=require("../../utils");var _jsxFileName="/Users/juanmanuelcb/Projects/Heyou/Library/src/components/core/ListItem.tsx";var ListItem=function ListItem(props){return React.createElement(_reactNative.TouchableWithoutFeedback,{onPress:props.onPress,__source:{fileName:_jsxFileName,lineNumber:15}},React.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:16}},props.value===undefined&&React.createElement(_index.Text,{style:styles.label,__source:{fileName:_jsxFileName,lineNumber:18}},props.label),props.value&&React.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:21}},React.createElement(_index.Text,{style:styles.label_small,uppercase:true,small:true,__source:{fileName:_jsxFileName,lineNumber:22}},props.label),React.createElement(_index.Text,{style:styles.value,__source:{fileName:_jsxFileName,lineNumber:25}},props.value)),React.createElement(_index.Icon,{name:"arrowRightBold",__source:{fileName:_jsxFileName,lineNumber:28}})));};exports.ListItem=ListItem;var styles=_reactNative.StyleSheet.create({container:{borderBottomWidth:1,borderBottomColor:_utils.Colors.greyLight,paddingVertical:16,alignItems:'center',justifyContent:'space-between',flexDirection:'row'},label:{color:_utils.Colors.neutralLight},label_small:{},value:{color:_utils.Colors.neutralLight}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvcmUvTGlzdEl0ZW0udHN4Il0sIm5hbWVzIjpbIkxpc3RJdGVtIiwicHJvcHMiLCJvblByZXNzIiwic3R5bGVzIiwiY29udGFpbmVyIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJsYWJlbCIsImxhYmVsX3NtYWxsIiwiU3R5bGVTaGVldCIsImNyZWF0ZSIsImJvcmRlckJvdHRvbVdpZHRoIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJDb2xvcnMiLCJncmV5TGlnaHQiLCJwYWRkaW5nVmVydGljYWwiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiY29sb3IiLCJuZXV0cmFsTGlnaHQiXSwibWFwcGluZ3MiOiJzS0FBQSxvREFDQSx5Q0FHQSw4QkFDQSxrQywrRkFRQSxHQUFNQSxDQUFBQSxRQUFRLENBQUcsUUFBWEEsQ0FBQUEsUUFBVyxDQUFDQyxLQUFELFFBQ2IscUJBQUMscUNBQUQsRUFBMEIsT0FBTyxDQUFFQSxLQUFLLENBQUNDLE9BQXpDLGlEQUNJLG9CQUFDLGlCQUFELEVBQU0sS0FBSyxDQUFFQyxNQUFNLENBQUNDLFNBQXBCLGlEQUNLSCxLQUFLLENBQUNJLEtBQU4sR0FBZ0JDLFNBQWhCLEVBQ0csb0JBQUMsV0FBRCxFQUFNLEtBQUssQ0FBRUgsTUFBTSxDQUFDSSxLQUFwQixpREFBNEJOLEtBQUssQ0FBQ00sS0FBbEMsQ0FGUixDQUlLTixLQUFLLENBQUNJLEtBQU4sRUFDRyxvQkFBQyxpQkFBRCxrREFDSSxvQkFBQyxXQUFELEVBQU0sS0FBSyxDQUFFRixNQUFNLENBQUNLLFdBQXBCLENBQWlDLFNBQVMsS0FBMUMsQ0FBMkMsS0FBSyxLQUFoRCxpREFDS1AsS0FBSyxDQUFDTSxLQURYLENBREosQ0FJSSxvQkFBQyxXQUFELEVBQU0sS0FBSyxDQUFFSixNQUFNLENBQUNFLEtBQXBCLGlEQUE0QkosS0FBSyxDQUFDSSxLQUFsQyxDQUpKLENBTFIsQ0FZSSxvQkFBQyxXQUFELEVBQU0sSUFBSSxDQUFDLGdCQUFYLGlEQVpKLENBREosQ0FEYSxFQUFqQixDLDBCQW1CQSxHQUFNRixDQUFBQSxNQUFNLENBQUdNLHdCQUFXQyxNQUFYLENBQWtCLENBQzdCTixTQUFTLENBQUUsQ0FDUE8saUJBQWlCLENBQUUsQ0FEWixDQUVQQyxpQkFBaUIsQ0FBRUMsY0FBT0MsU0FGbkIsQ0FHUEMsZUFBZSxDQUFFLEVBSFYsQ0FJUEMsVUFBVSxDQUFFLFFBSkwsQ0FLUEMsY0FBYyxDQUFFLGVBTFQsQ0FNUEMsYUFBYSxDQUFFLEtBTlIsQ0FEa0IsQ0FTN0JYLEtBQUssQ0FBRSxDQUNIWSxLQUFLLENBQUVOLGNBQU9PLFlBRFgsQ0FUc0IsQ0FZN0JaLFdBQVcsQ0FBRSxFQVpnQixDQWE3QkgsS0FBSyxDQUFFLENBQ0hjLEtBQUssQ0FBRU4sY0FBT08sWUFEWCxDQWJzQixDQUFsQixDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVmlldywgVG91Y2hhYmxlV2l0aG91dEZlZWRiYWNrIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gTGlicmFyeVxuaW1wb3J0IHsgVGV4dCwgSWNvbiB9IGZyb20gJ2NvbXBvbmVudHMvY29yZSc7XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICd1dGlscyc7XG5cbmludGVyZmFjZSBMaXN0SXRlbVByb3BzIHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHZhbHVlPzogc3RyaW5nO1xuICAgIG9uUHJlc3M6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IExpc3RJdGVtID0gKHByb3BzOiBMaXN0SXRlbVByb3BzKSA9PiAoXG4gICAgPFRvdWNoYWJsZVdpdGhvdXRGZWVkYmFjayBvblByZXNzPXtwcm9wcy5vblByZXNzfT5cbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAge3Byb3BzLnZhbHVlID09PSB1bmRlZmluZWQgJiYgKFxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMubGFiZWx9Pntwcm9wcy5sYWJlbH08L1RleHQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Byb3BzLnZhbHVlICYmIChcbiAgICAgICAgICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5sYWJlbF9zbWFsbH0gdXBwZXJjYXNlIHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudmFsdWV9Pntwcm9wcy52YWx1ZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJhcnJvd1JpZ2h0Qm9sZFwiIC8+XG4gICAgICAgIDwvVmlldz5cbiAgICA8L1RvdWNoYWJsZVdpdGhvdXRGZWVkYmFjaz5cbik7XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6IDEsXG4gICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiBDb2xvcnMuZ3JleUxpZ2h0LFxuICAgICAgICBwYWRkaW5nVmVydGljYWw6IDE2LFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdydcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICAgIGNvbG9yOiBDb2xvcnMubmV1dHJhbExpZ2h0XG4gICAgfSxcbiAgICBsYWJlbF9zbWFsbDoge30sXG4gICAgdmFsdWU6IHtcbiAgICAgICAgY29sb3I6IENvbG9ycy5uZXV0cmFsTGlnaHRcbiAgICB9XG59KTtcblxuZXhwb3J0IHsgTGlzdEl0ZW0gfTtcbiJdfQ==