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

var _ProfileField = _interopRequireDefault(require("./ProfileField"));

var _EditOptions = _interopRequireDefault(require("./EditOptions"));

var _InfoIcon = _interopRequireDefault(require("../assets/InfoIcon.svg"));

var _FormControls = _interopRequireDefault(require("./FormControls"));

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

var SpaceProfile =
/*#__PURE__*/
function (_Component) {
  _inherits(SpaceProfile, _Component);

  function SpaceProfile(props) {
    var _this;

    _classCallCheck(this, SpaceProfile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SpaceProfile).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(SpaceProfile, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          spaceProfileName = _this$props.spaceProfileName,
          spaceProfileCoverPhoto = _this$props.spaceProfileCoverPhoto,
          image = _this$props.image,
          spaceProfileImage = _this$props.spaceProfileImage,
          currentUserAddr = _this$props.currentUserAddr,
          spaceProfileEmoji = _this$props.spaceProfileEmoji,
          spaceProfileDescription = _this$props.spaceProfileDescription,
          isShowEmoji = _this$props.isShowEmoji,
          redirectFn = _this$props.redirectFn,
          handleRemovePicture = _this$props.handleRemovePicture,
          handleUpdatePic = _this$props.handleUpdatePic,
          handleAddEmoji = _this$props.handleAddEmoji,
          handleFormChange = _this$props.handleFormChange,
          shouldRemoveSpaceProfileImage = _this$props.shouldRemoveSpaceProfileImage,
          shouldRemoveSpaceCoverPhoto = _this$props.shouldRemoveSpaceCoverPhoto,
          handleShowEmojiPicker = _this$props.handleShowEmojiPicker,
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
      var isCoverImage = !!spaceProfileCoverPhoto.length || this.spaceCoverUpload && !!this.spaceCoverUpload.files.length;
      var isImage = !!spaceProfileImage.length || this.spaceImageUpload && !!this.spaceImageUpload.files.length;
      return _react["default"].createElement("div", {
        className: "edit ".concat(isShowGeneralProfile ? '' : 'show')
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
          return handleRemovePicture('spaceCoverPhoto', true, true);
        },
        text: "remove",
        type: "button"
      }, !shouldRemoveSpaceCoverPhoto ? _react["default"].createElement("p", null, "\u2715") : _react["default"].createElement("p", {
        className: "undoArrow"
      }, "\u21A9"))), _react["default"].createElement("div", {
        className: "coverWrapper"
      }, _react["default"].createElement("label", {
        htmlFor: "spaceCoverInput",
        className: "edit_profile_canvas_overlay"
      }, _react["default"].createElement("input", {
        id: "spaceCoverInput",
        type: "file",
        name: "coverPic",
        className: "light coverInput",
        accept: "image/*",
        onChange: function onChange(e) {
          return handleUpdatePic(e.target.files[0], e, 'spaceProfileCoverPhoto');
        },
        ref: function ref(_ref) {
          return _this2.spaceCoverUpload = _ref;
        }
      }), _react["default"].createElement("p", null, "Change picture")), isCoverImage && !shouldRemoveSpaceCoverPhoto ? _react["default"].createElement("img", {
        className: "coverPic",
        alt: "profile",
        src: this.spaceCoverUpload && !!this.spaceCoverUpload.files.length ? URL.createObjectURL(this.spaceCoverUpload.files[0]) : "https://ipfs.infura.io/ipfs/".concat(spaceProfileCoverPhoto[0].contentUrl['/'])
      }) : _react["default"].createElement("div", {
        className: "coverPic"
      })))), _react["default"].createElement("div", {
        className: "edit_profile_section"
      }, _react["default"].createElement("div", {
        className: "edit_profile_picAndAddress"
      }, _react["default"].createElement("div", {
        className: "edit_userPicture"
      }, _react["default"].createElement("label", {
        htmlFor: "spaceProfileImage",
        className: "chooseFile"
      }, _react["default"].createElement("input", {
        id: "spaceProfileImage",
        type: "file",
        name: "pic",
        className: "light fileInput",
        accept: "image/*",
        onChange: function onChange(e) {
          return handleUpdatePic(e.target.files[0], e, 'spaceProfileImage');
        },
        ref: function ref(_ref2) {
          return _this2.spaceImageUpload = _ref2;
        }
      }), _react["default"].createElement("button", {
        className: "removeButton removePic",
        onClick: function onClick() {
          return handleRemovePicture('spaceProfileImage', false, true);
        },
        text: "remove",
        type: "button"
      }, !shouldRemoveSpaceProfileImage ? _react["default"].createElement("p", null, "\u2715") : _react["default"].createElement("p", {
        className: "undoArrow"
      }, "\u21A9")), isImage && !shouldRemoveSpaceProfileImage ? _react["default"].createElement("div", {
        className: "profPic_div"
      }, _react["default"].createElement("div", {
        className: "profPic_div_overlay"
      }, _react["default"].createElement("p", null, "Change picture")), _react["default"].createElement("img", {
        className: "profPic clearProfPic",
        src: this.spaceImageUpload && this.spaceImageUpload.files && this.spaceImageUpload.files[0] ? URL.createObjectURL(this.spaceImageUpload.files[0]) : "https://ipfs.infura.io/ipfs/".concat(spaceProfileImage[0].contentUrl['/']),
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
        image: image,
        spaceProfileImage: spaceProfileImage,
        currentUserAddr: currentUserAddr,
        showOptions: showOptions,
        handleShowOptionsMenu: handleShowOptionsMenu
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
      }, "These fields are saved to your app profile")))))), _react["default"].createElement("div", {
        className: "edit_profile_fields_entry nameAndEmoji"
      }, _react["default"].createElement("div", {
        className: "edit_profile_fields_entry_name"
      }, _react["default"].createElement("div", {
        className: "edit_profile_keyContainer"
      }, _react["default"].createElement("p", null, "Name")), _react["default"].createElement("input", {
        name: "name",
        type: "text",
        value: spaceProfileName,
        className: "edit_profile_value nameField",
        onChange: function onChange(e) {
          return handleFormChange(e, 'spaceProfileName');
        }
      })), _react["default"].createElement("div", {
        className: "edit_profile_fields_entry_emoji"
      }, _react["default"].createElement("div", {
        className: "edit_profile_keyContainer"
      }, _react["default"].createElement("p", {
        className: "edit_profile_key"
      }, "Emoji")), isShowEmoji && _react["default"].createElement("div", {
        className: "edit_profile_value_emojiMenu"
      }, _react["default"].createElement(_emojiMart.Picker, {
        onSelect: function onSelect(selectedEmoji) {
          return handleAddEmoji(selectedEmoji, true);
        },
        title: "Pick your spirit emoji"
      })), isShowEmoji && _react["default"].createElement("div", {
        className: "onClickOutside",
        onClick: handleShowEmojiPicker
      }), _react["default"].createElement("div", {
        className: "edit_profile_value--spirit",
        onClick: handleShowEmojiPicker
      }, spaceProfileEmoji ? _react["default"].createElement("span", {
        className: "edit_profile_value--spirit_character",
        role: "img"
      }, spaceProfileEmoji.code ? spaceProfileEmoji.code : spaceProfileEmoji) : _react["default"].createElement("span", {
        className: "edit_profile_value--spirit_character",
        role: "img",
        "aria-label": "unicorn"
      }, "\uD83E\uDD84")))), _react["default"].createElement("div", {
        className: "edit_profile_verifiedFields"
      }), _react["default"].createElement("div", {
        className: "edit_profile_fields_entry"
      }, _react["default"].createElement("div", {
        className: "edit_profile_keyContainer"
      }, _react["default"].createElement("p", {
        className: "edit_profile_key"
      }, "Description")), _react["default"].createElement("textarea", {
        name: "description",
        type: "text",
        className: "edit_profile_value--description",
        value: spaceProfileDescription,
        onChange: function onChange(e) {
          return handleFormChange(e, 'spaceProfileDescription');
        }
      })))), !!customFields.length && _react["default"].createElement("div", {
        className: "edit_profile_section"
      }, _react["default"].createElement("div", {
        className: "edit_profile_info"
      }, customFields.map(function (entry) {
        return _react["default"].createElement(_ProfileField["default"], _extends({
          customField: entry,
          handleFormChange: handleFormChange,
          key: entry.key
        }, _this2.props));
      }))), _react["default"].createElement(_FormControls["default"], {
        isSaveLoading: isSaveLoading,
        isSaveSuccessful: isSaveSuccessful,
        redirectFn: redirectFn,
        handleSubmit: handleSubmit,
        currentUserAddr: currentUserAddr
      })));
    }
  }]);

  return SpaceProfile;
}(_react.Component);

