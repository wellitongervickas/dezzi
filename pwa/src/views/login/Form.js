import React from 'react';
import PropTypes from 'prop-types';

import Form from 'components/Form';

const LoginForm = ({ fields }) => (
  <Form fields={fields} />
);

LoginForm.defaultProps = {
  fields: [],
};

LoginForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({})),
};

export default LoginForm;
