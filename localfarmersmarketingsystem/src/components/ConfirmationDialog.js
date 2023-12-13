// ConfirmationDialog.js

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ConfirmationDialog.css';

const ConfirmationDialog = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className="confirmation-dialog">
      <div className="dialog-content">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="button-container">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

ConfirmationDialog.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ConfirmationDialog;
