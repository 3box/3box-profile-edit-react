import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBlockie from 'ethereum-blockies-base64';
import { Picker } from 'emoji-mart';
import SVG from 'react-inlinesvg';

import ProfileField from './ProfileField';
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
      verifiedTwitter,
      verifiedGithub,
      verifiedEmail,
      isShowEmoji,
      isSaveDisabled,
      cancelFunc,
      name,
      handleRemovePicture,
      handleUpdatePic,
      handleAddEmoji,
      handleFormChange,
      shouldRemoveCoverPhoto,
      shouldRemoveImage,
      handleSwitchProfile,
      handleShowEmojiPicker,
      spaceProfileImage,
      handleSubmit,
      additionalFields,
    } = this.props;

    return (
      <div className="edit">
        <div className="edit_form">

          <div className="edit_profile_section">
            <div className="edit_profile_canvas">
              <div className="edit_profile_editCanvas_wrapper">
                <button
                  className="removeCoverPic removeButton"
                  onClick={() => handleRemovePicture('coverPhoto')}
                  disabled={(!!coverPhoto.length || (this.coverUpload && !!this.coverUpload.files.length)) ? false : true}
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
                    onChange={e => handleUpdatePic(e.target.files[0], e, 'coverPhoto')}
                    ref={ref => this.coverUpload = ref}
                  />
                  <p>Change picture</p>
                </label>

                {((!!coverPhoto.length || (this.coverUpload && !!this.coverUpload.files.length)) && !shouldRemoveCoverPhoto)
                  ? (
                    <img
                      className="coverPic"
                      alt="profile"
                      src={(this.coverUpload && !!this.coverUpload.files.length)
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
                    onChange={e => handleUpdatePic(e.target.files[0], e, 'image')}
                    ref={ref => this.fileUpload = ref}
                  />

                  <button
                    className="removeButton removePic"
                    onClick={() => handleRemovePicture('image')}
                    disabled={((image && image.length > 0 && image[0].contentUrl) || (this.fileUpload && this.fileUpload.files && this.fileUpload.files[0])) ? false : true}
                    text="remove"
                    type="button"
                  >
                    &#10005;
                  </button>

                  {((!!image.length || (this.fileUpload && !!this.fileUpload.files.length)) && !shouldRemoveImage)
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
                {spaceProfileImage ? <img src={`https://ipfs.infura.io/ipfs/${spaceProfileImage[0].contentUrl['/']}`} className="edit_profile_switch_pic" alt="Other profile" />
                  : <div className="edit_profile_switch_pic" />}
                <p className="edit_profile_switch_text">SWITCH PROFILE</p>
              </div>
            </div>

          </div>

          <div className="edit_profile_section">
            <div className="edit_profile_info">

              <div className="edit_profile_fields_entry noMargin">
                <div className="edit_profile_fields_entry_name">
                  <div className="edit_profile_keyContainer currentAddress">
                    <p className="edit_profile_keyContainer_currentAddress">
                      GENERAL PROFILE
                        </p>

                    <div className="edit_profile_verifiedFields_info infoIcon">
                      <SVG src={InfoIcon} className="edit_profile_verifiedFields_icons" alt="Info" />
                      <div className="edit_profile_verifiedFields_hover">
                        <span className="edit_profile_verifiedFields_info_text">
                          Data here is accessible to all dApps using your general 3Box profile
                            </span>
                      </div>
                    </div>
                  </div>
                  <p title={currentUserAddr} className="edit_profile_address">
                    {currentUserAddr}
                  </p>
                </div>
              </div>

              <div className="edit_profile_fields_entry nameAndEmoji">
                <div className="edit_profile_fields_entry_name">
                  <div className="edit_profile_keyContainer">
                    <p className="edit_profile_keyContainer_currentAddress">
                      NAME
                        </p>
                  </div>
                  <input
                    name="name"
                    type="text"
                    value={name}
                    className="edit_profile_value nameField"
                    onChange={e => handleFormChange(e, 'name')}
                  />
                </div>

                <div className="edit_profile_fields_entry_emoji">
                  <div className="edit_profile_keyContainer">
                    <p className="edit_profile_keyContainer_currentAddress">
                      EMOJI
                        </p>
                  </div>

                  {isShowEmoji
                    && (
                      <div
                        className="edit_profile_value_emojiMenu"
                      >
                        <Picker
                          onSelect={selectedEmoji => handleAddEmoji(selectedEmoji)}
                          title="Pick your spirit emoji"
                        />
                      </div>)
                  }

                  {isShowEmoji && <div className='onClickOutside' onClick={handleShowEmojiPicker} />}

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

              <div className="edit_profile_verifiedFields">
                {verifiedTwitter && (
                  <div className="edit_profile_verifiedFields_fields">
                    <SVG src={TwitterIcon} className="edit_profile_verifiedFields_icons" alt="Verified Twitter" />
                    <p>
                      {verifiedTwitter}
                    </p>
                  </div>
                )}

                {verifiedGithub && (
                  <div className="edit_profile_verifiedFields_fields">
                    <SVG src={GithubIcon} className="edit_profile_verifiedFields_icons" alt="Verified Github" />
                    <p>
                      {verifiedGithub}
                    </p>
                  </div>
                )}

                {verifiedEmail && (
                  <div className="edit_profile_verifiedFields_fields">
                    <SVG src={EmailIcon} className="edit_profile_verifiedFields_icons email" alt="Verified Email" />
                    <p>
                      {verifiedEmail}
                    </p>
                  </div>
                )}

                {(verifiedTwitter || verifiedGithub || verifiedEmail) && (
                  <div className="edit_profile_verifiedFields_info infoIcon">
                    <SVG src={InfoIcon} className="edit_profile_verifiedFields_icons" alt="Info" />
                    <div className="edit_profile_verifiedFields_hover">
                      <span className="edit_profile_verifiedFields_info_text">
                        Add or edit verified fields at
                              <a
                          href={`https://3box.io/${currentUserAddr}/edit`}
                          className="edit_profile_verifiedFields_info_text_link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          3Box.io
                              </a>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="edit_profile_fields_entry">
                <div className="edit_profile_keyContainer">
                  <p className="edit_profile_key">DESCRIPTION</p>
                </div>
                <textarea
                  name="description"
                  type="text"
                  className="edit_profile_value--description"
                  value={description}
                  onChange={e => handleFormChange(e, 'description')}
                />
              </div>
            </div>
          </div>

          {!!additionalFields.length && (
            <div className="edit_profile_section">
              <div className="edit_profile_info">
                {additionalFields.map(entry => (
                  <ProfileField
                    customField={entry}
                    handleFormChange={handleFormChange}
                    key={entry.key}
                    {...this.props}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="edit_formControls">
            <div className="edit_formControls_content">
              <button
                type="submit"
                disabled={isSaveDisabled}
                className="edit_formControls_content_save"
                onClick={
                  (e) => {
                    this.setState({ isSaveDisabled: true }, () => handleSubmit(e));
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
  additionalFields: PropTypes.array,
  spaceProfileImage: PropTypes.array,
  coverPhoto: PropTypes.array,
  isFetchingThreeBox: PropTypes.bool,
  copySuccessful: PropTypes.bool,
  isShowEmoji: PropTypes.bool,
  isSaveDisabled: PropTypes.bool,
  shouldRemoveCoverPhoto: PropTypes.bool,
  shouldRemoveImage: PropTypes.bool,
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
  additionalFields: [],
  isFetchingThreeBox: false,
  copySuccessful: false,
};

export default GeneralProfile;