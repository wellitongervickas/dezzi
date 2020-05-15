/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ field }) => (
  <div>
    <label
      htmlFor={field.id}
    >
      {field.label}
    </label>
    <input
      id={field.id}
      type="tel"
    />
  </div>
);

FormInput.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
  }).isRequired,
};

export default FormInput;
