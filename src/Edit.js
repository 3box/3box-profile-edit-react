import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'emoji-mart/css/emoji-mart.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Box from '3box';

import {
  editProfileFields,
  capitalizeFirstLetter,
  formatIpfsImageObject,
} from './utils';
import { saveCustomFields, saveBasicTextFields } from './helpers';

import {
  FileSizeModal,
  ModalBackground,
} from './components/Modals';
import GeneralProfile from './components/GeneralProfile';
import SpaceProfile from './components/SpaceProfile';
import './styles';

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
      image: [],
    };
  }

  async componentDidMount() {
    const { currentUser3BoxProfile, space, currentUserAddr, customFields } = this.props;

    const generalProfile = currentUser3BoxProfile || await Box.getProfile(currentUserAddr);
    const spaceProfile = await space.public.all();

    editProfileFields.forEach((fieldSet) => {
      const generalValue = generalProfile[fieldSet[0]];
      const spaceValue = spaceProfile[fieldSet[0]];

      if (generalValue) this.setState({ [fieldSet[0]]: generalValue });
      if (spaceValue) this.setState({ [`spaceProfile${capitalizeFirstLetter(fieldSet[0])}`]: spaceValue });
    });

    if (customFields.length) {
      customFields.forEach((field) => {
        const spaceValue = spaceProfile[field.key];
        if (spaceValue) this.setState({ [field.key]: spaceValue });
      });
    }

    const isAppProfileDefault = await space.public.get('isAppProfileDefault');

    this.fetchVerifiedFields();

    this.setState({
      originalProfile: generalProfile,
      originalSpaceProfile: spaceProfile,
      isAppProfileDefault,
      isShowGeneralProfile: !isAppProfileDefault,
    })
  }

  async componentDidUpdate(prevProps) {
    const {
      currentUser3BoxProfile,
      box,
    } = this.props;

    if (currentUser3BoxProfile) {
      const {
        name,
        email,
        description,
        verifiedGithub,
        verifiedTwitter,
        verifiedEmail,
        emoji,
        image,
        coverPhoto
      } = currentUser3BoxProfile;

      const noProf = !prevProps.currentUser3BoxProfile;
      const prevProf = prevProps.currentUser3BoxProfile;

      if ((name && noProf) || name !== prevProf.name) this.setState({ name });
      if ((email && noProf) || email !== prevProf.email) this.setState({ email });
      if ((description && noProf) || description !== prevProf.description) this.setState({ description });
      if ((emoji && noProf) || emoji !== prevProf.emoji) this.setState({ emoji });
      if ((image && noProf) || image !== prevProf.image) this.setState({ image });
      if ((coverPhoto && noProf) || coverPhoto !== prevProf.coverPhoto) this.setState({ coverPhoto });
      if ((verifiedGithub && noProf) || verifiedGithub !== prevProf.verifiedGithub) this.setState({ verifiedGithub });
      if ((verifiedTwitter && noProf) || verifiedTwitter !== prevProf.verifiedTwitter) this.setState({ verifiedTwitter });
      if ((verifiedEmail && noProf) || verifiedEmail !== prevProf.verifiedEmail) this.setState({ verifiedEmail });
    }

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

  handleFormChange = (e, property) => this.setState({ [property]: e.target.value });

  closeFileSizeModal = () => this.setState({ shouldShowFIleSizeModal: false });

  handleSelectDefaultProfile = async () => {
    const { isAppProfileDefault, isShowGeneralProfile } = this.state;
    const { space } = this.props;

    const value = !isAppProfileDefault;
    await space.public.set('isAppProfileDefault', value);

    this.setState({
      isAppProfileDefault: value,
      isShowGeneralProfile: !isShowGeneralProfile
    });
  }

  handleUpdatePic = (photoFile, e, type) => {
    if (photoFile.size >= 2500000) {
      e.target.value = null;
      this.setState({ shouldShowFIleSizeModal: true });
      return;
    }

    const formData = new window.FormData();
    formData.append('path', photoFile);

    if (type === 'coverPhoto') {
      this.setState({
        isCoverPicEdited: true,
        coverBuffer: formData,
        shouldRemoveCoverPhoto: false,
      });
    } else if (type === 'image') {
      this.setState({
        isPicEdited: true,
        buffer: formData,
        shouldRemoveImage: false,
      });
    } else if (type === 'spaceProfileCoverPhoto') {
      this.setState({
        isSpaceCoverPicEdited: true,
        spaceCoverBuffer: formData,
        shouldRemoveSpaceCoverPhoto: false,
      });
    } else if (type === 'spaceProfileImage') {
      this.setState({
        isSpacePicEdited: true,
        spaceImageBuffer: formData,
        shouldRemoveSpaceProfileImage: false,
      });
    }
  }

  handleRemovePicture = (type, isCover, fromSpace) => {
    const removeKey = `shouldRemove${capitalizeFirstLetter(type)}`;
    if (this.state[removeKey]) {
      const originalValue = fromSpace ?
        this.state.originalSpaceProfile[isCover ? 'coverPhoto' : 'image']
        : this.state.originalProfile[isCover ? 'coverPhoto' : 'image'];
      this.setState({
        [removeKey]: false,
        [type]: originalValue
      });
    } else {
      this.setState({
        [removeKey]: true,
        [type]: undefined
      });
    }
  }

  handleAddEmoji = (emoji, isSpace) => {
    this.setState({
      [isSpace ? 'spaceProfileEmoji' : 'emoji']: emoji.native,
      isShowEmoji: false,
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
      originalSpaceProfile,
      spaceCoverBuffer,
      spaceImageBuffer,
      isPicEdited,
      isSpacePicEdited,
      isCoverPicEdited,
      isSpaceCoverPicEdited,
      shouldRemoveImage,
      shouldRemoveCoverPhoto,
      shouldRemoveSpaceCoverPhoto,
      shouldRemoveSpaceProfileImage,
      buffer,
      coverBuffer,
    } = this.state;

    const {
      box,
      space,
      customFields,
      currentUserAddr,
      redirectFn
    } = this.props;

    e.preventDefault();
    if (!box.public) return;

    this.setState({ isSaveLoading: true });

    await saveBasicTextFields(box, space, this.state, 'originalProfile');
    await saveBasicTextFields(box, space, this.state, 'originalSpaceProfile');

    // save profile picture
    const fetch = isPicEdited && await this.fetchPic(buffer);
    const returnedData = isPicEdited && await fetch.json();
    if (isPicEdited) {
      const imageObject = formatIpfsImageObject(returnedData);
      await box.public.set('image', imageObject);
      this.setState({ image: imageObject, isPicEdited: false });
    }

    const fetchCover = isCoverPicEdited && await this.fetchPic(coverBuffer);
    const returnedCoverData = isCoverPicEdited && await fetchCover.json();
    if (isCoverPicEdited) {
      const imageObject = formatIpfsImageObject(returnedCoverData);
      await box.public.set('coverPhoto', imageObject);
      this.setState({ coverPhoto: imageObject, isCoverPicEdited: false });
    }

    const fetchSpaceImage = isSpacePicEdited && await this.fetchPic(spaceImageBuffer);
    const returnedSpaceImageData = isSpacePicEdited && await fetchSpaceImage.json();
    if (isSpacePicEdited) {
      const imageObject = formatIpfsImageObject(returnedSpaceImageData);
      await space.public.set('image', imageObject);
      this.setState({ spaceProfileImage: imageObject, isSpacePicEdited: false });
    }

    const fetchSpaceCover = isSpaceCoverPicEdited && await this.fetchPic(spaceCoverBuffer);
    const returnedSpaceCoverData = isSpaceCoverPicEdited && await fetchSpaceCover.json();
    if (isSpaceCoverPicEdited) {
      const imageObject = formatIpfsImageObject(returnedSpaceCoverData);
      await space.public.set('coverPhoto', imageObject);
      this.setState({ spaceProfileCoverPhoto: imageObject, isSpaceCoverPicEdited: false });
    }

    if (shouldRemoveImage) await box.public.remove('image');
    if (shouldRemoveCoverPhoto) await box.public.remove('coverPhoto');
    if (shouldRemoveSpaceProfileImage) await space.public.remove('image');
    if (shouldRemoveSpaceCoverPhoto) await space.public.remove('coverPhoto');

    await saveCustomFields(space, customFields, this.state, originalSpaceProfile);

    this.setState({ isSaveLoading: false });

    if (redirectFn) {
      redirectFn(currentUserAddr);
    } else {
      this.setState({ isSaveSuccessful: true });
      setTimeout(() => {
        this.setState({ isSaveSuccessful: false });
      }, 1500);
    }
  }

  handleShowOptionsMenu = () => {
    const { showOptions } = this.state;
    this.setState({ showOptions: !showOptions });
  }

  render() {
    const {
      currentUserAddr,
      redirectFn,
      customFields,
      space,
      onSaveComplete,
    } = this.props;

    const {
      name,
      description,
      emoji,
      shouldRemoveImage,
      shouldRemoveCoverPhoto,
      isSaveLoading,
      shouldShowFIleSizeModal,
      isShowEmoji,
      showOptions,
      image,
      coverPhoto,
      verifiedTwitter,
      verifiedGithub,
      verifiedEmail,
      isShowGeneralProfile,
      isAppProfileDefault,
      isSaveSuccessful,

      spaceProfileName,
      spaceProfileDescription,
      spaceProfileEmoji,
      spaceProfileCoverPhoto,
      spaceProfileImage,
      shouldRemoveSpaceCoverPhoto,
      shouldRemoveSpaceProfileImage,
    } = this.state;

    return (
      <div className="edit_page">
        <ReactCSSTransitionGroup
          transitionName="app_modals"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {shouldShowFIleSizeModal && (
            <FileSizeModal
              show={shouldShowFIleSizeModal}
              closeFileSizeModal={this.closeFileSizeModal}
            />
          )}

          {shouldShowFIleSizeModal && <ModalBackground />}
        </ReactCSSTransitionGroup>

        <GeneralProfile
          isShowGeneralProfile={isShowGeneralProfile}
          coverPhoto={coverPhoto}
          image={image}
          emoji={emoji}
          name={name}
          shouldRemoveImage={shouldRemoveImage}
          shouldRemoveCoverPhoto={shouldRemoveCoverPhoto}
          description={description}
          currentUserAddr={currentUserAddr}
          isShowEmoji={isShowEmoji}
          verifiedTwitter={verifiedTwitter}
          verifiedGithub={verifiedGithub}
          verifiedEmail={verifiedEmail}
          redirectFn={redirectFn}
          spaceProfileImage={spaceProfileImage}
          customFields={customFields}
          space={space}
          isAppProfileDefault={isAppProfileDefault}
          isSaveLoading={isSaveLoading}
          isSaveSuccessful={isSaveSuccessful}
          showOptions={showOptions}
          onSaveComplete={onSaveComplete}

          handleRemovePicture={this.handleRemovePicture}
          coverUpload={this.coverUpload}
          handleUpdatePic={this.handleUpdatePic}
          fileUpload={this.fileUpload}
          handleFormChange={this.handleFormChange}
          handleAddEmoji={this.handleAddEmoji}
          handleShowEmojiPicker={this.handleShowEmojiPicker}
          handleSubmit={this.handleSubmit}
          handleSelectDefaultProfile={this.handleSelectDefaultProfile}
          handleShowOptionsMenu={this.handleShowOptionsMenu}

          {...this.state}
        />

        <SpaceProfile
          isShowGeneralProfile={isShowGeneralProfile}

          spaceProfileName={spaceProfileName}
          spaceProfileDescription={spaceProfileDescription}
          spaceProfileEmoji={spaceProfileEmoji}

          spaceProfileCoverPhoto={spaceProfileCoverPhoto}
          spaceProfileImage={spaceProfileImage}

          shouldRemoveSpaceCoverPhoto={shouldRemoveSpaceCoverPhoto}
          shouldRemoveSpaceProfileImage={shouldRemoveSpaceProfileImage}
          image={image}
          showOptions={showOptions}

          space={space}
          isAppProfileDefault={isAppProfileDefault}
          isSaveSuccessful={isSaveSuccessful}
          onSaveComplete={onSaveComplete}

          currentUserAddr={currentUserAddr}
          isShowEmoji={isShowEmoji}
          isSaveLoading={isSaveLoading}
          redirectFn={redirectFn}
          customFields={customFields}
          handleRemovePicture={this.handleRemovePicture}
          coverUpload={this.coverUpload}
          handleUpdatePic={this.handleUpdatePic}
          fileUpload={this.fileUpload}
          handleFormChange={this.handleFormChange}
          handleAddEmoji={this.handleAddEmoji}
          handleShowEmojiPicker={this.handleShowEmojiPicker}
          handleSubmit={this.handleSubmit}
          handleSelectDefaultProfile={this.handleSelectDefaultProfile}
          handleShowOptionsMenu={this.handleShowOptionsMenu}

          {...this.state}
        />
      </div >
    );
  }
}

EditProfile.propTypes = {
  box: PropTypes.object,
  allData: PropTypes.object,
  space: PropTypes.object,
  currentUser3BoxProfile: PropTypes.object,
  customFields: PropTypes.array,
  name: PropTypes.string,
  verifiedGithub: PropTypes.string,
  verifiedTwitter: PropTypes.string,
  verifiedEmail: PropTypes.string,
  emoji: PropTypes.string,
  description: PropTypes.string,
  email: PropTypes.string,
  currentUserAddr: PropTypes.string,
  image: PropTypes.array,
  coverPhoto: PropTypes.array,
  copySuccessful: PropTypes.bool,
  redirectFn: PropTypes.func,
  onSaveComplete: PropTypes.func,
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
  copySuccessful: false,
};

export default EditProfile