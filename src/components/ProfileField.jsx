import React from 'react';
import PropTypes from 'prop-types';

const ProfileField = (props) => {
  const {
    handleFormChange,
    customField,
  } = props;

  return (
    <div className="edit_profile_fields_entry">
      <div className="edit_profile_keyContainer">
        <p className="edit_profile_key">{customField.field}</p>
      </div>
      <input
        name="description"
        type="text"
        className="edit_profile_value"
        value={props[customField.key]}
        onChange={e => handleFormChange(e, customField.key)}
      />
    </div>
  )
};

ProfileField.propTypes = {
  handleFormChange: PropTypes.func,
  customField: PropTypes.object,
  customFieldValue: PropTypes.string,
};

export default ProfileField;