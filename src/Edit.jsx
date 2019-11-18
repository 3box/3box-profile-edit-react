import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'emoji-mart/css/emoji-mart.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SVG from 'react-inlinesvg';
import Box from '3box';

import { copyToClipBoard, editProfileFields, capitalizeFirstLetter } from './utils';

import {
  FileSizeModal,
  ModalBackground,
} from './components/Modals';
import GeneralProfile from './components/GeneralProfile';
import SpaceProfile from './components/SpaceProfile';
import Loading from './assets/Loading.svg';
import './styles';
// import Private from './assets/Private.svg';
// import Verified from './assets/Verified.svg';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

      isSaveDisabled: true,
      isShowGeneralProfile: true,
      isSpaceProfileDefault: false,
      isSaveLoading: false,
      isPicEdited: false,
      isCoverPicEdited: false,
      isShowEmoji: false,
      shouldRemoveUserPic: false,
      shouldRemoveCoverPic: false,
      shouldShowFIleSizeModal: false,

      editedArray: [],
      coverPhoto: [],
      image: [],
    };
  }

  async componentDidMount() {
    const { currentUser3BoxProfile, space, currentUserAddr } = this.props;

    const isSpaceProfileDefault = await space.public.get('isSpaceProfileDefault');
    this.setState({ isSpaceProfileDefault });


    const generalProfile = currentUser3BoxProfile || await Box.getProfile(currentUserAddr);
    const spaceProfile = await space.public.all();
    editProfileFields.forEach((fieldSet) => {
      const generalValue = generalProfile[fieldSet[0]];
      const spaceValue = spaceProfile[fieldSet[0]];

      if (generalValue) this.setState({ [fieldSet[0]]: generalValue });
      if (spaceValue) this.setState({ [`spaceProfile${capitalizeFirstLetter(fieldSet[0])}`]: spaceValue });
    });

    this.fetchVerifiedFields();
    this.setState({ originalProfile: generalProfile, originalSpaceProfile: spaceProfile })
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

  handleUpdateDefaultProfile = async () => {
    const { isSpaceProfileDefault } = this.state;
    const { space } = this.props;

    await space.public.set('isSpaceProfileDefault', !isSpaceProfileDefault);
    this.setState({ isSpaceProfileDefault: !isSpaceProfileDefault });
  }

  handleSwitchProfile = async () => {
    const { isShowGeneralProfile } = this.state;
    this.setState({ isShowGeneralProfile: !isShowGeneralProfile });
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
    // this.setState({ [property]: e.target.value })
    const { editedArray } = this.state;
    const fieldState = this.state[property];
    const fieldProp = this.props[property];
    const isFieldsSame = fieldState === fieldProp;

    let editedField;

    this.setState({ [property]: e.target.value },
      () => {
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
            this.setState({ isSaveDisabled: false, editedArray: updatedEditedArray });
          } else {
            this.setState({ isSaveDisabled: true, editedArray: updatedEditedArray });
          }
        }
      });
  }

  closeFileSizeModal = () => this.setState({ shouldShowFIleSizeModal: false });

  handleUpdatePic = (photoFile, e, cover) => {
    const { editedArray } = this.state;
    const updatedEditedArray = editedArray;
    const type = cover ? 'coverPhoto' : 'image';

    if (photoFile.size >= 2500000) {
      e.target.value = null;
      this.setState({ shouldShowFIleSizeModal: true });
      return;
    }

    const formData = new window.FormData();
    formData.append('path', photoFile);

    if (updatedEditedArray.indexOf(type) === -1) updatedEditedArray.push(type);
    this.setState({ isSaveDisabled: false });

    if (cover) {
      this.setState({
        isCoverPicEdited: true, coverBuffer: formData, shouldRemoveCoverPic: false, editedArray: updatedEditedArray,
      });
    } else {
      this.setState({
        isPicEdited: true, buffer: formData, shouldRemoveUserPic: false, editedArray: updatedEditedArray,
      });
    }
  }

  handleRemovePicture = (type) => {
    const { editedArray, originalProfile } = this.state;
    const updatedEditedArray = editedArray;

    if (type === 'Cover' && originalProfile.coverPhoto) {
      if (updatedEditedArray.indexOf('coverPhoto') === -1) updatedEditedArray.push('coverPhoto');
    } else if (type === 'Cover' && !originalProfile.coverPhoto) {
      updatedEditedArray.splice(updatedEditedArray.indexOf(type), 1);
    } else if (type === 'User' && this.props.image) {
      if (updatedEditedArray.indexOf('image') === -1) updatedEditedArray.push('image');
    } else if (type === 'User' && !this.props.image) {
      updatedEditedArray.splice(updatedEditedArray.indexOf(type), 1);
    }

    this.setState({ [`remove${type}Pic`]: true, editedArray: updatedEditedArray, isSaveDisabled: !updatedEditedArray.length });
  }

  handleAddEmoji = (emoji, isSpace) => {
    this.setState({
      [isSpace ? 'spaceProfileEmoji' : 'emoji']: emoji.native,
      isShowEmoji: false,
      isSaveDisabled: false,
    });
  }

  handleShowEmojiPicker = () => {
    const { isShowEmoji } = this.state;
    this.setState({ isShowEmoji: !isShowEmoji });
  }

  fetchPic = buffer => window.fetch('https://ipfs.infura.io:5001/api/v0/add', {
    method: 'post',
    'Content-Type': 'multipart/form-data',
    body: buffer,
  });

  handleSubmit = async (e) => {
    const {
      shouldRemoveUserPic,
      shouldRemoveCoverPic,
      buffer,
      coverBuffer,
      isPicEdited,
      isCoverPicEdited,
      description,
      name,
      emoji,
      spaceProfileName,
      spaceProfileDescription,
      spaceProfileEmoji,
      originalProfile,
      originalSpaceProfile,
    } = this.state;

    const {
      box,
      space
    } = this.props;

    e.preventDefault();

    if (!box.public) return;

    this.setState({ isSaveLoading: true });

    const nameChanged = name !== originalProfile.name;
    const descriptionChanged = description !== originalProfile.description;
    const emojiChanged = emoji !== originalProfile.emoji;

    const spaceNameChanged = spaceProfileName !== originalSpaceProfile.name;
    const spaceDescriptionChanged = spaceProfileDescription !== originalSpaceProfile.description;
    const spaceEmojiChanged = spaceProfileEmoji !== originalSpaceProfile.emoji;

    // general profile fields
    if (nameChanged) await box.public[name !== '' ? 'set' : 'remove']('name', name);
    if (descriptionChanged) await box.public[description !== '' ? 'set' : 'remove']('description', description);
    if (emojiChanged) await box.public[emoji !== '' ? 'set' : 'remove']('emoji', emoji);

    if (shouldRemoveUserPic) await box.public.remove('image');
    if (shouldRemoveCoverPic) await box.public.remove('coverPhoto');

    // save profile picture
    const fetch = isPicEdited && await this.fetchPic(buffer);
    const returnedData = isPicEdited && await fetch.json();
    if (isPicEdited) await box.public.set('image', [{ '@type': 'ImageObject', contentUrl: { '/': returnedData.Hash } }]);

    const fetchCover = isCoverPicEdited && await this.fetchPic(coverBuffer);
    const returnedCoverData = isCoverPicEdited && await fetchCover.json();
    if (isCoverPicEdited) await box.public.set('coverPhoto', [{ '@type': 'ImageObject', contentUrl: { '/': returnedCoverData.Hash } }]);


    // space profile fields
    if (spaceNameChanged) await space.public[spaceProfileName !== '' ? 'set' : 'remove']('name', spaceProfileName);
    if (spaceDescriptionChanged) await space.public[spaceProfileDescription !== '' ? 'set' : 'remove']('description', spaceProfileDescription);
    if (spaceEmojiChanged) await space.public[spaceProfileEmoji !== '' ? 'set' : 'remove']('emoji', spaceProfileEmoji);


    this.setState({ isSaveLoading: false });
    // add function here to reroute after saving
    // history.push(`/${currentUserAddr}/${routes.ACTIVITY}`);
  }

  render() {
    const {
      currentUserAddr,
      cancelFunc,
    } = this.props;

    const {
      name,
      description,
      emoji,
      isSaveDisabled,
      shouldRemoveUserPic,
      shouldRemoveCoverPic,
      isSaveLoading,
      shouldShowFIleSizeModal,
      isShowEmoji,
      image,
      coverPhoto,
      verifiedTwitter,
      verifiedGithub,
      verifiedEmail,
      isSpaceProfileDefault,
      isShowGeneralProfile,

      spaceProfileName,
      spaceProfileDescription,
      spaceProfileEmoji,
    } = this.state;

    console.log('state', this.state);
    console.log('props', this.props);

    return (
      <div className="edit_page">
        {/* <Prompt
          when={!isSaveDisabled}
          message="Continue without saving changes to your profile?"
        /> */}

        {isSaveLoading
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
          {shouldShowFIleSizeModal
            && <FileSizeModal show={shouldShowFIleSizeModal} closeFileSizeModal={this.closeFileSizeModal} />}

          {shouldShowFIleSizeModal && <ModalBackground />}
        </ReactCSSTransitionGroup>

        {isShowGeneralProfile ? (
          <GeneralProfile
            coverPhoto={coverPhoto}
            image={image}
            emoji={emoji}
            name={name}
            description={description}
            currentUserAddr={currentUserAddr}
            isShowEmoji={isShowEmoji}
            verifiedTwitter={verifiedTwitter}
            verifiedGithub={verifiedGithub}
            verifiedEmail={verifiedEmail}
            isSaveDisabled={isSaveDisabled}
            cancelFunc={cancelFunc}
            handleRemovePicture={this.handleRemovePicture}
            coverUpload={this.coverUpload}
            handleUpdatePic={this.handleUpdatePic}
            fileUpload={this.fileUpload}
            handleFormChange={this.handleFormChange}
            handleAddEmoji={this.handleAddEmoji}
            handleSwitchProfile={this.handleSwitchProfile}
            handleShowEmojiPicker={this.handleShowEmojiPicker}
            handleSubmit={this.handleSubmit}
          />
        ) : (
            <SpaceProfile
              name={spaceProfileName}
              description={spaceProfileDescription}
              emoji={spaceProfileEmoji}

              coverPhoto={coverPhoto}
              image={image}
              currentUserAddr={currentUserAddr}
              isShowEmoji={isShowEmoji}
              isSaveDisabled={isSaveDisabled}
              cancelFunc={cancelFunc}
              handleRemovePicture={this.handleRemovePicture}
              coverUpload={this.coverUpload}
              handleUpdatePic={this.handleUpdatePic}
              fileUpload={this.fileUpload}
              handleFormChange={this.handleFormChange}
              handleAddEmoji={this.handleAddEmoji}
              handleSwitchProfile={this.handleSwitchProfile}
              handleShowEmojiPicker={this.handleShowEmojiPicker}
              handleSubmit={this.handleSubmit}
            />
          )}
      </div >
    );
  }
}

EditProfile.propTypes = {
  box: PropTypes.object,
  allData: PropTypes.object,
  space: PropTypes.object,
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
  cancelFunc: PropTypes.func,
};

EditProfile.defaultProps = {
  box: {},
  space: {},
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