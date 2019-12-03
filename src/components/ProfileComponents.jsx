import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

import FormControls from './FormControls';
import ProfileField from './ProfileField';
import InfoIcon from '../assets/InfoIcon.svg';

export const CustomFields = (props) => {
  const {
    customFields,
    handleFormChange,
    handleSubmit,
    redirectFn,
    currentUserAddr,
    isSaveLoading,
    isSaveSuccessful,
  } = props;

  return (
    <div className="edit_profile_spaceProfile">
      <div className="edit_profile_divider" />

      <div className="edit_profile_keyContainer spaceProfile">
        <p className="edit_profile_keyContainer_currentAddress">
          APP PROFILE
      </p>

        <div className="edit_profile_verifiedFields_info infoIcon">
          <SVG src={InfoIcon} className="edit_profile_verifiedFields_icons" alt="Info" />
          <div className="edit_profile_verifiedFields_hover">
            <span className="edit_profile_verifiedFields_info_text">
              These fields are saved to your app profile          </span>
          </div>
        </div>
      </div>

      <div className="edit_profile_section">
        <div className="edit_profile_info">
          {customFields.map(entry => (
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
        handleSubmit={handleSubmit}
        redirectFn={redirectFn}
        currentUserAddr={currentUserAddr}
        isSaveLoading={isSaveLoading}
        isSaveSuccessful={isSaveSuccessful}
        />
    </div>
  );
};

CustomFields.propTypes = {
  currentUserAddr: PropTypes.string,
  customFields: PropTypes.array,
  redirectFn: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleFormChange: PropTypes.func,
  isSaveLoading: PropTypes.bool,
  isSaveSuccessful: PropTypes.bool,
};

CustomFields.defaultProps = {
  currentUserAddr: '',
  isSaveLoading: false,
};