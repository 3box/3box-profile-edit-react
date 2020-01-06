"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalBackground = exports.FileSizeModal = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FileSizeModal = function FileSizeModal(_ref) {
  var closeFileSizeModal = _ref.closeFileSizeModal;
  return _react["default"].createElement("div", {
    className: "modal_container"
  }, _react["default"].createElement("div", {
    className: "modal"
  }, _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Profile pictures must be less than 2.5 MB")), _react["default"].createElement("button", {
    onClick: closeFileSizeModal,
    type: "button",
    className: "tertiaryButton"
  }, "Close")));
};

exports.FileSizeModal = FileSizeModal;
FileSizeModal.propTypes = {
  closeFileSizeModal: _propTypes["default"].func.isRequired
};

var ModalBackground = function ModalBackground() {
  return _react["default"].createElement("div", {
    className: "modal_overlay"
  });
};

exports.ModalBackground = ModalBackground;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFscy5qc3giXSwibmFtZXMiOlsiRmlsZVNpemVNb2RhbCIsImNsb3NlRmlsZVNpemVNb2RhbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiTW9kYWxCYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsTUFBR0Msa0JBQUgsUUFBR0Esa0JBQUg7QUFBQSxTQUMzQjtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FFRSw2Q0FDRSx1RkFERixDQUZGLEVBTUU7QUFBUSxJQUFBLE9BQU8sRUFBRUEsa0JBQWpCO0FBQXFDLElBQUEsSUFBSSxFQUFDLFFBQTFDO0FBQW1ELElBQUEsU0FBUyxFQUFDO0FBQTdELGFBTkYsQ0FERixDQUQyQjtBQUFBLENBQXRCOzs7QUFhUEQsYUFBYSxDQUFDRSxTQUFkLEdBQTBCO0FBQ3hCRCxFQUFBQSxrQkFBa0IsRUFBRUUsc0JBQVVDLElBQVYsQ0FBZUM7QUFEWCxDQUExQjs7QUFJTyxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsU0FBTTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFBTjtBQUFBLENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBGaWxlU2l6ZU1vZGFsID0gKHsgY2xvc2VGaWxlU2l6ZU1vZGFsIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPlByb2ZpbGUgcGljdHVyZXMgbXVzdCBiZSBsZXNzIHRoYW4gMi41IE1CPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17Y2xvc2VGaWxlU2l6ZU1vZGFsfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidGVydGlhcnlCdXR0b25cIj5DbG9zZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkZpbGVTaXplTW9kYWwucHJvcFR5cGVzID0ge1xuICBjbG9zZUZpbGVTaXplTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgY29uc3QgTW9kYWxCYWNrZ3JvdW5kID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9vdmVybGF5XCIgLz47Il19