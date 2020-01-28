import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InlineForm = ({ inputName, buttonText, onSubmit }) => {
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
  };

  const _onSubmit = e => {
    e.preventDefault();

    onSubmit(value);
  };

  return (
    <form className="input-group" onSubmit={_onSubmit}>
      <input
        type="text"
        className="form-control"
        name={inputName}
        onChange={onChange}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="submit">
          {buttonText}
        </button>
      </div>
    </form>
  );
};

InlineForm.propTypes = {
  inputName: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default InlineForm;
