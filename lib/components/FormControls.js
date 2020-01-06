"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactInlinesvg = _interopRequireDefault(require("react-inlinesvg"));

var _Copy = _interopRequireDefault(require("../assets/Copy.svg"));

var _Loading = _interopRequireDefault(require("../assets/Loading.svg"));

var _Check = _interopRequireDefault(require("../assets/Check.svg"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormControls =
/*#__PURE__*/
function (_Component) {
  _inherits(FormControls, _Component);

  function FormControls(props) {
    var _this;

    _classCallCheck(this, FormControls);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormControls).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleCopySuccessful", function () {
      var currentUserAddr = _this.props.currentUserAddr;
      (0, _utils.copyToClipBoard)(currentUserAddr);
      setTimeout(function () {
        _this.setState({
          copySuccessful: true
        });
      }, 1);
      setTimeout(function () {
        _this.setState({
          copySuccessful: false
        });
      }, 2000);
    });

    _this.state = {
      copySuccessful: false
    };
    return _this;
  }

  _createClass(FormControls, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          handleSubmit = _this$props.handleSubmit,
          redirectFn = _this$props.redirectFn,
          currentUserAddr = _this$props.currentUserAddr,
          isSaveLoading = _this$props.isSaveLoading,
          isSaveSuccessful = _this$props.isSaveSuccessful;
      var copySuccessful = this.state.copySuccessful;
      return _react["default"].createElement("div", {
        className: "edit_formControls"
      }, _react["default"].createElement("div", {
        title: currentUserAddr,
        className: "edit_formControls_address",
        onClick: this.handleCopySuccessful
      }, (0, _utils.shortenEthAddr)(currentUserAddr), _react["default"].createElement(_reactInlinesvg["default"], {
        className: "edit_formControls_address_icon",
        src: _Copy["default"],
        alt: "Copy to clipboard"
      }), copySuccessful && _react["default"].createElement(_reactInlinesvg["default"], {
        className: "edit_formControls_address_copy",
        src: _Check["default"],
        alt: "Copy successful"
      })), _react["default"].createElement("div", {
        className: "edit_formControls_content"
      }, isSaveLoading && _react["default"].createElement(_reactInlinesvg["default"], {
        src: _Loading["default"],
        alt: "loading",
        className: "edit_load"
      }), isSaveSuccessful && _react["default"].createElement(_reactInlinesvg["default"], {
        className: "edit_formControls_address_copy",
        src: _Check["default"],
        alt: "Save successful"
      }), _react["default"].createElement("button", {
        type: "submit",
        className: "edit_formControls_content_save",
        onClick: function onClick(e) {
          return handleSubmit(e);
        }
      }, "Save"), redirectFn && _react["default"].createElement("button", {
        className: "edit_cancel",
        onClick: function onClick() {
          return redirectFn(currentUserAddr);
        }
      }, "Cancel")));
    }
  }]);

  return FormControls;
}(_react.Component);

