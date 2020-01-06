"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProfileField = function ProfileField(props) {
  var handleFormChange = props.handleFormChange,
      customField = props.customField;
  return _react["default"].createElement("div", {
    className: "edit_profile_fields_entry"
  }, _react["default"].createElement("div", {
    className: "edit_profile_keyContainer"
  }, _react["default"].createElement("p", {
    className: "edit_profile_key"
  }, customField.field)), customField.inputType === 'text' && _react["default"].createElement("input", {
    // name="description"
    type: "text",
    className: "edit_profile_value",
    value: props[customField.key],
    onChange: function onChange(e) {
      return handleFormChange(e, customField.key);
    }
  }), customField.inputType === 'textarea' && _react["default"].createElement("textarea", {
    name: customField.key,
    type: "text",
    className: "edit_profile_value--description",
    value: props[customField.key],
    onChange: function onChange(e) {
      return handleFormChange(e, customField.key);
    }
  }), customField.inputType === 'dropdown' && _react["default"].createElement("select", {
    name: customField.key,
    type: "text",
    className: "edit_profile_value--dropdown",
    value: props[customField.key],
    onChange: function onChange(e) {
      return handleFormChange(e, customField.key);
    }
  }, _react["default"].createElement("option", {
    "default": true,
    selected: true,
    value: true
  }, " -- select an option -- "), customField.options.map(function (option) {
    return _react["default"].createElement("option", {
      value: option.value,
      key: option.value
    }, option.display);
  })));
};

