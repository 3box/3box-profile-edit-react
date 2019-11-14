import React from 'react';
import PropTypes from 'prop-types';

export const FileSizeModal = ({ closeFileSizeModal }) => (
  <div className="modal_container">
    <div className="modal">

      <div>
        <p>Profile pictures must be less than 2.5 MB</p>
      </div>

      <button onClick={closeFileSizeModal} type="button" className="tertiaryButton">Close</button>
    </div>
  </div>
);

FileSizeModal.propTypes = {
  closeFileSizeModal: PropTypes.func.isRequired,
};

export const ModalBackground = () => <div className="modal_overlay" />;