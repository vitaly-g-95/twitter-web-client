import React from 'react';
import PropTypes from 'prop-types';

const InlineForm = ({ inputName, buttonText, onSubmit }) => (
  <form className="input-group" onSubmit={onSubmit}>
    <input
      type="text"
      className="form-control"
      name={inputName}
    />
    <div className="input-group-append">
      <button className="btn btn-primary" type="submit">
        {buttonText}
      </button>
    </div>
  </form>
);

InlineForm.propTypes = {
  inputName: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default InlineForm;
