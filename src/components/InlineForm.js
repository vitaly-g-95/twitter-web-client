import React from 'react';
import PropTypes from 'prop-types';

const InlineForm = ({ buttonText, onSubmit }) => (
  <form className="input-group" onSubmit={onSubmit}>
    <input type="text" className="form-control" name="q" />
    <div className="input-group-append">
      <button className="btn btn-primary" type="submit">
        {buttonText}
      </button>
    </div>
  </form>
);

InlineForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default InlineForm;
