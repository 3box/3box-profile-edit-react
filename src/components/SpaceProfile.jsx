import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBlockie from 'ethereum-blockies-base64';
import { Picker } from 'emoji-mart';
import SVG from 'react-inlinesvg';

import ProfileField from './ProfileField';
import EditOptions from './EditOptions';
import InfoIcon from '../assets/InfoIcon.svg';
import { FormControls } from './ProfileComponents';

class SpaceProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {
      spaceProfileName,
      spaceProfileCoverPhoto,
      image,
      spaceProfileImage,
      currentUserAddr,
      spaceProfileEmoji,
      spaceProfileDescription,
      isShowEmoji,
      cancelFunc,
      handleRemovePicture,
      handleUpdatePic,
      handleAddEmoji,
      handleFormChange,
      shouldRemoveSpaceProfileImage,
      shouldRemoveUserPic,
      handleSwitchProfile,
      handleShowEmojiPicker,
      handleSubmit,
      additionalFields,
      space,
      isSpaceProfileDefault,
      onCheckbox,
      isSaveLoading,
    } = this.props;

    const isCoverImage = !!spaceProfileCoverPhoto.length || (this.coverUpload && !!this.coverUpload.files.length);
    const isImage = !!spaceProfileImage.length || (this.fileUpload && !!this.fileUpload.files.length);

    return (
      <div className="edit">
        <div className="edit_form">

          <div className="edit_profile_section">
            <div className="edit_profile_canvas">
              <div className="edit_profile_editCanvas_wrapper">
                <button
                  className="removeCoverPic removeButton"
                  onClick={() => handleRemovePicture('spaceProfileCoverPhoto', true)}
                  disabled={isCoverImage ? false : true}
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
                    onChange={e => handleUpdatePic(e.target.files[0], e, 'spaceProfileCoverPhoto')}
                    ref={ref => this.coverUpload = ref}
                  />
                  <p>Change picture</p>
                </label>

                {(isCoverImage && !shouldRemoveSpaceProfileImage)
                  ? (
                    <img
                      className="coverPic"
                      alt="profile"
                      src={(this.coverUpload && !!this.coverUpload.files.length)
                        ? URL.createObjectURL(this.coverUpload.files[0])
                        : `https://ipfs.infura.io/ipfs/${spaceProfileCoverPhoto[0].contentUrl['/']}`}
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
                    onChange={e => handleUpdatePic(e.target.files[0], e, 'spaceProfileImage')}
                    ref={ref => this.fileUpload = ref}
                  />

                  <button
                    className="removeButton removePic"
                    onClick={() => handleRemovePicture('spaceProfileImage', true)}
                    disabled={isImage ? false : true}
                    text="remove"
                    type="button"
                  >
                    &#10005;
                  </button>

                  {(isImage && !shouldRemoveUserPic)
                    ? (
                      <div className="profPic_div">
                        <div className="profPic_div_overlay">
                          <p>Change picture</p>
                        </div>
                        <img
                          className="profPic clearProfPic"
                          src={(this.fileUpload && this.fileUpload.files && this.fileUpload.files[0])
                            ? URL.createObjectURL(this.fileUpload.files[0])
                            : `https://ipfs.infura.io/ipfs/${spaceProfileImage[0].contentUrl['/']}`}
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
                {image.length ? <img src={`https://ipfs.infura.io/ipfs/${image[0].contentUrl['/']}`} className="edit_profile_switch_pic" alt="Other profile" />
                  : <div className="edit_profile_switch_pic" />}
                <p className="edit_profile_switch_text">SWITCH PROFILE</p>
              </div>
            </div>
          </div>

          <div className="edit_profile_section">
            <div className="edit_profile_info">

              <div className="edit_profile_fields_entry noMargin">
                <div className="edit_profile_keyContainer currentAddress">
                  <div className="edit_profile_keyContainer_currentAddressWrapper">
                    <p className="edit_profile_keyContainer_currentAddress">
                      SPACE PROFILE
                    </p>

                    <div className="edit_profile_verifiedFields_info infoIcon">
                      <SVG src={InfoIcon} className="edit_profile_verifiedFields_icons" alt="Info" />
                      <div className="edit_profile_verifiedFields_hover">
                        <span className="edit_profile_verifiedFields_info_text">
                          Data here is saved to the space this current dApp has access to
                            </span>
                      </div>
                    </div>
                  </div>

                  <EditOptions
                    space={space}
                    isSpaceProfileDefault={isSpaceProfileDefault}
                    onCheckbox={onCheckbox}
                    fromSpaceProfile
                  />
                </div>

                <p title={currentUserAddr} className="edit_profile_address">
                  {currentUserAddr}
                </p>
              </div>

              <div className="edit_profile_fields_entry nameAndEmoji">
                <div className="edit_profile_fields_entry_name">
                  <div className="edit_profile_keyContainer">
                    <p>NAME</p>
                  </div>
                  <input
                    name="name"
                    type="text"
                    value={spaceProfileName}
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
                      </div>
                    )}

                  {isShowEmoji && <div className='onClickOutside' onClick={handleShowEmojiPicker} />}

                  <div
                    className="edit_profile_value--spirit"
                    onClick={handleShowEmojiPicker}
                  >
                    {spaceProfileEmoji
                      ? (
                        <span className="edit_profile_value--spirit_character" role="img">
                          {spaceProfileEmoji.code ? spaceProfileEmoji.code : spaceProfileEmoji}
                        </span>
                      )
                      : (
                        <span className="edit_profile_value--spirit_character" role="img" aria-label="unicorn">
                          🦄
                        </span>
                      )}
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
                  value={spaceProfileDescription}
                  onChange={e => handleFormChange(e, 'spaceProfileDescription')}
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

          <FormControls
            isSaveLoading={isSaveLoading}
            cancelFunc={cancelFunc}
            handleSubmit={handleSubmit}
            currentUserAddr={currentUserAddr}
          />
        </div>
      </div >
    );
  }
}