SpaceProfile.propTypes = {
  box: _propTypes["default"].object,
  allData: _propTypes["default"].object,
  space: _propTypes["default"].object,
  customFields: _propTypes["default"].array,
  spaceProfileName: _propTypes["default"].string,
  spaceName: _propTypes["default"].string,
  verifiedGithub: _propTypes["default"].string,
  verifiedTwitter: _propTypes["default"].string,
  verifiedEmail: _propTypes["default"].string,
  spaceProfileEmoji: _propTypes["default"].string,
  spaceProfileDescription: _propTypes["default"].string,
  email: _propTypes["default"].string,
  currentUserAddr: _propTypes["default"].string,
  image: _propTypes["default"].array,
  spaceProfileImage: _propTypes["default"].array,
  spaceProfileCoverPhoto: _propTypes["default"].array,
  isFetchingThreeBox: _propTypes["default"].bool,
  copySuccessful: _propTypes["default"].bool,
  isShowEmoji: _propTypes["default"].bool,
  isAppProfileDefault: _propTypes["default"].bool,
  shouldRemoveSpaceProfileImage: _propTypes["default"].bool,
  shouldRemoveUserPic: _propTypes["default"].bool,
  shouldRemoveSpaceCoverPhoto: _propTypes["default"].bool,
  showOptions: _propTypes["default"].bool,
  isShowGeneralProfile: _propTypes["default"].bool,
  isSaveLoading: _propTypes["default"].bool,
  isSaveSuccessful: _propTypes["default"].bool.isRequired,
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
SpaceProfile.defaultProps = {
  box: {},
  allData: {},
  space: {},
  verifiedEmail: '',
  verifiedGithub: '',
  verifiedTwitter: '',
  spaceProfileName: '',
  spaceName: '',
  spaceProfileDescription: '',
  spaceProfileEmoji: '',
  email: '',
  currentUserAddr: '',
  image: [],
  spaceProfileImage: [],
  spaceProfileCoverPhoto: [],
  customFields: [],
  isSaveLoading: false,
  isFetchingThreeBox: false,
  copySuccessful: false,
  isAppProfileDefault: false,
  shouldRemoveSpaceCoverPhoto: false
};
var _default = SpaceProfile;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NwYWNlUHJvZmlsZS5qc3giXSwibmFtZXMiOlsiU3BhY2VQcm9maWxlIiwicHJvcHMiLCJzdGF0ZSIsInNwYWNlUHJvZmlsZU5hbWUiLCJzcGFjZVByb2ZpbGVDb3ZlclBob3RvIiwiaW1hZ2UiLCJzcGFjZVByb2ZpbGVJbWFnZSIsImN1cnJlbnRVc2VyQWRkciIsInNwYWNlUHJvZmlsZUVtb2ppIiwic3BhY2VQcm9maWxlRGVzY3JpcHRpb24iLCJpc1Nob3dFbW9qaSIsInJlZGlyZWN0Rm4iLCJoYW5kbGVSZW1vdmVQaWN0dXJlIiwiaGFuZGxlVXBkYXRlUGljIiwiaGFuZGxlQWRkRW1vamkiLCJoYW5kbGVGb3JtQ2hhbmdlIiwic2hvdWxkUmVtb3ZlU3BhY2VQcm9maWxlSW1hZ2UiLCJzaG91bGRSZW1vdmVTcGFjZUNvdmVyUGhvdG8iLCJoYW5kbGVTaG93RW1vamlQaWNrZXIiLCJoYW5kbGVTdWJtaXQiLCJjdXN0b21GaWVsZHMiLCJzcGFjZSIsImlzQXBwUHJvZmlsZURlZmF1bHQiLCJoYW5kbGVTZWxlY3REZWZhdWx0UHJvZmlsZSIsImlzU2F2ZUxvYWRpbmciLCJpc1Nob3dHZW5lcmFsUHJvZmlsZSIsInNob3dPcHRpb25zIiwiaGFuZGxlU2hvd09wdGlvbnNNZW51IiwiaXNTYXZlU3VjY2Vzc2Z1bCIsImlzQ292ZXJJbWFnZSIsImxlbmd0aCIsInNwYWNlQ292ZXJVcGxvYWQiLCJmaWxlcyIsImlzSW1hZ2UiLCJzcGFjZUltYWdlVXBsb2FkIiwiZSIsInRhcmdldCIsInJlZiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNvbnRlbnRVcmwiLCJJbmZvSWNvbiIsInNlbGVjdGVkRW1vamkiLCJjb2RlIiwibWFwIiwiZW50cnkiLCJrZXkiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJib3giLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJhbGxEYXRhIiwiYXJyYXkiLCJzdHJpbmciLCJzcGFjZU5hbWUiLCJ2ZXJpZmllZEdpdGh1YiIsInZlcmlmaWVkVHdpdHRlciIsInZlcmlmaWVkRW1haWwiLCJlbWFpbCIsImlzRmV0Y2hpbmdUaHJlZUJveCIsImJvb2wiLCJjb3B5U3VjY2Vzc2Z1bCIsInNob3VsZFJlbW92ZVVzZXJQaWMiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFk7Ozs7O0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsc0ZBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUdsQjs7Ozs2QkFFUTtBQUFBOztBQUFBLHdCQTRCSCxLQUFLRCxLQTVCRjtBQUFBLFVBRUxFLGdCQUZLLGVBRUxBLGdCQUZLO0FBQUEsVUFHTEMsc0JBSEssZUFHTEEsc0JBSEs7QUFBQSxVQUlMQyxLQUpLLGVBSUxBLEtBSks7QUFBQSxVQUtMQyxpQkFMSyxlQUtMQSxpQkFMSztBQUFBLFVBTUxDLGVBTkssZUFNTEEsZUFOSztBQUFBLFVBT0xDLGlCQVBLLGVBT0xBLGlCQVBLO0FBQUEsVUFRTEMsdUJBUkssZUFRTEEsdUJBUks7QUFBQSxVQVNMQyxXQVRLLGVBU0xBLFdBVEs7QUFBQSxVQVVMQyxVQVZLLGVBVUxBLFVBVks7QUFBQSxVQVdMQyxtQkFYSyxlQVdMQSxtQkFYSztBQUFBLFVBWUxDLGVBWkssZUFZTEEsZUFaSztBQUFBLFVBYUxDLGNBYkssZUFhTEEsY0FiSztBQUFBLFVBY0xDLGdCQWRLLGVBY0xBLGdCQWRLO0FBQUEsVUFlTEMsNkJBZkssZUFlTEEsNkJBZks7QUFBQSxVQWdCTEMsMkJBaEJLLGVBZ0JMQSwyQkFoQks7QUFBQSxVQWlCTEMscUJBakJLLGVBaUJMQSxxQkFqQks7QUFBQSxVQWtCTEMsWUFsQkssZUFrQkxBLFlBbEJLO0FBQUEsVUFtQkxD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LDBCQUEwQixFQUFFMkIsc0JBQVVlLElBQVYsQ0FBZUQsVUFuQ3BCO0FBb0N2QjdDLEVBQUFBLFlBQVksRUFBRStCLHNCQUFVZSxJQUFWLENBQWVEO0FBcENOLENBQXpCO0FBdUNBaEUsWUFBWSxDQUFDa0UsWUFBYixHQUE0QjtBQUMxQmpCLEVBQUFBLEdBQUcsRUFBRSxFQURxQjtBQUUxQkcsRUFBQUEsT0FBTyxFQUFFLEVBRmlCO0FBRzFCL0IsRUFBQUEsS0FBSyxFQUFFLEVBSG1CO0FBSTFCcUMsRUFBQUEsYUFBYSxFQUFFLEVBSlc7QUFLMUJGLEVBQUFBLGNBQWMsRUFBRSxFQUxVO0FBTTFCQyxFQUFBQSxlQUFlLEVBQUUsRUFOUztBQU8xQnRELEVBQUFBLGdCQUFnQixFQUFFLEVBUFE7QUFRMUJvRCxFQUFBQSxTQUFTLEVBQUUsRUFSZTtBQVMxQjlDLEVBQUFBLHVCQUF1QixFQUFFLEVBVEM7QUFVMUJELEVBQUFBLGlCQUFpQixFQUFFLEVBVk87QUFXMUJtRCxFQUFBQSxLQUFLLEVBQUUsRUFYbUI7QUFZMUJwRCxFQUFBQSxlQUFlLEVBQUUsRUFaUztBQWExQkYsRUFBQUEsS0FBSyxFQUFFLEVBYm1CO0FBYzFCQyxFQUFBQSxpQkFBaUIsRUFBRSxFQWRPO0FBZTFCRixFQUFBQSxzQkFBc0IsRUFBRSxFQWZFO0FBZ0IxQmdCLEVBQUFBLFlBQVksRUFBRSxFQWhCWTtBQWlCMUJJLEVBQUFBLGFBQWEsRUFBRSxLQWpCVztBQWtCMUJvQyxFQUFBQSxrQkFBa0IsRUFBRSxLQWxCTTtBQW1CMUJFLEVBQUFBLGNBQWMsRUFBRSxLQW5CVTtBQW9CMUJ4QyxFQUFBQSxtQkFBbUIsRUFBRSxLQXBCSztBQXFCMUJMLEVBQUFBLDJCQUEyQixFQUFFO0FBckJILENBQTVCO2VBd0JlakIsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG1ha2VCbG9ja2llIGZyb20gJ2V0aGVyZXVtLWJsb2NraWVzLWJhc2U2NCc7XG5pbXBvcnQgeyBQaWNrZXIgfSBmcm9tICdlbW9qaS1tYXJ0JztcbmltcG9ydCBTVkcgZnJvbSAncmVhY3QtaW5saW5lc3ZnJztcblxuaW1wb3J0IFByb2ZpbGVGaWVsZCBmcm9tICcuL1Byb2ZpbGVGaWVsZCc7XG5pbXBvcnQgRWRpdE9wdGlvbnMgZnJvbSAnLi9FZGl0T3B0aW9ucyc7XG5pbXBvcnQgSW5mb0ljb24gZnJvbSAnLi4vYXNzZXRzL0luZm9JY29uLnN2Zyc7XG5pbXBvcnQgRm9ybUNvbnRyb2xzIGZyb20gJy4vRm9ybUNvbnRyb2xzJztcblxuY2xhc3MgU3BhY2VQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3BhY2VQcm9maWxlTmFtZSxcbiAgICAgIHNwYWNlUHJvZmlsZUNvdmVyUGhvdG8sXG4gICAgICBpbWFnZSxcbiAgICAgIHNwYWNlUHJvZmlsZUltYWdlLFxuICAgICAgY3VycmVudFVzZXJBZGRyLFxuICAgICAgc3BhY2VQcm9maWxlRW1vamksXG4gICAgICBzcGFjZVByb2ZpbGVEZXNjcmlwdGlvbixcbiAgICAgIGlzU2hvd0Vtb2ppLFxuICAgICAgcmVkaXJlY3RGbixcbiAgICAgIGhhbmRsZVJlbW92ZVBpY3R1cmUsXG4gICAgICBoYW5kbGVVcGRhdGVQaWMsXG4gICAgICBoYW5kbGVBZGRFbW9qaSxcbiAgICAgIGhhbmRsZUZvcm1DaGFuZ2UsXG4gICAgICBzaG91bGRSZW1vdmVTcGFjZVByb2ZpbGVJbWFnZSxcbiAgICAgIHNob3VsZFJlbW92ZVNwYWNlQ292ZXJQaG90byxcbiAgICAgIGhhbmRsZVNob3dFbW9qaVBpY2tlcixcbiAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgIGN1c3RvbUZpZWxkcyxcbiAgICAgIHNwYWNlLFxuICAgICAgaXNBcHBQcm9maWxlRGVmYXVsdCxcbiAgICAgIGhhbmRsZVNlbGVjdERlZmF1bHRQcm9maWxlLFxuICAgICAgaXNTYXZlTG9hZGluZyxcbiAgICAgIGlzU2hvd0dlbmVyYWxQcm9maWxlLFxuICAgICAgc2hvd09wdGlvbnMsXG4gICAgICBoYW5kbGVTaG93T3B0aW9uc01lbnUsXG4gICAgICBpc1NhdmVTdWNjZXNzZnVsLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgaXNDb3ZlckltYWdlID0gISFzcGFjZVByb2ZpbGVDb3ZlclBob3RvLmxlbmd0aCB8fCAodGhpcy5zcGFjZUNvdmVyVXBsb2FkICYmICEhdGhpcy5zcGFjZUNvdmVyVXBsb2FkLmZpbGVzLmxlbmd0aCk7XG4gICAgY29uc3QgaXNJbWFnZSA9ICEhc3BhY2VQcm9maWxlSW1hZ2UubGVuZ3RoIHx8ICh0aGlzLnNwYWNlSW1hZ2VVcGxvYWQgJiYgISF0aGlzLnNwYWNlSW1hZ2VVcGxvYWQuZmlsZXMubGVuZ3RoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGVkaXQgJHtpc1Nob3dHZW5lcmFsUHJvZmlsZSA/ICcnIDogJ3Nob3cnfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfZm9ybVwiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfY2FudmFzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX2VkaXRDYW52YXNfd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbW92ZUNvdmVyUGljIHJlbW92ZUJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVQaWN0dXJlKCdzcGFjZUNvdmVyUGhvdG8nLCB0cnVlLCB0cnVlKX1cbiAgICAgICAgICAgICAgICAgIHRleHQ9XCJyZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgeyFzaG91bGRSZW1vdmVTcGFjZUNvdmVyUGhvdG8gPyA8cD4mIzEwMDA1OzwvcD4gOiA8cCBjbGFzc05hbWU9XCJ1bmRvQXJyb3dcIj4mIzg2MTc7PC9wPn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3ZlcldyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNwYWNlQ292ZXJJbnB1dFwiIGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9jYW52YXNfb3ZlcmxheVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3BhY2VDb3ZlcklucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY292ZXJQaWNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaWdodCBjb3ZlcklucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZVVwZGF0ZVBpYyhlLnRhcmdldC5maWxlc1swXSwgZSwgJ3NwYWNlUHJvZmlsZUNvdmVyUGhvdG8nKX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5zcGFjZUNvdmVyVXBsb2FkID0gcmVmfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwPkNoYW5nZSBwaWN0dXJlPC9wPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICB7KGlzQ292ZXJJbWFnZSAmJiAhc2hvdWxkUmVtb3ZlU3BhY2VDb3ZlclBob3RvKVxuICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3ZlclBpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXsodGhpcy5zcGFjZUNvdmVyVXBsb2FkICYmICEhdGhpcy5zcGFjZUNvdmVyVXBsb2FkLmZpbGVzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgID8gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLnNwYWNlQ292ZXJVcGxvYWQuZmlsZXNbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBodHRwczovL2lwZnMuaW5mdXJhLmlvL2lwZnMvJHtzcGFjZVByb2ZpbGVDb3ZlclBob3RvWzBdLmNvbnRlbnRVcmxbJy8nXX1gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3ZlclBpY1wiIC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfcGljQW5kQWRkcmVzc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfdXNlclBpY3R1cmVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNwYWNlUHJvZmlsZUltYWdlXCIgY2xhc3NOYW1lPVwiY2hvb3NlRmlsZVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3BhY2VQcm9maWxlSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaWNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaWdodCBmaWxlSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlVXBkYXRlUGljKGUudGFyZ2V0LmZpbGVzWzBdLCBlLCAnc3BhY2VQcm9maWxlSW1hZ2UnKX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5zcGFjZUltYWdlVXBsb2FkID0gcmVmfVxuICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZW1vdmVCdXR0b24gcmVtb3ZlUGljXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlUGljdHVyZSgnc3BhY2VQcm9maWxlSW1hZ2UnLCBmYWxzZSwgdHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJyZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgeyFzaG91bGRSZW1vdmVTcGFjZVByb2ZpbGVJbWFnZSA/IDxwPiYjMTAwMDU7PC9wPiA6IDxwIGNsYXNzTmFtZT1cInVuZG9BcnJvd1wiPiYjODYxNzs8L3A+fVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgIHsoaXNJbWFnZSAmJiAhc2hvdWxkUmVtb3ZlU3BhY2VQcm9maWxlSW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZlBpY19kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZlBpY19kaXZfb3ZlcmxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGFuZ2UgcGljdHVyZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9mUGljIGNsZWFyUHJvZlBpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17KHRoaXMuc3BhY2VJbWFnZVVwbG9hZCAmJiB0aGlzLnNwYWNlSW1hZ2VVcGxvYWQuZmlsZXMgJiYgdGhpcy5zcGFjZUltYWdlVXBsb2FkLmZpbGVzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLnNwYWNlSW1hZ2VVcGxvYWQuZmlsZXNbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgaHR0cHM6Ly9pcGZzLmluZnVyYS5pby9pcGZzLyR7c3BhY2VQcm9maWxlSW1hZ2VbMF0uY29udGVudFVybFsnLyddfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2ZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZQaWNfZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZQaWNfZGl2X292ZXJsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hhbmdlIHBpY3R1cmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50VXNlckFkZHIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9mUGljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21ha2VCbG9ja2llKGN1cnJlbnRVc2VyQWRkcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogPGRpdiBjbGFzc05hbWU9XCJwcm9mUGljXCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8RWRpdE9wdGlvbnNcbiAgICAgICAgICAgICAgICBzcGFjZT17c3BhY2V9XG4gICAgICAgICAgICAgICAgaXNBcHBQcm9maWxlRGVmYXVsdD17aXNBcHBQcm9maWxlRGVmYXVsdH1cbiAgICAgICAgICAgICAgICBoYW5kbGVTZWxlY3REZWZhdWx0UHJvZmlsZT17aGFuZGxlU2VsZWN0RGVmYXVsdFByb2ZpbGV9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAgICAgIHNwYWNlUHJvZmlsZUltYWdlPXtzcGFjZVByb2ZpbGVJbWFnZX1cbiAgICAgICAgICAgICAgICBjdXJyZW50VXNlckFkZHI9e2N1cnJlbnRVc2VyQWRkcn1cbiAgICAgICAgICAgICAgICBzaG93T3B0aW9ucz17c2hvd09wdGlvbnN9XG4gICAgICAgICAgICAgICAgaGFuZGxlU2hvd09wdGlvbnNNZW51PXtoYW5kbGVTaG93T3B0aW9uc01lbnV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX3NlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX2luZm9cIj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9maWVsZHNfZW50cnkgbm9NYXJnaW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9rZXlDb250YWluZXIgY3VycmVudEFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX2tleUNvbnRhaW5lcl9jdXJyZW50QWRkcmVzc1dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX2tleUNvbnRhaW5lcl9jdXJyZW50QWRkcmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIEFQUCBQUk9GSUxFXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV92ZXJpZmllZEZpZWxkc19pbmZvIGluZm9JY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFNWRyBzcmM9e0luZm9JY29ufSBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfdmVyaWZpZWRGaWVsZHNfaWNvbnNcIiBhbHQ9XCJJbmZvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV92ZXJpZmllZEZpZWxkc19ob3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX3ZlcmlmaWVkRmllbGRzX2luZm9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBUaGVzZSBmaWVsZHMgYXJlIHNhdmVkIHRvIHlvdXIgYXBwIHByb2ZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfZmllbGRzX2VudHJ5IG5hbWVBbmRFbW9qaVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX2ZpZWxkc19lbnRyeV9uYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9rZXlDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+TmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3BhY2VQcm9maWxlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX3ZhbHVlIG5hbWVGaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUZvcm1DaGFuZ2UoZSwgJ3NwYWNlUHJvZmlsZU5hbWUnKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9maWVsZHNfZW50cnlfZW1vamlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX2tleUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfa2V5XCI+RW1vamk8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAge2lzU2hvd0Vtb2ppXG4gICAgICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfdmFsdWVfZW1vamlNZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtzZWxlY3RlZEVtb2ppID0+IGhhbmRsZUFkZEVtb2ppKHNlbGVjdGVkRW1vamksIHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBpY2sgeW91ciBzcGlyaXQgZW1vamlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAge2lzU2hvd0Vtb2ppICYmIDxkaXYgY2xhc3NOYW1lPSdvbkNsaWNrT3V0c2lkZScgb25DbGljaz17aGFuZGxlU2hvd0Vtb2ppUGlja2VyfSAvPn1cblxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfdmFsdWUtLXNwaXJpdFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNob3dFbW9qaVBpY2tlcn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3NwYWNlUHJvZmlsZUVtb2ppXG4gICAgICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfdmFsdWUtLXNwaXJpdF9jaGFyYWN0ZXJcIiByb2xlPVwiaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzcGFjZVByb2ZpbGVFbW9qaS5jb2RlID8gc3BhY2VQcm9maWxlRW1vamkuY29kZSA6IHNwYWNlUHJvZmlsZUVtb2ppfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV92YWx1ZS0tc3Bpcml0X2NoYXJhY3RlclwiIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwidW5pY29yblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICDwn6aEXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV92ZXJpZmllZEZpZWxkc1wiIC8+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfZmllbGRzX2VudHJ5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfa2V5Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfa2V5XCI+RGVzY3JpcHRpb248L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9wcm9maWxlX3ZhbHVlLS1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c3BhY2VQcm9maWxlRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVGb3JtQ2hhbmdlKGUsICdzcGFjZVByb2ZpbGVEZXNjcmlwdGlvbicpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHshIWN1c3RvbUZpZWxkcy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X3Byb2ZpbGVfc2VjdGlvblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfcHJvZmlsZV9pbmZvXCI+XG4gICAgICAgICAgICAgICAge2N1c3RvbUZpZWxkcy5tYXAoZW50cnkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFByb2ZpbGVGaWVsZFxuICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZD17ZW50cnl9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUZvcm1DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGtleT17ZW50cnkua2V5fVxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxGb3JtQ29udHJvbHNcbiAgICAgICAgICAgIGlzU2F2ZUxvYWRpbmc9e2lzU2F2ZUxvYWRpbmd9XG4gICAgICAgICAgICBpc1NhdmVTdWNjZXNzZnVsPXtpc1NhdmVTdWNjZXNzZnVsfVxuICAgICAgICAgICAgcmVkaXJlY3RGbj17cmVkaXJlY3RGbn1cbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgY3VycmVudFVzZXJBZGRyPXtjdXJyZW50VXNlckFkZHJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2RpdiA+XG4gICAgKTtcbiAgfVxufVxuXG5TcGFjZVByb2ZpbGUucHJvcFR5cGVzID0ge1xuICBib3g6IFByb3BUeXBlcy5vYmplY3QsXG4gIGFsbERhdGE6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNwYWNlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjdXN0b21GaWVsZHM6IFByb3BUeXBlcy5hcnJheSxcbiAgc3BhY2VQcm9maWxlTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3BhY2VOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2ZXJpZmllZEdpdGh1YjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmVyaWZpZWRUd2l0dGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2ZXJpZmllZEVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzcGFjZVByb2ZpbGVFbW9qaTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3BhY2VQcm9maWxlRGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjdXJyZW50VXNlckFkZHI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGltYWdlOiBQcm9wVHlwZXMuYXJyYXksXG4gIHNwYWNlUHJvZmlsZUltYWdlOiBQcm9wVHlwZXMuYXJyYXksXG4gIHNwYWNlUHJvZmlsZUNvdmVyUGhvdG86IFByb3BUeXBlcy5hcnJheSxcbiAgaXNGZXRjaGluZ1RocmVlQm94OiBQcm9wVHlwZXMuYm9vbCxcbiAgY29weVN1Y2Nlc3NmdWw6IFByb3BUeXBlcy5ib29sLFxuICBpc1Nob3dFbW9qaTogUHJvcFR5cGVzLmJvb2wsXG4gIGlzQXBwUHJvZmlsZURlZmF1bHQ6IFByb3BUeXBlcy5ib29sLFxuICBzaG91bGRSZW1vdmVTcGFjZVByb2ZpbGVJbWFnZTogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3VsZFJlbW92ZVVzZXJQaWM6IFByb3BUeXBlcy5ib29sLFxuICBzaG91bGRSZW1vdmVTcGFjZUNvdmVyUGhvdG86IFByb3BUeXBlcy5ib29sLFxuICBzaG93T3B0aW9uczogUHJvcFR5cGVzLmJvb2wsXG4gIGlzU2hvd0dlbmVyYWxQcm9maWxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNTYXZlTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGlzU2F2ZVN1Y2Nlc3NmdWw6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGhhbmRsZVNob3dPcHRpb25zTWVudTogUHJvcFR5cGVzLmZ1bmMsXG4gIHJlZGlyZWN0Rm46IFByb3BUeXBlcy5mdW5jLFxuICBoYW5kbGVSZW1vdmVQaWN0dXJlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVVcGRhdGVQaWM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUFkZEVtb2ppOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVGb3JtQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVTaG93RW1vamlQaWNrZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZVNlbGVjdERlZmF1bHRQcm9maWxlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVTdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5TcGFjZVByb2ZpbGUuZGVmYXVsdFByb3BzID0ge1xuICBib3g6IHt9LFxuICBhbGxEYXRhOiB7fSxcbiAgc3BhY2U6IHt9LFxuICB2ZXJpZmllZEVtYWlsOiAnJyxcbiAgdmVyaWZpZWRHaXRodWI6ICcnLFxuICB2ZXJpZmllZFR3aXR0ZXI6ICcnLFxuICBzcGFjZVByb2ZpbGVOYW1lOiAnJyxcbiAgc3BhY2VOYW1lOiAnJyxcbiAgc3BhY2VQcm9maWxlRGVzY3JpcHRpb246ICcnLFxuICBzcGFjZVByb2ZpbGVFbW9qaTogJycsXG4gIGVtYWlsOiAnJyxcbiAgY3VycmVudFVzZXJBZGRyOiAnJyxcbiAgaW1hZ2U6IFtdLFxuICBzcGFjZVByb2ZpbGVJbWFnZTogW10sXG4gIHNwYWNlUHJvZmlsZUNvdmVyUGhvdG86IFtdLFxuICBjdXN0b21GaWVsZHM6IFtdLFxuICBpc1NhdmVMb2FkaW5nOiBmYWxzZSxcbiAgaXNGZXRjaGluZ1RocmVlQm94OiBmYWxzZSxcbiAgY29weVN1Y2Nlc3NmdWw6IGZhbHNlLFxuICBpc0FwcFByb2ZpbGVEZWZhdWx0OiBmYWxzZSxcbiAgc2hvdWxkUmVtb3ZlU3BhY2VDb3ZlclBob3RvOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwYWNlUHJvZmlsZTsiXX0=