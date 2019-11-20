import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

import ProfileField from './ProfileField';
import InfoIcon from '../assets/InfoIcon.svg';
import Loading from '../assets/Loading.svg';

export const CustomFields = (props) => {
  const {
    additionalFields,
    handleFormChange,
    handleSubmit,
    cancelFunc,
    currentUserAddr,
    isSaveLoading,
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
        handleSubmit={handleSubmit}
        cancelFunc={cancelFunc}
        currentUserAddr={currentUserAddr}
        isSaveLoading={isSaveLoading}
      />
    </div>
  );
};

CustomFields.propTypes = {
  currentUserAddr: PropTypes.string,
  additionalFields: PropTypes.array,
  cancelFunc: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleFormChange: PropTypes.func,
  isSaveLoading: PropTypes.bool,
};

CustomFields.defaultProps = {
  currentUserAddr: '',
  isSaveLoading: false,
};

export const FormControls = (props) => {
  const {
    handleSubmit,
    cancelFunc,
    currentUserAddr,
    isSaveLoading,
  } = props;

  return (
    <div className="edit_formControls">
      <div className="edit_formControls_content">
        {isSaveLoading && <SVG src={Loading} alt="loading" className="edit_load" />}

        <button
          type="submit"
          className="edit_formControls_content_save"
          onClick={(e) => handleSubmit(e)}
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

FormControls.propTypes = {
  currentUserAddr: PropTypes.string,
  cancelFunc: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSaveLoading: PropTypes.bool,
};

FormControls.defaultProps = {
  currentUserAddr: '',
  isSaveLoading: false,
};
