"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ethereumBlockiesBase = _interopRequireDefault(require("ethereum-blockies-base64"));

var _emojiMart = require("emoji-mart");

var _reactInlinesvg = _interopRequireDefault(require("react-inlinesvg"));

var _ProfileComponents = require("./ProfileComponents");

var _FormControls = _interopRequireDefault(require("./FormControls"));

var _EditOptions = _interopRequireDefault(require("./EditOptions"));

var _TwitterIcon = _interopRequireDefault(require("../assets/TwitterIcon.svg"));

var _GithubIcon = _interopRequireDefault(require("../assets/GithubIcon.svg"));

var _EmailIcon = _interopRequireDefault(require("../assets/EmailIcon.svg"));

var _InfoIcon = _interopRequireDefault(require("../assets/InfoIcon.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GeneralProfile =
/*#__PURE__*/
function (_Component) {
  _inherits(GeneralProfile, _Component);

  function GeneralProfile(props) {
    var _this;

    _classCallCheck(this, GeneralProfile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GeneralProfile).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(GeneralProfile, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          coverPhoto = _this$props.coverPhoto,
          image = _this$props.image,
          currentUserAddr = _this$props.currentUserAddr,
          emoji = _this$props.emoji,
          description = _this$props.description,
          verifiedTwitter = _this$props.verifiedTwitter,
          verifiedGithub = _this$props.verifiedGithub,
          verifiedEmail = _this$props.verifiedEmail,
          isShowEmoji = _this$props.isShowEmoji,
          redirectFn = _this$props.redirectFn,
          name = _this$props.name,
          handleRemovePicture = _this$props.handleRemovePicture,
          handleUpdatePic = _this$props.handleUpdatePic,
          handleAddEmoji = _this$props.handleAddEmoji,
          handleFormChange = _this$props.handleFormChange,
          shouldRemoveCoverPhoto = _this$props.shouldRemoveCoverPhoto,
          shouldRemoveImage = _this$props.shouldRemoveImage,
          handleShowEmojiPicker = _this$props.handleShowEmojiPicker,
          spaceProfileImage = _this$props.spaceProfileImage,
          handleSubmit = _this$props.handleSubmit,
          customFields = _this$props.customFields,
          space = _this$props.space,
          isAppProfileDefault = _this$props.isAppProfileDefault,
          handleSelectDefaultProfile = _this$props.handleSelectDefaultProfile,
          isSaveLoading = _this$props.isSaveLoading,
          isShowGeneralProfile = _this$props.isShowGeneralProfile,
          showOptions = _this$props.showOptions,
          handleShowOptionsMenu = _this$props.handleShowOptionsMenu,
          isSaveSuccessful = _this$props.isSaveSuccessful;
      var isCoverImage = !!coverPhoto.length || this.coverUpload && !!this.coverUpload.files.length;
      var isImage = !!image.length || this.fileUpload && !!this.fileUpload.files.length;
      return _react["default"].createElement("div", {
        className: "edit ".concat(isShowGeneralProfile ? 'show' : '')
      }, _react["default"].createElement("div", {
        className: "edit_form"
      }, _react["default"].createElement("div", {
        className: "edit_profile_section"
      }, _react["default"].createElement("div", {
        className: "edit_profile_canvas"
      }, _react["default"].createElement("div", {
        className: "edit_profile_editCanvas_wrapper"
      }, _react["default"].createElement("button", {
        className: "removeCoverPic removeButton",
        onClick: function onClick() {
          return handleRemovePicture('coverPhoto', true);
        },
        text: "remove",
        type: "button"
      }, !shouldRemoveCoverPhoto ? _react["default"].createElement("p", null, "\u2715") : _react["default"].createElement("p", {
        className: "undoArrow"
      }, "\u21A9"))), _react["default"].createElement("div", {
        className: "coverWrapper"
      }, _react["default"].createElement("label", {
        htmlFor: "coverInput",
        className: "edit_profile_canvas_overlay"
      }, _react["default"].createElement("input", {
        id: "coverInput",
        type: "file",
        name: "coverPic",
        className: "light coverInput",
        accept: "image/*",
        onChange: function onChange(e) {
          return handleUpdatePic(e.target.files[0], e, 'coverPhoto');
        },
        ref: function ref(_ref) {
          return _this2.coverUpload = _ref;
        }
      }), _react["default"].createElement("p", null, "Change picture")), isCoverImage && !shouldRemoveCoverPhoto ? _react["default"].createElement("img", {
        className: "coverPic",
        alt: "profile",
        src: this.coverUpload && !!this.coverUpload.files.length ? URL.createObjectURL(this.coverUpload.files[0]) : "https://ipfs.infura.io/ipfs/".concat(coverPhoto[0].contentUrl['/'])
      }) : _react["default"].createElement("div", {
        className: "coverPic"
      })))), _react["default"].createElement("div", {
        className: "edit_profile_section"
      }, _react["default"].createElement("div", {
        className: "edit_profile_picAndAddress"
      }, _react["default"].createElement("div", {
        className: "edit_userPicture"
      }, _react["default"].createElement("label", {
        htmlFor: "fileInput",
        className: "chooseFile"
      }, _react["default"].createElement("input", {
        id: "fileInput",
        type: "file",
        name: "pic",
        className: "light fileInput",
        accept: "image/*",
        onChange: function onChange(e) {
          return handleUpdatePic(e.target.files[0], e, 'image');
        },
        ref: function ref(_ref2) {
          return _this2.fileUpload = _ref2;
        }
      }), _react["default"].createElement("button", {
        className: "removeButton removePic",
        onClick: function onClick() {
          return handleRemovePicture('image', false);
        },
        text: "remove",
        type: "button"
      }, !shouldRemoveImage ? _react["default"].createElement("p", null, "\u2715") : _react["default"].createElement("p", {
        className: "undoArrow"
      }, "\u21A9")), isImage && !shouldRemoveImage ? _react["default"].createElement("div", {
        className: "profPic_div"
      }, _react["default"].createElement("div", {
        className: "profPic_div_overlay"
      }, _react["default"].createElement("p", null, "Change picture")), _react["default"].createElement("img", {
        className: "profPic clearProfPic",
        src: this.fileUpload && this.fileUpload.files && this.fileUpload.files[0] ? URL.createObjectURL(this.fileUpload.files[0]) : "https://ipfs.infura.io/ipfs/".concat(image[0].contentUrl['/']),
        alt: "profile"
      })) : _react["default"].createElement("div", {
        className: "profPic_div"
      }, _react["default"].createElement("div", {
        className: "profPic_div_overlay"
      }, _react["default"].createElement("p", null, "Change picture")), currentUserAddr ? _react["default"].createElement("img", {
        className: "profPic",
        src: (0, _ethereumBlockiesBase["default"])(currentUserAddr),
        alt: "profile"
      }) : _react["default"].createElement("div", {
        className: "profPic"
      })))), _react["default"].createElement(_EditOptions["default"], {
        space: space,
        isAppProfileDefault: isAppProfileDefault,
        handleSelectDefaultProfile: handleSelectDefaultProfile,
        spaceProfileImage: spaceProfileImage,
        image: image,
        showOptions: showOptions,
        handleShowOptionsMenu: handleShowOptionsMenu,
        currentUserAddr: currentUserAddr
      }))), _react["default"].createElement("div", {
        className: "edit_profile_section"
      }, _react["default"].createElement("div", {
        className: "edit_profile_info"
      }, _react["default"].createElement("div", {
        className: "edit_profile_fields_entry noMargin"
      }, _react["default"].createElement("div", {
        className: "edit_profile_keyContainer currentAddress"
      }, _react["default"].createElement("div", {
        className: "edit_profile_keyContainer_currentAddressWrapper"
      }, _react["default"].createElement("p", {
        className: "edit_profile_keyContainer_currentAddress"
      }, "3BOX PROFILE"), _react["default"].createElement("div", {
        className: "edit_profile_verifiedFields_info infoIcon"
      }, _react["default"].createElement(_reactInlinesvg["default"], {
        src: _InfoIcon["default"],
        className: "edit_profile_verifiedFields_icons",
        alt: "Info"
      }), _react["default"].createElement("div", {
        className: "edit_profile_verifiedFields_hover"
      }, _react["default"].createElement("span", {
        className: "edit_profile_verifiedFields_info_text"
      }, "These fields are saved to your 3Box profile")))))), _react["default"].createElement("div", {
        className: "edit_profile_fields_entry nameAndEmoji"
      }, _react["default"].createElement("div", {
        className: "edit_profile_fields_entry_name"
      }, _react["default"].createElement("div", {
        className: "edit_profile_keyContainer"
      }, _react["default"].createElement("p", {
        className: "edit_profile_keyContainer_currentAddress"
      }, "Name")), _react["default"].createElement("input", {
        name: "name",
        type: "text",
        value: name,
        className: "edit_profile_value nameField",
        onChange: function onChange(e) {
          return handleFormChange(e, 'name');
        }
      })), _react["default"].createElement("div", {
        className: "edit_profile_fields_entry_emoji"
      }, _react["default"].createElement("div", {
        className: "edit_profile_keyContainer"
      }, _react["default"].createElement("p", {
        className: "edit_profile_keyContainer_currentAddress"
      }, "Emoji")), isShowEmoji && _react["default"].createElement("div", {
        className: "edit_profile_value_emojiMenu"
      }, _react["default"].createElement(_emojiMart.Picker, {
        onSelect: function onSelect(selectedEmoji) {
          return handleAddEmoji(selectedEmoji);
        },
        title: "Pick your spirit emoji"
      })), isShowEmoji && _react["default"].createElement("div", {
        className: "onClickOutside",
        onClick: handleShowEmojiPicker
      }), _react["default"].createElement("div", {
        className: "edit_profile_value--spirit",
        onClick: handleShowEmojiPicker
      }, emoji ? _react["default"].createElement("span", {
        className: "edit_profile_value--spirit_character",
        role: "img"
      }, emoji.code ? emoji.code : emoji) : _react["default"].createElement("span", {
        className: "edit_profile_value--spirit_character",
        role: "img",
        "aria-label": "unicorn"
      }, "\uD83E\uDD84")))), _react["default"].createElement("div", {
        className: "edit_profile_verifiedFields"
      }, verifiedTwitter && _react["default"].createElement("div", {
        className: "edit_profile_verifiedFields_fields"
      }, _react["default"].createElement(_reactInlinesvg["default"], {
        src: _TwitterIcon["default"],
        className: "edit_profile_verifiedFields_icons",
        alt: "Verified Twitter"
      }), _react["default"].createElement("p", null, verifiedTwitter)), verifiedGithub && _react["default"].createElement("div", {
        className: "edit_profile_verifiedFields_fields"
      }, _react["default"].createElement(_reactInlinesvg["default"], {
        src: _GithubIcon["default"],
        className: "edit_profile_verifiedFields_icons",
        alt: "Verified Github"
      }), _react["default"].createElement("p", null, verifiedGithub)), verifiedEmail && _react["default"].createElement("div", {
        className: "edit_profile_verifiedFields_fields"
      }, _react["default"].createElement(_reactInlinesvg["default"], {
        src: _EmailIcon["default"],
        className: "edit_profile_verifiedFields_icons email",
        alt: "Verified Email"
      }), _react["default"].createElement("p", null, verifiedEmail)), (verifiedTwitter || verifiedGithub || verifiedEmail) && _react["default"].createElement("div", {
        className: "edit_profile_verifiedFields_info infoIcon"
      }, _react["default"].createElement(_reactInlinesvg["default"], {
        src: _InfoIcon["default"],
        className: "edit_profile_verifiedFields_icons",
        alt: "Info"
      }), _react["default"].createElement("div", {
        className: "edit_profile_verifiedFields_hover"
      }, _react["default"].createElement("span", {
        className: "edit_profile_verifiedFields_info_text"
      }, "Add or edit verified fields at", _react["default"].createElement("a", {
        href: "https://3box.io/".concat(currentUserAddr, "/edit"),
        className: "edit_profile_verifiedFields_info_text_link",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "3Box.io"))))), _react["default"].createElement("div", {
        className: "edit_profile_fields_entry"
      }, _react["default"].createElement("div", {
        className: "edit_profile_keyContainer"
      }, _react["default"].createElement("p", {
        className: "edit_profile_key"
      }, "Description")), _react["default"].createElement("textarea", {
        name: "description",
        type: "text",
        className: "edit_profile_value--description",
        value: description,
        onChange: function onChange(e) {
          return handleFormChange(e, 'description');
        }
      })))), customFields.length ? _react["default"].createElement(_ProfileComponents.CustomFields, _extends({
        customFields: customFields,
        handleFormChange: handleFormChange,
        handleSubmit: handleSubmit,
        redirectFn: redirectFn,
        currentUserAddr: currentUserAddr,
        isSaveLoading: isSaveLoading
      }, this.props)) : _react["default"].createElement(_FormControls["default"], {
        handleSubmit: handleSubmit,
        redirectFn: redirectFn,
        currentUserAddr: currentUserAddr,
        isSaveLoading: isSaveLoading,
        isSaveSuccessful: isSaveSuccessful
      })));
    }
  }]);

  return GeneralProfile;
}(_react.Component);

GeneralProfile.propTypes = {
  box: _propTypes["default"].object,
  allData: _propTypes["default"].object,
  space: _propTypes["default"].object,
  list: _propTypes["default"].array,
  name: _propTypes["default"].string,
  spaceName: _propTypes["default"].string,
  verifiedGithub: _propTypes["default"].string,
  verifiedTwitter: _propTypes["default"].string,
  verifiedEmail: _propTypes["default"].string,
  did: _propTypes["default"].string,
  emoji: _propTypes["default"].string,
  description: _propTypes["default"].string,
  email: _propTypes["default"].string,
  currentUserAddr: _propTypes["default"].string,
  image: _propTypes["default"].array,
  customFields: _propTypes["default"].array,
  spaceProfileImage: _propTypes["default"].array,
  coverPhoto: _propTypes["default"].array,
  isFetchingThreeBox: _propTypes["default"].bool,
  copySuccessful: _propTypes["default"].bool,
  isShowEmoji: _propTypes["default"].bool,
  shouldRemoveCoverPhoto: _propTypes["default"].bool,
  shouldRemoveImage: _propTypes["default"].bool,
  isAppProfileDefault: _propTypes["default"].bool,
  isShowGeneralProfile: _propTypes["default"].bool,
  isSaveLoading: _propTypes["default"].bool,
  isSaveSuccessful: _propTypes["default"].bool.isRequired,
  showOptions: _propTypes["default"].bool,
  handleShowOptionsMenu: _propTypes["default"].func,
  redirectFn: _propTypes["default"].func,
  handleRemovePicture: _propTypes["default"].func.isRequired,
  handleUpdatePic: _propTypes["default"].func.isRequired,
  handleAddEmoji: _propTypes["default"].func.isRequired,
  handleFormChange: _propTypes["default"].func.isRequired,
  handleShowEmojiPicker: _propTypes["default"].func.isRequired,
  handleSelectDefaultProfile: _propTypes["default"].func.isRequired,
  handleSubmit: _propTypes["default"].func.isRequired
};
GeneralProfile.defaultProps = {
  box: {},
  allData: {},
  space: {},
  did: '',
  verifiedEmail: '',
  verifiedGithub: '',
  verifiedTwitter: '',
  name: '',
  spaceName: '',
  description: '',
  emoji: '',
  email: '',
  currentUserAddr: '',
  image: [],
  coverPhoto: [],
  customFields: [],
  spaceProfileImage: [],
  isFetchingThreeBox: false,
  copySuccessful: false,
  isAppProfileDefault: false,
  isSaveLoading: false
};
var _default = GeneralProfile;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0dlbmVyYWxQcm9maWxlLmpzeCJdLCJuYW1lcyI6WyJHZW5lcmFsUHJvZmlsZSIsInByb3BzIiwic3RhdGUiLCJjb3ZlclBob3RvIiwiaW1hZ2UiLCJjdXJyZW50VXNlckFkZHIiLCJlbW9qaSIsImRlc2NyaXB0aW9uIiwidmVyaWZpZWRUd2l0dGVyIiwidmVyaWZpZWRHaXRodWIiLCJ2ZXJpZmllZEVtYWlsIiwiaXNTaG93RW1vamkiLCJyZWRpcmVjdEZuIiwibmFtZSIsImhhbmRsZVJlbW92ZVBpY3R1cmUiLCJoYW5kbGVVcGRhdGVQaWMiLCJoYW5kbGVBZGRFbW9qaSIsImhhbmRsZUZvcm1DaGFuZ2UiLCJzaG91bGRSZW1vdmVDb3ZlclBob3RvIiwic2hvdWxkUmVtb3ZlSW1hZ2UiLCJoYW5kbGVTaG93RW1vamlQaWNrZXIiLCJzcGFjZVByb2ZpbGVJbWFnZSIsImhhbmRsZVN1Ym1pdCIsImN1c3RvbUZpZWxkcyIsInNwYWNlIiwiaXNBcHBQcm9maWxlRGVmYXVsdCIsImhhbmRsZVNlbGVjdERlZmF1bHRQcm9maWxlIiwiaXNTYXZlTG9hZGluZyIsImlzU2hvd0dlbmVyYWxQcm9maWxlIiwic2hvd09wdGlvbnMiLCJoYW5kbGVTaG93T3B0aW9uc01lbnUiLCJpc1NhdmVTdWNjZXNzZnVsIiwiaXNDb3ZlckltYWdlIiwibGVuZ3RoIiwiY292ZXJVcGxvYWQiLCJmaWxlcyIsImlzSW1hZ2UiLCJmaWxlVXBsb2FkIiwiZSIsInRhcmdldCIsInJlZiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNvbnRlbnRVcmwiLCJJbmZvSWNvbiIsInNlbGVjdGVkRW1vamkiLCJjb2RlIiwiVHdpdHRlckljb24iLCJHaXRodWJJY29uIiwiRW1haWxJY29uIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYm94IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiYWxsRGF0YSIsImxpc3QiLCJhcnJheSIsInN0cmluZyIsInNwYWNlTmFtZSIsImRpZCIsImVtYWlsIiwiaXNGZXRjaGluZ1RocmVlQm94IiwiYm9vbCIsImNvcHlTdWNjZXNzZnVsIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxjOzs7OztBQUNKLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLHdGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFHbEI7Ozs7NkJBRVE7QUFBQTs7QUFBQSx3QkErQkgsS0FBS0QsS0EvQkY7QUFBQSxVQUVMRSxVQUZLLGVBRUxBLFVBRks7QUFBQSxVQUdMQyxLQUhLLGVBR0xBLEtBSEs7QUFBQSxVQUlMQyxlQUpLLGVBSUxBLGVBSks7QUFBQSxVQUtMQyxLQUxLLGVBS0xBLEtBTEs7QUFBQSxVQU1MQyxXQU5LLGVBTUxBLFdBTks7QUFBQSxVQU9MQyxlQVBLLGVBT0xBLGVBUEs7QUFBQSxVQVFMQyxjQVJLLGVBUUxBLGNBUks7QUFBQSxVQVNMQyxhQVRLLGVBU0xBLGFBVEs7QUFBQSxVQVVMQyxXQVZLLGVBVUxBLFdBVks7QUFBQSxVQVdMQyxVQVhLLGVBV0xBLFVBWEs7QUFBQSxVQVlMQyxJQVpLLGVBWUxBLElBWks7QUFBQSxVQWFMQyxtQkFiSyxlQWFMQSxtQkFiSztBQUFBLFVBY0xDLGVBZEssZUFjTEEsZUFkSztBQUFBLFVBZUxDLGNBZkssZUFlTEEsY0FmSztBQUFBLFVBZ0JMQyxnQkFoQkssZUFnQkxBLGdCQWhCSztBQUFBLFVBaUJMQyxzQkFqQkssZUFpQkxBLHNCQWpCSztBQUFBLFVBa0JMQyxpQkFsQkssZUFrQkxBLGlCQWxCSztBQUFBLFVBbUJMQyxxQkFuQkssZUFtQkxBLHFCQW5CSztBQUFBLFVBb0JMQyxpQkFwQkssZUFvQkxBLGlCQXBCSztB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QixzQkFBVWEsSUFBVixDQUFlRDtBQXJDSixDQUEzQjtBQXdDQWpFLGNBQWMsQ0FBQ21FLFlBQWYsR0FBOEI7QUFDNUJmLEVBQUFBLEdBQUcsRUFBRSxFQUR1QjtBQUU1QkcsRUFBQUEsT0FBTyxFQUFFLEVBRm1CO0FBRzVCL0IsRUFBQUEsS0FBSyxFQUFFLEVBSHFCO0FBSTVCb0MsRUFBQUEsR0FBRyxFQUFFLEVBSnVCO0FBSzVCbEQsRUFBQUEsYUFBYSxFQUFFLEVBTGE7QUFNNUJELEVBQUFBLGNBQWMsRUFBRSxFQU5ZO0FBTzVCRCxFQUFBQSxlQUFlLEVBQUUsRUFQVztBQVE1QkssRUFBQUEsSUFBSSxFQUFFLEVBUnNCO0FBUzVCOEMsRUFBQUEsU0FBUyxFQUFFLEVBVGlCO0FBVTVCcEQsRUFBQUEsV0FBVyxFQUFFLEVBVmU7QUFXNUJELEVBQUFBLEtBQUssRUFBRSxFQVhxQjtBQVk1QnVELEVBQUFBLEtBQUssRUFBRSxFQVpxQjtBQWE1QnhELEVBQUFBLGVBQWUsRUFBRSxFQWJXO0FBYzVCRCxFQUFBQSxLQUFLLEVBQUUsRUFkcUI7QUFlNUJELEVBQUFBLFVBQVUsRUFBRSxFQWZnQjtBQWdCNUJvQixFQUFBQSxZQUFZLEVBQUUsRUFoQmM7QUFpQjVCRixFQUFBQSxpQkFBaUIsRUFBRSxFQWpCUztBQWtCNUJ5QyxFQUFBQSxrQkFBa0IsRUFBRSxLQWxCUTtBQW1CNUJFLEVBQUFBLGNBQWMsRUFBRSxLQW5CWTtBQW9CNUJ2QyxFQUFBQSxtQkFBbUIsRUFBRSxLQXBCTztBQXFCNUJFLEVBQUFBLGFBQWEsRUFBRTtBQXJCYSxDQUE5QjtlQXdCZTNCLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtYWtlQmxvY2tpZSBmcm9tICdldGhlcmV1bS1ibG9ja2llcy1iYXNlNjQnO1xuaW1wb3J0IHsgUGlja2VyIH0gZnJvbSAnZW1vamktbWFydCc7XG5pbXBvcnQgU1ZHIGZyb20gJ3JlYWN0LWlubGluZXN2Zyc7XG5cbmltcG9ydCB7IEN1c3RvbUZpZWxkcyB9IGZyb20gJy4vUHJvZmlsZUNvbXBvbmVudHMnO1xuaW1wb3J0IEZvcm1Db250cm9scyBmcm9tICcuL0Zvcm1Db250cm9scyc7XG5pbXBvcnQgRWRpdE9wdGlvbnMgZnJvbSAnLi9FZGl0T3B0aW9ucyc7XG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSAnLi4vYXNzZXRzL1R3aXR0ZXJJY29uLnN2Zyc7XG5pbXBvcnQgR2l0aHViSWNvbiBmcm9tICcuLi9hc3NldHMvR2l0aHViSWNvbi5zdmcnO1xuaW1wb3J0IEVtYWlsSWNvbiBmcm9tICcuLi9hc3NldHMvRW1haWxJY29uLnN2Zyc7XG5pbXBvcnQgSW5mb0ljb24gZnJvbSAnLi4vYXNzZXRzL0luZm9JY29uLnN2Zyc7XG5cbmNsYXNzIEdlbmVyYWxQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY292ZXJQaG90byxcbiAgICAgIGltYWdlLFxuICAgICAgY3VycmVudFVzZXJBZGRyLFxuICAgICAgZW1vamksXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHZlcmlmaWVkVHdpdHRlcixcbiAgICAgIHZlcmlmaWVkR2l0aHViLFxuICAgICAgdmVyaWZpZWRFbWFpbCxcbiAgICAgIGlzU2hvd0Vtb2ppLFxuICAgICAgcmVkaXJlY3RGbixcbiAgICAgIG5hbWUsXG4gICAgICBoYW5kbGVSZW1vdmVQaWN0dXJlLFxuICAgICAgaGFuZGxlVXBkYXRlUGljLFxuICAgICAgaGFuZGxlQWRkRW1vamksXG4gICAgICBoYW5kbGVGb3JtQ2hhbmdlLFxuICAgICAgc2hvdWxkUmVtb3ZlQ292ZXJQaG90byxcbiAgICAgIHNob3VsZFJlbW92ZUltYWdlLFxuICAgICAgaGFuZGxlU2hvd0Vtb2ppUGlja2VyLFxuICAgICAgc3BhY2VQcm9maWxlSW1hZ2UsXG4gICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICBjdXN0b21GaWVsZHMsXG4gICAgICBzcGFjZSxcbiAgICAgIGlzQXBwUHJvZmlsZURlZmF1bHQsXG4gICAgICBoYW5kbGVTZWxlY3REZWZhdWx0UHJvZmlsZSxcbiAgICAgIGlzU2F2ZUxvYWRpbmcsXG4gICAgICBpc1Nob3dHZW5lcmFsUHJvZmlsZSxcbiAgICAgIHNob3dPcHRpb25zLFxuICAgICAgaGFuZGxlU2hvd09wdGlvbnNNZW51LFxuICAgICAgaXNTYXZlU3VjY2Vzc2Z1bCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGlzQ292ZXJJbWFnZSA9ICEhY292ZXJQaG90by5sZW5ndGggfHwgKHRoaXMuY292ZXJVcGxvYWQgJiYgISF0aGlzLmNvdmVyVXBsb2FkLmZpbGVzLmxlbmd0aCk7XG4gICAgY29uc3QgaXNJbWFnZSA9ICEhaW1hZ2UubGVuZ3RoIHx8ICh0aGlzLmZpbGVVcGxvYWQgJiYgISF0aGlzLmZpbGVVcGxvYWQuZmlsZXMubGVuZ3RoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGVkaXQgJHtpc1Nob3dHZW5lcmFsUHJvZmlsZSA/ICdzaG93JyA6ICcnfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfZm9ybVwiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfY2FudmFzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX2VkaXRDYW52YXNfd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbW92ZUNvdmVyUGljIHJlbW92ZUJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVQaWN0dXJlKCdjb3ZlclBob3RvJywgdHJ1ZSl9XG4gICAgICAgICAgICAgICAgICB0ZXh0PVwicmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHshc2hvdWxkUmVtb3ZlQ292ZXJQaG90byA/IDxwPiYjMTAwMDU7PC9wPiA6IDxwIGNsYXNzTmFtZT1cInVuZG9BcnJvd1wiPiYjODYxNzs8L3A+fVxuXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY292ZXJXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3ZlcklucHV0XCIgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX2NhbnZhc19vdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb3ZlcklucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY292ZXJQaWNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaWdodCBjb3ZlcklucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZVVwZGF0ZVBpYyhlLnRhcmdldC5maWxlc1swXSwgZSwgJ2NvdmVyUGhvdG8nKX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5jb3ZlclVwbG9hZCA9IHJlZn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cD5DaGFuZ2UgcGljdHVyZTwvcD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgeyhpc0NvdmVySW1hZ2UgJiYgIXNob3VsZFJlbW92ZUNvdmVyUGhvdG8pXG4gICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvdmVyUGljXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9eyh0aGlzLmNvdmVyVXBsb2FkICYmICEhdGhpcy5jb3ZlclVwbG9hZC5maWxlcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5jb3ZlclVwbG9hZC5maWxlc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYGh0dHBzOi8vaXBmcy5pbmZ1cmEuaW8vaXBmcy8ke2NvdmVyUGhvdG9bMF0uY29udGVudFVybFsnLyddfWB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyUGljXCIgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9waWNBbmRBZGRyZXNzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF91c2VyUGljdHVyZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZUlucHV0XCIgY2xhc3NOYW1lPVwiY2hvb3NlRmlsZVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGljXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlnaHQgZmlsZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZVVwZGF0ZVBpYyhlLnRhcmdldC5maWxlc1swXSwgZSwgJ2ltYWdlJyl9XG4gICAgICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMuZmlsZVVwbG9hZCA9IHJlZn1cbiAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVtb3ZlQnV0dG9uIHJlbW92ZVBpY1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZVBpY3R1cmUoJ2ltYWdlJywgZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwicmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHshc2hvdWxkUmVtb3ZlSW1hZ2UgPyA8cD4mIzEwMDA1OzwvcD4gOiA8cCBjbGFzc05hbWU9XCJ1bmRvQXJyb3dcIj4mIzg2MTc7PC9wPn1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICB7KGlzSW1hZ2UgJiYgIXNob3VsZFJlbW92ZUltYWdlKVxuICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZQaWNfZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZQaWNfZGl2X292ZXJsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hhbmdlIHBpY3R1cmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZlBpYyBjbGVhclByb2ZQaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyh0aGlzLmZpbGVVcGxvYWQgJiYgdGhpcy5maWxlVXBsb2FkLmZpbGVzICYmIHRoaXMuZmlsZVVwbG9hZC5maWxlc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5maWxlVXBsb2FkLmZpbGVzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYGh0dHBzOi8vaXBmcy5pbmZ1cmEuaW8vaXBmcy8ke2ltYWdlWzBdLmNvbnRlbnRVcmxbJy8nXX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9mUGljX2RpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9mUGljX2Rpdl9vdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoYW5nZSBwaWN0dXJlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFVzZXJBZGRyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZlBpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXttYWtlQmxvY2tpZShjdXJyZW50VXNlckFkZHIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2ZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IDxkaXYgY2xhc3NOYW1lPVwicHJvZlBpY1wiIC8+fVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPEVkaXRPcHRpb25zXG4gICAgICAgICAgICAgICAgc3BhY2U9e3NwYWNlfVxuICAgICAgICAgICAgICAgIGlzQXBwUHJvZmlsZURlZmF1bHQ9e2lzQXBwUHJvZmlsZURlZmF1bHR9XG4gICAgICAgICAgICAgICAgaGFuZGxlU2VsZWN0RGVmYXVsdFByb2ZpbGU9e2hhbmRsZVNlbGVjdERlZmF1bHRQcm9maWxlfVxuICAgICAgICAgICAgICAgIHNwYWNlUHJvZmlsZUltYWdlPXtzcGFjZVByb2ZpbGVJbWFnZX1cbiAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgICAgICAgICAgc2hvd09wdGlvbnM9e3Nob3dPcHRpb25zfVxuICAgICAgICAgICAgICAgIGhhbmRsZVNob3dPcHRpb25zTWVudT17aGFuZGxlU2hvd09wdGlvbnNNZW51fVxuICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyQWRkcj17Y3VycmVudFVzZXJBZGRyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX3NlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX2luZm9cIj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9maWVsZHNfZW50cnkgbm9NYXJnaW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9rZXlDb250YWluZXIgY3VycmVudEFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX2tleUNvbnRhaW5lcl9jdXJyZW50QWRkcmVzc1dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX2tleUNvbnRhaW5lcl9jdXJyZW50QWRkcmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDNCT1ggUFJPRklMRVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV92ZXJpZmllZEZpZWxkc19pbmZvIGluZm9JY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFNWRyBzcmM9e0luZm9JY29ufSBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfdmVyaWZpZWRGaWVsZHNfaWNvbnNcIiBhbHQ9XCJJbmZvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV92ZXJpZmllZEZpZWxkc19ob3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX3ZlcmlmaWVkRmllbGRzX2luZm9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBUaGVzZSBmaWVsZHMgYXJlIHNhdmVkIHRvIHlvdXIgM0JveCBwcm9maWxlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfZmllbGRzX2VudHJ5IG5hbWVBbmRFbW9qaVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX2ZpZWxkc19lbnRyeV9uYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9rZXlDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX2tleUNvbnRhaW5lcl9jdXJyZW50QWRkcmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfdmFsdWUgbmFtZUZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlRm9ybUNoYW5nZShlLCAnbmFtZScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX2ZpZWxkc19lbnRyeV9lbW9qaVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfa2V5Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9rZXlDb250YWluZXJfY3VycmVudEFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICBFbW9qaVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAge2lzU2hvd0Vtb2ppXG4gICAgICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfdmFsdWVfZW1vamlNZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtzZWxlY3RlZEVtb2ppID0+IGhhbmRsZUFkZEVtb2ppKHNlbGVjdGVkRW1vamkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBpY2sgeW91ciBzcGlyaXQgZW1vamlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAge2lzU2hvd0Vtb2ppICYmIDxkaXYgY2xhc3NOYW1lPSdvbkNsaWNrT3V0c2lkZScgb25DbGljaz17aGFuZGxlU2hvd0Vtb2ppUGlja2VyfSAvPn1cblxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfdmFsdWUtLXNwaXJpdFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNob3dFbW9qaVBpY2tlcn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGVtb2ppXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX3ZhbHVlLS1zcGlyaXRfY2hhcmFjdGVyXCIgcm9sZT1cImltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbW9qaS5jb2RlID8gZW1vamkuY29kZSA6IGVtb2ppfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX3ZhbHVlLS1zcGlyaXRfY2hhcmFjdGVyXCIgcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJ1bmljb3JuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg8J+mhFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV92ZXJpZmllZEZpZWxkc1wiPlxuICAgICAgICAgICAgICAgIHt2ZXJpZmllZFR3aXR0ZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfdmVyaWZpZWRGaWVsZHNfZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTVkcgc3JjPXtUd2l0dGVySWNvbn0gY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX3ZlcmlmaWVkRmllbGRzX2ljb25zXCIgYWx0PVwiVmVyaWZpZWQgVHdpdHRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgIHt2ZXJpZmllZFR3aXR0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7dmVyaWZpZWRHaXRodWIgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfdmVyaWZpZWRGaWVsZHNfZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTVkcgc3JjPXtHaXRodWJJY29ufSBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfdmVyaWZpZWRGaWVsZHNfaWNvbnNcIiBhbHQ9XCJWZXJpZmllZCBHaXRodWJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICB7dmVyaWZpZWRHaXRodWJ9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7dmVyaWZpZWRFbWFpbCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV92ZXJpZmllZEZpZWxkc19maWVsZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNWRyBzcmM9e0VtYWlsSWNvbn0gY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX3ZlcmlmaWVkRmllbGRzX2ljb25zIGVtYWlsXCIgYWx0PVwiVmVyaWZpZWQgRW1haWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICB7dmVyaWZpZWRFbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHsodmVyaWZpZWRUd2l0dGVyIHx8IHZlcmlmaWVkR2l0aHViIHx8IHZlcmlmaWVkRW1haWwpICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX3ZlcmlmaWVkRmllbGRzX2luZm8gaW5mb0ljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPFNWRyBzcmM9e0luZm9JY29ufSBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfdmVyaWZpZWRGaWVsZHNfaWNvbnNcIiBhbHQ9XCJJbmZvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfdmVyaWZpZWRGaWVsZHNfaG92ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfdmVyaWZpZWRGaWVsZHNfaW5mb190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgb3IgZWRpdCB2ZXJpZmllZCBmaWVsZHMgYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovLzNib3guaW8vJHtjdXJyZW50VXNlckFkZHJ9L2VkaXRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfdmVyaWZpZWRGaWVsZHNfaW5mb190ZXh0X2xpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgM0JveC5pb1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9maWVsZHNfZW50cnlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9rZXlDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9rZXlcIj5EZXNjcmlwdGlvbjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfdmFsdWUtLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUZvcm1DaGFuZ2UoZSwgJ2Rlc2NyaXB0aW9uJyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtjdXN0b21GaWVsZHMubGVuZ3RoID8gKFxuICAgICAgICAgICAgPEN1c3RvbUZpZWxkc1xuICAgICAgICAgICAgICBjdXN0b21GaWVsZHM9e2N1c3RvbUZpZWxkc31cbiAgICAgICAgICAgICAgaGFuZGxlRm9ybUNoYW5nZT17aGFuZGxlRm9ybUNoYW5nZX1cbiAgICAgICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgIHJlZGlyZWN0Rm49e3JlZGlyZWN0Rm59XG4gICAgICAgICAgICAgIGN1cnJlbnRVc2VyQWRkcj17Y3VycmVudFVzZXJBZGRyfVxuICAgICAgICAgICAgICBpc1NhdmVMb2FkaW5nPXtpc1NhdmVMb2FkaW5nfVxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sc1xuICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgIHJlZGlyZWN0Rm49e3JlZGlyZWN0Rm59XG4gICAgICAgICAgICAgICAgY3VycmVudFVzZXJBZGRyPXtjdXJyZW50VXNlckFkZHJ9XG4gICAgICAgICAgICAgICAgaXNTYXZlTG9hZGluZz17aXNTYXZlTG9hZGluZ31cbiAgICAgICAgICAgICAgICBpc1NhdmVTdWNjZXNzZnVsPXtpc1NhdmVTdWNjZXNzZnVsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkdlbmVyYWxQcm9maWxlLnByb3BUeXBlcyA9IHtcbiAgYm94OiBQcm9wVHlwZXMub2JqZWN0LFxuICBhbGxEYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzcGFjZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgbGlzdDogUHJvcFR5cGVzLmFycmF5LFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzcGFjZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZlcmlmaWVkR2l0aHViOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2ZXJpZmllZFR3aXR0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZlcmlmaWVkRW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZW1vamk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY3VycmVudFVzZXJBZGRyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbWFnZTogUHJvcFR5cGVzLmFycmF5LFxuICBjdXN0b21GaWVsZHM6IFByb3BUeXBlcy5hcnJheSxcbiAgc3BhY2VQcm9maWxlSW1hZ2U6IFByb3BUeXBlcy5hcnJheSxcbiAgY292ZXJQaG90bzogUHJvcFR5cGVzLmFycmF5LFxuICBpc0ZldGNoaW5nVGhyZWVCb3g6IFByb3BUeXBlcy5ib29sLFxuICBjb3B5U3VjY2Vzc2Z1bDogUHJvcFR5cGVzLmJvb2wsXG4gIGlzU2hvd0Vtb2ppOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvdWxkUmVtb3ZlQ292ZXJQaG90bzogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3VsZFJlbW92ZUltYWdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNBcHBQcm9maWxlRGVmYXVsdDogUHJvcFR5cGVzLmJvb2wsXG4gIGlzU2hvd0dlbmVyYWxQcm9maWxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNTYXZlTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGlzU2F2ZVN1Y2Nlc3NmdWw6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHNob3dPcHRpb25zOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGFuZGxlU2hvd09wdGlvbnNNZW51OiBQcm9wVHlwZXMuZnVuYyxcbiAgcmVkaXJlY3RGbjogUHJvcFR5cGVzLmZ1bmMsXG4gIGhhbmRsZVJlbW92ZVBpY3R1cmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZVVwZGF0ZVBpYzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlQWRkRW1vamk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUZvcm1DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZVNob3dFbW9qaVBpY2tlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlU2VsZWN0RGVmYXVsdFByb2ZpbGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZVN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbkdlbmVyYWxQcm9maWxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgYm94OiB7fSxcbiAgYWxsRGF0YToge30sXG4gIHNwYWNlOiB7fSxcbiAgZGlkOiAnJyxcbiAgdmVyaWZpZWRFbWFpbDogJycsXG4gIHZlcmlmaWVkR2l0aHViOiAnJyxcbiAgdmVyaWZpZWRUd2l0dGVyOiAnJyxcbiAgbmFtZTogJycsXG4gIHNwYWNlTmFtZTogJycsXG4gIGRlc2NyaXB0aW9uOiAnJyxcbiAgZW1vamk6ICcnLFxuICBlbWFpbDogJycsXG4gIGN1cnJlbnRVc2VyQWRkcjogJycsXG4gIGltYWdlOiBbXSxcbiAgY292ZXJQaG90bzogW10sXG4gIGN1c3RvbUZpZWxkczogW10sXG4gIHNwYWNlUHJvZmlsZUltYWdlOiBbXSxcbiAgaXNGZXRjaGluZ1RocmVlQm94OiBmYWxzZSxcbiAgY29weVN1Y2Nlc3NmdWw6IGZhbHNlLFxuICBpc0FwcFByb2ZpbGVEZWZhdWx0OiBmYWxzZSxcbiAgaXNTYXZlTG9hZGluZzogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHZW5lcmFsUHJvZmlsZTsiXX0=