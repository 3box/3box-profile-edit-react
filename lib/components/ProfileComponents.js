"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomFields = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactInlinesvg = _interopRequireDefault(require("react-inlinesvg"));

var _FormControls = _interopRequireDefault(require("./FormControls"));

var _ProfileField = _interopRequireDefault(require("./ProfileField"));

var _InfoIcon = _interopRequireDefault(require("../assets/InfoIcon.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CustomFields = function CustomFields(props) {
  var customFields = props.customFields,
      handleFormChange = props.handleFormChange,
      handleSubmit = props.handleSubmit,
      redirectFn = props.redirectFn,
      currentUserAddr = props.currentUserAddr,
      isSaveLoading = props.isSaveLoading,
      isSaveSuccessful = props.isSaveSuccessful;
  return _react["default"].createElement("div", {
    className: "edit_profile_spaceProfile"
  }, _react["default"].createElement("div", {
    className: "edit_profile_divider"
  }), _react["default"].createElement("div", {
    className: "edit_profile_keyContainer spaceProfile"
  }, _react["default"].createElement("p", {
    className: "edit_profile_keyContainer_currentAddress"
  }, "APP PROFILE"), _react["default"].createElement("div", {
    className: "edit_profile_verifiedFields_info infoIcon"
  }, _react["default"].createElement(_reactInlinesvg["default"], {
    src: _InfoIcon["default"],
    className: "edit_profile_verifiedFields_icons",
    alt: "Info"
  }), _react["default"].createElement("div", {
    className: "edit_profile_verifiedFields_hover"
  }, _react["default"].createElement("span", {
    className: "edit_profile_verifiedFields_info_text"
  }, "These fields are saved to your app profile          ")))), _react["default"].createElement("div", {
    className: "edit_profile_section"
  }, _react["default"].createElement("div", {
    className: "edit_profile_info"
  }, customFields.map(function (entry) {
    return _react["default"].createElement(_ProfileField["default"], _extends({
      customField: entry,
      handleFormChange: handleFormChange,
      key: entry.key
    }, props));
  }))), _react["default"].createElement(_FormControls["default"], {
    handleSubmit: handleSubmit,
    redirectFn: redirectFn,
    currentUserAddr: currentUserAddr,
    isSaveLoading: isSaveLoading,
    isSaveSuccessful: isSaveSuccessful
  }));
};

exports.CustomFields = CustomFields;
CustomFields.propTypes = {
  currentUserAddr: _propTypes["default"].string,
  customFields: _propTypes["default"].array,
  redirectFn: _propTypes["default"].func,
  handleSubmit: _propTypes["default"].func,
  handleFormChange: _propTypes["default"].func,
  isSaveLoading: _propTypes["default"].bool,
  isSaveSuccessful: _propTypes["default"].bool
};
CustomFields.defaultProps = {
  currentUserAddr: '',
  isSaveLoading: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGVDb21wb25lbnRzLmpzeCJdLCJuYW1lcyI6WyJDdXN0b21GaWVsZHMiLCJwcm9wcyIsImN1c3RvbUZpZWxkcyIsImhhbmRsZUZvcm1DaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJyZWRpcmVjdEZuIiwiY3VycmVudFVzZXJBZGRyIiwiaXNTYXZlTG9hZGluZyIsImlzU2F2ZVN1Y2Nlc3NmdWwiLCJJbmZvSWNvbiIsIm1hcCIsImVudHJ5Iiwia2V5IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXkiLCJmdW5jIiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUVuQ0MsWUFGbUMsR0FTakNELEtBVGlDLENBRW5DQyxZQUZtQztBQUFBLE1BR25DQyxnQkFIbUMsR0FTakNGLEtBVGlDLENBR25DRSxnQkFIbUM7QUFBQSxNQUluQ0MsWUFKbUMsR0FTakNILEtBVGlDLENBSW5DRyxZQUptQztBQUFBLE1BS25DQyxVQUxtQyxHQVNqQ0osS0FUaUMsQ0FLbkNJLFVBTG1DO0FBQUEsTUFNbkNDLGVBTm1DLEdBU2pDTCxLQVRpQyxDQU1uQ0ssZUFObUM7QUFBQSxNQU9uQ0MsYUFQbUMsR0FTakNOLEtBVGlDLENBT25DTSxhQVBtQztBQUFBLE1BUW5DQyxnQkFSbUMsR0FTakNQLEtBVGlDLENBUW5DTyxnQkFSbUM7QUFXckMsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFERixFQUdFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFO0FBQUcsSUFBQSxTQUFTLEVBQUM7QUFBYixtQkFERixFQUtFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFLGdDQUFDLDBCQUFEO0FBQUssSUFBQSxHQUFHLEVBQUVDLG9CQUFWO0FBQW9CLElBQUEsU0FBUyxFQUFDLG1DQUE5QjtBQUFrRSxJQUFBLEdBQUcsRUFBQztBQUF0RSxJQURGLEVBRUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0U7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQiw0REFERixDQUZGLENBTEYsQ0FIRixFQWlCRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDR1AsWUFBWSxDQUFDUSxHQUFiLENBQWlCLFVBQUFDLEtBQUs7QUFBQSxXQUNyQixnQ0FBQyx3QkFBRDtBQUNFLE1BQUEsV0FBVyxFQUFFQSxLQURmO0FBRUUsTUFBQSxnQkFBZ0IsRUFBRVIsZ0JBRnBCO0FBR0UsTUFBQSxHQUFHLEVBQUVRLEtBQUssQ0FBQ0M7QUFIYixPQUlNWCxLQUpOLEVBRHFCO0FBQUEsR0FBdEIsQ0FESCxDQURGLENBakJGLEVBOEJFLGdDQUFDLHdCQUFEO0FBQ0UsSUFBQSxZQUFZLEVBQUVHLFlBRGhCO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLGVBQWUsRUFBRUMsZUFIbkI7QUFJRSxJQUFBLGFBQWEsRUFBRUMsYUFKakI7QUFLRSxJQUFBLGdCQUFnQixFQUFFQztBQUxwQixJQTlCRixDQURGO0FBd0NELENBbkRNOzs7QUFxRFBSLFlBQVksQ0FBQ2EsU0FBYixHQUF5QjtBQUN2QlAsRUFBQUEsZUFBZSxFQUFFUSxzQkFBVUMsTUFESjtBQUV2QmIsRUFBQUEsWUFBWSxFQUFFWSxzQkFBVUUsS0FGRDtBQUd2QlgsRUFBQUEsVUFBVSxFQUFFUyxzQkFBVUcsSUFIQztBQUl2QmIsRUFBQUEsWUFBWSxFQUFFVSxzQkFBVUcsSUFKRDtBQUt2QmQsRUFBQUEsZ0JBQWdCLEVBQUVXLHNCQUFVRyxJQUxMO0FBTXZCVixFQUFBQSxhQUFhLEVBQUVPLHNCQUFVSSxJQU5GO0FBT3ZCVixFQUFBQSxnQkFBZ0IsRUFBRU0sc0JBQVVJO0FBUEwsQ0FBekI7QUFVQWxCLFlBQVksQ0FBQ21CLFlBQWIsR0FBNEI7QUFDMUJiLEVBQUFBLGVBQWUsRUFBRSxFQURTO0FBRTFCQyxFQUFBQSxhQUFhLEVBQUU7QUFGVyxDQUE1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFNWRyBmcm9tICdyZWFjdC1pbmxpbmVzdmcnO1xuXG5pbXBvcnQgRm9ybUNvbnRyb2xzIGZyb20gJy4vRm9ybUNvbnRyb2xzJztcbmltcG9ydCBQcm9maWxlRmllbGQgZnJvbSAnLi9Qcm9maWxlRmllbGQnO1xuaW1wb3J0IEluZm9JY29uIGZyb20gJy4uL2Fzc2V0cy9JbmZvSWNvbi5zdmcnO1xuXG5leHBvcnQgY29uc3QgQ3VzdG9tRmllbGRzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjdXN0b21GaWVsZHMsXG4gICAgaGFuZGxlRm9ybUNoYW5nZSxcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgcmVkaXJlY3RGbixcbiAgICBjdXJyZW50VXNlckFkZHIsXG4gICAgaXNTYXZlTG9hZGluZyxcbiAgICBpc1NhdmVTdWNjZXNzZnVsLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9zcGFjZVByb2ZpbGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX2RpdmlkZXJcIiAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9rZXlDb250YWluZXIgc3BhY2VQcm9maWxlXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9rZXlDb250YWluZXJfY3VycmVudEFkZHJlc3NcIj5cbiAgICAgICAgICBBUFAgUFJPRklMRVxuICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX3ZlcmlmaWVkRmllbGRzX2luZm8gaW5mb0ljb25cIj5cbiAgICAgICAgICA8U1ZHIHNyYz17SW5mb0ljb259IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV92ZXJpZmllZEZpZWxkc19pY29uc1wiIGFsdD1cIkluZm9cIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX3ZlcmlmaWVkRmllbGRzX2hvdmVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfdmVyaWZpZWRGaWVsZHNfaW5mb190ZXh0XCI+XG4gICAgICAgICAgICAgIFRoZXNlIGZpZWxkcyBhcmUgc2F2ZWQgdG8geW91ciBhcHAgcHJvZmlsZSAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX3NlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfaW5mb1wiPlxuICAgICAgICAgIHtjdXN0b21GaWVsZHMubWFwKGVudHJ5ID0+IChcbiAgICAgICAgICAgIDxQcm9maWxlRmllbGRcbiAgICAgICAgICAgICAgY3VzdG9tRmllbGQ9e2VudHJ5fVxuICAgICAgICAgICAgICBoYW5kbGVGb3JtQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxuICAgICAgICAgICAgICBrZXk9e2VudHJ5LmtleX1cbiAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEZvcm1Db250cm9sc1xuICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgcmVkaXJlY3RGbj17cmVkaXJlY3RGbn1cbiAgICAgICAgY3VycmVudFVzZXJBZGRyPXtjdXJyZW50VXNlckFkZHJ9XG4gICAgICAgIGlzU2F2ZUxvYWRpbmc9e2lzU2F2ZUxvYWRpbmd9XG4gICAgICAgIGlzU2F2ZVN1Y2Nlc3NmdWw9e2lzU2F2ZVN1Y2Nlc3NmdWx9XG4gICAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5DdXN0b21GaWVsZHMucHJvcFR5cGVzID0ge1xuICBjdXJyZW50VXNlckFkZHI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGN1c3RvbUZpZWxkczogUHJvcFR5cGVzLmFycmF5LFxuICByZWRpcmVjdEZuOiBQcm9wVHlwZXMuZnVuYyxcbiAgaGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgaGFuZGxlRm9ybUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzU2F2ZUxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBpc1NhdmVTdWNjZXNzZnVsOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkN1c3RvbUZpZWxkcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGN1cnJlbnRVc2VyQWRkcjogJycsXG4gIGlzU2F2ZUxvYWRpbmc6IGZhbHNlLFxufTsiXX0=