ProfileField.propTypes = {
  handleFormChange: _propTypes["default"].func,
  customField: _propTypes["default"].object,
  customFieldValue: _propTypes["default"].string
};
var _default = ProfileField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGVGaWVsZC5qc3giXSwibmFtZXMiOlsiUHJvZmlsZUZpZWxkIiwicHJvcHMiLCJoYW5kbGVGb3JtQ2hhbmdlIiwiY3VzdG9tRmllbGQiLCJmaWVsZCIsImlucHV0VHlwZSIsImtleSIsImUiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwidmFsdWUiLCJkaXNwbGF5IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsIm9iamVjdCIsImN1c3RvbUZpZWxkVmFsdWUiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BRTVCQyxnQkFGNEIsR0FJMUJELEtBSjBCLENBRTVCQyxnQkFGNEI7QUFBQSxNQUc1QkMsV0FINEIsR0FJMUJGLEtBSjBCLENBRzVCRSxXQUg0QjtBQU05QixTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFO0FBQUcsSUFBQSxTQUFTLEVBQUM7QUFBYixLQUNHQSxXQUFXLENBQUNDLEtBRGYsQ0FERixDQURGLEVBT0dELFdBQVcsQ0FBQ0UsU0FBWixLQUEwQixNQUExQixJQUNDO0FBQ0U7QUFDQSxJQUFBLElBQUksRUFBQyxNQUZQO0FBR0UsSUFBQSxTQUFTLEVBQUMsb0JBSFo7QUFJRSxJQUFBLEtBQUssRUFBRUosS0FBSyxDQUFDRSxXQUFXLENBQUNHLEdBQWIsQ0FKZDtBQUtFLElBQUEsUUFBUSxFQUFFLGtCQUFBQyxDQUFDO0FBQUEsYUFBSUwsZ0JBQWdCLENBQUNLLENBQUQsRUFBSUosV0FBVyxDQUFDRyxHQUFoQixDQUFwQjtBQUFBO0FBTGIsSUFSSixFQWlCR0gsV0FBVyxDQUFDRSxTQUFaLEtBQTBCLFVBQTFCLElBQ0M7QUFDRSxJQUFBLElBQUksRUFBRUYsV0FBVyxDQUFDRyxHQURwQjtBQUVFLElBQUEsSUFBSSxFQUFDLE1BRlA7QUFHRSxJQUFBLFNBQVMsRUFBQyxpQ0FIWjtBQUlFLElBQUEsS0FBSyxFQUFFTCxLQUFLLENBQUNFLFdBQVcsQ0FBQ0csR0FBYixDQUpkO0FBS0UsSUFBQSxRQUFRLEVBQUUsa0JBQUFDLENBQUM7QUFBQSxhQUFJTCxnQkFBZ0IsQ0FBQ0ssQ0FBRCxFQUFJSixXQUFXLENBQUNHLEdBQWhCLENBQXBCO0FBQUE7QUFMYixJQWxCSixFQTJCR0gsV0FBVyxDQUFDRSxTQUFaLEtBQTBCLFVBQTFCLElBQ0M7QUFDRSxJQUFBLElBQUksRUFBRUYsV0FBVyxDQUFDRyxHQURwQjtBQUVFLElBQUEsSUFBSSxFQUFDLE1BRlA7QUFHRSxJQUFBLFNBQVMsRUFBQyw4QkFIWjtBQUlFLElBQUEsS0FBSyxFQUFFTCxLQUFLLENBQUNFLFdBQVcsQ0FBQ0csR0FBYixDQUpkO0FBS0UsSUFBQSxRQUFRLEVBQUUsa0JBQUFDLENBQUM7QUFBQSxhQUFJTCxnQkFBZ0IsQ0FBQ0ssQ0FBRCxFQUFJSixXQUFXLENBQUNHLEdBQWhCLENBQXBCO0FBQUE7QUFMYixLQU9FO0FBQVEsbUJBQVI7QUFBZ0IsSUFBQSxRQUFRLE1BQXhCO0FBQXlCLElBQUEsS0FBSztBQUE5QixnQ0FQRixFQVFHSCxXQUFXLENBQUNLLE9BQVosQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUFDLE1BQU07QUFBQSxXQUM3QjtBQUFRLE1BQUEsS0FBSyxFQUFFQSxNQUFNLENBQUNDLEtBQXRCO0FBQTZCLE1BQUEsR0FBRyxFQUFFRCxNQUFNLENBQUNDO0FBQXpDLE9BQ0dELE1BQU0sQ0FBQ0UsT0FEVixDQUQ2QjtBQUFBLEdBQTlCLENBUkgsQ0E1QkosQ0FERjtBQThDRCxDQXBERDs7QUFzREFaLFlBQVksQ0FBQ2EsU0FBYixHQUF5QjtBQUN2QlgsRUFBQUEsZ0JBQWdCLEVBQUVZLHNCQUFVQyxJQURMO0FBRXZCWixFQUFBQSxXQUFXLEVBQUVXLHNCQUFVRSxNQUZBO0FBR3ZCQyxFQUFBQSxnQkFBZ0IsRUFBRUgsc0JBQVVJO0FBSEwsQ0FBekI7ZUFNZWxCLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgUHJvZmlsZUZpZWxkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBoYW5kbGVGb3JtQ2hhbmdlLFxuICAgIGN1c3RvbUZpZWxkLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9maWVsZHNfZW50cnlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX2tleUNvbnRhaW5lclwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfa2V5XCI+XG4gICAgICAgICAge2N1c3RvbUZpZWxkLmZpZWxkfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2N1c3RvbUZpZWxkLmlucHV0VHlwZSA9PT0gJ3RleHQnICYmIChcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgLy8gbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX3ZhbHVlXCJcbiAgICAgICAgICB2YWx1ZT17cHJvcHNbY3VzdG9tRmllbGQua2V5XX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVGb3JtQ2hhbmdlKGUsIGN1c3RvbUZpZWxkLmtleSl9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7Y3VzdG9tRmllbGQuaW5wdXRUeXBlID09PSAndGV4dGFyZWEnICYmIChcbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT17Y3VzdG9tRmllbGQua2V5fVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfdmFsdWUtLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICB2YWx1ZT17cHJvcHNbY3VzdG9tRmllbGQua2V5XX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVGb3JtQ2hhbmdlKGUsIGN1c3RvbUZpZWxkLmtleSl9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7Y3VzdG9tRmllbGQuaW5wdXRUeXBlID09PSAnZHJvcGRvd24nICYmIChcbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIG5hbWU9e2N1c3RvbUZpZWxkLmtleX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX3ZhbHVlLS1kcm9wZG93blwiXG4gICAgICAgICAgdmFsdWU9e3Byb3BzW2N1c3RvbUZpZWxkLmtleV19XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlRm9ybUNoYW5nZShlLCBjdXN0b21GaWVsZC5rZXkpfVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiBkZWZhdWx0IHNlbGVjdGVkIHZhbHVlPiAtLSBzZWxlY3QgYW4gb3B0aW9uIC0tIDwvb3B0aW9uPlxuICAgICAgICAgIHtjdXN0b21GaWVsZC5vcHRpb25zLm1hcChvcHRpb24gPT4gKFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17b3B0aW9uLnZhbHVlfSBrZXk9e29wdGlvbi52YWx1ZX0+XG4gICAgICAgICAgICAgIHtvcHRpb24uZGlzcGxheX1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn07XG5cblByb2ZpbGVGaWVsZC5wcm9wVHlwZXMgPSB7XG4gIGhhbmRsZUZvcm1DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBjdXN0b21GaWVsZDogUHJvcFR5cGVzLm9iamVjdCxcbiAgY3VzdG9tRmllbGRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVGaWVsZDsiXX0=