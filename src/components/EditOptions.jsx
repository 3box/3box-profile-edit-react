import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

import Options from '../assets/Options.svg';

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

  onCheckbox = async () => {
    const { isSpaceProfileDefault } = this.state;
    const { space } = this.props;

    const value = !isSpaceProfileDefault;
    await space.public.set('isSpaceProfileDefault', value);

    this.setState({ isSpaceProfileDefault: value });
  }

  handleShowOptionsMenu = () => {
    const { showOptions } = this.state;
    this.setState({ showOptions: !showOptions });
  }

  render() {
    const { showOptions, isSpaceProfileDefault } = this.state;
    const { fromSpaceProfile } = this.props;
    const valueToShow = fromSpaceProfile ? isSpaceProfileDefault : !isSpaceProfileDefault;

    return (
      <div className="options_wrapper">
        <button
          onClick={this.handleShowOptionsMenu}
          onKeyPress={this.handleShowOptionsMenu}
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
            Settings
          </h5>

          <div className="options_menu_section">
            <p className="options_menu_section_option">{`${fromSpaceProfile ? 'Space' : 'General'} profile as default`}</p>
            <label className="switch" htmlFor="enableWall">
              <input
                type="checkbox"
                id="enableWall"
                checked={valueToShow}
                onChange={this.onCheckbox}
              />
              <span className="slider round" />
            </label>
          </div>
        </div>

        {showOptions && (
          <div
            className="onClickOutside"
            onClick={this.handleShowOptionsMenu}
            onKeyPress={this.handleShowOptionsMenu}
            tabIndex={0}
            role="button"
          />
        )}
      </div>
    );
  }
}

export default EditOptions;