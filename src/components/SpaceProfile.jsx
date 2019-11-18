import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBlockie from 'ethereum-blockies-base64';
import { Picker } from 'emoji-mart';
import SVG from 'react-inlinesvg';

import TwitterIcon from '../assets/TwitterIcon.svg';
import GithubIcon from '../assets/GithubIcon.svg';
import EmailIcon from '../assets/EmailIcon.svg';
import InfoIcon from '../assets/InfoIcon.svg';

class GeneralProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {
      coverPhoto,
      image,
      currentUserAddr,
      emoji,
      description,
      isShowEmoji,
      isSaveDisabled,
      cancelFunc,
      name,
      handleRemovePicture,
      handleUpdatePic,
      handleAddEmoji,
      handleFormChange,
      shouldRemoveCoverPic,
      shouldRemoveUserPic,
      handleSwitchProfile,
      handleShowEmojiPicker,
      handleSubmit,
    } = this.props;

    return (
      <div className="edit">
        <div className="edit_form">

          <div className="edit_profile_section">
            <div className="edit_profile_canvas">
              <div className="edit_profile_editCanvas_wrapper">
                <button
                  className="removeCoverPic removeButton"
                  onClick={() => handleRemovePicture('SpaceCover')}
                  disabled={(coverPhoto && coverPhoto.length > 0 || (this.coverUpload && this.coverUpload.files && this.coverUpload.files[0])) ? false : true}
                  text="remove"
                  type="button"
                >
                  &#10005;
                  </button>
              </div>

              <div className="coverWrapper">
                <label htmlFor="coverInput" className="edit_profile_canvas_overlay">
                  <input
                    id="coverInput"
                    type="file"
                    name="coverPic"
                    className="light coverInput"
                    accept="image/*"
                    onChange={e => handleUpdatePic(e.target.files[0], e, true)}
                    ref={ref => this.coverUpload = ref}
                  />
                  <p>Change picture</p>
                </label>

                {(((coverPhoto && coverPhoto.length > 0 && coverPhoto[0].contentUrl) || (this.coverUpload && this.coverUpload.files && this.coverUpload.files[0])) && !shouldRemoveCoverPic)
                  ? (
                    <img
                      className="coverPic"
                      alt="profile"
                      src={(this.coverUpload && this.coverUpload.files && this.coverUpload.files[0])
                        ? URL.createObjectURL(this.coverUpload.files[0])
                        : `https://ipfs.infura.io/ipfs/${coverPhoto[0].contentUrl['/']}`}
                    />
                  ) : (
                    <div className="coverPic" />
                  )}
              </div>
            </div>
          </div>

          <div className="edit_profile_section">
            <div className="edit_profile_picAndAddress">
              <div className="edit_userPicture">
                <label htmlFor="fileInput" className="chooseFile">
                  <input
                    id="fileInput"
                    type="file"
                    name="pic"
                    className="light fileInput"
                    accept="image/*"
                    onChange={e => handleUpdatePic(e.target.files[0], e)}
                    ref={ref => this.fileUpload = ref}
                  />

                  <button
                    className="removeButton removePic"
                    onClick={() => handleRemovePicture('User')}
                    disabled={((image && image.length > 0 && image[0].contentUrl) || (this.fileUpload && this.fileUpload.files && this.fileUpload.files[0])) ? false : true}
                    text="remove"
                    type="button"
                  >
                    &#10005;
                  </button>

                  {(((image && image.length > 0 && image[0].contentUrl) || (this.fileUpload && this.fileUpload.files && this.fileUpload.files[0])) && !shouldRemoveUserPic)
                    ? (
                      <div className="profPic_div">
                        <div className="profPic_div_overlay">
                          <p>Change picture</p>
                        </div>
                        <img
                          className="profPic clearProfPic"
                          src={(this.fileUpload && this.fileUpload.files && this.fileUpload.files[0])
                            ? URL.createObjectURL(this.fileUpload.files[0])
                            : `https://ipfs.infura.io/ipfs/${image[0].contentUrl['/']}`}
                          alt="profile"
                        />
                      </div>
                    ) : (
                      <div className="profPic_div">
                        <div className="profPic_div_overlay">
                          <p>Change picture</p>
                        </div>
                        {currentUserAddr ? (
                          <img
                            className="profPic"
                            src={makeBlockie(currentUserAddr)}
                            alt="profile"
                          />
                        ) : <div className="profPic" />}
                      </div>
                    )}
                </label>

              </div>

              <div
                className="edit_profile_switch"
                onClick={handleSwitchProfile}
              >
                <div className="edit_profile_switch_pic" />
                {/* <img src="" className="" alt=""/> */}
                <p className="edit_profile_switch_text">SWITCH PROFILE</p>
              </div>
            </div>

          </div>

          <div className="edit_profile_section">

            <div className="edit_profile_info">
              <div className="edit_profile_fields">
                <div className="edit_info">

                  <div className="edit_profile_fields_entry noMargin">
                    <div className="edit_profile_fields_entry_name">
                      <div className="edit_profile_keyContainer currentAddress">
                        <p>SPACE PROFILE</p>
                      </div>
                      <p title={currentUserAddr} className="edit_profile_address">
                        {currentUserAddr}
                      </p>
                    </div>
                  </div>

                  <div className="edit_profile_fields_entry nameAndEmoji">
                    <div className="edit_profile_fields_entry_name">
                      <div className="edit_profile_keyContainer">
                        <p>NAME</p>
                      </div>
                      <input
                        name="name"
                        type="text"
                        value={name}
                        className="edit_profile_value nameField"
                        onChange={e => handleFormChange(e, 'spaceProfileName')}
                      />
                    </div>

                    <div className="edit_profile_fields_entry_emoji">
                      <div className="edit_profile_keyContainer">
                        <p className="edit_profile_key">EMOJI</p>
                      </div>

                      {isShowEmoji
                        && (
                          <div
                            className="edit_profile_value_emojiMenu"
                          >
                            <Picker
                              onSelect={selectedEmoji => handleAddEmoji(selectedEmoji, true)}
                              title="Pick your spirit emoji"
                            />
                          </div>)
                      }

                      {isShowEmoji
                        && <div className='onClickOutside' onClick={handleShowEmojiPicker} />}

                      <div
                        className="edit_profile_value--spirit"
                        onClick={handleShowEmojiPicker}
                      >
                        {
                          emoji
                            ? (
                              <span className="edit_profile_value--spirit_character" role="img">
                                {emoji.code ? emoji.code : emoji}
                              </span>
                            )
                            : (
                              <span className="edit_profile_value--spirit_character" role="img" aria-label="unicorn">
                                🦄
                              </span>
                            )
                        }
                      </div>
                    </div>
                  </div>

                  <div className="edit_profile_verifiedFields" />

                  <div className="edit_profile_fields_entry">
                    <div className="edit_profile_keyContainer">
                      <p className="edit_profile_key">DESCRIPTION</p>
                    </div>
                    <textarea
                      name="description"
                      type="text"
                      className="edit_profile_value--description"
                      value={description}
                      onChange={e => handleFormChange(e, 'spaceProfileDescription')}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="edit_formControls">
            <div className="edit_formControls_content">
              <button
                type="submit"
                disabled={isSaveDisabled}
                className="edit_formControls_content_save"
                onClick={
                  (e) => {
                    this.setState({ isSaveDisabled: true }, () => handleSubmit(e, true));
                  }}
              >
                Save
                </button>

              {cancelFunc && (
                <button
                  className="edit_cancel"
                  onClick={() => cancelFunc(currentUserAddr)}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GeneralProfile.propTypes = {
  box: PropTypes.object,
  allData: PropTypes.object,
  currentUser3BoxProfile: PropTypes.object,
  list: PropTypes.array,
  name: PropTypes.string,
  spaceName: PropTypes.string,
  verifiedGithub: PropTypes.string,
  verifiedTwitter: PropTypes.string,
  verifiedEmail: PropTypes.string,
  did: PropTypes.string,
  emoji: PropTypes.string,
  description: PropTypes.string,
  email: PropTypes.string,
  currentUserAddr: PropTypes.string,
  image: PropTypes.array,
  coverPhoto: PropTypes.array,
  isFetchingThreeBox: PropTypes.bool,
  copySuccessful: PropTypes.bool,
  isShowEmoji: PropTypes.bool,
  isSaveDisabled: PropTypes.bool,
  shouldRemoveCoverPic: PropTypes.bool,
  shouldRemoveUserPic: PropTypes.bool,
  cancelFunc: PropTypes.func,
  handleRemovePicture: PropTypes.func.isRequired,
  handleUpdatePic: PropTypes.func.isRequired,
  handleAddEmoji: PropTypes.func.isRequired,
  handleFormChange: PropTypes.func.isRequired,
  handleSwitchProfile: PropTypes.func.isRequired,
  handleShowEmojiPicker: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

GeneralProfile.defaultProps = {
  box: {},
  allData: {},
  currentUser3BoxProfile: {},
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
  isFetchingThreeBox: false,
  copySuccessful: false,
};

export default GeneralProfile;