"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactInlinesvg = _interopRequireDefault(require("react-inlinesvg"));

var _ethereumBlockiesBase = _interopRequireDefault(require("ethereum-blockies-base64"));

var _Options = _interopRequireDefault(require("../assets/Options.svg"));

var _Check = _interopRequireDefault(require("../assets/Check.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EditOptions =
/*#__PURE__*/
function (_Component) {
  _inherits(EditOptions, _Component);

  function EditOptions(props) {
    var _this;

    _classCallCheck(this, EditOptions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditOptions).call(this, props));
    _this.state = {
      showOptions: false,
      isAppProfileDefault: false
    };
    return _this;
  }

  _createClass(EditOptions, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var isAppProfileDefault = this.props.isAppProfileDefault;
      this.setState({
        isAppProfileDefault: isAppProfileDefault
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var isAppProfileDefault = this.props.isAppProfileDefault;

      if (prevProps.isAppProfileDefault !== isAppProfileDefault) {
        this.setState({
          isAppProfileDefault: isAppProfileDefault
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var isAppProfileDefault = this.state.isAppProfileDefault;
      var _this$props = this.props,
          handleSelectDefaultProfile = _this$props.handleSelectDefaultProfile,
          spaceProfileImage = _this$props.spaceProfileImage,
          image = _this$props.image,
          currentUserAddr = _this$props.currentUserAddr,
          showOptions = _this$props.showOptions,
          handleShowOptionsMenu = _this$props.handleShowOptionsMenu;
      return _react["default"].createElement("div", {
        className: "options_wrapper"
      }, _react["default"].createElement("button", {
        onClick: handleShowOptionsMenu,
        onKeyPress: handleShowOptionsMenu,
        className: "options_button",
        type: "button"
      }, _react["default"].createElement(_reactInlinesvg["default"], {
        src: _Options["default"],
        alt: "options",
        className: "options_button_icon"
      })), _react["default"].createElement("div", {
        className: "options_menu ".concat(showOptions ? 'show' : '')
      }, _react["default"].createElement("h5", {
        className: "options_menu_header"
      }, "Set default profile"), _react["default"].createElement("div", {
        className: "options_menu_section"
      }, _react["default"].createElement("div", {
        className: "options_menu_section_form"
      }, _react["default"].createElement("div", {
        className: "options_menu_section_option ".concat(isAppProfileDefault ? '' : 'selected'),
        onClick: handleSelectDefaultProfile
      }, _react["default"].createElement("img", {
        src: image.length ? "https://ipfs.infura.io/ipfs/".concat(image[0].contentUrl['/']) : (0, _ethereumBlockiesBase["default"])(currentUserAddr),
        className: "edit_profile_switch_pic",
        alt: "Other profile"
      }), _react["default"].createElement("p", null, "3Box Profile"), !isAppProfileDefault ? _react["default"].createElement(_reactInlinesvg["default"], {
        src: _Check["default"],
        alt: "options",
        className: "default_button_icon"
      }) : _react["default"].createElement("div", {
        className: "default_button_icon"
      })), _react["default"].createElement("div", {
        className: "options_menu_section_option ".concat(isAppProfileDefault ? 'selected' : ''),
        onClick: handleSelectDefaultProfile
      }, _react["default"].createElement("img", {
        src: spaceProfileImage.length ? "https://ipfs.infura.io/ipfs/".concat(spaceProfileImage[0].contentUrl['/']) : (0, _ethereumBlockiesBase["default"])(currentUserAddr),
        className: "edit_profile_switch_pic",
        alt: "Other profile"
      }), _react["default"].createElement("p", null, "App Profile"), isAppProfileDefault ? _react["default"].createElement(_reactInlinesvg["default"], {
        src: _Check["default"],
        alt: "options",
        className: "default_button_icon"
      }) : _react["default"].createElement("div", {
        className: "default_button_icon"
      }))))), showOptions && _react["default"].createElement("div", {
        className: "onClickOutside",
        onClick: handleShowOptionsMenu,
        onKeyPress: handleShowOptionsMenu,
        tabIndex: 0,
        role: "button"
      }));
    }
  }]);

  return EditOptions;
}(_react.Component);

EditOptions.propTypes = {
  handleSelectDefaultProfile: _propTypes["default"].func.isRequired,
  image: _propTypes["default"].array,
  spaceProfileImage: _propTypes["default"].array,
  currentUserAddr: _propTypes["default"].string,
  showOptions: _propTypes["default"].bool,
  isAppProfileDefault: _propTypes["default"].bool,
  handleShowOptionsMenu: _propTypes["default"].func
};
EditOptions.defaultProps = {
  image: [],
  spaceProfileImage: []
};
var _default = EditOptions;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0VkaXRPcHRpb25zLmpzeCJdLCJuYW1lcyI6WyJFZGl0T3B0aW9ucyIsInByb3BzIiwic3RhdGUiLCJzaG93T3B0aW9ucyIsImlzQXBwUHJvZmlsZURlZmF1bHQiLCJzZXRTdGF0ZSIsInByZXZQcm9wcyIsImhhbmRsZVNlbGVjdERlZmF1bHRQcm9maWxlIiwic3BhY2VQcm9maWxlSW1hZ2UiLCJpbWFnZSIsImN1cnJlbnRVc2VyQWRkciIsImhhbmRsZVNob3dPcHRpb25zTWVudSIsIk9wdGlvbnMiLCJsZW5ndGgiLCJjb250ZW50VXJsIiwiQ2hlY2siLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImFycmF5Iiwic3RyaW5nIiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLHFGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLFdBQVcsRUFBRSxLQURGO0FBRVhDLE1BQUFBLG1CQUFtQixFQUFFO0FBRlYsS0FBYjtBQUZpQjtBQU1sQjs7Ozt3Q0FFbUI7QUFBQSxVQUNWQSxtQkFEVSxHQUNjLEtBQUtILEtBRG5CLENBQ1ZHLG1CQURVO0FBRWxCLFdBQUtDLFFBQUwsQ0FBYztBQUFFRCxRQUFBQSxtQkFBbUIsRUFBbkJBO0FBQUYsT0FBZDtBQUNEOzs7dUNBRWtCRSxTLEVBQVc7QUFBQSxVQUNwQkYsbUJBRG9CLEdBQ0ksS0FBS0gsS0FEVCxDQUNwQkcsbUJBRG9COztBQUU1QixVQUFJRSxTQUFTLENBQUNGLG1CQUFWLEtBQWtDQSxtQkFBdEMsRUFBMkQ7QUFDekQsYUFBS0MsUUFBTCxDQUFjO0FBQUVELFVBQUFBLG1CQUFtQixFQUFuQkE7QUFBRixTQUFkO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQUEsVUFFTEEsbUJBRkssR0FHSCxLQUFLRixLQUhGLENBRUxFLG1CQUZLO0FBQUEsd0JBWUgsS0FBS0gsS0FaRjtBQUFBLFVBTUxNLDBCQU5LLGVBTUxBLDBCQU5LO0FBQUEsVUFPTEMsaUJBUEssZUFPTEEsaUJBUEs7QUFBQSxVQVFMQyxLQVJLLGVBUUxBLEtBUks7QUFBQSxVQVNMQyxlQVRLLGVBU0xBLGVBVEs7QUFBQSxVQVVMUCxXQVZLLGVBVUxBLFdBVks7QUFBQSxVQVdMUSxxQkFYSyxlQVdMQSxxQkFYSztBQWNQLGFBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0U7QUFDRSxRQUFBLE9BQU8sRUFBRUEscUJBRFg7QUFFRSxRQUFBLFVBQVUsRUFBRUEscUJBRmQ7QUFHRSxRQUFBLFNBQVMsRUFBQyxnQkFIWjtBQUlFLFFBQUEsSUFBSSxFQUFDO0FBSlAsU0FNRSxnQ0FBQywwQkFBRDtBQUNFLFFBQUEsR0FBRyxFQUFFQyxtQkFEUDtBQUVFLFFBQUEsR0FBRyxFQUFDLFNBRk47QUFHRSxRQUFBLFNBQVMsRUFBQztBQUhaLFFBTkYsQ0FERixFQWNFO0FBQUssUUFBQSxTQUFTLHlCQUFrQlQsV0FBVyxHQUFHLE1BQUgsR0FBWSxFQUF6QztBQUFkLFNBQ0U7QUFBSSxRQUFBLFNBQVMsRUFBQztBQUFkLCtCQURGLEVBS0U7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0U7QUFDRSxRQUFBLFNBQVMsd0NBQWlDQyxtQkFBbUIsR0FBRyxFQUFILEdBQVEsVUFBNUQsQ0FEWDtBQUVFLFFBQUEsT0FBTyxFQUFFRztBQUZYLFNBSUU7QUFDRSxRQUFBLEdBQUcsRUFBRUUsS0FBSyxDQUFDSSxNQUFOLHlDQUE4Q0osS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTSyxVQUFULENBQW9CLEdBQXBCLENBQTlDLElBQTJFLHNDQUFZSixlQUFaLENBRGxGO0FBRUUsUUFBQSxTQUFTLEVBQUMseUJBRlo7QUFHRSxRQUFBLEdBQUcsRUFBQztBQUhOLFFBSkYsRUFVRSwwREFWRixFQWNHLENBQUNOLG1CQUFELEdBQ0MsZ0NBQUMsMEJBQUQ7QUFDRSxRQUFBLEdBQUcsRUFBRVcsaUJBRFA7QUFFRSxRQUFBLEdBQUcsRUFBQyxTQUZOO0FBR0UsUUFBQSxTQUFTLEVBQUM7QUFIWixRQURELEdBTUc7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFFBcEJOLENBREYsRUF3QkU7QUFDRSxRQUFBLFNBQVMsd0NBQWlDWCxtQkFBbUIsR0FBRyxVQUFILEdBQWdCLEVBQXBFLENBRFg7QUFFRSxRQUFBLE9BQU8sRUFBRUc7QUFGWCxTQUlFO0FBQ0UsUUFBQSxHQUFHLEVBQUVDLGlCQUFpQixDQUFDSyxNQUFsQix5Q0FBMERMLGlCQUFpQixDQUFDLENBQUQsQ0FBakIsQ0FBcUJNLFVBQXJCLENBQWdDLEdBQWhDLENBQTFELElBQW1HLHNDQUFZSixlQUFaLENBRDFHO0FBRUUsUUFBQSxTQUFTLEVBQUMseUJBRlo7QUFHRSxRQUFBLEdBQUcsRUFBQztBQUhOLFFBSkYsRUFVRSx5REFWRixFQWNHTixtQkFBbUIsR0FDbEIsZ0NBQUMsMEJBQUQ7QUFDRSxRQUFBLEdBQUcsRUFBRVcsaUJBRFA7QUFFRSxRQUFBLEdBQUcsRUFBQyxTQUZOO0FBR0UsUUFBQSxTQUFTLEVBQUM7QUFIWixRQURrQixHQU1oQjtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsUUFwQk4sQ0F4QkYsQ0FERixDQUxGLENBZEYsRUFzRUdaLFdBQVcsSUFDVjtBQUNFLFFBQUEsU0FBUyxFQUFDLGdCQURaO0FBRUUsUUFBQSxPQUFPLEVBQUVRLHFCQUZYO0FBR0UsUUFBQSxVQUFVLEVBQUVBLHFCQUhkO0FBSUUsUUFBQSxRQUFRLEVBQUUsQ0FKWjtBQUtFLFFBQUEsSUFBSSxFQUFDO0FBTFAsUUF2RUosQ0FERjtBQWtGRDs7OztFQXJIdUJLLGdCOztBQXdIMUJoQixXQUFXLENBQUNpQixTQUFaLEdBQXdCO0FBQ3RCVixFQUFBQSwwQkFBMEIsRUFBRVcsc0JBQVVDLElBQVYsQ0FBZUMsVUFEckI7QUFFdEJYLEVBQUFBLEtBQUssRUFBRVMsc0JBQVVHLEtBRks7QUFHdEJiLEVBQUFBLGlCQUFpQixFQUFFVSxzQkFBVUcsS0FIUDtBQUl0QlgsRUFBQUEsZUFBZSxFQUFFUSxzQkFBVUksTUFKTDtBQUt0Qm5CLEVBQUFBLFdBQVcsRUFBRWUsc0JBQVVLLElBTEQ7QUFNdEJuQixFQUFBQSxtQkFBbUIsRUFBRWMsc0JBQVVLLElBTlQ7QUFPdEJaLEVBQUFBLHFCQUFxQixFQUFFTyxzQkFBVUM7QUFQWCxDQUF4QjtBQVVBbkIsV0FBVyxDQUFDd0IsWUFBWixHQUEyQjtBQUN6QmYsRUFBQUEsS0FBSyxFQUFFLEVBRGtCO0FBRXpCRCxFQUFBQSxpQkFBaUIsRUFBRTtBQUZNLENBQTNCO2VBS2VSLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTVkcgZnJvbSAncmVhY3QtaW5saW5lc3ZnJztcbmltcG9ydCBtYWtlQmxvY2tpZSBmcm9tICdldGhlcmV1bS1ibG9ja2llcy1iYXNlNjQnO1xuXG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuLi9hc3NldHMvT3B0aW9ucy5zdmcnO1xuaW1wb3J0IENoZWNrIGZyb20gJy4uL2Fzc2V0cy9DaGVjay5zdmcnO1xuXG5jbGFzcyBFZGl0T3B0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93T3B0aW9uczogZmFsc2UsXG4gICAgICBpc0FwcFByb2ZpbGVEZWZhdWx0OiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGlzQXBwUHJvZmlsZURlZmF1bHQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzQXBwUHJvZmlsZURlZmF1bHQgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3QgeyBpc0FwcFByb2ZpbGVEZWZhdWx0IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChwcmV2UHJvcHMuaXNBcHBQcm9maWxlRGVmYXVsdCAhPT0gaXNBcHBQcm9maWxlRGVmYXVsdCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzQXBwUHJvZmlsZURlZmF1bHQgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzQXBwUHJvZmlsZURlZmF1bHRcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHtcbiAgICAgIGhhbmRsZVNlbGVjdERlZmF1bHRQcm9maWxlLFxuICAgICAgc3BhY2VQcm9maWxlSW1hZ2UsXG4gICAgICBpbWFnZSxcbiAgICAgIGN1cnJlbnRVc2VyQWRkcixcbiAgICAgIHNob3dPcHRpb25zLFxuICAgICAgaGFuZGxlU2hvd09wdGlvbnNNZW51LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uc193cmFwcGVyXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaG93T3B0aW9uc01lbnV9XG4gICAgICAgICAgb25LZXlQcmVzcz17aGFuZGxlU2hvd09wdGlvbnNNZW51fVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9wdGlvbnNfYnV0dG9uXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTVkdcbiAgICAgICAgICAgIHNyYz17T3B0aW9uc31cbiAgICAgICAgICAgIGFsdD1cIm9wdGlvbnNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3B0aW9uc19idXR0b25faWNvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BvcHRpb25zX21lbnUgJHtzaG93T3B0aW9ucyA/ICdzaG93JyA6ICcnfWB9PlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJvcHRpb25zX21lbnVfaGVhZGVyXCI+XG4gICAgICAgICAgICBTZXQgZGVmYXVsdCBwcm9maWxlXG4gICAgICAgICAgPC9oNT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uc19tZW51X3NlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uc19tZW51X3NlY3Rpb25fZm9ybVwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgb3B0aW9uc19tZW51X3NlY3Rpb25fb3B0aW9uICR7aXNBcHBQcm9maWxlRGVmYXVsdCA/ICcnIDogJ3NlbGVjdGVkJ31gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdERlZmF1bHRQcm9maWxlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZS5sZW5ndGggPyBgaHR0cHM6Ly9pcGZzLmluZnVyYS5pby9pcGZzLyR7aW1hZ2VbMF0uY29udGVudFVybFsnLyddfWAgOiBtYWtlQmxvY2tpZShjdXJyZW50VXNlckFkZHIpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX3N3aXRjaF9waWNcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiT3RoZXIgcHJvZmlsZVwiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgM0JveCBQcm9maWxlXG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgeyFpc0FwcFByb2ZpbGVEZWZhdWx0ID8gKFxuICAgICAgICAgICAgICAgICAgPFNWR1xuICAgICAgICAgICAgICAgICAgICBzcmM9e0NoZWNrfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJvcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVmYXVsdF9idXR0b25faWNvblwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiA8ZGl2IGNsYXNzTmFtZT1cImRlZmF1bHRfYnV0dG9uX2ljb25cIiAvPn1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG9wdGlvbnNfbWVudV9zZWN0aW9uX29wdGlvbiAke2lzQXBwUHJvZmlsZURlZmF1bHQgPyAnc2VsZWN0ZWQnIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWxlY3REZWZhdWx0UHJvZmlsZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17c3BhY2VQcm9maWxlSW1hZ2UubGVuZ3RoID8gYGh0dHBzOi8vaXBmcy5pbmZ1cmEuaW8vaXBmcy8ke3NwYWNlUHJvZmlsZUltYWdlWzBdLmNvbnRlbnRVcmxbJy8nXX1gIDogbWFrZUJsb2NraWUoY3VycmVudFVzZXJBZGRyKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9zd2l0Y2hfcGljXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIk90aGVyIHByb2ZpbGVcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIEFwcCBQcm9maWxlXG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAge2lzQXBwUHJvZmlsZURlZmF1bHQgPyAoXG4gICAgICAgICAgICAgICAgICA8U1ZHXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Q2hlY2t9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWZhdWx0X2J1dHRvbl9pY29uXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IDxkaXYgY2xhc3NOYW1lPVwiZGVmYXVsdF9idXR0b25faWNvblwiIC8+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7c2hvd09wdGlvbnMgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9uQ2xpY2tPdXRzaWRlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNob3dPcHRpb25zTWVudX1cbiAgICAgICAgICAgIG9uS2V5UHJlc3M9e2hhbmRsZVNob3dPcHRpb25zTWVudX1cbiAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRWRpdE9wdGlvbnMucHJvcFR5cGVzID0ge1xuICBoYW5kbGVTZWxlY3REZWZhdWx0UHJvZmlsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaW1hZ2U6IFByb3BUeXBlcy5hcnJheSxcbiAgc3BhY2VQcm9maWxlSW1hZ2U6IFByb3BUeXBlcy5hcnJheSxcbiAgY3VycmVudFVzZXJBZGRyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaG93T3B0aW9uczogUHJvcFR5cGVzLmJvb2wsXG4gIGlzQXBwUHJvZmlsZURlZmF1bHQ6IFByb3BUeXBlcy5ib29sLFxuICBoYW5kbGVTaG93T3B0aW9uc01lbnU6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuRWRpdE9wdGlvbnMuZGVmYXVsdFByb3BzID0ge1xuICBpbWFnZTogW10sXG4gIHNwYWNlUHJvZmlsZUltYWdlOiBbXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRPcHRpb25zOyJdfQ==