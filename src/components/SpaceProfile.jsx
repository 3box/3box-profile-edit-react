import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBlockie from 'ethereum-blockies-base64';
import { Picker } from 'emoji-mart';
import SVG from 'react-inlinesvg';

import ProfileField from './ProfileField';
import EditOptions from './EditOptions';
import InfoIcon from '../assets/InfoIcon.svg';
import FormControls from './FormControls';

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
      redirectFn,
      handleRemovePicture,
      handleUpdatePic,
      handleAddEmoji,
      handleFormChange,
      shouldRemoveSpaceProfileImage,
      shouldRemoveSpaceCoverPhoto,
      handleShowEmojiPicker,
      handleSubmit,
      customFields,
      space,
      isAppProfileDefault,
      handleSelectDefaultProfile,
      isSaveLoading,
      isShowGeneralProfile,
      showOptions,
      handleShowOptionsMenu,
      isSaveSuccessful,
      onSaveComplete,
    } = this.props;

    const isCoverImage = !!spaceProfileCoverPhoto.length || (this.spaceCoverUpload && !!this.spaceCoverUpload.files.length);
    const isImage = !!spaceProfileImage.length || (this.spaceImageUpload && !!this.spaceImageUpload.files.length);

    return (
      <div className={`edit ${isShowGeneralProfile ? '' : 'show'}`}>
        <div className="edit_form">

          <div className="edit_profile_section">
            <div className="edit_profile_canvas">
              <div className="edit_profile_editCanvas_wrapper">
                <button
                  className="removeCoverPic removeButton"
                  onClick={() => handleRemovePicture('spaceCoverPhoto', true, true)}
                  text="remove"
                  type="button"
                >
                  {!shouldRemoveSpaceCoverPhoto ? <p>&#10005;</p> : <p className="undoArrow">&#8617;</p>}
                </button>
              </div>

              <div className="coverWrapper">
                <label htmlFor="spaceCoverInput" className="edit_profile_canvas_overlay">
                  <input
                    id="spaceCoverInput"
                    type="file"
                    name="coverPic"
                    className="light coverInput"
                    accept="image/*"
                    onChange={e => handleUpdatePic(e.target.files[0], e, 'spaceProfileCoverPhoto')}
                    ref={ref => this.spaceCoverUpload = ref}
                  />
                  <p>Change picture</p>
                </label>

                {(isCoverImage && !shouldRemoveSpaceCoverPhoto)
                  ? (
                    <img
                      className="coverPic"
                      alt="profile"
                      src={(this.spaceCoverUpload && !!this.spaceCoverUpload.files.length)
                        ? URL.createObjectURL(this.spaceCoverUpload.files[0])
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
                <label htmlFor="spaceProfileImage" className="chooseFile">
                  <input
                    id="spaceProfileImage"
                    type="file"
                    name="pic"
                    className="light fileInput"
                    accept="image/*"
                    onChange={e => handleUpdatePic(e.target.files[0], e, 'spaceProfileImage')}
                    ref={ref => this.spaceImageUpload = ref}
                  />

                  <button
                    className="removeButton removePic"
                    onClick={() => handleRemovePicture('spaceProfileImage', false, true)}
                    text="remove"
                    type="button"
                  >
                    {!shouldRemoveSpaceProfileImage ? <p>&#10005;</p> : <p className="undoArrow">&#8617;</p>}
                  </button>

                  {(isImage && !shouldRemoveSpaceProfileImage)
                    ? (
                      <div className="profPic_div">
                        <div className="profPic_div_overlay">
                          <p>Change picture</p>
                        </div>
                        <img
                          className="profPic clearProfPic"
                          src={(this.spaceImageUpload && this.spaceImageUpload.files && this.spaceImageUpload.files[0])
                            ? URL.createObjectURL(this.spaceImageUpload.files[0])
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

              <EditOptions
                space={space}
                isAppProfileDefault={isAppProfileDefault}
                handleSelectDefaultProfile={handleSelectDefaultProfile}
                image={image}
                spaceProfileImage={spaceProfileImage}
                currentUserAddr={currentUserAddr}
                showOptions={showOptions}
                handleShowOptionsMenu={handleShowOptionsMenu}
              />
            </div>
          </div>

          <div className="edit_profile_section">
            <div className="edit_profile_info">

              <div className="edit_profile_fields_entry noMargin">
                <div className="edit_profile_keyContainer currentAddress">
                  <div className="edit_profile_keyContainer_currentAddressWrapper">
                    <p className="edit_profile_keyContainer_currentAddress">
                      APP PROFILE
                    </p>

                    <div className="edit_profile_verifiedFields_info infoIcon">
                      <SVG src={InfoIcon} className="edit_profile_verifiedFields_icons" alt="Info" />
                      <div className="edit_profile_verifiedFields_hover">
                        <span className="edit_profile_verifiedFields_info_text">
                          These fields are saved to your app profile
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="edit_profile_fields_entry nameAndEmoji">
                <div className="edit_profile_fields_entry_name">
                  <div className="edit_profile_keyContainer">
                    <p>Name</p>
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
                    <p className="edit_profile_key">Emoji</p>
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
                  <p className="edit_profile_key">Description</p>
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

          {!!customFields.length && (
            <div className="edit_profile_section">
              <div className="edit_profile_info">
                {customFields.map(entry => (
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
            isSaveSuccessful={isSaveSuccessful}
            redirectFn={redirectFn}
            handleSubmit={handleSubmit}
            currentUserAddr={currentUserAddr}
            onSaveComplete={onSaveComplete}
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
  customFields: PropTypes.array,
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
  isAppProfileDefault: PropTypes.bool,
  shouldRemoveSpaceProfileImage: PropTypes.bool,
  shouldRemoveUserPic: PropTypes.bool,
  shouldRemoveSpaceCoverPhoto: PropTypes.bool,
  showOptions: PropTypes.bool,
  isShowGeneralProfile: PropTypes.bool,
  isSaveLoading: PropTypes.bool,
  isSaveSuccessful: PropTypes.bool.isRequired,
  handleShowOptionsMenu: PropTypes.func,
  onSaveComplete: PropTypes.func,
  redirectFn: PropTypes.func,
  handleRemovePicture: PropTypes.func.isRequired,
  handleUpdatePic: PropTypes.func.isRequired,
  handleAddEmoji: PropTypes.func.isRequired,
  handleFormChange: PropTypes.func.isRequired,
  handleShowEmojiPicker: PropTypes.func.isRequired,
  handleSelectDefaultProfile: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
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
  shouldRemoveSpaceCoverPhoto: false,
};

export default SpaceProfile;