"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("emoji-mart/css/emoji-mart.css");

var _reactAddonsCssTransitionGroup = _interopRequireDefault(require("react-addons-css-transition-group"));

var _box = _interopRequireDefault(require("3box"));

var _utils = require("./utils");

var _helpers = require("./helpers");

var _Modals = require("./components/Modals");

var _GeneralProfile = _interopRequireDefault(require("./components/GeneralProfile"));

var _SpaceProfile = _interopRequireDefault(require("./components/SpaceProfile"));

require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EditProfile =
/*#__PURE__*/
function (_Component) {
  _inherits(EditProfile, _Component);

  function EditProfile(props) {
    var _this;

    _classCallCheck(this, EditProfile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditProfile).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "fetchVerifiedFields", function _callee() {
      var box, verifiedTwitter, verifiedGithub, verifiedEmail;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              box = _this.props.box;
              _context.prev = 1;
              _context.next = 4;
              return regeneratorRuntime.awrap(box.verified.twitter());

            case 4:
              verifiedTwitter = _context.sent;
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 10:
              _context.prev = 10;
              _context.next = 13;
              return regeneratorRuntime.awrap(box.verified.github());

            case 13:
              verifiedGithub = _context.sent;
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t1 = _context["catch"](10);
              console.log(_context.t1);

            case 19:
              _context.prev = 19;
              _context.next = 22;
              return regeneratorRuntime.awrap(box.verified.email());

            case 22:
              verifiedEmail = _context.sent;
              _context.next = 28;
              break;

            case 25:
              _context.prev = 25;
              _context.t2 = _context["catch"](19);
              console.log(_context.t2);

            case 28:
              _this.setState({
                verifiedTwitter: verifiedTwitter && verifiedTwitter.username,
                verifiedGithub: verifiedGithub && verifiedGithub.username,
                verifiedEmail: verifiedEmail && verifiedEmail.email_address
              });

            case 29:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 7], [10, 16], [19, 25]]);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFormChange", function (e, property) {
      return _this.setState(_defineProperty({}, property, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "closeFileSizeModal", function () {
      return _this.setState({
        shouldShowFIleSizeModal: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectDefaultProfile", function _callee2() {
      var _this$state, isAppProfileDefault, isShowGeneralProfile, space, value;

      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$state = _this.state, isAppProfileDefault = _this$state.isAppProfileDefault, isShowGeneralProfile = _this$state.isShowGeneralProfile;
              space = _this.props.space;
              value = !isAppProfileDefault;
              _context2.next = 5;
              return regeneratorRuntime.awrap(space["public"].set('isAppProfileDefault', value));

            case 5:
              _this.setState({
                isAppProfileDefault: value,
                isShowGeneralProfile: !isShowGeneralProfile
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleUpdatePic", function (photoFile, e, type) {
      if (photoFile.size >= 2500000) {
        e.target.value = null;

        _this.setState({
          shouldShowFIleSizeModal: true
        });

        return;
      }

      var formData = new window.FormData();
      formData.append('path', photoFile);

      if (type === 'coverPhoto') {
        _this.setState({
          isCoverPicEdited: true,
          coverBuffer: formData,
          shouldRemoveCoverPhoto: false
        });
      } else if (type === 'image') {
        _this.setState({
          isPicEdited: true,
          buffer: formData,
          shouldRemoveImage: false
        });
      } else if (type === 'spaceProfileCoverPhoto') {
        _this.setState({
          isSpaceCoverPicEdited: true,
          spaceCoverBuffer: formData,
          shouldRemoveSpaceCoverPhoto: false
        });
      } else if (type === 'spaceProfileImage') {
        _this.setState({
          isSpacePicEdited: true,
          spaceImageBuffer: formData,
          shouldRemoveSpaceProfileImage: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRemovePicture", function (type, isCover, fromSpace) {
      var removeKey = "shouldRemove".concat((0, _utils.capitalizeFirstLetter)(type));

      if (_this.state[removeKey]) {
        var _this$setState2;

        var originalValue = fromSpace ? _this.state.originalSpaceProfile[isCover ? 'coverPhoto' : 'image'] : _this.state.originalProfile[isCover ? 'coverPhoto' : 'image'];

        _this.setState((_this$setState2 = {}, _defineProperty(_this$setState2, removeKey, false), _defineProperty(_this$setState2, type, originalValue), _this$setState2));
      } else {
        var _this$setState3;

        _this.setState((_this$setState3 = {}, _defineProperty(_this$setState3, removeKey, true), _defineProperty(_this$setState3, type, undefined), _this$setState3));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleAddEmoji", function (emoji, isSpace) {
      var _this$setState4;

      _this.setState((_this$setState4 = {}, _defineProperty(_this$setState4, isSpace ? 'spaceProfileEmoji' : 'emoji', emoji["native"]), _defineProperty(_this$setState4, "isShowEmoji", false), _this$setState4));
    });

    _defineProperty(_assertThisInitialized(_this), "handleShowEmojiPicker", function () {
      var isShowEmoji = _this.state.isShowEmoji;

      _this.setState({
        isShowEmoji: !isShowEmoji
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchPic", function (buffer) {
      return window.fetch('https://ipfs.infura.io:5001/api/v0/add', {
        method: 'post',
        'Content-Type': 'multipart/form-data',
        body: buffer
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function _callee3(e) {
      var _this$state2, originalSpaceProfile, spaceCoverBuffer, spaceImageBuffer, isPicEdited, isSpacePicEdited, isCoverPicEdited, isSpaceCoverPicEdited, shouldRemoveImage, shouldRemoveCoverPhoto, shouldRemoveSpaceCoverPhoto, shouldRemoveSpaceProfileImage, buffer, coverBuffer, _this$props, box, space, customFields, currentUserAddr, redirectFn, fetch, returnedData, imageObject, fetchCover, returnedCoverData, _imageObject, fetchSpaceImage, returnedSpaceImageData, _imageObject2, fetchSpaceCover, returnedSpaceCoverData, _imageObject3;

      return regeneratorRuntime.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this$state2 = _this.state, originalSpaceProfile = _this$state2.originalSpaceProfile, spaceCoverBuffer = _this$state2.spaceCoverBuffer, spaceImageBuffer = _this$state2.spaceImageBuffer, isPicEdited = _this$state2.isPicEdited, isSpacePicEdited = _this$state2.isSpacePicEdited, isCoverPicEdited = _this$state2.isCoverPicEdited, isSpaceCoverPicEdited = _this$state2.isSpaceCoverPicEdited, shouldRemoveImage = _this$state2.shouldRemoveImage, shouldRemoveCoverPhoto = _this$state2.shouldRemoveCoverPhoto, shouldRemoveSpaceCoverPhoto = _this$state2.shouldRemoveSpaceCoverPhoto, shouldRemoveSpaceProfileImage = _this$state2.shouldRemoveSpaceProfileImage, buffer = _this$state2.buffer, coverBuffer = _this$state2.coverBuffer;
              _this$props = _this.props, box = _this$props.box, space = _this$props.space, customFields = _this$props.customFields, currentUserAddr = _this$props.currentUserAddr, redirectFn = _this$props.redirectFn;
              e.preventDefault();

              if (box["public"]) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return");

            case 5:
              _this.setState({
                isSaveLoading: true
              });

              _context3.next = 8;
              return regeneratorRuntime.awrap((0, _helpers.saveBasicTextFields)(box, space, _this.state, 'originalProfile'));

            case 8:
              _context3.next = 10;
              return regeneratorRuntime.awrap((0, _helpers.saveBasicTextFields)(box, space, _this.state, 'originalSpaceProfile'));

            case 10:
              _context3.t0 = isPicEdited;

              if (!_context3.t0) {
                _context3.next = 15;
                break;
              }

              _context3.next = 14;
              return regeneratorRuntime.awrap(_this.fetchPic(buffer));

            case 14:
              _context3.t0 = _context3.sent;

            case 15:
              fetch = _context3.t0;
              _context3.t1 = isPicEdited;

              if (!_context3.t1) {
                _context3.next = 21;
                break;
              }

              _context3.next = 20;
              return regeneratorRuntime.awrap(fetch.json());

            case 20:
              _context3.t1 = _context3.sent;

            case 21:
              returnedData = _context3.t1;

              if (!isPicEdited) {
                _context3.next = 27;
                break;
              }

              imageObject = (0, _utils.formatIpfsImageObject)(returnedData);
              _context3.next = 26;
              return regeneratorRuntime.awrap(box["public"].set('image', imageObject));

            case 26:
              _this.setState({
                image: imageObject,
                isPicEdited: false
              });

            case 27:
              _context3.t2 = isCoverPicEdited;

              if (!_context3.t2) {
                _context3.next = 32;
                break;
              }

              _context3.next = 31;
              return regeneratorRuntime.awrap(_this.fetchPic(coverBuffer));

            case 31:
              _context3.t2 = _context3.sent;

            case 32:
              fetchCover = _context3.t2;
              _context3.t3 = isCoverPicEdited;

              if (!_context3.t3) {
                _context3.next = 38;
                break;
              }

              _context3.next = 37;
              return regeneratorRuntime.awrap(fetchCover.json());

            case 37:
              _context3.t3 = _context3.sent;

            case 38:
              returnedCoverData = _context3.t3;

              if (!isCoverPicEdited) {
                _context3.next = 44;
                break;
              }

              _imageObject = (0, _utils.formatIpfsImageObject)(returnedCoverData);
              _context3.next = 43;
              return regeneratorRuntime.awrap(box["public"].set('coverPhoto', _imageObject));

            case 43:
              _this.setState({
                coverPhoto: _imageObject,
                isCoverPicEdited: false
              });

            case 44:
              _context3.t4 = isSpacePicEdited;

              if (!_context3.t4) {
                _context3.next = 49;
                break;
              }

              _context3.next = 48;
              return regeneratorRuntime.awrap(_this.fetchPic(spaceImageBuffer));

            case 48:
              _context3.t4 = _context3.sent;

            case 49:
              fetchSpaceImage = _context3.t4;
              _context3.t5 = isSpacePicEdited;

              if (!_context3.t5) {
                _context3.next = 55;
                break;
              }

              _context3.next = 54;
              return regeneratorRuntime.awrap(fetchSpaceImage.json());

            case 54:
              _context3.t5 = _context3.sent;

            case 55:
              returnedSpaceImageData = _context3.t5;

              if (!isSpacePicEdited) {
                _context3.next = 61;
                break;
              }

              _imageObject2 = (0, _utils.formatIpfsImageObject)(returnedSpaceImageData);
              _context3.next = 60;
              return regeneratorRuntime.awrap(space["public"].set('image', _imageObject2));

            case 60:
              _this.setState({
                spaceProfileImage: _imageObject2,
                isSpacePicEdited: false
              });

            case 61:
              _context3.t6 = isSpaceCoverPicEdited;

              if (!_context3.t6) {
                _context3.next = 66;
                break;
              }

              _context3.next = 65;
              return regeneratorRuntime.awrap(_this.fetchPic(spaceCoverBuffer));

            case 65:
              _context3.t6 = _context3.sent;

            case 66:
              fetchSpaceCover = _context3.t6;
              _context3.t7 = isSpaceCoverPicEdited;

              if (!_context3.t7) {
                _context3.next = 72;
                break;
              }

              _context3.next = 71;
              return regeneratorRuntime.awrap(fetchSpaceCover.json());

            case 71:
              _context3.t7 = _context3.sent;

            case 72:
              returnedSpaceCoverData = _context3.t7;

              if (!isSpaceCoverPicEdited) {
                _context3.next = 78;
                break;
              }

              _imageObject3 = (0, _utils.formatIpfsImageObject)(returnedSpaceCoverData);
              _context3.next = 77;
              return regeneratorRuntime.awrap(space["public"].set('coverPhoto', _imageObject3));

            case 77:
              _this.setState({
                spaceProfileCoverPhoto: _imageObject3,
                isSpaceCoverPicEdited: false
              });

            case 78:
              if (!shouldRemoveImage) {
                _context3.next = 81;
                break;
              }

              _context3.next = 81;
              return regeneratorRuntime.awrap(box["public"].remove('image'));

            case 81:
              if (!shouldRemoveCoverPhoto) {
                _context3.next = 84;
                break;
              }

              _context3.next = 84;
              return regeneratorRuntime.awrap(box["public"].remove('coverPhoto'));

            case 84:
              if (!shouldRemoveSpaceProfileImage) {
                _context3.next = 87;
                break;
              }

              _context3.next = 87;
              return regeneratorRuntime.awrap(space["public"].remove('image'));

            case 87:
              if (!shouldRemoveSpaceCoverPhoto) {
                _context3.next = 90;
                break;
              }

              _context3.next = 90;
              return regeneratorRuntime.awrap(space["public"].remove('coverPhoto'));

            case 90:
              _context3.next = 92;
              return regeneratorRuntime.awrap((0, _helpers.saveCustomFields)(space, customFields, _this.state, originalSpaceProfile));

            case 92:
              _this.setState({
                isSaveLoading: false
              });

              if (redirectFn) {
                redirectFn(currentUserAddr);
              } else {
                _this.setState({
                  isSaveSuccessful: true
                });

                setTimeout(function () {
                  _this.setState({
                    isSaveSuccessful: false
                  });
                }, 1500);
              }

            case 94:
            case "end":
              return _context3.stop();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleHasUpdated", function () {// check general basic profile
      // check space basic profile
      // check general images
      // check space images
      // check custom fields
    });

    _defineProperty(_assertThisInitialized(_this), "handleShowOptionsMenu", function () {
      var showOptions = _this.state.showOptions;

      _this.setState({
        showOptions: !showOptions
      });
    });

    _this.state = {
      name: undefined,
      description: undefined,
      emoji: undefined,
      verifiedGithub: undefined,
      verifiedTwitter: undefined,
      verifiedEmail: undefined,
      spaceProfileName: undefined,
      spaceProfileDescription: undefined,
      spaceProfileEmoji: undefined,
      buffer: '',
      isShowGeneralProfile: true,
      isAppProfileDefault: false,
      isSaveLoading: false,
      isPicEdited: false,
      isCoverPicEdited: false,
      isSpaceCoverPicEdited: false,
      isSpacePicEdited: false,
      isShowEmoji: false,
      isSaveSuccessful: false,
      shouldRemoveImage: false,
      shouldRemoveCoverPhoto: false,
      shouldRemoveSpaceProfileImage: false,
      shouldRemoveSpaceCoverPhoto: false,
      shouldShowFIleSizeModal: false,
      showOptions: false,
      coverPhoto: [],
      image: []
    };
    return _this;
  }

  _createClass(EditProfile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props2, currentUser3BoxProfile, space, currentUserAddr, customFields, generalProfile, spaceProfile, isAppProfileDefault;

      return regeneratorRuntime.async(function componentDidMount$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this$props2 = this.props, currentUser3BoxProfile = _this$props2.currentUser3BoxProfile, space = _this$props2.space, currentUserAddr = _this$props2.currentUserAddr, customFields = _this$props2.customFields;
              _context4.t0 = currentUser3BoxProfile;

              if (_context4.t0) {
                _context4.next = 6;
                break;
              }

              _context4.next = 5;
              return regeneratorRuntime.awrap(_box["default"].getProfile(currentUserAddr));

            case 5:
              _context4.t0 = _context4.sent;

            case 6:
              generalProfile = _context4.t0;
              _context4.next = 9;
              return regeneratorRuntime.awrap(space["public"].all());

            case 9:
              spaceProfile = _context4.sent;

              _utils.editProfileFields.forEach(function (fieldSet) {
                var generalValue = generalProfile[fieldSet[0]];
                var spaceValue = spaceProfile[fieldSet[0]];
                if (generalValue) _this2.setState(_defineProperty({}, fieldSet[0], generalValue));
                if (spaceValue) _this2.setState(_defineProperty({}, "spaceProfile".concat((0, _utils.capitalizeFirstLetter)(fieldSet[0])), spaceValue));
              });

              if (customFields.length) {
                customFields.forEach(function (field) {
                  var spaceValue = spaceProfile[field.key];
                  if (spaceValue) _this2.setState(_defineProperty({}, field.key, spaceValue));
                });
              }

              _context4.next = 14;
              return regeneratorRuntime.awrap(space["public"].get('isAppProfileDefault'));

            case 14:
              isAppProfileDefault = _context4.sent;
              this.fetchVerifiedFields();
              this.setState({
                originalProfile: generalProfile,
                originalSpaceProfile: spaceProfile,
                isAppProfileDefault: isAppProfileDefault,
                isShowGeneralProfile: !isAppProfileDefault
              });

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3, currentUser3BoxProfile, box, name, email, description, verifiedGithub, verifiedTwitter, verifiedEmail, emoji, image, coverPhoto, noProf, prevProf;

      return regeneratorRuntime.async(function componentDidUpdate$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this$props3 = this.props, currentUser3BoxProfile = _this$props3.currentUser3BoxProfile, box = _this$props3.box;

              if (currentUser3BoxProfile) {
                name = currentUser3BoxProfile.name, email = currentUser3BoxProfile.email, description = currentUser3BoxProfile.description, verifiedGithub = currentUser3BoxProfile.verifiedGithub, verifiedTwitter = currentUser3BoxProfile.verifiedTwitter, verifiedEmail = currentUser3BoxProfile.verifiedEmail, emoji = currentUser3BoxProfile.emoji, image = currentUser3BoxProfile.image, coverPhoto = currentUser3BoxProfile.coverPhoto;
                noProf = !prevProps.currentUser3BoxProfile;
                prevProf = prevProps.currentUser3BoxProfile;
                if (name && noProf || name !== prevProf.name) this.setState({
                  name: name
                });
                if (email && noProf || email !== prevProf.email) this.setState({
                  email: email
                });
                if (description && noProf || description !== prevProf.description) this.setState({
                  description: description
                });
                if (emoji && noProf || emoji !== prevProf.emoji) this.setState({
                  emoji: emoji
                });
                if (image && noProf || image !== prevProf.image) this.setState({
                  image: image
                });
                if (coverPhoto && noProf || coverPhoto !== prevProf.coverPhoto) this.setState({
                  coverPhoto: coverPhoto
                });
                if (verifiedGithub && noProf || verifiedGithub !== prevProf.verifiedGithub) this.setState({
                  verifiedGithub: verifiedGithub
                });
                if (verifiedTwitter && noProf || verifiedTwitter !== prevProf.verifiedTwitter) this.setState({
                  verifiedTwitter: verifiedTwitter
                });
                if (verifiedEmail && noProf || verifiedEmail !== prevProf.verifiedEmail) this.setState({
                  verifiedEmail: verifiedEmail
                });
              }

              if (box !== prevProps.box) this.fetchVerifiedFields();

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          currentUserAddr = _this$props4.currentUserAddr,
          redirectFn = _this$props4.redirectFn,
          customFields = _this$props4.customFields,
          space = _this$props4.space;
      var _this$state3 = this.state,
          name = _this$state3.name,
          description = _this$state3.description,
          emoji = _this$state3.emoji,
          shouldRemoveImage = _this$state3.shouldRemoveImage,
          shouldRemoveCoverPhoto = _this$state3.shouldRemoveCoverPhoto,
          isSaveLoading = _this$state3.isSaveLoading,
          shouldShowFIleSizeModal = _this$state3.shouldShowFIleSizeModal,
          isShowEmoji = _this$state3.isShowEmoji,
          showOptions = _this$state3.showOptions,
          image = _this$state3.image,
          coverPhoto = _this$state3.coverPhoto,
          verifiedTwitter = _this$state3.verifiedTwitter,
          verifiedGithub = _this$state3.verifiedGithub,
          verifiedEmail = _this$state3.verifiedEmail,
          isShowGeneralProfile = _this$state3.isShowGeneralProfile,
          isAppProfileDefault = _this$state3.isAppProfileDefault,
          isSaveSuccessful = _this$state3.isSaveSuccessful,
          spaceProfileName = _this$state3.spaceProfileName,
          spaceProfileDescription = _this$state3.spaceProfileDescription,
          spaceProfileEmoji = _this$state3.spaceProfileEmoji,
          spaceProfileCoverPhoto = _this$state3.spaceProfileCoverPhoto,
          spaceProfileImage = _this$state3.spaceProfileImage,
          shouldRemoveSpaceCoverPhoto = _this$state3.shouldRemoveSpaceCoverPhoto,
          shouldRemoveSpaceProfileImage = _this$state3.shouldRemoveSpaceProfileImage;
      return _react["default"].createElement("div", {
        className: "edit_page"
      }, _react["default"].createElement(_reactAddonsCssTransitionGroup["default"], {
        transitionName: "app_modals",
        transitionEnterTimeout: 300,
        transitionLeaveTimeout: 300
      }, shouldShowFIleSizeModal && _react["default"].createElement(_Modals.FileSizeModal, {
        show: shouldShowFIleSizeModal,
        closeFileSizeModal: this.closeFileSizeModal
      }), shouldShowFIleSizeModal && _react["default"].createElement(_Modals.ModalBackground, null)), _react["default"].createElement(_GeneralProfile["default"], _extends({
        isShowGeneralProfile: isShowGeneralProfile,
        coverPhoto: coverPhoto,
        image: image,
        emoji: emoji,
        name: name,
        shouldRemoveImage: shouldRemoveImage,
        shouldRemoveCoverPhoto: shouldRemoveCoverPhoto,
        description: description,
        currentUserAddr: currentUserAddr,
        isShowEmoji: isShowEmoji,
        verifiedTwitter: verifiedTwitter,
        verifiedGithub: verifiedGithub,
        verifiedEmail: verifiedEmail,
        redirectFn: redirectFn,
        spaceProfileImage: spaceProfileImage,
        customFields: customFields,
        space: space,
        isAppProfileDefault: isAppProfileDefault,
        isSaveLoading: isSaveLoading,
        isSaveSuccessful: isSaveSuccessful,
        showOptions: showOptions,
        handleRemovePicture: this.handleRemovePicture,
        coverUpload: this.coverUpload,
        handleUpdatePic: this.handleUpdatePic,
        fileUpload: this.fileUpload,
        handleFormChange: this.handleFormChange,
        handleAddEmoji: this.handleAddEmoji,
        handleShowEmojiPicker: this.handleShowEmojiPicker,
        handleSubmit: this.handleSubmit,
        handleSelectDefaultProfile: this.handleSelectDefaultProfile,
        handleShowOptionsMenu: this.handleShowOptionsMenu
      }, this.state)), _react["default"].createElement(_SpaceProfile["default"], _extends({
        isShowGeneralProfile: isShowGeneralProfile,
        spaceProfileName: spaceProfileName,
        spaceProfileDescription: spaceProfileDescription,
        spaceProfileEmoji: spaceProfileEmoji,
        spaceProfileCoverPhoto: spaceProfileCoverPhoto,
        spaceProfileImage: spaceProfileImage,
        shouldRemoveSpaceCoverPhoto: shouldRemoveSpaceCoverPhoto,
        shouldRemoveSpaceProfileImage: shouldRemoveSpaceProfileImage,
        image: image,
        showOptions: showOptions,
        space: space,
        isAppProfileDefault: isAppProfileDefault,
        isSaveSuccessful: isSaveSuccessful,
        currentUserAddr: currentUserAddr,
        isShowEmoji: isShowEmoji,
        isSaveLoading: isSaveLoading,
        redirectFn: redirectFn,
        customFields: customFields,
        handleRemovePicture: this.handleRemovePicture,
        coverUpload: this.coverUpload,
        handleUpdatePic: this.handleUpdatePic,
        fileUpload: this.fileUpload,
        handleFormChange: this.handleFormChange,
        handleAddEmoji: this.handleAddEmoji,
        handleShowEmojiPicker: this.handleShowEmojiPicker,
        handleSubmit: this.handleSubmit,
        handleSelectDefaultProfile: this.handleSelectDefaultProfile,
        handleShowOptionsMenu: this.handleShowOptionsMenu
      }, this.state)));
    }
  }]);

  return EditProfile;
}(_react.Component);

EditProfile.propTypes = {
  box: _propTypes["default"].object,
  allData: _propTypes["default"].object,
  space: _propTypes["default"].object,
  currentUser3BoxProfile: _propTypes["default"].object,
  customFields: _propTypes["default"].array,
  name: _propTypes["default"].string,
  verifiedGithub: _propTypes["default"].string,
  verifiedTwitter: _propTypes["default"].string,
  verifiedEmail: _propTypes["default"].string,
  emoji: _propTypes["default"].string,
  description: _propTypes["default"].string,
  email: _propTypes["default"].string,
  currentUserAddr: _propTypes["default"].string,
  image: _propTypes["default"].array,
  coverPhoto: _propTypes["default"].array,
  copySuccessful: _propTypes["default"].bool,
  redirectFn: _propTypes["default"].func
};
EditProfile.defaultProps = {
  box: {},
  space: {},
  allData: {},
  currentUser3BoxProfile: null,
  verifiedEmail: '',
  verifiedGithub: '',
  verifiedTwitter: '',
  name: '',
  description: '',
  emoji: '',
  email: '',
  currentUserAddr: '',
  image: [],
  coverPhoto: [],
  customFields: [],
  copySuccessful: false
};
var _default = EditProfile;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FZGl0LmpzIl0sIm5hbWVzIjpbIkVkaXRQcm9maWxlIiwicHJvcHMiLCJib3giLCJ2ZXJpZmllZCIsInR3aXR0ZXIiLCJ2ZXJpZmllZFR3aXR0ZXIiLCJjb25zb2xlIiwibG9nIiwiZ2l0aHViIiwidmVyaWZpZWRHaXRodWIiLCJlbWFpbCIsInZlcmlmaWVkRW1haWwiLCJzZXRTdGF0ZSIsInVzZXJuYW1lIiwiZW1haWxfYWRkcmVzcyIsImUiLCJwcm9wZXJ0eSIsInRhcmdldCIsInZhbHVlIiwic2hvdWxkU2hvd0ZJbGVTaXplTW9kYWwiLCJzdGF0ZSIsImlzQXBwUHJvZmlsZURlZmF1bHQiLCJpc1Nob3dHZW5lcmFsUHJvZmlsZSIsInNwYWNlIiwic2V0IiwicGhvdG9GaWxlIiwidHlwZSIsInNpemUiLCJmb3JtRGF0YSIsIndpbmRvdyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaXNDb3ZlclBpY0VkaXRlZCIsImNvdmVyQnVmZmVyIiwic2hvdWxkUmVtb3ZlQ292ZXJQaG90byIsImlzUGljRWRpdGVkIiwiYnVmZmVyIiwic2hvdWxkUmVtb3ZlSW1hZ2UiLCJpc1NwYWNlQ292ZXJQaWNFZGl0ZWQiLCJzcGFjZUNvdmVyQnVmZmVyIiwic2hvdWxkUmVtb3ZlU3BhY2VDb3ZlclBob3RvIiwiaXNTcGFjZVBpY0VkaXRlZCIsInNwYWNlSW1hZ2VCdWZmZXIiLCJzaG91bGRSZW1vdmVTcGFjZVByb2ZpbGVJbWFnZSIsImlzQ292ZXIiLCJmcm9tU3BhY2UiLCJyZW1vdmVLZXkiLCJvcmlnaW5hbFZhbHVlIiwib3JpZ2luYWxTcGFjZVByb2ZpbGUiLCJvcmlnaW5hbFByb2ZpbGUiLCJ1bmRlZmluZWQiLCJlbW9qaSIsImlzU3BhY2UiLCJpc1Nob3dFbW9qaSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImN1c3RvbUZpZWxkcyIsImN1cnJlbnRVc2VyQWRkciIsInJlZGlyZWN0Rm4iLCJwcmV2ZW50RGVmYXVsdCIsImlzU2F2ZUxvYWRpbmciLCJmZXRjaFBpYyIsImpzb24iLCJyZXR1cm5lZERhdGEiLCJpbWFnZU9iamVjdCIsImltYWdlIiwiZmV0Y2hDb3ZlciIsInJldHVybmVkQ292ZXJEYXRhIiwiY292ZXJQaG90byIsImZldGNoU3BhY2VJbWFnZSIsInJldHVybmVkU3BhY2VJbWFnZURhdGEiLCJzcGFjZVByb2ZpbGVJbWFnZSIsImZldGNoU3BhY2VDb3ZlciIsInJldHVybmVkU3BhY2VDb3ZlckRhdGEiLCJzcGFjZVByb2ZpbGVDb3ZlclBob3RvIiwicmVtb3ZlIiwiaXNTYXZlU3VjY2Vzc2Z1bCIsInNldFRpbWVvdXQiLCJzaG93T3B0aW9ucyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInNwYWNlUHJvZmlsZU5hbWUiLCJzcGFjZVByb2ZpbGVEZXNjcmlwdGlvbiIsInNwYWNlUHJvZmlsZUVtb2ppIiwiY3VycmVudFVzZXIzQm94UHJvZmlsZSIsIkJveCIsImdldFByb2ZpbGUiLCJnZW5lcmFsUHJvZmlsZSIsImFsbCIsInNwYWNlUHJvZmlsZSIsImVkaXRQcm9maWxlRmllbGRzIiwiZm9yRWFjaCIsImZpZWxkU2V0IiwiZ2VuZXJhbFZhbHVlIiwic3BhY2VWYWx1ZSIsImxlbmd0aCIsImZpZWxkIiwia2V5IiwiZ2V0IiwiZmV0Y2hWZXJpZmllZEZpZWxkcyIsInByZXZQcm9wcyIsIm5vUHJvZiIsInByZXZQcm9mIiwiY2xvc2VGaWxlU2l6ZU1vZGFsIiwiaGFuZGxlUmVtb3ZlUGljdHVyZSIsImNvdmVyVXBsb2FkIiwiaGFuZGxlVXBkYXRlUGljIiwiZmlsZVVwbG9hZCIsImhhbmRsZUZvcm1DaGFuZ2UiLCJoYW5kbGVBZGRFbW9qaSIsImhhbmRsZVNob3dFbW9qaVBpY2tlciIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZVNlbGVjdERlZmF1bHRQcm9maWxlIiwiaGFuZGxlU2hvd09wdGlvbnNNZW51IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiYWxsRGF0YSIsImFycmF5Iiwic3RyaW5nIiwiY29weVN1Y2Nlc3NmdWwiLCJib29sIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUtBOztBQUVBOztBQUlBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixxRkFBTUEsS0FBTjs7QUFEaUIsMEVBMkdHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNaQyxjQUFBQSxHQURZLEdBQ0osTUFBS0QsS0FERCxDQUNaQyxHQURZO0FBQUE7QUFBQTtBQUFBLDhDQVFNQSxHQUFHLENBQUNDLFFBQUosQ0FBYUMsT0FBYixFQVJOOztBQUFBO0FBUWxCQyxjQUFBQSxlQVJrQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVWxCQyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBVmtCO0FBQUE7QUFBQTtBQUFBLDhDQWNLTCxHQUFHLENBQUNDLFFBQUosQ0FBYUssTUFBYixFQWRMOztBQUFBO0FBY2xCQyxjQUFBQSxjQWRrQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBZ0JsQkgsY0FBQUEsT0FBTyxDQUFDQyxHQUFSOztBQWhCa0I7QUFBQTtBQUFBO0FBQUEsOENBb0JJTCxHQUFHLENBQUNDLFFBQUosQ0FBYU8sS0FBYixFQXBCSjs7QUFBQTtBQW9CbEJDLGNBQUFBLGFBcEJrQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBc0JsQkwsY0FBQUEsT0FBTyxDQUFDQyxHQUFSOztBQXRCa0I7QUF5QnBCLG9CQUFLSyxRQUFMLENBQWM7QUFDWlAsZ0JBQUFBLGVBQWUsRUFBRUEsZUFBZSxJQUFJQSxlQUFlLENBQUNRLFFBRHhDO0FBRVpKLGdCQUFBQSxjQUFjLEVBQUVBLGNBQWMsSUFBSUEsY0FBYyxDQUFDSSxRQUZyQztBQUdaRixnQkFBQUEsYUFBYSxFQUFFQSxhQUFhLElBQUlBLGFBQWEsQ0FBQ0c7QUFIbEMsZUFBZDs7QUF6Qm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBM0dIOztBQUFBLHVFQTJJQSxVQUFDQyxDQUFELEVBQUlDLFFBQUo7QUFBQSxhQUFpQixNQUFLSixRQUFMLHFCQUFpQkksUUFBakIsRUFBNEJELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFyQyxFQUFqQjtBQUFBLEtBM0lBOztBQUFBLHlFQTZJRTtBQUFBLGFBQU0sTUFBS04sUUFBTCxDQUFjO0FBQUVPLFFBQUFBLHVCQUF1QixFQUFFO0FBQTNCLE9BQWQsQ0FBTjtBQUFBLEtBN0lGOztBQUFBLGlGQStJVTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQzJCLE1BQUtDLEtBRGhDLEVBQ25CQyxtQkFEbUIsZUFDbkJBLG1CQURtQixFQUNFQyxvQkFERixlQUNFQSxvQkFERjtBQUVuQkMsY0FBQUEsS0FGbUIsR0FFVCxNQUFLdEIsS0FGSSxDQUVuQnNCLEtBRm1CO0FBSXJCTCxjQUFBQSxLQUpxQixHQUliLENBQUNHLG1CQUpZO0FBQUE7QUFBQSw4Q0FLckJFLEtBQUssVUFBTCxDQUFhQyxHQUFiLENBQWlCLHFCQUFqQixFQUF3Q04sS0FBeEMsQ0FMcUI7O0FBQUE7QUFPM0Isb0JBQUtOLFFBQUwsQ0FBYztBQUNaUyxnQkFBQUEsbUJBQW1CLEVBQUVILEtBRFQ7QUFFWkksZ0JBQUFBLG9CQUFvQixFQUFFLENBQUNBO0FBRlgsZUFBZDs7QUFQMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0EvSVY7O0FBQUEsc0VBNEpELFVBQUNHLFNBQUQsRUFBWVYsQ0FBWixFQUFlVyxJQUFmLEVBQXdCO0FBQ3hDLFVBQUlELFNBQVMsQ0FBQ0UsSUFBVixJQUFrQixPQUF0QixFQUErQjtBQUM3QlosUUFBQUEsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVQsR0FBaUIsSUFBakI7O0FBQ0EsY0FBS04sUUFBTCxDQUFjO0FBQUVPLFVBQUFBLHVCQUF1QixFQUFFO0FBQTNCLFNBQWQ7O0FBQ0E7QUFDRDs7QUFFRCxVQUFNUyxRQUFRLEdBQUcsSUFBSUMsTUFBTSxDQUFDQyxRQUFYLEVBQWpCO0FBQ0FGLE1BQUFBLFFBQVEsQ0FBQ0csTUFBVCxDQUFnQixNQUFoQixFQUF3Qk4sU0FBeEI7O0FBRUEsVUFBSUMsSUFBSSxLQUFLLFlBQWIsRUFBMkI7QUFDekIsY0FBS2QsUUFBTCxDQUFjO0FBQ1pvQixVQUFBQSxnQkFBZ0IsRUFBRSxJQUROO0FBRVpDLFVBQUFBLFdBQVcsRUFBRUwsUUFGRDtBQUdaTSxVQUFBQSxzQkFBc0IsRUFBRTtBQUhaLFNBQWQ7QUFLRCxPQU5ELE1BTU8sSUFBSVIsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDM0IsY0FBS2QsUUFBTCxDQUFjO0FBQ1p1QixVQUFBQSxXQUFXLEVBQUUsSUFERDtBQUVaQyxVQUFBQSxNQUFNLEVBQUVSLFFBRkk7QUFHWlMsVUFBQUEsaUJBQWlCLEVBQUU7QUFIUCxTQUFkO0FBS0QsT0FOTSxNQU1BLElBQUlYLElBQUksS0FBSyx3QkFBYixFQUF1QztBQUM1QyxjQUFLZCxRQUFMLENBQWM7QUFDWjBCLFVBQUFBLHFCQUFxQixFQUFFLElBRFg7QUFFWkMsVUFBQUEsZ0JBQWdCLEVBQUVYLFFBRk47QUFHWlksVUFBQUEsMkJBQTJCLEVBQUU7QUFIakIsU0FBZDtBQUtELE9BTk0sTUFNQSxJQUFJZCxJQUFJLEtBQUssbUJBQWIsRUFBa0M7QUFDdkMsY0FBS2QsUUFBTCxDQUFjO0FBQ1o2QixVQUFBQSxnQkFBZ0IsRUFBRSxJQUROO0FBRVpDLFVBQUFBLGdCQUFnQixFQUFFZCxRQUZOO0FBR1plLFVBQUFBLDZCQUE2QixFQUFFO0FBSG5CLFNBQWQ7QUFLRDtBQUNGLEtBL0xrQjs7QUFBQSwwRUFpTUcsVUFBQ2pCLElBQUQsRUFBT2tCLE9BQVAsRUFBZ0JDLFNBQWhCLEVBQThCO0FBQ2xELFVBQU1DLFNBQVMseUJBQWtCLGtDQUFzQnBCLElBQXRCLENBQWxCLENBQWY7O0FBQ0EsVUFBSSxNQUFLTixLQUFMLENBQVcwQixTQUFYLENBQUosRUFBMkI7QUFBQTs7QUFDekIsWUFBTUMsYUFBYSxHQUFHRixTQUFTLEdBQzdCLE1BQUt6QixLQUFMLENBQVc0QixvQkFBWCxDQUFnQ0osT0FBTyxHQUFHLFlBQUgsR0FBa0IsT0FBekQsQ0FENkIsR0FFM0IsTUFBS3hCLEtBQUwsQ0FBVzZCLGVBQVgsQ0FBMkJMLE9BQU8sR0FBRyxZQUFILEdBQWtCLE9BQXBELENBRko7O0FBR0EsY0FBS2hDLFFBQUwseURBQ0drQyxTQURILEVBQ2UsS0FEZixvQ0FFR3BCLElBRkgsRUFFVXFCLGFBRlY7QUFJRCxPQVJELE1BUU87QUFBQTs7QUFDTCxjQUFLbkMsUUFBTCx5REFDR2tDLFNBREgsRUFDZSxJQURmLG9DQUVHcEIsSUFGSCxFQUVVd0IsU0FGVjtBQUlEO0FBQ0YsS0FqTmtCOztBQUFBLHFFQW1ORixVQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFBQTs7QUFDbkMsWUFBS3hDLFFBQUwseURBQ0d3QyxPQUFPLEdBQUcsbUJBQUgsR0FBeUIsT0FEbkMsRUFDNkNELEtBQUssVUFEbEQsbURBRWUsS0FGZjtBQUlELEtBeE5rQjs7QUFBQSw0RUEwTkssWUFBTTtBQUFBLFVBQ3BCRSxXQURvQixHQUNKLE1BQUtqQyxLQURELENBQ3BCaUMsV0FEb0I7O0FBRTVCLFlBQUt6QyxRQUFMLENBQWM7QUFBRXlDLFFBQUFBLFdBQVcsRUFBRSxDQUFDQTtBQUFoQixPQUFkO0FBQ0QsS0E3TmtCOztBQUFBLCtEQStOUixVQUFBakIsTUFBTTtBQUFBLGFBQUlQLE1BQU0sQ0FBQ3lCLEtBQVAsQ0FBYSx3Q0FBYixFQUF1RDtBQUMxRUMsUUFBQUEsTUFBTSxFQUFFLE1BRGtFO0FBRTFFLHdCQUFnQixxQkFGMEQ7QUFHMUVDLFFBQUFBLElBQUksRUFBRXBCO0FBSG9FLE9BQXZELENBQUo7QUFBQSxLQS9ORTs7QUFBQSxtRUFxT0osa0JBQU9yQixDQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFnQlQsTUFBS0ssS0FoQkksRUFFWDRCLG9CQUZXLGdCQUVYQSxvQkFGVyxFQUlYVCxnQkFKVyxnQkFJWEEsZ0JBSlcsRUFLWEcsZ0JBTFcsZ0JBS1hBLGdCQUxXLEVBTVhQLFdBTlcsZ0JBTVhBLFdBTlcsRUFPWE0sZ0JBUFcsZ0JBT1hBLGdCQVBXLEVBUVhULGdCQVJXLGdCQVFYQSxnQkFSVyxFQVNYTSxxQkFUVyxnQkFTWEEscUJBVFcsRUFVWEQsaUJBVlcsZ0JBVVhBLGlCQVZXLEVBV1hILHNCQVhXLGdCQVdYQSxzQkFYVyxFQVlYTSwyQkFaVyxnQkFZWEEsMkJBWlcsRUFhWEcsNkJBYlcsZ0JBYVhBLDZCQWJXLEVBY1hQLE1BZFcsZ0JBY1hBLE1BZFcsRUFlWEgsV0FmVyxnQkFlWEEsV0FmVztBQUFBLDRCQXdCVCxNQUFLaEMsS0F4QkksRUFtQlhDLEdBbkJXLGVBbUJYQSxHQW5CVyxFQW9CWHFCLEtBcEJXLGVBb0JYQSxLQXBCVyxFQXFCWGtDLFlBckJXLGVBcUJYQSxZQXJCVyxFQXNCWEMsZUF0QlcsZUFzQlhBLGVBdEJXLEVBdUJYQyxVQXZCVyxlQXVCWEEsVUF2Qlc7QUEwQmI1QyxjQUFBQSxDQUFDLENBQUM2QyxjQUFGOztBQTFCYSxrQkEyQlIxRCxHQUFHLFVBM0JLO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBNkJiLG9CQUFLVSxRQUFMLENBQWM7QUFBRWlELGdCQUFBQSxhQUFhLEVBQUU7QUFBakIsZUFBZDs7QUE3QmE7QUFBQSw4Q0ErQlAsa0NBQW9CM0QsR0FBcEIsRUFBeUJxQixLQUF6QixFQUFnQyxNQUFLSCxLQUFyQyxFQUE0QyxpQkFBNUMsQ0EvQk87O0FBQUE7QUFBQTtBQUFBLDhDQWdDUCxrQ0FBb0JsQixHQUFwQixFQUF5QnFCLEtBQXpCLEVBQWdDLE1BQUtILEtBQXJDLEVBQTRDLHNCQUE1QyxDQWhDTzs7QUFBQTtBQUFBLDZCQW1DQ2UsV0FuQ0Q7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw4Q0FtQ3NCLE1BQUsyQixRQUFMLENBQWMxQixNQUFkLENBbkN0Qjs7QUFBQTtBQUFBOztBQUFBO0FBbUNQa0IsY0FBQUEsS0FuQ087QUFBQSw2QkFvQ1FuQixXQXBDUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDhDQW9DNkJtQixLQUFLLENBQUNTLElBQU4sRUFwQzdCOztBQUFBO0FBQUE7O0FBQUE7QUFvQ1BDLGNBQUFBLFlBcENPOztBQUFBLG1CQXFDVDdCLFdBckNTO0FBQUE7QUFBQTtBQUFBOztBQXNDTDhCLGNBQUFBLFdBdENLLEdBc0NTLGtDQUFzQkQsWUFBdEIsQ0F0Q1Q7QUFBQTtBQUFBLDhDQXVDTDlELEdBQUcsVUFBSCxDQUFXc0IsR0FBWCxDQUFlLE9BQWYsRUFBd0J5QyxXQUF4QixDQXZDSzs7QUFBQTtBQXdDWCxvQkFBS3JELFFBQUwsQ0FBYztBQUFFc0QsZ0JBQUFBLEtBQUssRUFBRUQsV0FBVDtBQUFzQjlCLGdCQUFBQSxXQUFXLEVBQUU7QUFBbkMsZUFBZDs7QUF4Q1c7QUFBQSw2QkEyQ01ILGdCQTNDTjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDhDQTJDZ0MsTUFBSzhCLFFBQUwsQ0FBYzdCLFdBQWQsQ0EzQ2hDOztBQUFBO0FBQUE7O0FBQUE7QUEyQ1BrQyxjQUFBQSxVQTNDTztBQUFBLDZCQTRDYW5DLGdCQTVDYjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDhDQTRDdUNtQyxVQUFVLENBQUNKLElBQVgsRUE1Q3ZDOztBQUFBO0FBQUE7O0FBQUE7QUE0Q1BLLGNBQUFBLGlCQTVDTzs7QUFBQSxtQkE2Q1RwQyxnQkE3Q1M7QUFBQTtBQUFBO0FBQUE7O0FBOENMaUMsY0FBQUEsWUE5Q0ssR0E4Q1Msa0NBQXNCRyxpQkFBdEIsQ0E5Q1Q7QUFBQTtBQUFBLDhDQStDTGxFLEdBQUcsVUFBSCxDQUFXc0IsR0FBWCxDQUFlLFlBQWYsRUFBNkJ5QyxZQUE3QixDQS9DSzs7QUFBQTtBQWdEWCxvQkFBS3JELFFBQUwsQ0FBYztBQUFFeUQsZ0JBQUFBLFVBQVUsRUFBRUosWUFBZDtBQUEyQmpDLGdCQUFBQSxnQkFBZ0IsRUFBRTtBQUE3QyxlQUFkOztBQWhEVztBQUFBLDZCQW1EV1MsZ0JBbkRYOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsOENBbURxQyxNQUFLcUIsUUFBTCxDQUFjcEIsZ0JBQWQsQ0FuRHJDOztBQUFBO0FBQUE7O0FBQUE7QUFtRFA0QixjQUFBQSxlQW5ETztBQUFBLDZCQW9Ea0I3QixnQkFwRGxCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsOENBb0Q0QzZCLGVBQWUsQ0FBQ1AsSUFBaEIsRUFwRDVDOztBQUFBO0FBQUE7O0FBQUE7QUFvRFBRLGNBQUFBLHNCQXBETzs7QUFBQSxtQkFxRFQ5QixnQkFyRFM7QUFBQTtBQUFBO0FBQUE7O0FBc0RMd0IsY0FBQUEsYUF0REssR0FzRFMsa0NBQXNCTSxzQkFBdEIsQ0F0RFQ7QUFBQTtBQUFBLDhDQXVETGhELEtBQUssVUFBTCxDQUFhQyxHQUFiLENBQWlCLE9BQWpCLEVBQTBCeUMsYUFBMUIsQ0F2REs7O0FBQUE7QUF3RFgsb0JBQUtyRCxRQUFMLENBQWM7QUFBRTRELGdCQUFBQSxpQkFBaUIsRUFBRVAsYUFBckI7QUFBa0N4QixnQkFBQUEsZ0JBQWdCLEVBQUU7QUFBcEQsZUFBZDs7QUF4RFc7QUFBQSw2QkEyRFdILHFCQTNEWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDhDQTJEMEMsTUFBS3dCLFFBQUwsQ0FBY3ZCLGdCQUFkLENBM0QxQzs7QUFBQTtBQUFBOztBQUFBO0FBMkRQa0MsY0FBQUEsZUEzRE87QUFBQSw2QkE0RGtCbkMscUJBNURsQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDhDQTREaURtQyxlQUFlLENBQUNWLElBQWhCLEVBNURqRDs7QUFBQTtBQUFBOztBQUFBO0FBNERQVyxjQUFBQSxzQkE1RE87O0FBQUEsbUJBNkRUcEMscUJBN0RTO0FBQUE7QUFBQTtBQUFBOztBQThETDJCLGNBQUFBLGFBOURLLEdBOERTLGtDQUFzQlMsc0JBQXRCLENBOURUO0FBQUE7QUFBQSw4Q0ErRExuRCxLQUFLLFVBQUwsQ0FBYUMsR0FBYixDQUFpQixZQUFqQixFQUErQnlDLGFBQS9CLENBL0RLOztBQUFBO0FBZ0VYLG9CQUFLckQsUUFBTCxDQUFjO0FBQUUrRCxnQkFBQUEsc0JBQXNCLEVBQUVWLGFBQTFCO0FBQXVDM0IsZ0JBQUFBLHFCQUFxQixFQUFFO0FBQTlELGVBQWQ7O0FBaEVXO0FBQUEsbUJBbUVURCxpQkFuRVM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw4Q0FtRWdCbkMsR0FBRyxVQUFILENBQVcwRSxNQUFYLENBQWtCLE9BQWxCLENBbkVoQjs7QUFBQTtBQUFBLG1CQW9FVDFDLHNCQXBFUztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDhDQW9FcUJoQyxHQUFHLFVBQUgsQ0FBVzBFLE1BQVgsQ0FBa0IsWUFBbEIsQ0FwRXJCOztBQUFBO0FBQUEsbUJBcUVUakMsNkJBckVTO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsOENBcUU0QnBCLEtBQUssVUFBTCxDQUFhcUQsTUFBYixDQUFvQixPQUFwQixDQXJFNUI7O0FBQUE7QUFBQSxtQkFzRVRwQywyQkF0RVM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw4Q0FzRTBCakIsS0FBSyxVQUFMLENBQWFxRCxNQUFiLENBQW9CLFlBQXBCLENBdEUxQjs7QUFBQTtBQUFBO0FBQUEsOENBd0VQLCtCQUFpQnJELEtBQWpCLEVBQXdCa0MsWUFBeEIsRUFBc0MsTUFBS3JDLEtBQTNDLEVBQWtENEIsb0JBQWxELENBeEVPOztBQUFBO0FBMEViLG9CQUFLcEMsUUFBTCxDQUFjO0FBQUVpRCxnQkFBQUEsYUFBYSxFQUFFO0FBQWpCLGVBQWQ7O0FBRUEsa0JBQUlGLFVBQUosRUFBZ0I7QUFDZEEsZ0JBQUFBLFVBQVUsQ0FBQ0QsZUFBRCxDQUFWO0FBQ0QsZUFGRCxNQUVPO0FBQ0wsc0JBQUs5QyxRQUFMLENBQWM7QUFBRWlFLGtCQUFBQSxnQkFBZ0IsRUFBRTtBQUFwQixpQkFBZDs7QUFDQUMsZ0JBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2Ysd0JBQUtsRSxRQUFMLENBQWM7QUFBRWlFLG9CQUFBQSxnQkFBZ0IsRUFBRTtBQUFwQixtQkFBZDtBQUNELGlCQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7O0FBbkZZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBck9JOztBQUFBLHVFQTJUQSxZQUFNLENBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxLQWpVa0I7O0FBQUEsNEVBbVVLLFlBQU07QUFBQSxVQUNwQkUsV0FEb0IsR0FDSixNQUFLM0QsS0FERCxDQUNwQjJELFdBRG9COztBQUU1QixZQUFLbkUsUUFBTCxDQUFjO0FBQUVtRSxRQUFBQSxXQUFXLEVBQUUsQ0FBQ0E7QUFBaEIsT0FBZDtBQUNELEtBdFVrQjs7QUFFakIsVUFBSzNELEtBQUwsR0FBYTtBQUNYNEQsTUFBQUEsSUFBSSxFQUFFOUIsU0FESztBQUVYK0IsTUFBQUEsV0FBVyxFQUFFL0IsU0FGRjtBQUdYQyxNQUFBQSxLQUFLLEVBQUVELFNBSEk7QUFJWHpDLE1BQUFBLGNBQWMsRUFBRXlDLFNBSkw7QUFLWDdDLE1BQUFBLGVBQWUsRUFBRTZDLFNBTE47QUFNWHZDLE1BQUFBLGFBQWEsRUFBRXVDLFNBTko7QUFRWGdDLE1BQUFBLGdCQUFnQixFQUFFaEMsU0FSUDtBQVNYaUMsTUFBQUEsdUJBQXVCLEVBQUVqQyxTQVRkO0FBVVhrQyxNQUFBQSxpQkFBaUIsRUFBRWxDLFNBVlI7QUFZWGQsTUFBQUEsTUFBTSxFQUFFLEVBWkc7QUFjWGQsTUFBQUEsb0JBQW9CLEVBQUUsSUFkWDtBQWVYRCxNQUFBQSxtQkFBbUIsRUFBRSxLQWZWO0FBZ0JYd0MsTUFBQUEsYUFBYSxFQUFFLEtBaEJKO0FBaUJYMUIsTUFBQUEsV0FBVyxFQUFFLEtBakJGO0FBa0JYSCxNQUFBQSxnQkFBZ0IsRUFBRSxLQWxCUDtBQW1CWE0sTUFBQUEscUJBQXFCLEVBQUUsS0FuQlo7QUFvQlhHLE1BQUFBLGdCQUFnQixFQUFFLEtBcEJQO0FBcUJYWSxNQUFBQSxXQUFXLEVBQUUsS0FyQkY7QUFzQlh3QixNQUFBQSxnQkFBZ0IsRUFBRSxLQXRCUDtBQXdCWHhDLE1BQUFBLGlCQUFpQixFQUFFLEtBeEJSO0FBeUJYSCxNQUFBQSxzQkFBc0IsRUFBRSxLQXpCYjtBQTBCWFMsTUFBQUEsNkJBQTZCLEVBQUUsS0ExQnBCO0FBMkJYSCxNQUFBQSwyQkFBMkIsRUFBRSxLQTNCbEI7QUE0QlhyQixNQUFBQSx1QkFBdUIsRUFBRSxLQTVCZDtBQTZCWDRELE1BQUFBLFdBQVcsRUFBRSxLQTdCRjtBQStCWFYsTUFBQUEsVUFBVSxFQUFFLEVBL0JEO0FBZ0NYSCxNQUFBQSxLQUFLLEVBQUU7QUFoQ0ksS0FBYjtBQUZpQjtBQW9DbEI7Ozs7Ozs7Ozs7Ozs7NkJBRzBFLEtBQUtqRSxLLEVBQXRFb0Ysc0IsZ0JBQUFBLHNCLEVBQXdCOUQsSyxnQkFBQUEsSyxFQUFPbUMsZSxnQkFBQUEsZSxFQUFpQkQsWSxnQkFBQUEsWTs2QkFFakM0QixzQjs7Ozs7Ozs7OENBQWdDQyxnQkFBSUMsVUFBSixDQUFlN0IsZUFBZixDOzs7Ozs7QUFBakQ4QixjQUFBQSxjOzs4Q0FDcUJqRSxLQUFLLFVBQUwsQ0FBYWtFLEdBQWIsRTs7O0FBQXJCQyxjQUFBQSxZOztBQUVOQyx1Q0FBa0JDLE9BQWxCLENBQTBCLFVBQUNDLFFBQUQsRUFBYztBQUN0QyxvQkFBTUMsWUFBWSxHQUFHTixjQUFjLENBQUNLLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FBbkM7QUFDQSxvQkFBTUUsVUFBVSxHQUFHTCxZQUFZLENBQUNHLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FBL0I7QUFFQSxvQkFBSUMsWUFBSixFQUFrQixNQUFJLENBQUNsRixRQUFMLHFCQUFpQmlGLFFBQVEsQ0FBQyxDQUFELENBQXpCLEVBQStCQyxZQUEvQjtBQUNsQixvQkFBSUMsVUFBSixFQUFnQixNQUFJLENBQUNuRixRQUFMLDJDQUFnQyxrQ0FBc0JpRixRQUFRLENBQUMsQ0FBRCxDQUE5QixDQUFoQyxHQUF1RUUsVUFBdkU7QUFDakIsZUFORDs7QUFRQSxrQkFBSXRDLFlBQVksQ0FBQ3VDLE1BQWpCLEVBQXlCO0FBQ3ZCdkMsZ0JBQUFBLFlBQVksQ0FBQ21DLE9BQWIsQ0FBcUIsVUFBQ0ssS0FBRCxFQUFXO0FBQzlCLHNCQUFNRixVQUFVLEdBQUdMLFlBQVksQ0FBQ08sS0FBSyxDQUFDQyxHQUFQLENBQS9CO0FBQ0Esc0JBQUlILFVBQUosRUFBZ0IsTUFBSSxDQUFDbkYsUUFBTCxxQkFBaUJxRixLQUFLLENBQUNDLEdBQXZCLEVBQTZCSCxVQUE3QjtBQUNqQixpQkFIRDtBQUlEOzs7OENBRWlDeEUsS0FBSyxVQUFMLENBQWE0RSxHQUFiLENBQWlCLHFCQUFqQixDOzs7QUFBNUI5RSxjQUFBQSxtQjtBQUVOLG1CQUFLK0UsbUJBQUw7QUFFQSxtQkFBS3hGLFFBQUwsQ0FBYztBQUNacUMsZ0JBQUFBLGVBQWUsRUFBRXVDLGNBREw7QUFFWnhDLGdCQUFBQSxvQkFBb0IsRUFBRTBDLFlBRlY7QUFHWnJFLGdCQUFBQSxtQkFBbUIsRUFBbkJBLG1CQUhZO0FBSVpDLGdCQUFBQSxvQkFBb0IsRUFBRSxDQUFDRDtBQUpYLGVBQWQ7Ozs7Ozs7Ozs7O3VDQVF1QmdGLFM7Ozs7Ozs7NkJBSW5CLEtBQUtwRyxLLEVBRlBvRixzQixnQkFBQUEsc0IsRUFDQW5GLEcsZ0JBQUFBLEc7O0FBR0Ysa0JBQUltRixzQkFBSixFQUE0QjtBQUV4QkwsZ0JBQUFBLElBRndCLEdBV3RCSyxzQkFYc0IsQ0FFeEJMLElBRndCLEVBR3hCdEUsS0FId0IsR0FXdEIyRSxzQkFYc0IsQ0FHeEIzRSxLQUh3QixFQUl4QnVFLFdBSndCLEdBV3RCSSxzQkFYc0IsQ0FJeEJKLFdBSndCLEVBS3hCeEUsY0FMd0IsR0FXdEI0RSxzQkFYc0IsQ0FLeEI1RSxjQUx3QixFQU14QkosZUFOd0IsR0FXdEJnRixzQkFYc0IsQ0FNeEJoRixlQU53QixFQU94Qk0sYUFQd0IsR0FXdEIwRSxzQkFYc0IsQ0FPeEIxRSxhQVB3QixFQVF4QndDLEtBUndCLEdBV3RCa0Msc0JBWHNCLENBUXhCbEMsS0FSd0IsRUFTeEJlLEtBVHdCLEdBV3RCbUIsc0JBWHNCLENBU3hCbkIsS0FUd0IsRUFVeEJHLFVBVndCLEdBV3RCZ0Isc0JBWHNCLENBVXhCaEIsVUFWd0I7QUFhcEJpQyxnQkFBQUEsTUFib0IsR0FhWCxDQUFDRCxTQUFTLENBQUNoQixzQkFiQTtBQWNwQmtCLGdCQUFBQSxRQWRvQixHQWNURixTQUFTLENBQUNoQixzQkFkRDtBQWdCMUIsb0JBQUtMLElBQUksSUFBSXNCLE1BQVQsSUFBb0J0QixJQUFJLEtBQUt1QixRQUFRLENBQUN2QixJQUExQyxFQUFnRCxLQUFLcEUsUUFBTCxDQUFjO0FBQUVvRSxrQkFBQUEsSUFBSSxFQUFKQTtBQUFGLGlCQUFkO0FBQ2hELG9CQUFLdEUsS0FBSyxJQUFJNEYsTUFBVixJQUFxQjVGLEtBQUssS0FBSzZGLFFBQVEsQ0FBQzdGLEtBQTVDLEVBQW1ELEtBQUtFLFFBQUwsQ0FBYztBQUFFRixrQkFBQUEsS0FBSyxFQUFMQTtBQUFGLGlCQUFkO0FBQ25ELG9CQUFLdUUsV0FBVyxJQUFJcUIsTUFBaEIsSUFBMkJyQixXQUFXLEtBQUtzQixRQUFRLENBQUN0QixXQUF4RCxFQUFxRSxLQUFLckUsUUFBTCxDQUFjO0FBQUVxRSxrQkFBQUEsV0FBVyxFQUFYQTtBQUFGLGlCQUFkO0FBQ3JFLG9CQUFLOUIsS0FBSyxJQUFJbUQsTUFBVixJQUFxQm5ELEtBQUssS0FBS29ELFFBQVEsQ0FBQ3BELEtBQTVDLEVBQW1ELEtBQUt2QyxRQUFMLENBQWM7QUFBRXVDLGtCQUFBQSxLQUFLLEVBQUxBO0FBQUYsaUJBQWQ7QUFDbkQsb0JBQUtlLEtBQUssSUFBSW9DLE1BQVYsSUFBcUJwQyxLQUFLLEtBQUtxQyxRQUFRLENBQUNyQyxLQUE1QyxFQUFtRCxLQUFLdEQsUUFBTCxDQUFjO0FBQUVzRCxrQkFBQUEsS0FBSyxFQUFMQTtBQUFGLGlCQUFkO0FBQ25ELG9CQUFLRyxVQUFVLElBQUlpQyxNQUFmLElBQTBCakMsVUFBVSxLQUFLa0MsUUFBUSxDQUFDbEMsVUFBdEQsRUFBa0UsS0FBS3pELFFBQUwsQ0FBYztBQUFFeUQsa0JBQUFBLFVBQVUsRUFBVkE7QUFBRixpQkFBZDtBQUNsRSxvQkFBSzVELGNBQWMsSUFBSTZGLE1BQW5CLElBQThCN0YsY0FBYyxLQUFLOEYsUUFBUSxDQUFDOUYsY0FBOUQsRUFBOEUsS0FBS0csUUFBTCxDQUFjO0FBQUVILGtCQUFBQSxjQUFjLEVBQWRBO0FBQUYsaUJBQWQ7QUFDOUUsb0JBQUtKLGVBQWUsSUFBSWlHLE1BQXBCLElBQStCakcsZUFBZSxLQUFLa0csUUFBUSxDQUFDbEcsZUFBaEUsRUFBaUYsS0FBS08sUUFBTCxDQUFjO0FBQUVQLGtCQUFBQSxlQUFlLEVBQWZBO0FBQUYsaUJBQWQ7QUFDakYsb0JBQUtNLGFBQWEsSUFBSTJGLE1BQWxCLElBQTZCM0YsYUFBYSxLQUFLNEYsUUFBUSxDQUFDNUYsYUFBNUQsRUFBMkUsS0FBS0MsUUFBTCxDQUFjO0FBQUVELGtCQUFBQSxhQUFhLEVBQWJBO0FBQUYsaUJBQWQ7QUFDNUU7O0FBRUQsa0JBQUlULEdBQUcsS0FBS21HLFNBQVMsQ0FBQ25HLEdBQXRCLEVBQTJCLEtBQUtrRyxtQkFBTDs7Ozs7Ozs7Ozs7NkJBZ09wQjtBQUFBLHlCQU1ILEtBQUtuRyxLQU5GO0FBQUEsVUFFTHlELGVBRkssZ0JBRUxBLGVBRks7QUFBQSxVQUdMQyxVQUhLLGdCQUdMQSxVQUhLO0FBQUEsVUFJTEYsWUFKSyxnQkFJTEEsWUFKSztBQUFBLFVBS0xsQyxLQUxLLGdCQUtMQSxLQUxLO0FBQUEseUJBa0NILEtBQUtILEtBbENGO0FBQUEsVUFTTDRELElBVEssZ0JBU0xBLElBVEs7QUFBQSxVQVVMQyxXQVZLLGdCQVVMQSxXQVZLO0FBQUEsVUFXTDlCLEtBWEssZ0JBV0xBLEtBWEs7QUFBQSxVQVlMZCxpQkFaSyxnQkFZTEEsaUJBWks7QUFBQSxVQWFMSCxzQkFiSyxnQkFhTEEsc0JBYks7QUFBQSxVQWNMMkIsYUFkSyxnQkFjTEEsYUFkSztBQUFBLFVBZUwxQyx1QkFmSyxnQkFlTEEsdUJBZks7QUFBQSxVQWdCTGtDLFdBaEJLLGdCQWdCTEEsV0FoQks7QUFBQSxVQWlCTDBCLFdBakJLLGdCQWlCTEEsV0FqQks7QUFBQSxVQWtCTGIsS0FsQkssZ0JBa0JMQSxLQWxCSztBQUFBLFVBbUJMRyxVQW5CSyxnQkFtQkxBLFVBbkJLO0FBQUEsVUFvQkxoRSxlQXBCSyxnQkFvQkxBLGVBcEJLO0FBQUEsVUFxQkxJLGNBckJLLGdCQXFCTEEsY0FyQks7QUFBQSxVQXNCTEUsYUF0QkssZ0JBc0JMQSxhQXRCSztBQUFBLFVBdUJMVyxvQkF2QkssZ0JBdUJMQSxvQkF2Qks7QUFBQSxVQXdCTEQsbUJBeEJLLGdCQXdCTEEsbUJBeEJLO0FBQUEsVUF5Qkx3RCxnQkF6QkssZ0JBeUJMQSxnQkF6Qks7QUFBQSxVQTJCTEssZ0JBM0JLLGdCQTJCTEEsZ0JBM0JLO0FBQUEsVUE0QkxDLHVCQTVCSyxnQkE0QkxBLHVCQTVCSztBQUFBLFVBNkJMQyxpQkE3QkssZ0JBNkJMQSxpQkE3Qks7QUFBQSxVQThCTFQsc0JBOUJLLGdCQThCTEEsc0JBOUJLO0FBQUEsVUErQkxILGlCQS9CSyxnQkErQkxBLGlCQS9CSztBQUFBLFVBZ0NMaEMsMkJBaENLLGdCQWdDTEEsMkJBaENLO0FBQUEsVUFpQ0xHLDZCQWpDSyxnQkFpQ0xBLDZCQWpDSztBQW9DUCxhQUNFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNFLGdDQUFDLHlDQUFEO0FBQ0UsUUFBQSxjQUFjLEVBQUMsWUFEakI7QUFFRSxRQUFBLHNCQUFzQixFQUFFLEdBRjFCO0FBR0UsUUFBQSxzQkFBc0IsRUFBRTtBQUgxQixTQUtHeEIsdUJBQXVCLElBQ25CLGdDQUFDLHFCQUFEO0FBQWUsUUFBQSxJQUFJLEVBQUVBLHVCQUFyQjtBQUE4QyxRQUFBLGtCQUFrQixFQUFFLEtBQUtxRjtBQUF2RSxRQU5QLEVBUUdyRix1QkFBdUIsSUFBSSxnQ0FBQyx1QkFBRCxPQVI5QixDQURGLEVBWUUsZ0NBQUMsMEJBQUQ7QUFDRSxRQUFBLG9CQUFvQixFQUFFRyxvQkFEeEI7QUFFRSxRQUFBLFVBQVUsRUFBRStDLFVBRmQ7QUFHRSxRQUFBLEtBQUssRUFBRUgsS0FIVDtBQUlFLFFBQUEsS0FBSyxFQUFFZixLQUpUO0FBS0UsUUFBQSxJQUFJLEVBQUU2QixJQUxSO0FBTUUsUUFBQSxpQkFBaUIsRUFBRTNDLGlCQU5yQjtBQU9FLFFBQUEsc0JBQXNCLEVBQUVILHNCQVAxQjtBQVFFLFFBQUEsV0FBVyxFQUFFK0MsV0FSZjtBQVNFLFFBQUEsZUFBZSxFQUFFdkIsZUFUbkI7QUFVRSxRQUFBLFdBQVcsRUFBRUwsV0FWZjtBQVdFLFFBQUEsZUFBZSxFQUFFaEQsZUFYbkI7QUFZRSxRQUFBLGNBQWMsRUFBRUksY0FabEI7QUFhRSxRQUFBLGFBQWEsRUFBRUUsYUFiakI7QUFjRSxRQUFBLFVBQVUsRUFBRWdELFVBZGQ7QUFlRSxRQUFBLGlCQUFpQixFQUFFYSxpQkFmckI7QUFnQkUsUUFBQSxZQUFZLEVBQUVmLFlBaEJoQjtBQWlCRSxRQUFBLEtBQUssRUFBRWxDLEtBakJUO0FBa0JFLFFBQUEsbUJBQW1CLEVBQUVGLG1CQWxCdkI7QUFtQkUsUUFBQSxhQUFhLEVBQUV3QyxhQW5CakI7QUFvQkUsUUFBQSxnQkFBZ0IsRUFBRWdCLGdCQXBCcEI7QUFxQkUsUUFBQSxXQUFXLEVBQUVFLFdBckJmO0FBdUJFLFFBQUEsbUJBQW1CLEVBQUUsS0FBSzBCLG1CQXZCNUI7QUF3QkUsUUFBQSxXQUFXLEVBQUUsS0FBS0MsV0F4QnBCO0FBeUJFLFFBQUEsZUFBZSxFQUFFLEtBQUtDLGVBekJ4QjtBQTBCRSxRQUFBLFVBQVUsRUFBRSxLQUFLQyxVQTFCbkI7QUEyQkUsUUFBQSxnQkFBZ0IsRUFBRSxLQUFLQyxnQkEzQnpCO0FBNEJFLFFBQUEsY0FBYyxFQUFFLEtBQUtDLGNBNUJ2QjtBQTZCRSxRQUFBLHFCQUFxQixFQUFFLEtBQUtDLHFCQTdCOUI7QUE4QkUsUUFBQSxZQUFZLEVBQUUsS0FBS0MsWUE5QnJCO0FBK0JFLFFBQUEsMEJBQTBCLEVBQUUsS0FBS0MsMEJBL0JuQztBQWdDRSxRQUFBLHFCQUFxQixFQUFFLEtBQUtDO0FBaEM5QixTQWtDTSxLQUFLOUYsS0FsQ1gsRUFaRixFQWlERSxnQ0FBQyx3QkFBRDtBQUNFLFFBQUEsb0JBQW9CLEVBQUVFLG9CQUR4QjtBQUdFLFFBQUEsZ0JBQWdCLEVBQUU0RCxnQkFIcEI7QUFJRSxRQUFBLHVCQUF1QixFQUFFQyx1QkFKM0I7QUFLRSxRQUFBLGlCQUFpQixFQUFFQyxpQkFMckI7QUFPRSxRQUFBLHNCQUFzQixFQUFFVCxzQkFQMUI7QUFRRSxRQUFBLGlCQUFpQixFQUFFSCxpQkFSckI7QUFVRSxRQUFBLDJCQUEyQixFQUFFaEMsMkJBVi9CO0FBV0UsUUFBQSw2QkFBNkIsRUFBRUcsNkJBWGpDO0FBWUUsUUFBQSxLQUFLLEVBQUV1QixLQVpUO0FBYUUsUUFBQSxXQUFXLEVBQUVhLFdBYmY7QUFlRSxRQUFBLEtBQUssRUFBRXhELEtBZlQ7QUFnQkUsUUFBQSxtQkFBbUIsRUFBRUYsbUJBaEJ2QjtBQWlCRSxRQUFBLGdCQUFnQixFQUFFd0QsZ0JBakJwQjtBQW1CRSxRQUFBLGVBQWUsRUFBRW5CLGVBbkJuQjtBQW9CRSxRQUFBLFdBQVcsRUFBRUwsV0FwQmY7QUFxQkUsUUFBQSxhQUFhLEVBQUVRLGFBckJqQjtBQXNCRSxRQUFBLFVBQVUsRUFBRUYsVUF0QmQ7QUF1QkUsUUFBQSxZQUFZLEVBQUVGLFlBdkJoQjtBQXdCRSxRQUFBLG1CQUFtQixFQUFFLEtBQUtnRCxtQkF4QjVCO0FBeUJFLFFBQUEsV0FBVyxFQUFFLEtBQUtDLFdBekJwQjtBQTBCRSxRQUFBLGVBQWUsRUFBRSxLQUFLQyxlQTFCeEI7QUEyQkUsUUFBQSxVQUFVLEVBQUUsS0FBS0MsVUEzQm5CO0FBNEJFLFFBQUEsZ0JBQWdCLEVBQUUsS0FBS0MsZ0JBNUJ6QjtBQTZCRSxRQUFBLGNBQWMsRUFBRSxLQUFLQyxjQTdCdkI7QUE4QkUsUUFBQSxxQkFBcUIsRUFBRSxLQUFLQyxxQkE5QjlCO0FBK0JFLFFBQUEsWUFBWSxFQUFFLEtBQUtDLFlBL0JyQjtBQWdDRSxRQUFBLDBCQUEwQixFQUFFLEtBQUtDLDBCQWhDbkM7QUFpQ0UsUUFBQSxxQkFBcUIsRUFBRSxLQUFLQztBQWpDOUIsU0FtQ00sS0FBSzlGLEtBbkNYLEVBakRGLENBREY7QUF5RkQ7Ozs7RUF0Y3VCK0YsZ0I7O0FBeWMxQm5ILFdBQVcsQ0FBQ29ILFNBQVosR0FBd0I7QUFDdEJsSCxFQUFBQSxHQUFHLEVBQUVtSCxzQkFBVUMsTUFETztBQUV0QkMsRUFBQUEsT0FBTyxFQUFFRixzQkFBVUMsTUFGRztBQUd0Qi9GLEVBQUFBLEtBQUssRUFBRThGLHNCQUFVQyxNQUhLO0FBSXRCakMsRUFBQUEsc0JBQXNCLEVBQUVnQyxzQkFBVUMsTUFKWjtBQUt0QjdELEVBQUFBLFlBQVksRUFBRTRELHNCQUFVRyxLQUxGO0FBTXRCeEMsRUFBQUEsSUFBSSxFQUFFcUMsc0JBQVVJLE1BTk07QUFPdEJoSCxFQUFBQSxjQUFjLEVBQUU0RyxzQkFBVUksTUFQSjtBQVF0QnBILEVBQUFBLGVBQWUsRUFBRWdILHNCQUFVSSxNQVJMO0FBU3RCOUcsRUFBQUEsYUFBYSxFQUFFMEcsc0JBQVVJLE1BVEg7QUFVdEJ0RSxFQUFBQSxLQUFLLEVBQUVrRSxzQkFBVUksTUFWSztBQVd0QnhDLEVBQUFBLFdBQVcsRUFBRW9DLHNCQUFVSSxNQVhEO0FBWXRCL0csRUFBQUEsS0FBSyxFQUFFMkcsc0JBQVVJLE1BWks7QUFhdEIvRCxFQUFBQSxlQUFlLEVBQUUyRCxzQkFBVUksTUFiTDtBQWN0QnZELEVBQUFBLEtBQUssRUFBRW1ELHNCQUFVRyxLQWRLO0FBZXRCbkQsRUFBQUEsVUFBVSxFQUFFZ0Qsc0JBQVVHLEtBZkE7QUFnQnRCRSxFQUFBQSxjQUFjLEVBQUVMLHNCQUFVTSxJQWhCSjtBQWlCdEJoRSxFQUFBQSxVQUFVLEVBQUUwRCxzQkFBVU87QUFqQkEsQ0FBeEI7QUFvQkE1SCxXQUFXLENBQUM2SCxZQUFaLEdBQTJCO0FBQ3pCM0gsRUFBQUEsR0FBRyxFQUFFLEVBRG9CO0FBRXpCcUIsRUFBQUEsS0FBSyxFQUFFLEVBRmtCO0FBR3pCZ0csRUFBQUEsT0FBTyxFQUFFLEVBSGdCO0FBSXpCbEMsRUFBQUEsc0JBQXNCLEVBQUUsSUFKQztBQUt6QjFFLEVBQUFBLGFBQWEsRUFBRSxFQUxVO0FBTXpCRixFQUFBQSxjQUFjLEVBQUUsRUFOUztBQU96QkosRUFBQUEsZUFBZSxFQUFFLEVBUFE7QUFRekIyRSxFQUFBQSxJQUFJLEVBQUUsRUFSbUI7QUFTekJDLEVBQUFBLFdBQVcsRUFBRSxFQVRZO0FBVXpCOUIsRUFBQUEsS0FBSyxFQUFFLEVBVmtCO0FBV3pCekMsRUFBQUEsS0FBSyxFQUFFLEVBWGtCO0FBWXpCZ0QsRUFBQUEsZUFBZSxFQUFFLEVBWlE7QUFhekJRLEVBQUFBLEtBQUssRUFBRSxFQWJrQjtBQWN6QkcsRUFBQUEsVUFBVSxFQUFFLEVBZGE7QUFlekJaLEVBQUFBLFlBQVksRUFBRSxFQWZXO0FBZ0J6QmlFLEVBQUFBLGNBQWMsRUFBRTtBQWhCUyxDQUEzQjtlQW1CZTFILFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnZW1vamktbWFydC9jc3MvZW1vamktbWFydC5jc3MnO1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgQm94IGZyb20gJzNib3gnO1xuXG5pbXBvcnQge1xuICBlZGl0UHJvZmlsZUZpZWxkcyxcbiAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLFxuICBmb3JtYXRJcGZzSW1hZ2VPYmplY3QsXG59IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgc2F2ZUN1c3RvbUZpZWxkcywgc2F2ZUJhc2ljVGV4dEZpZWxkcyB9IGZyb20gJy4vaGVscGVycyc7XG5cbmltcG9ydCB7XG4gIEZpbGVTaXplTW9kYWwsXG4gIE1vZGFsQmFja2dyb3VuZCxcbn0gZnJvbSAnLi9jb21wb25lbnRzL01vZGFscyc7XG5pbXBvcnQgR2VuZXJhbFByb2ZpbGUgZnJvbSAnLi9jb21wb25lbnRzL0dlbmVyYWxQcm9maWxlJztcbmltcG9ydCBTcGFjZVByb2ZpbGUgZnJvbSAnLi9jb21wb25lbnRzL1NwYWNlUHJvZmlsZSc7XG5pbXBvcnQgJy4vc3R5bGVzJztcblxuY2xhc3MgRWRpdFByb2ZpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246IHVuZGVmaW5lZCxcbiAgICAgIGVtb2ppOiB1bmRlZmluZWQsXG4gICAgICB2ZXJpZmllZEdpdGh1YjogdW5kZWZpbmVkLFxuICAgICAgdmVyaWZpZWRUd2l0dGVyOiB1bmRlZmluZWQsXG4gICAgICB2ZXJpZmllZEVtYWlsOiB1bmRlZmluZWQsXG5cbiAgICAgIHNwYWNlUHJvZmlsZU5hbWU6IHVuZGVmaW5lZCxcbiAgICAgIHNwYWNlUHJvZmlsZURlc2NyaXB0aW9uOiB1bmRlZmluZWQsXG4gICAgICBzcGFjZVByb2ZpbGVFbW9qaTogdW5kZWZpbmVkLFxuXG4gICAgICBidWZmZXI6ICcnLFxuXG4gICAgICBpc1Nob3dHZW5lcmFsUHJvZmlsZTogdHJ1ZSxcbiAgICAgIGlzQXBwUHJvZmlsZURlZmF1bHQ6IGZhbHNlLFxuICAgICAgaXNTYXZlTG9hZGluZzogZmFsc2UsXG4gICAgICBpc1BpY0VkaXRlZDogZmFsc2UsXG4gICAgICBpc0NvdmVyUGljRWRpdGVkOiBmYWxzZSxcbiAgICAgIGlzU3BhY2VDb3ZlclBpY0VkaXRlZDogZmFsc2UsXG4gICAgICBpc1NwYWNlUGljRWRpdGVkOiBmYWxzZSxcbiAgICAgIGlzU2hvd0Vtb2ppOiBmYWxzZSxcbiAgICAgIGlzU2F2ZVN1Y2Nlc3NmdWw6IGZhbHNlLFxuXG4gICAgICBzaG91bGRSZW1vdmVJbWFnZTogZmFsc2UsXG4gICAgICBzaG91bGRSZW1vdmVDb3ZlclBob3RvOiBmYWxzZSxcbiAgICAgIHNob3VsZFJlbW92ZVNwYWNlUHJvZmlsZUltYWdlOiBmYWxzZSxcbiAgICAgIHNob3VsZFJlbW92ZVNwYWNlQ292ZXJQaG90bzogZmFsc2UsXG4gICAgICBzaG91bGRTaG93RklsZVNpemVNb2RhbDogZmFsc2UsXG4gICAgICBzaG93T3B0aW9uczogZmFsc2UsXG5cbiAgICAgIGNvdmVyUGhvdG86IFtdLFxuICAgICAgaW1hZ2U6IFtdLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGN1cnJlbnRVc2VyM0JveFByb2ZpbGUsIHNwYWNlLCBjdXJyZW50VXNlckFkZHIsIGN1c3RvbUZpZWxkcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGdlbmVyYWxQcm9maWxlID0gY3VycmVudFVzZXIzQm94UHJvZmlsZSB8fCBhd2FpdCBCb3guZ2V0UHJvZmlsZShjdXJyZW50VXNlckFkZHIpO1xuICAgIGNvbnN0IHNwYWNlUHJvZmlsZSA9IGF3YWl0IHNwYWNlLnB1YmxpYy5hbGwoKTtcblxuICAgIGVkaXRQcm9maWxlRmllbGRzLmZvckVhY2goKGZpZWxkU2V0KSA9PiB7XG4gICAgICBjb25zdCBnZW5lcmFsVmFsdWUgPSBnZW5lcmFsUHJvZmlsZVtmaWVsZFNldFswXV07XG4gICAgICBjb25zdCBzcGFjZVZhbHVlID0gc3BhY2VQcm9maWxlW2ZpZWxkU2V0WzBdXTtcblxuICAgICAgaWYgKGdlbmVyYWxWYWx1ZSkgdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZFNldFswXV06IGdlbmVyYWxWYWx1ZSB9KTtcbiAgICAgIGlmIChzcGFjZVZhbHVlKSB0aGlzLnNldFN0YXRlKHsgW2BzcGFjZVByb2ZpbGUke2NhcGl0YWxpemVGaXJzdExldHRlcihmaWVsZFNldFswXSl9YF06IHNwYWNlVmFsdWUgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY3VzdG9tRmllbGRzLmxlbmd0aCkge1xuICAgICAgY3VzdG9tRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwYWNlVmFsdWUgPSBzcGFjZVByb2ZpbGVbZmllbGQua2V5XTtcbiAgICAgICAgaWYgKHNwYWNlVmFsdWUpIHRoaXMuc2V0U3RhdGUoeyBbZmllbGQua2V5XTogc3BhY2VWYWx1ZSB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGlzQXBwUHJvZmlsZURlZmF1bHQgPSBhd2FpdCBzcGFjZS5wdWJsaWMuZ2V0KCdpc0FwcFByb2ZpbGVEZWZhdWx0Jyk7XG5cbiAgICB0aGlzLmZldGNoVmVyaWZpZWRGaWVsZHMoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3JpZ2luYWxQcm9maWxlOiBnZW5lcmFsUHJvZmlsZSxcbiAgICAgIG9yaWdpbmFsU3BhY2VQcm9maWxlOiBzcGFjZVByb2ZpbGUsXG4gICAgICBpc0FwcFByb2ZpbGVEZWZhdWx0LFxuICAgICAgaXNTaG93R2VuZXJhbFByb2ZpbGU6ICFpc0FwcFByb2ZpbGVEZWZhdWx0LFxuICAgIH0pXG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgY3VycmVudFVzZXIzQm94UHJvZmlsZSxcbiAgICAgIGJveCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChjdXJyZW50VXNlcjNCb3hQcm9maWxlKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgdmVyaWZpZWRHaXRodWIsXG4gICAgICAgIHZlcmlmaWVkVHdpdHRlcixcbiAgICAgICAgdmVyaWZpZWRFbWFpbCxcbiAgICAgICAgZW1vamksXG4gICAgICAgIGltYWdlLFxuICAgICAgICBjb3ZlclBob3RvXG4gICAgICB9ID0gY3VycmVudFVzZXIzQm94UHJvZmlsZTtcblxuICAgICAgY29uc3Qgbm9Qcm9mID0gIXByZXZQcm9wcy5jdXJyZW50VXNlcjNCb3hQcm9maWxlO1xuICAgICAgY29uc3QgcHJldlByb2YgPSBwcmV2UHJvcHMuY3VycmVudFVzZXIzQm94UHJvZmlsZTtcblxuICAgICAgaWYgKChuYW1lICYmIG5vUHJvZikgfHwgbmFtZSAhPT0gcHJldlByb2YubmFtZSkgdGhpcy5zZXRTdGF0ZSh7IG5hbWUgfSk7XG4gICAgICBpZiAoKGVtYWlsICYmIG5vUHJvZikgfHwgZW1haWwgIT09IHByZXZQcm9mLmVtYWlsKSB0aGlzLnNldFN0YXRlKHsgZW1haWwgfSk7XG4gICAgICBpZiAoKGRlc2NyaXB0aW9uICYmIG5vUHJvZikgfHwgZGVzY3JpcHRpb24gIT09IHByZXZQcm9mLmRlc2NyaXB0aW9uKSB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb24gfSk7XG4gICAgICBpZiAoKGVtb2ppICYmIG5vUHJvZikgfHwgZW1vamkgIT09IHByZXZQcm9mLmVtb2ppKSB0aGlzLnNldFN0YXRlKHsgZW1vamkgfSk7XG4gICAgICBpZiAoKGltYWdlICYmIG5vUHJvZikgfHwgaW1hZ2UgIT09IHByZXZQcm9mLmltYWdlKSB0aGlzLnNldFN0YXRlKHsgaW1hZ2UgfSk7XG4gICAgICBpZiAoKGNvdmVyUGhvdG8gJiYgbm9Qcm9mKSB8fCBjb3ZlclBob3RvICE9PSBwcmV2UHJvZi5jb3ZlclBob3RvKSB0aGlzLnNldFN0YXRlKHsgY292ZXJQaG90byB9KTtcbiAgICAgIGlmICgodmVyaWZpZWRHaXRodWIgJiYgbm9Qcm9mKSB8fCB2ZXJpZmllZEdpdGh1YiAhPT0gcHJldlByb2YudmVyaWZpZWRHaXRodWIpIHRoaXMuc2V0U3RhdGUoeyB2ZXJpZmllZEdpdGh1YiB9KTtcbiAgICAgIGlmICgodmVyaWZpZWRUd2l0dGVyICYmIG5vUHJvZikgfHwgdmVyaWZpZWRUd2l0dGVyICE9PSBwcmV2UHJvZi52ZXJpZmllZFR3aXR0ZXIpIHRoaXMuc2V0U3RhdGUoeyB2ZXJpZmllZFR3aXR0ZXIgfSk7XG4gICAgICBpZiAoKHZlcmlmaWVkRW1haWwgJiYgbm9Qcm9mKSB8fCB2ZXJpZmllZEVtYWlsICE9PSBwcmV2UHJvZi52ZXJpZmllZEVtYWlsKSB0aGlzLnNldFN0YXRlKHsgdmVyaWZpZWRFbWFpbCB9KTtcbiAgICB9XG5cbiAgICBpZiAoYm94ICE9PSBwcmV2UHJvcHMuYm94KSB0aGlzLmZldGNoVmVyaWZpZWRGaWVsZHMoKTtcbiAgfVxuXG4gIGZldGNoVmVyaWZpZWRGaWVsZHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBib3ggfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgdmVyaWZpZWRUd2l0dGVyO1xuICAgIGxldCB2ZXJpZmllZEdpdGh1YjtcbiAgICBsZXQgdmVyaWZpZWRFbWFpbDtcblxuICAgIHRyeSB7XG4gICAgICB2ZXJpZmllZFR3aXR0ZXIgPSBhd2FpdCBib3gudmVyaWZpZWQudHdpdHRlcigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHZlcmlmaWVkR2l0aHViID0gYXdhaXQgYm94LnZlcmlmaWVkLmdpdGh1YigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHZlcmlmaWVkRW1haWwgPSBhd2FpdCBib3gudmVyaWZpZWQuZW1haWwoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmVyaWZpZWRUd2l0dGVyOiB2ZXJpZmllZFR3aXR0ZXIgJiYgdmVyaWZpZWRUd2l0dGVyLnVzZXJuYW1lLFxuICAgICAgdmVyaWZpZWRHaXRodWI6IHZlcmlmaWVkR2l0aHViICYmIHZlcmlmaWVkR2l0aHViLnVzZXJuYW1lLFxuICAgICAgdmVyaWZpZWRFbWFpbDogdmVyaWZpZWRFbWFpbCAmJiB2ZXJpZmllZEVtYWlsLmVtYWlsX2FkZHJlc3MsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVGb3JtQ2hhbmdlID0gKGUsIHByb3BlcnR5KSA9PiB0aGlzLnNldFN0YXRlKHsgW3Byb3BlcnR5XTogZS50YXJnZXQudmFsdWUgfSk7XG5cbiAgY2xvc2VGaWxlU2l6ZU1vZGFsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3VsZFNob3dGSWxlU2l6ZU1vZGFsOiBmYWxzZSB9KTtcblxuICBoYW5kbGVTZWxlY3REZWZhdWx0UHJvZmlsZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGlzQXBwUHJvZmlsZURlZmF1bHQsIGlzU2hvd0dlbmVyYWxQcm9maWxlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgc3BhY2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB2YWx1ZSA9ICFpc0FwcFByb2ZpbGVEZWZhdWx0O1xuICAgIGF3YWl0IHNwYWNlLnB1YmxpYy5zZXQoJ2lzQXBwUHJvZmlsZURlZmF1bHQnLCB2YWx1ZSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzQXBwUHJvZmlsZURlZmF1bHQ6IHZhbHVlLFxuICAgICAgaXNTaG93R2VuZXJhbFByb2ZpbGU6ICFpc1Nob3dHZW5lcmFsUHJvZmlsZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlVXBkYXRlUGljID0gKHBob3RvRmlsZSwgZSwgdHlwZSkgPT4ge1xuICAgIGlmIChwaG90b0ZpbGUuc2l6ZSA+PSAyNTAwMDAwKSB7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvdWxkU2hvd0ZJbGVTaXplTW9kYWw6IHRydWUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgd2luZG93LkZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdwYXRoJywgcGhvdG9GaWxlKTtcblxuICAgIGlmICh0eXBlID09PSAnY292ZXJQaG90bycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc0NvdmVyUGljRWRpdGVkOiB0cnVlLFxuICAgICAgICBjb3ZlckJ1ZmZlcjogZm9ybURhdGEsXG4gICAgICAgIHNob3VsZFJlbW92ZUNvdmVyUGhvdG86IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNQaWNFZGl0ZWQ6IHRydWUsXG4gICAgICAgIGJ1ZmZlcjogZm9ybURhdGEsXG4gICAgICAgIHNob3VsZFJlbW92ZUltYWdlOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NwYWNlUHJvZmlsZUNvdmVyUGhvdG8nKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNTcGFjZUNvdmVyUGljRWRpdGVkOiB0cnVlLFxuICAgICAgICBzcGFjZUNvdmVyQnVmZmVyOiBmb3JtRGF0YSxcbiAgICAgICAgc2hvdWxkUmVtb3ZlU3BhY2VDb3ZlclBob3RvOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NwYWNlUHJvZmlsZUltYWdlJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzU3BhY2VQaWNFZGl0ZWQ6IHRydWUsXG4gICAgICAgIHNwYWNlSW1hZ2VCdWZmZXI6IGZvcm1EYXRhLFxuICAgICAgICBzaG91bGRSZW1vdmVTcGFjZVByb2ZpbGVJbWFnZTogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSZW1vdmVQaWN0dXJlID0gKHR5cGUsIGlzQ292ZXIsIGZyb21TcGFjZSkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZUtleSA9IGBzaG91bGRSZW1vdmUke2NhcGl0YWxpemVGaXJzdExldHRlcih0eXBlKX1gO1xuICAgIGlmICh0aGlzLnN0YXRlW3JlbW92ZUtleV0pIHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBmcm9tU3BhY2UgP1xuICAgICAgICB0aGlzLnN0YXRlLm9yaWdpbmFsU3BhY2VQcm9maWxlW2lzQ292ZXIgPyAnY292ZXJQaG90bycgOiAnaW1hZ2UnXVxuICAgICAgICA6IHRoaXMuc3RhdGUub3JpZ2luYWxQcm9maWxlW2lzQ292ZXIgPyAnY292ZXJQaG90bycgOiAnaW1hZ2UnXTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBbcmVtb3ZlS2V5XTogZmFsc2UsXG4gICAgICAgIFt0eXBlXTogb3JpZ2luYWxWYWx1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBbcmVtb3ZlS2V5XTogdHJ1ZSxcbiAgICAgICAgW3R5cGVdOiB1bmRlZmluZWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUFkZEVtb2ppID0gKGVtb2ppLCBpc1NwYWNlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbaXNTcGFjZSA/ICdzcGFjZVByb2ZpbGVFbW9qaScgOiAnZW1vamknXTogZW1vamkubmF0aXZlLFxuICAgICAgaXNTaG93RW1vamk6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU2hvd0Vtb2ppUGlja2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNTaG93RW1vamkgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzU2hvd0Vtb2ppOiAhaXNTaG93RW1vamkgfSk7XG4gIH1cblxuICBmZXRjaFBpYyA9IGJ1ZmZlciA9PiB3aW5kb3cuZmV0Y2goJ2h0dHBzOi8vaXBmcy5pbmZ1cmEuaW86NTAwMS9hcGkvdjAvYWRkJywge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgYm9keTogYnVmZmVyLFxuICB9KTtcblxuICBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9yaWdpbmFsU3BhY2VQcm9maWxlLFxuXG4gICAgICBzcGFjZUNvdmVyQnVmZmVyLFxuICAgICAgc3BhY2VJbWFnZUJ1ZmZlcixcbiAgICAgIGlzUGljRWRpdGVkLFxuICAgICAgaXNTcGFjZVBpY0VkaXRlZCxcbiAgICAgIGlzQ292ZXJQaWNFZGl0ZWQsXG4gICAgICBpc1NwYWNlQ292ZXJQaWNFZGl0ZWQsXG4gICAgICBzaG91bGRSZW1vdmVJbWFnZSxcbiAgICAgIHNob3VsZFJlbW92ZUNvdmVyUGhvdG8sXG4gICAgICBzaG91bGRSZW1vdmVTcGFjZUNvdmVyUGhvdG8sXG4gICAgICBzaG91bGRSZW1vdmVTcGFjZVByb2ZpbGVJbWFnZSxcbiAgICAgIGJ1ZmZlcixcbiAgICAgIGNvdmVyQnVmZmVyLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3Qge1xuICAgICAgYm94LFxuICAgICAgc3BhY2UsXG4gICAgICBjdXN0b21GaWVsZHMsXG4gICAgICBjdXJyZW50VXNlckFkZHIsXG4gICAgICByZWRpcmVjdEZuXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFib3gucHVibGljKSByZXR1cm47XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaXNTYXZlTG9hZGluZzogdHJ1ZSB9KTtcblxuICAgIGF3YWl0IHNhdmVCYXNpY1RleHRGaWVsZHMoYm94LCBzcGFjZSwgdGhpcy5zdGF0ZSwgJ29yaWdpbmFsUHJvZmlsZScpO1xuICAgIGF3YWl0IHNhdmVCYXNpY1RleHRGaWVsZHMoYm94LCBzcGFjZSwgdGhpcy5zdGF0ZSwgJ29yaWdpbmFsU3BhY2VQcm9maWxlJyk7XG5cbiAgICAvLyBzYXZlIHByb2ZpbGUgcGljdHVyZVxuICAgIGNvbnN0IGZldGNoID0gaXNQaWNFZGl0ZWQgJiYgYXdhaXQgdGhpcy5mZXRjaFBpYyhidWZmZXIpO1xuICAgIGNvbnN0IHJldHVybmVkRGF0YSA9IGlzUGljRWRpdGVkICYmIGF3YWl0IGZldGNoLmpzb24oKTtcbiAgICBpZiAoaXNQaWNFZGl0ZWQpIHtcbiAgICAgIGNvbnN0IGltYWdlT2JqZWN0ID0gZm9ybWF0SXBmc0ltYWdlT2JqZWN0KHJldHVybmVkRGF0YSk7XG4gICAgICBhd2FpdCBib3gucHVibGljLnNldCgnaW1hZ2UnLCBpbWFnZU9iamVjdCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IGltYWdlT2JqZWN0LCBpc1BpY0VkaXRlZDogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmV0Y2hDb3ZlciA9IGlzQ292ZXJQaWNFZGl0ZWQgJiYgYXdhaXQgdGhpcy5mZXRjaFBpYyhjb3ZlckJ1ZmZlcik7XG4gICAgY29uc3QgcmV0dXJuZWRDb3ZlckRhdGEgPSBpc0NvdmVyUGljRWRpdGVkICYmIGF3YWl0IGZldGNoQ292ZXIuanNvbigpO1xuICAgIGlmIChpc0NvdmVyUGljRWRpdGVkKSB7XG4gICAgICBjb25zdCBpbWFnZU9iamVjdCA9IGZvcm1hdElwZnNJbWFnZU9iamVjdChyZXR1cm5lZENvdmVyRGF0YSk7XG4gICAgICBhd2FpdCBib3gucHVibGljLnNldCgnY292ZXJQaG90bycsIGltYWdlT2JqZWN0KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3ZlclBob3RvOiBpbWFnZU9iamVjdCwgaXNDb3ZlclBpY0VkaXRlZDogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmV0Y2hTcGFjZUltYWdlID0gaXNTcGFjZVBpY0VkaXRlZCAmJiBhd2FpdCB0aGlzLmZldGNoUGljKHNwYWNlSW1hZ2VCdWZmZXIpO1xuICAgIGNvbnN0IHJldHVybmVkU3BhY2VJbWFnZURhdGEgPSBpc1NwYWNlUGljRWRpdGVkICYmIGF3YWl0IGZldGNoU3BhY2VJbWFnZS5qc29uKCk7XG4gICAgaWYgKGlzU3BhY2VQaWNFZGl0ZWQpIHtcbiAgICAgIGNvbnN0IGltYWdlT2JqZWN0ID0gZm9ybWF0SXBmc0ltYWdlT2JqZWN0KHJldHVybmVkU3BhY2VJbWFnZURhdGEpO1xuICAgICAgYXdhaXQgc3BhY2UucHVibGljLnNldCgnaW1hZ2UnLCBpbWFnZU9iamVjdCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3BhY2VQcm9maWxlSW1hZ2U6IGltYWdlT2JqZWN0LCBpc1NwYWNlUGljRWRpdGVkOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmZXRjaFNwYWNlQ292ZXIgPSBpc1NwYWNlQ292ZXJQaWNFZGl0ZWQgJiYgYXdhaXQgdGhpcy5mZXRjaFBpYyhzcGFjZUNvdmVyQnVmZmVyKTtcbiAgICBjb25zdCByZXR1cm5lZFNwYWNlQ292ZXJEYXRhID0gaXNTcGFjZUNvdmVyUGljRWRpdGVkICYmIGF3YWl0IGZldGNoU3BhY2VDb3Zlci5qc29uKCk7XG4gICAgaWYgKGlzU3BhY2VDb3ZlclBpY0VkaXRlZCkge1xuICAgICAgY29uc3QgaW1hZ2VPYmplY3QgPSBmb3JtYXRJcGZzSW1hZ2VPYmplY3QocmV0dXJuZWRTcGFjZUNvdmVyRGF0YSk7XG4gICAgICBhd2FpdCBzcGFjZS5wdWJsaWMuc2V0KCdjb3ZlclBob3RvJywgaW1hZ2VPYmplY3QpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNwYWNlUHJvZmlsZUNvdmVyUGhvdG86IGltYWdlT2JqZWN0LCBpc1NwYWNlQ292ZXJQaWNFZGl0ZWQ6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRSZW1vdmVJbWFnZSkgYXdhaXQgYm94LnB1YmxpYy5yZW1vdmUoJ2ltYWdlJyk7XG4gICAgaWYgKHNob3VsZFJlbW92ZUNvdmVyUGhvdG8pIGF3YWl0IGJveC5wdWJsaWMucmVtb3ZlKCdjb3ZlclBob3RvJyk7XG4gICAgaWYgKHNob3VsZFJlbW92ZVNwYWNlUHJvZmlsZUltYWdlKSBhd2FpdCBzcGFjZS5wdWJsaWMucmVtb3ZlKCdpbWFnZScpO1xuICAgIGlmIChzaG91bGRSZW1vdmVTcGFjZUNvdmVyUGhvdG8pIGF3YWl0IHNwYWNlLnB1YmxpYy5yZW1vdmUoJ2NvdmVyUGhvdG8nKTtcblxuICAgIGF3YWl0IHNhdmVDdXN0b21GaWVsZHMoc3BhY2UsIGN1c3RvbUZpZWxkcywgdGhpcy5zdGF0ZSwgb3JpZ2luYWxTcGFjZVByb2ZpbGUpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzU2F2ZUxvYWRpbmc6IGZhbHNlIH0pO1xuXG4gICAgaWYgKHJlZGlyZWN0Rm4pIHtcbiAgICAgIHJlZGlyZWN0Rm4oY3VycmVudFVzZXJBZGRyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzU2F2ZVN1Y2Nlc3NmdWw6IHRydWUgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzU2F2ZVN1Y2Nlc3NmdWw6IGZhbHNlIH0pO1xuICAgICAgfSwgMTUwMCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSGFzVXBkYXRlZCA9ICgpID0+IHtcbiAgICAvLyBjaGVjayBnZW5lcmFsIGJhc2ljIHByb2ZpbGVcbiAgICAvLyBjaGVjayBzcGFjZSBiYXNpYyBwcm9maWxlXG4gICAgLy8gY2hlY2sgZ2VuZXJhbCBpbWFnZXNcbiAgICAvLyBjaGVjayBzcGFjZSBpbWFnZXNcbiAgICAvLyBjaGVjayBjdXN0b20gZmllbGRzXG4gIH1cblxuICBoYW5kbGVTaG93T3B0aW9uc01lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3B0aW9ucyB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd09wdGlvbnM6ICFzaG93T3B0aW9ucyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW50VXNlckFkZHIsXG4gICAgICByZWRpcmVjdEZuLFxuICAgICAgY3VzdG9tRmllbGRzLFxuICAgICAgc3BhY2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7XG4gICAgICBuYW1lLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBlbW9qaSxcbiAgICAgIHNob3VsZFJlbW92ZUltYWdlLFxuICAgICAgc2hvdWxkUmVtb3ZlQ292ZXJQaG90byxcbiAgICAgIGlzU2F2ZUxvYWRpbmcsXG4gICAgICBzaG91bGRTaG93RklsZVNpemVNb2RhbCxcbiAgICAgIGlzU2hvd0Vtb2ppLFxuICAgICAgc2hvd09wdGlvbnMsXG4gICAgICBpbWFnZSxcbiAgICAgIGNvdmVyUGhvdG8sXG4gICAgICB2ZXJpZmllZFR3aXR0ZXIsXG4gICAgICB2ZXJpZmllZEdpdGh1YixcbiAgICAgIHZlcmlmaWVkRW1haWwsXG4gICAgICBpc1Nob3dHZW5lcmFsUHJvZmlsZSxcbiAgICAgIGlzQXBwUHJvZmlsZURlZmF1bHQsXG4gICAgICBpc1NhdmVTdWNjZXNzZnVsLFxuXG4gICAgICBzcGFjZVByb2ZpbGVOYW1lLFxuICAgICAgc3BhY2VQcm9maWxlRGVzY3JpcHRpb24sXG4gICAgICBzcGFjZVByb2ZpbGVFbW9qaSxcbiAgICAgIHNwYWNlUHJvZmlsZUNvdmVyUGhvdG8sXG4gICAgICBzcGFjZVByb2ZpbGVJbWFnZSxcbiAgICAgIHNob3VsZFJlbW92ZVNwYWNlQ292ZXJQaG90byxcbiAgICAgIHNob3VsZFJlbW92ZVNwYWNlUHJvZmlsZUltYWdlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9wYWdlXCI+XG4gICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cFxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwiYXBwX21vZGFsc1wiXG4gICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17MzAwfVxuICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezMwMH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG91bGRTaG93RklsZVNpemVNb2RhbFxuICAgICAgICAgICAgJiYgPEZpbGVTaXplTW9kYWwgc2hvdz17c2hvdWxkU2hvd0ZJbGVTaXplTW9kYWx9IGNsb3NlRmlsZVNpemVNb2RhbD17dGhpcy5jbG9zZUZpbGVTaXplTW9kYWx9IC8+fVxuXG4gICAgICAgICAge3Nob3VsZFNob3dGSWxlU2l6ZU1vZGFsICYmIDxNb2RhbEJhY2tncm91bmQgLz59XG4gICAgICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXA+XG5cbiAgICAgICAgPEdlbmVyYWxQcm9maWxlXG4gICAgICAgICAgaXNTaG93R2VuZXJhbFByb2ZpbGU9e2lzU2hvd0dlbmVyYWxQcm9maWxlfVxuICAgICAgICAgIGNvdmVyUGhvdG89e2NvdmVyUGhvdG99XG4gICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgIGVtb2ppPXtlbW9qaX1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHNob3VsZFJlbW92ZUltYWdlPXtzaG91bGRSZW1vdmVJbWFnZX1cbiAgICAgICAgICBzaG91bGRSZW1vdmVDb3ZlclBob3RvPXtzaG91bGRSZW1vdmVDb3ZlclBob3RvfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICBjdXJyZW50VXNlckFkZHI9e2N1cnJlbnRVc2VyQWRkcn1cbiAgICAgICAgICBpc1Nob3dFbW9qaT17aXNTaG93RW1vaml9XG4gICAgICAgICAgdmVyaWZpZWRUd2l0dGVyPXt2ZXJpZmllZFR3aXR0ZXJ9XG4gICAgICAgICAgdmVyaWZpZWRHaXRodWI9e3ZlcmlmaWVkR2l0aHVifVxuICAgICAgICAgIHZlcmlmaWVkRW1haWw9e3ZlcmlmaWVkRW1haWx9XG4gICAgICAgICAgcmVkaXJlY3RGbj17cmVkaXJlY3RGbn1cbiAgICAgICAgICBzcGFjZVByb2ZpbGVJbWFnZT17c3BhY2VQcm9maWxlSW1hZ2V9XG4gICAgICAgICAgY3VzdG9tRmllbGRzPXtjdXN0b21GaWVsZHN9XG4gICAgICAgICAgc3BhY2U9e3NwYWNlfVxuICAgICAgICAgIGlzQXBwUHJvZmlsZURlZmF1bHQ9e2lzQXBwUHJvZmlsZURlZmF1bHR9XG4gICAgICAgICAgaXNTYXZlTG9hZGluZz17aXNTYXZlTG9hZGluZ31cbiAgICAgICAgICBpc1NhdmVTdWNjZXNzZnVsPXtpc1NhdmVTdWNjZXNzZnVsfVxuICAgICAgICAgIHNob3dPcHRpb25zPXtzaG93T3B0aW9uc31cblxuICAgICAgICAgIGhhbmRsZVJlbW92ZVBpY3R1cmU9e3RoaXMuaGFuZGxlUmVtb3ZlUGljdHVyZX1cbiAgICAgICAgICBjb3ZlclVwbG9hZD17dGhpcy5jb3ZlclVwbG9hZH1cbiAgICAgICAgICBoYW5kbGVVcGRhdGVQaWM9e3RoaXMuaGFuZGxlVXBkYXRlUGljfVxuICAgICAgICAgIGZpbGVVcGxvYWQ9e3RoaXMuZmlsZVVwbG9hZH1cbiAgICAgICAgICBoYW5kbGVGb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9XG4gICAgICAgICAgaGFuZGxlQWRkRW1vamk9e3RoaXMuaGFuZGxlQWRkRW1vaml9XG4gICAgICAgICAgaGFuZGxlU2hvd0Vtb2ppUGlja2VyPXt0aGlzLmhhbmRsZVNob3dFbW9qaVBpY2tlcn1cbiAgICAgICAgICBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICAgIGhhbmRsZVNlbGVjdERlZmF1bHRQcm9maWxlPXt0aGlzLmhhbmRsZVNlbGVjdERlZmF1bHRQcm9maWxlfVxuICAgICAgICAgIGhhbmRsZVNob3dPcHRpb25zTWVudT17dGhpcy5oYW5kbGVTaG93T3B0aW9uc01lbnV9XG5cbiAgICAgICAgICB7Li4udGhpcy5zdGF0ZX1cbiAgICAgICAgLz5cblxuICAgICAgICA8U3BhY2VQcm9maWxlXG4gICAgICAgICAgaXNTaG93R2VuZXJhbFByb2ZpbGU9e2lzU2hvd0dlbmVyYWxQcm9maWxlfVxuXG4gICAgICAgICAgc3BhY2VQcm9maWxlTmFtZT17c3BhY2VQcm9maWxlTmFtZX1cbiAgICAgICAgICBzcGFjZVByb2ZpbGVEZXNjcmlwdGlvbj17c3BhY2VQcm9maWxlRGVzY3JpcHRpb259XG4gICAgICAgICAgc3BhY2VQcm9maWxlRW1vamk9e3NwYWNlUHJvZmlsZUVtb2ppfVxuXG4gICAgICAgICAgc3BhY2VQcm9maWxlQ292ZXJQaG90bz17c3BhY2VQcm9maWxlQ292ZXJQaG90b31cbiAgICAgICAgICBzcGFjZVByb2ZpbGVJbWFnZT17c3BhY2VQcm9maWxlSW1hZ2V9XG5cbiAgICAgICAgICBzaG91bGRSZW1vdmVTcGFjZUNvdmVyUGhvdG89e3Nob3VsZFJlbW92ZVNwYWNlQ292ZXJQaG90b31cbiAgICAgICAgICBzaG91bGRSZW1vdmVTcGFjZVByb2ZpbGVJbWFnZT17c2hvdWxkUmVtb3ZlU3BhY2VQcm9maWxlSW1hZ2V9XG4gICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgIHNob3dPcHRpb25zPXtzaG93T3B0aW9uc31cblxuICAgICAgICAgIHNwYWNlPXtzcGFjZX1cbiAgICAgICAgICBpc0FwcFByb2ZpbGVEZWZhdWx0PXtpc0FwcFByb2ZpbGVEZWZhdWx0fVxuICAgICAgICAgIGlzU2F2ZVN1Y2Nlc3NmdWw9e2lzU2F2ZVN1Y2Nlc3NmdWx9XG5cbiAgICAgICAgICBjdXJyZW50VXNlckFkZHI9e2N1cnJlbnRVc2VyQWRkcn1cbiAgICAgICAgICBpc1Nob3dFbW9qaT17aXNTaG93RW1vaml9XG4gICAgICAgICAgaXNTYXZlTG9hZGluZz17aXNTYXZlTG9hZGluZ31cbiAgICAgICAgICByZWRpcmVjdEZuPXtyZWRpcmVjdEZufVxuICAgICAgICAgIGN1c3RvbUZpZWxkcz17Y3VzdG9tRmllbGRzfVxuICAgICAgICAgIGhhbmRsZVJlbW92ZVBpY3R1cmU9e3RoaXMuaGFuZGxlUmVtb3ZlUGljdHVyZX1cbiAgICAgICAgICBjb3ZlclVwbG9hZD17dGhpcy5jb3ZlclVwbG9hZH1cbiAgICAgICAgICBoYW5kbGVVcGRhdGVQaWM9e3RoaXMuaGFuZGxlVXBkYXRlUGljfVxuICAgICAgICAgIGZpbGVVcGxvYWQ9e3RoaXMuZmlsZVVwbG9hZH1cbiAgICAgICAgICBoYW5kbGVGb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9XG4gICAgICAgICAgaGFuZGxlQWRkRW1vamk9e3RoaXMuaGFuZGxlQWRkRW1vaml9XG4gICAgICAgICAgaGFuZGxlU2hvd0Vtb2ppUGlja2VyPXt0aGlzLmhhbmRsZVNob3dFbW9qaVBpY2tlcn1cbiAgICAgICAgICBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICAgIGhhbmRsZVNlbGVjdERlZmF1bHRQcm9maWxlPXt0aGlzLmhhbmRsZVNlbGVjdERlZmF1bHRQcm9maWxlfVxuICAgICAgICAgIGhhbmRsZVNob3dPcHRpb25zTWVudT17dGhpcy5oYW5kbGVTaG93T3B0aW9uc01lbnV9XG5cbiAgICAgICAgICB7Li4udGhpcy5zdGF0ZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2ID5cbiAgICApO1xuICB9XG59XG5cbkVkaXRQcm9maWxlLnByb3BUeXBlcyA9IHtcbiAgYm94OiBQcm9wVHlwZXMub2JqZWN0LFxuICBhbGxEYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzcGFjZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgY3VycmVudFVzZXIzQm94UHJvZmlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgY3VzdG9tRmllbGRzOiBQcm9wVHlwZXMuYXJyYXksXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZlcmlmaWVkR2l0aHViOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2ZXJpZmllZFR3aXR0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZlcmlmaWVkRW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVtb2ppOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGN1cnJlbnRVc2VyQWRkcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW1hZ2U6IFByb3BUeXBlcy5hcnJheSxcbiAgY292ZXJQaG90bzogUHJvcFR5cGVzLmFycmF5LFxuICBjb3B5U3VjY2Vzc2Z1bDogUHJvcFR5cGVzLmJvb2wsXG4gIHJlZGlyZWN0Rm46IFByb3BUeXBlcy5mdW5jLFxufTtcblxuRWRpdFByb2ZpbGUuZGVmYXVsdFByb3BzID0ge1xuICBib3g6IHt9LFxuICBzcGFjZToge30sXG4gIGFsbERhdGE6IHt9LFxuICBjdXJyZW50VXNlcjNCb3hQcm9maWxlOiBudWxsLFxuICB2ZXJpZmllZEVtYWlsOiAnJyxcbiAgdmVyaWZpZWRHaXRodWI6ICcnLFxuICB2ZXJpZmllZFR3aXR0ZXI6ICcnLFxuICBuYW1lOiAnJyxcbiAgZGVzY3JpcHRpb246ICcnLFxuICBlbW9qaTogJycsXG4gIGVtYWlsOiAnJyxcbiAgY3VycmVudFVzZXJBZGRyOiAnJyxcbiAgaW1hZ2U6IFtdLFxuICBjb3ZlclBob3RvOiBbXSxcbiAgY3VzdG9tRmllbGRzOiBbXSxcbiAgY29weVN1Y2Nlc3NmdWw6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdFByb2ZpbGUiXX0=