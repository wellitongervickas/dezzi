import React, {
  useMemo,
} from 'react';
import PropTypes from 'prop-types';

import {
  FormInputContainer,
  FormInputLabel,
  FormInputField,
} from 'components/Form/Input/styles';

const FormInput = ({
  field,
  register,
  error,
}) => {
  const isRequired = useMemo(() => field
    .validations
    .find((item) => item.type === 'blank'), [field.validations]);

  return (
    <FormInputContainer>
      <FormInputLabel
        htmlFor={field.id}
      >
        {field.label}
        {isRequired && (
          <span>*</span>
        )}
      </FormInputLabel>
      <FormInputField
        type={field.fieldType || 'tel'}
        id={field.id}
        name={field.id}
        placeholder={field.placeholder}
        ref={register}
      />
      {error && <div>{error.message}</div>}
    </FormInputContainer>
  );
};

FormInput.defaultProps = {
  register: () => {},
  error: null,
};

FormInput.propTypes = {
  register: PropTypes.func,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  field: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    fieldType: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    validations: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default FormInput;
