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
        <p className="edit_profile_key">
          {customField.field}
        </p>
      </div>

      {customField.inputType === 'text' && (
        <input
          // name="description"
          type="text"
          className="edit_profile_value"
          value={props[customField.key]}
          onChange={e => handleFormChange(e, customField.key)}
        />
      )}

      {customField.inputType === 'textarea' && (
        <textarea
          name={customField.key}
          type="text"
          className="edit_profile_value--description"
          value={props[customField.key]}
          onChange={e => handleFormChange(e, customField.key)}
        />
      )}

      {customField.inputType === 'dropdown' && (
        <select
          name={customField.key}
          type="text"
          className="edit_profile_value--dropdown"
          value={props[customField.key]}
          onChange={e => handleFormChange(e, customField.key)}
        >
          <option default selected value> -- select an option -- </option>
          {customField.options.map(option => (
            <option value={option.value} key={option.value}>
              {option.display}
            </option>
          ))}
        </select>
      )}
    </div>
  )
};

ProfileField.propTypes = {
  handleFormChange: PropTypes.func,
  customField: PropTypes.object,
  customFieldValue: PropTypes.string,
};

export default ProfileField;