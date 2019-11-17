import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import makeBlockie from 'ethereum-blockies-base64';
import SVG from 'react-inlinesvg';

import { copyToClipBoard, editProfileFields, } from './utils';

import {
  FileSizeModal,
  ModalBackground,
} from './components/Modals';
import Private from './assets/Private.svg';
import Verified from './assets/Verified.svg';
import Loading from './assets/Loading.svg';
import TwitterIcon from './assets/TwitterIcon.svg';
import GithubIcon from './assets/GithubIcon.svg';
import EmailIcon from './assets/EmailIcon.svg';
import InfoIcon from './assets/InfoIcon.svg';
import DefaultColorPic from './assets/DefaultColorPic.svg';
import './styles';

// const { getMyProfileValue, getMyDID } = actions.profile;

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verifiedGithub: undefined,
      verifiedTwitter: undefined,
      verifiedEmail: undefined,
      name: undefined,
      description: undefined,
      emoji: undefined,
      buffer: '',
      disableSave: true,
      saveLoading: false,
      removeUserPic: false,
      editPic: false,
      editCoverPic: false,
      showFileSizeModal: false,
      showEmoji: false,
      editedArray: [],
      coverPhoto: [],
      image: [],
    };
  }

  componentDidMount() {
    editProfileFields.forEach((fieldSet) => {
      const field = this.props.currentUser3BoxProfile[fieldSet[0]];
      if (field) this.setState({ field });
    });
  }

  async componentDidUpdate(prevProps) {
    const {
      currentUser3BoxProfile: {
        name,
        email,
        description,
        verifiedGithub,
        verifiedTwitter,
        verifiedEmail,
        emoji,
        image,
        coverPhoto
      },
      box,
    } = this.props;

    if (name !== prevProps.currentUser3BoxProfile.name) this.setState({ name });
    if (email !== prevProps.currentUser3BoxProfile.email) this.setState({ email });
    if (description !== prevProps.currentUser3BoxProfile.description) this.setState({ description });
    if (emoji !== prevProps.currentUser3BoxProfile.emoji) this.setState({ emoji });
    if (image !== prevProps.currentUser3BoxProfile.image) this.setState({ image });
    if (coverPhoto !== prevProps.currentUser3BoxProfile.coverPhoto) this.setState({ coverPhoto });
    if (verifiedGithub !== prevProps.currentUser3BoxProfile.verifiedGithub) this.setState({ verifiedGithub });
    if (verifiedTwitter !== prevProps.currentUser3BoxProfile.verifiedTwitter) this.setState({ verifiedTwitter });
    if (verifiedEmail !== prevProps.currentUser3BoxProfile.verifiedEmail) this.setState({ verifiedEmail });

    if (box !== prevProps.box) this.fetchVerifiedFields();
  }

  fetchVerifiedFields = async () => {
    const { box } = this.props;

    let verifiedTwitter;
    let verifiedGithub;
    let verifiedEmail;

    try {
      verifiedTwitter = await box.verified.twitter();
    } catch (error) {
      console.log(error);
    }

    try {
      verifiedGithub = await box.verified.github();
    } catch (error) {
      console.log(error);
    }
    try {
      verifiedEmail = await box.verified.email();
    } catch (error) {
      console.log(error);
    }

    this.setState({
      verifiedTwitter: verifiedTwitter && verifiedTwitter.username,
      verifiedGithub: verifiedGithub && verifiedGithub.username,
      verifiedEmail: verifiedEmail && verifiedEmail.email_address,
    });
  }

  handleFormChange = (e, property) => {
    const { editedArray } = this.state;
    const fieldState = this.state[property];
    const fieldProp = this.props[property];
    const isFieldsSame = fieldState === fieldProp;

    let editedField;

    this.setState({ [property]: e.target.value },
      () => {
        if (property === 'emailCode') return;
        if (editedField) {
          if (fieldState === '') {
            this.setState({ [`${editedField}Edited`]: false });
          } else if (!isFieldsSame && fieldState !== '') {
            this.setState({ [`${editedField}Edited`]: true });
          }
        } else {
          const updatedEditedArray = editedArray;
          if (!isFieldsSame && updatedEditedArray.indexOf(property) === -1) updatedEditedArray.push(property);
          if (isFieldsSame) updatedEditedArray.splice(updatedEditedArray.indexOf(property), 1);
          if (Object.values(updatedEditedArray).length) {
            this.setState({ disableSave: false, editedArray: updatedEditedArray });
          } else {
            this.setState({ disableSave: true, editedArray: updatedEditedArray });
          }
        }
      });
  }

  closeFileSizeModal = () => this.setState({ showFileSizeModal: false });

  handleUpdatePic = (photoFile, e, cover) => {
    const { editedArray } = this.state;
    const updatedEditedArray = editedArray;
    const type = cover ? 'coverPhoto' : 'image';

    if (photoFile.size >= 2500000) {
      e.target.value = null;
      this.setState({ showFileSizeModal: true });
      return;
    }

    const formData = new window.FormData();
    formData.append('path', photoFile);

    if (updatedEditedArray.indexOf(type) === -1) updatedEditedArray.push(type);
    this.setState({ disableSave: false });

    if (cover) {
      this.setState({
        editCoverPic: true, coverBuffer: formData, removeCoverPic: false, editedArray: updatedEditedArray,
      });
    } else {
      this.setState({
        editPic: true, buffer: formData, removeUserPic: false, editedArray: updatedEditedArray,
      });
    }
  }

  removePicture = (type) => {
    const { editedArray } = this.state;
    const updatedEditedArray = editedArray;

    if (type === 'Cover' && this.props.currentUser3BoxProfile.coverPhoto) {
      if (updatedEditedArray.indexOf('coverPhoto') === -1) updatedEditedArray.push('coverPhoto');
    } else if (type === 'Cover' && !this.props.currentUser3BoxProfile.coverPhoto) {
      updatedEditedArray.splice(updatedEditedArray.indexOf(type), 1);
    } else if (type === 'User' && this.props.image) {
      if (updatedEditedArray.indexOf('image') === -1) updatedEditedArray.push('image');
    } else if (type === 'User' && !this.props.image) {
      updatedEditedArray.splice(updatedEditedArray.indexOf(type), 1);
    }

    this.setState({ [`remove${type}Pic`]: true, editedArray: updatedEditedArray, disableSave: !updatedEditedArray.length });
  }

  addEmoji = (emoji) => {
    this.setState({
      emoji: emoji.native,
      showEmoji: false,
      disableSave: false,
    });
  }

  fetchPic = buffer => window.fetch('https://ipfs.infura.io:5001/api/v0/add', {
    method: 'post',
    'Content-Type': 'multipart/form-data',
    body: buffer,
  });

  handleSubmit = async (e) => {
    const {
      removeUserPic,
      removeCoverPic,
      buffer,
      coverBuffer,
      editPic,
      editCoverPic,
      description,
      name,
      emoji,
    } = this.state;
    const {
      box,
    } = this.props;

    e.preventDefault();

    if (!box.public) return;

    this.setState({ saveLoading: true });

    const nameChanged = name !== this.props.currentUser3BoxProfile.name;
    const descriptionChanged = description !== this.props.currentUser3BoxProfile.description;
    const emojiChanged = emoji !== this.props.currentUser3BoxProfile.emoji;

    // if value changed and is not empty, save new value, else remove value
    if (nameChanged && name !== '') await box.public.set('name', name);
    if (nameChanged && name === '') await box.public.remove('name');
    if (descriptionChanged && description !== '') await box.public.set('description', description);
    if (descriptionChanged && description === '') await box.public.remove('description');
    if (emojiChanged && emoji !== '') await box.public.set('emoji', emoji);
    if (emojiChanged && emoji === '') await box.public.remove('emoji');
    if (removeUserPic) await box.public.remove('image');
    if (removeCoverPic) await box.public.remove('coverPhoto');

    // save profile picture
    const fetch = editPic && await this.fetchPic(buffer);
    const returnedData = editPic && await fetch.json();
    if (editPic) await box.public.set('image', [{ '@type': 'ImageObject', contentUrl: { '/': returnedData.Hash } }]);

    const fetchCover = editCoverPic && await this.fetchPic(coverBuffer);
    const returnedCoverData = editCoverPic && await fetchCover.json();
    if (editCoverPic) await box.public.set('coverPhoto', [{ '@type': 'ImageObject', contentUrl: { '/': returnedCoverData.Hash } }]);

    this.setState({ saveLoading: false });
    // add function here to reroute after saving
    // history.push(`/${currentUserAddr}/${routes.ACTIVITY}`);
  }

  render() {
    const {
      currentUserAddr,
    } = this.props;

    const {
      name,
      description,
      emoji,
      disableSave,
      removeUserPic,
      removeCoverPic,
      saveLoading,
      showFileSizeModal,
      showEmoji,
      image,
      coverPhoto,
      verifiedTwitter,
      verifiedGithub,
      verifiedEmail,
    } = this.state;

    return (
      <div className="edit_page">
        {/* <Prompt
          when={!disableSave}
          message="Continue without saving changes to your profile?"
        /> */}

        {saveLoading
          && (
            <div className="container">
              <SVG src={Loading} alt="loading" />
            </div>
          )}

        <ReactCSSTransitionGroup
          transitionName="app_modals"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {showFileSizeModal
            && <FileSizeModal show={showFileSizeModal} closeFileSizeModal={this.closeFileSizeModal} />}

          {showFileSizeModal && <ModalBackground />}
        </ReactCSSTransitionGroup>

        <div className="edit">
          <div className="edit_form">

            <div className="edit_profile_section">
              <div className="edit_profile_canvas">
                <div className="edit_profile_editCanvas_wrapper">
                  <button
                    className="removeCoverPic removeButton"
                    onClick={() => this.removePicture('Cover')}
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
                      onChange={e => this.handleUpdatePic(e.target.files[0], e, true)}
                      ref={ref => this.coverUpload = ref}
                    />
                    <p>Change picture</p>
                  </label>

                  {(((coverPhoto && coverPhoto.length > 0 && coverPhoto[0].contentUrl) || (this.coverUpload && this.coverUpload.files && this.coverUpload.files[0])) && !removeCoverPic)
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
                      onChange={e => this.handleUpdatePic(e.target.files[0], e)}
                      ref={ref => this.fileUpload = ref}
                    />

                    <button
                      className="removeButton removePic"
                      onClick={() => this.removePicture('User')}
                      disabled={((image && image.length > 0 && image[0].contentUrl) || (this.fileUpload && this.fileUpload.files && this.fileUpload.files[0])) ? false : true}
                      text="remove"
                      type="button"
                    >
                      &#10005;
                  </button>

                    {(((image && image.length > 0 && image[0].contentUrl) || (this.fileUpload && this.fileUpload.files && this.fileUpload.files[0])) && !removeUserPic)
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
                              src={currentUserAddr ? makeBlockie(currentUserAddr) : DefaultColorPic}
                              alt="profile"
                            />
                          ) : <div className="profPic" />}
                        </div>
                      )}
                  </label>

                </div>

                <div className="edit_profile_switch">
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
                          <p>CURRENT ADDRESS</p>
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
                          onChange={e => this.handleFormChange(e, 'name')}
                        />
                      </div>

                      <div className="edit_profile_fields_entry_emoji">
                        <div className="edit_profile_keyContainer">
                          <p className="edit_profile_key">EMOJI</p>
                        </div>
                        {showEmoji
                          && (
                            <div
                              className="edit_profile_value_emojiMenu"
                            >
                              <Picker
                                onSelect={selectedEmoji => this.addEmoji(selectedEmoji)}
                                title="Pick your spirit emoji"
                              />
                            </div>)
                        }
                        {showEmoji
                          && <div className='onClickOutside' onClick={() => this.setState({ showEmoji: !this.state.showEmoji })} />}

                        <div
                          className="edit_profile_value--spirit"
                          onClick={() => this.setState({ showEmoji: !this.state.showEmoji })}
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
                              Add or edit verified fields and other fields at
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
                        onChange={e => this.handleFormChange(e, 'description')}
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
                  disabled={disableSave}
                  className="edit_formControls_content_save"
                  onClick={
                    (e) => {
                      this.setState({ disableSave: true }, () => this.handleSubmit(e));
                    }}
                >
                  Save
                </button>

                {/* <Link
                  to={`/${currentUserAddr}/${routes.ACTIVITY}`}
                  className="subtext"
                  className="edit_cancel"
                  onClick={() => {
                    if (this.state.savedGithub && verifiedGithub !== '') {
                      this.props.box.public.remove('proof_github');
                      store.dispatch({
                        type: 'MY_VERIFIED_GITHUB_UPDATE',
                        verifiedGithub: null,
                      });
                    }
                    if (this.state.savedTwitter && verifiedTwitter !== '') {
                      this.props.box.public.remove('proof_twitter');
                      store.dispatch({
                        type: 'MY_VERIFIED_TWITTER_UPDATE',
                        verifiedTwitter: null,
                      });
                    }
                  }}
                >
                  Cancel
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

EditProfile.propTypes = {
  box: PropTypes.object,
  allData: PropTypes.object,
  currentUser3BoxProfile: PropTypes.object,
  list: PropTypes.array,
  name: PropTypes.string,
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
  getMyProfileValue: PropTypes.func.isRequired,
  getMyDID: PropTypes.func.isRequired,
};

EditProfile.defaultProps = {
  box: {},
  allData: {},
  currentUser3BoxProfile: {},
  did: '',
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
  isFetchingThreeBox: false,
  copySuccessful: false,
};

export default EditProfile
      // ,
//   {
//     getMyProfileValue,
//     getMyDID,
//   })(EditProfile));


    // const didChangeArray = [];
    // editProfileFields.forEach((field) => {
    //   if (field === 'coverPhoto' || field === 'image') return;
    //   const didChange = this.state[field[0]] !== this.props.currentUser3BoxProfile[field[0]];
    //   didChangeArray.push(didChange);
    // });

    // const updateArray = [];
    // didChangeArray.map((fieldChanged, i) => {
    //   if (!fieldChanged) return;

    //   const field = editProfileFields[i][0];
    //   const privOrPublic = editProfileFields[i][1];
    //   const fieldState = this.state[field];
    //   const fieldIsEmpty = fieldState === '';

    //   let promise;
    //   if (fieldIsEmpty) {
    //     promise = box[privOrPublic].remove(field);
    //   } else {
    //     promise = box[privOrPublic].set(field, fieldState);
    //   }

    //   console.log('fieldchanged', field);
    //   console.log('privOrPublic', privOrPublic);
    //   console.log('fieldState', fieldState);
    //   console.log('fieldIsEmpty', fieldIsEmpty);
    //   console.log('promise', promise);
    //   updateArray.push(promise);
    // });

    // console.log('updateArray', updateArray);
    // const updatePromises = Promise.all(updateArray);
    // const res = await updatePromises;
    // console.log('res', res);