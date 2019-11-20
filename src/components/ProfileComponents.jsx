import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

import ProfileField from './ProfileField';
import InfoIcon from '../assets/InfoIcon.svg';

export const CustomFields = (props) => {
  const {
    additionalFields,
    handleFormChange,
    isSaveDisabled,
    handleSubmit,
    cancelFunc,
    currentUserAddr,
  } = props;

  return (
    <div className="edit_profile_spaceProfile">
      <div className="edit_profile_divider" />

      <div className="edit_profile_keyContainer spaceProfile">
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

      <div className="edit_profile_section">
        <div className="edit_profile_info">
          {additionalFields.map(entry => (
            <ProfileField
              customField={entry}
              handleFormChange={handleFormChange}
              key={entry.key}
              {...props}
            />
          ))}
        </div>
      </div>

      <FormControls
        isSaveDisabled={isSaveDisabled}
        handleSubmit={handleSubmit}
        cancelFunc={cancelFunc}
        currentUserAddr={currentUserAddr}
      />
    </div>
  );
};


export const FormControls = (props) => {
  const {
    isSaveDisabled,
    handleSubmit,
    cancelFunc,
    currentUserAddr,
  } = props;

  return (
    <div className="edit_formControls">
      <div className="edit_formControls_content">
        <button
          type="submit"
          disabled={isSaveDisabled}
          className="edit_formControls_content_save"
          onClick={(e) => this.setState({ isSaveDisabled: true }, () => handleSubmit(e))}
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
    </div >
  )
};