FormControls.propTypes = {
  currentUserAddr: _propTypes["default"].string,
  redirectFn: _propTypes["default"].func,
  handleSubmit: _propTypes["default"].func,
  isSaveLoading: _propTypes["default"].bool,
  isSaveSuccessful: _propTypes["default"].bool
};
FormControls.defaultProps = {
  currentUserAddr: '',
  isSaveLoading: false,
  isSaveSuccessful: false
};
var _default = FormControls;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm1Db250cm9scy5qc3giXSwibmFtZXMiOlsiRm9ybUNvbnRyb2xzIiwicHJvcHMiLCJjdXJyZW50VXNlckFkZHIiLCJzZXRUaW1lb3V0Iiwic2V0U3RhdGUiLCJjb3B5U3VjY2Vzc2Z1bCIsInN0YXRlIiwiaGFuZGxlU3VibWl0IiwicmVkaXJlY3RGbiIsImlzU2F2ZUxvYWRpbmciLCJpc1NhdmVTdWNjZXNzZnVsIiwiaGFuZGxlQ29weVN1Y2Nlc3NmdWwiLCJDb3B5IiwiQ2hlY2siLCJMb2FkaW5nIiwiZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsWTs7Ozs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixzRkFBTUEsS0FBTjs7QUFEaUIsMkVBT0ksWUFBTTtBQUFBLFVBQ25CQyxlQURtQixHQUNDLE1BQUtELEtBRE4sQ0FDbkJDLGVBRG1CO0FBRTNCLGtDQUFnQkEsZUFBaEI7QUFFQUMsTUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZixjQUFLQyxRQUFMLENBQWM7QUFBRUMsVUFBQUEsY0FBYyxFQUFFO0FBQWxCLFNBQWQ7QUFDRCxPQUZTLEVBRVAsQ0FGTyxDQUFWO0FBR0FGLE1BQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2YsY0FBS0MsUUFBTCxDQUFjO0FBQUVDLFVBQUFBLGNBQWMsRUFBRTtBQUFsQixTQUFkO0FBQ0QsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEtBakJrQjs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hELE1BQUFBLGNBQWMsRUFBRTtBQURMLEtBQWI7QUFGaUI7QUFLbEI7Ozs7NkJBY1E7QUFBQSx3QkFPSCxLQUFLSixLQVBGO0FBQUEsVUFFTE0sWUFGSyxlQUVMQSxZQUZLO0FBQUEsVUFHTEMsVUFISyxlQUdMQSxVQUhLO0FBQUEsVUFJTE4sZUFKSyxlQUlMQSxlQUpLO0FBQUEsVUFLTE8sYUFMSyxlQUtMQSxhQUxLO0FBQUEsVUFNTEMsZ0JBTkssZUFNTEEsZ0JBTks7QUFBQSxVQVFDTCxjQVJELEdBUW9CLEtBQUtDLEtBUnpCLENBUUNELGNBUkQ7QUFVUCxhQUNFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUVFO0FBQ0UsUUFBQSxLQUFLLEVBQUVILGVBRFQ7QUFFRSxRQUFBLFNBQVMsRUFBQywyQkFGWjtBQUdFLFFBQUEsT0FBTyxFQUFFLEtBQUtTO0FBSGhCLFNBS0csMkJBQWVULGVBQWYsQ0FMSCxFQU1FLGdDQUFDLDBCQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUMsZ0NBRFo7QUFFRSxRQUFBLEdBQUcsRUFBRVUsZ0JBRlA7QUFHRSxRQUFBLEdBQUcsRUFBQztBQUhOLFFBTkYsRUFZR1AsY0FBYyxJQUNiLGdDQUFDLDBCQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUMsZ0NBRFo7QUFFRSxRQUFBLEdBQUcsRUFBRVEsaUJBRlA7QUFHRSxRQUFBLEdBQUcsRUFBQztBQUhOLFFBYkosQ0FGRixFQXVCRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDR0osYUFBYSxJQUFJLGdDQUFDLDBCQUFEO0FBQUssUUFBQSxHQUFHLEVBQUVLLG1CQUFWO0FBQW1CLFFBQUEsR0FBRyxFQUFDLFNBQXZCO0FBQWlDLFFBQUEsU0FBUyxFQUFDO0FBQTNDLFFBRHBCLEVBR0dKLGdCQUFnQixJQUNmLGdDQUFDLDBCQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUMsZ0NBRFo7QUFFRSxRQUFBLEdBQUcsRUFBRUcsaUJBRlA7QUFHRSxRQUFBLEdBQUcsRUFBQztBQUhOLFFBSkosRUFXRTtBQUNFLFFBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxRQUFBLFNBQVMsRUFBQyxnQ0FGWjtBQUdFLFFBQUEsT0FBTyxFQUFFLGlCQUFDRSxDQUFEO0FBQUEsaUJBQU9SLFlBQVksQ0FBQ1EsQ0FBRCxDQUFuQjtBQUFBO0FBSFgsZ0JBWEYsRUFvQkdQLFVBQVUsSUFDVDtBQUNFLFFBQUEsU0FBUyxFQUFDLGFBRFo7QUFFRSxRQUFBLE9BQU8sRUFBRTtBQUFBLGlCQUFNQSxVQUFVLENBQUNOLGVBQUQsQ0FBaEI7QUFBQTtBQUZYLGtCQXJCSixDQXZCRixDQURGO0FBdUREOzs7O0VBckZ3QmMsZ0I7O0FBd0YzQmhCLFlBQVksQ0FBQ2lCLFNBQWIsR0FBeUI7QUFDdkJmLEVBQUFBLGVBQWUsRUFBRWdCLHNCQUFVQyxNQURKO0FBRXZCWCxFQUFBQSxVQUFVLEVBQUVVLHNCQUFVRSxJQUZDO0FBR3ZCYixFQUFBQSxZQUFZLEVBQUVXLHNCQUFVRSxJQUhEO0FBSXZCWCxFQUFBQSxhQUFhLEVBQUVTLHNCQUFVRyxJQUpGO0FBS3ZCWCxFQUFBQSxnQkFBZ0IsRUFBRVEsc0JBQVVHO0FBTEwsQ0FBekI7QUFRQXJCLFlBQVksQ0FBQ3NCLFlBQWIsR0FBNEI7QUFDMUJwQixFQUFBQSxlQUFlLEVBQUUsRUFEUztBQUUxQk8sRUFBQUEsYUFBYSxFQUFFLEtBRlc7QUFHMUJDLEVBQUFBLGdCQUFnQixFQUFFO0FBSFEsQ0FBNUI7ZUFPZVYsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFNWRyBmcm9tICdyZWFjdC1pbmxpbmVzdmcnO1xuXG5pbXBvcnQgQ29weSBmcm9tICcuLi9hc3NldHMvQ29weS5zdmcnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vYXNzZXRzL0xvYWRpbmcuc3ZnJztcbmltcG9ydCBDaGVjayBmcm9tICcuLi9hc3NldHMvQ2hlY2suc3ZnJztcbmltcG9ydCB7IHNob3J0ZW5FdGhBZGRyLCBjb3B5VG9DbGlwQm9hcmQgfSBmcm9tICcuLi91dGlscyc7XG5cbmNsYXNzIEZvcm1Db250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb3B5U3VjY2Vzc2Z1bDogZmFsc2VcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDb3B5U3VjY2Vzc2Z1bCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnRVc2VyQWRkciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb3B5VG9DbGlwQm9hcmQoY3VycmVudFVzZXJBZGRyKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcHlTdWNjZXNzZnVsOiB0cnVlIH0pO1xuICAgIH0sIDEpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcHlTdWNjZXNzZnVsOiBmYWxzZSB9KTtcbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICByZWRpcmVjdEZuLFxuICAgICAgY3VycmVudFVzZXJBZGRyLFxuICAgICAgaXNTYXZlTG9hZGluZyxcbiAgICAgIGlzU2F2ZVN1Y2Nlc3NmdWwsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjb3B5U3VjY2Vzc2Z1bCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfZm9ybUNvbnRyb2xzXCI+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHRpdGxlPXtjdXJyZW50VXNlckFkZHJ9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9mb3JtQ29udHJvbHNfYWRkcmVzc1wiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDb3B5U3VjY2Vzc2Z1bH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG9ydGVuRXRoQWRkcihjdXJyZW50VXNlckFkZHIpfVxuICAgICAgICAgIDxTVkdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfZm9ybUNvbnRyb2xzX2FkZHJlc3NfaWNvblwiXG4gICAgICAgICAgICBzcmM9e0NvcHl9XG4gICAgICAgICAgICBhbHQ9XCJDb3B5IHRvIGNsaXBib2FyZFwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIHtjb3B5U3VjY2Vzc2Z1bCAmJiAoXG4gICAgICAgICAgICA8U1ZHXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfZm9ybUNvbnRyb2xzX2FkZHJlc3NfY29weVwiXG4gICAgICAgICAgICAgIHNyYz17Q2hlY2t9XG4gICAgICAgICAgICAgIGFsdD1cIkNvcHkgc3VjY2Vzc2Z1bFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9mb3JtQ29udHJvbHNfY29udGVudFwiPlxuICAgICAgICAgIHtpc1NhdmVMb2FkaW5nICYmIDxTVkcgc3JjPXtMb2FkaW5nfSBhbHQ9XCJsb2FkaW5nXCIgY2xhc3NOYW1lPVwiZWRpdF9sb2FkXCIgLz59XG5cbiAgICAgICAgICB7aXNTYXZlU3VjY2Vzc2Z1bCAmJiAoXG4gICAgICAgICAgICA8U1ZHXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfZm9ybUNvbnRyb2xzX2FkZHJlc3NfY29weVwiXG4gICAgICAgICAgICAgIHNyYz17Q2hlY2t9XG4gICAgICAgICAgICAgIGFsdD1cIlNhdmUgc3VjY2Vzc2Z1bFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfZm9ybUNvbnRyb2xzX2NvbnRlbnRfc2F2ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU3VibWl0KGUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICA8L2J1dHRvbj5cblxuXG4gICAgICAgICAge3JlZGlyZWN0Rm4gJiYgKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X2NhbmNlbFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlZGlyZWN0Rm4oY3VycmVudFVzZXJBZGRyKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2ID5cbiAgICApO1xuICB9XG59XG5cbkZvcm1Db250cm9scy5wcm9wVHlwZXMgPSB7XG4gIGN1cnJlbnRVc2VyQWRkcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVkaXJlY3RGbjogUHJvcFR5cGVzLmZ1bmMsXG4gIGhhbmRsZVN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzU2F2ZUxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBpc1NhdmVTdWNjZXNzZnVsOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkZvcm1Db250cm9scy5kZWZhdWx0UHJvcHMgPSB7XG4gIGN1cnJlbnRVc2VyQWRkcjogJycsXG4gIGlzU2F2ZUxvYWRpbmc6IGZhbHNlLFxuICBpc1NhdmVTdWNjZXNzZnVsOiBmYWxzZSxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbnRyb2xzOyJdfQ==