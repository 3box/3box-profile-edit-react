import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import makeBlockie from 'ethereum-blockies-base64';

import Options from '../assets/Options.svg';
import Check from '../assets/Check.svg';

class EditOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      isSpaceProfileDefault: false,
    }
  }

  componentDidMount() {
    const { isSpaceProfileDefault } = this.props;
    this.setState({ isSpaceProfileDefault });
  }

  componentDidUpdate(prevProps) {
    const { isSpaceProfileDefault } = this.props;
    if (prevProps.isSpaceProfileDefault !== isSpaceProfileDefault) {
      this.setState({ isSpaceProfileDefault });
    }
  }

  render() {
    const {
      isSpaceProfileDefault
    } = this.state;

    const {
      handleSelectDefaultProfile,
      spaceProfileImage,
      image,
      currentUserAddr,
      showOptions,
      handleShowOptionsMenu,
    } = this.props;

    return (
      <div className="options_wrapper">
        <button
          onClick={handleShowOptionsMenu}
          onKeyPress={handleShowOptionsMenu}
          className="options_button"
          type="button"
        >
          <SVG
            src={Options}
            alt="options"
            className="options_button_icon"
          />
        </button>

        <div className={`options_menu ${showOptions ? 'show' : ''}`}>
          <h5 className="options_menu_header">
            Set default profile
          </h5>

          <div className="options_menu_section">
            <div className="options_menu_section_form">
              <div
                className={`options_menu_section_option ${isSpaceProfileDefault ? '' : 'selected'}`}
                onClick={handleSelectDefaultProfile}
              >
                <img
                  src={image.length ? `https://ipfs.infura.io/ipfs/${image[0].contentUrl['/']}` : makeBlockie(currentUserAddr)}
                  className="edit_profile_switch_pic"
                  alt="Other profile"
                />

                <p>
                  3Box Profile
                </p>

                {!isSpaceProfileDefault ? (
                  <SVG
                    src={Check}
                    alt="options"
                    className="default_button_icon"
                  />
                ) : <div className="default_button_icon" />}
              </div>

              <div
                className={`options_menu_section_option ${isSpaceProfileDefault ? 'selected' : ''}`}
                onClick={handleSelectDefaultProfile}
              >
                <img
                  src={spaceProfileImage.length ? `https://ipfs.infura.io/ipfs/${spaceProfileImage[0].contentUrl['/']}` : makeBlockie(currentUserAddr)}
                  className="edit_profile_switch_pic"
                  alt="Other profile"
                />

                <p>
                  App Profile
                </p>

                {isSpaceProfileDefault ? (
                  <SVG
                    src={Check}
                    alt="options"
                    className="default_button_icon"
                  />
                ) : <div className="default_button_icon" />}
              </div>
            </div>
          </div>
        </div>

        {showOptions && (
          <div
            className="onClickOutside"
            onClick={handleShowOptionsMenu}
            onKeyPress={handleShowOptionsMenu}
            tabIndex={0}
            role="button"
          />
        )}
      </div>
    );
  }
}

EditOptions.propTypes = {
  handleSelectDefaultProfile: PropTypes.func.isRequired,
  image: PropTypes.array,
  spaceProfileImage: PropTypes.array,
  currentUserAddr: PropTypes.string,
};

EditOptions.defaultProps = {
  image: [],
  spaceProfileImage: [],
};

export default EditOptions;