SpaceProfile.propTypes = {
  box: PropTypes.object,
  allData: PropTypes.object,
  space: PropTypes.object,
  currentUser3BoxProfile: PropTypes.object,
  additionalFields: PropTypes.array,
  spaceProfileName: PropTypes.string,
  spaceName: PropTypes.string,
  verifiedGithub: PropTypes.string,
  verifiedTwitter: PropTypes.string,
  verifiedEmail: PropTypes.string,
  spaceProfileEmoji: PropTypes.string,
  spaceProfileDescription: PropTypes.string,
  email: PropTypes.string,
  currentUserAddr: PropTypes.string,
  image: PropTypes.array,
  spaceProfileImage: PropTypes.array,
  spaceProfileCoverPhoto: PropTypes.array,
  isFetchingThreeBox: PropTypes.bool,
  copySuccessful: PropTypes.bool,
  isShowEmoji: PropTypes.bool,
  isSpaceProfileDefault: PropTypes.bool,
  shouldRemoveSpaceProfileImage: PropTypes.bool,
  shouldRemoveUserPic: PropTypes.bool,
  isSaveLoading: PropTypes.bool,
  cancelFunc: PropTypes.func,
  handleRemovePicture: PropTypes.func.isRequired,
  handleUpdatePic: PropTypes.func.isRequired,
  handleAddEmoji: PropTypes.func.isRequired,
  handleFormChange: PropTypes.func.isRequired,
  handleSwitchProfile: PropTypes.func.isRequired,
  handleShowEmojiPicker: PropTypes.func.isRequired,
  onCheckbox: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

SpaceProfile.defaultProps = {
  box: {},
  allData: {},
  space: {},
  currentUser3BoxProfile: {},
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
  additionalFields: [],
  isSaveLoading: false,
  isFetchingThreeBox: false,
  copySuccessful: false,
  isSpaceProfileDefault: false,
};

export default SpaceProfile;