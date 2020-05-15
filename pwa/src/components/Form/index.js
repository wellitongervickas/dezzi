/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import {
  FormContainer,
  FormFields,
  FormButtons,
} from 'components/Form/styles';

import FormInput from 'components/Form/Input';
import FormButton from 'components/Form/Button';

import {
  defaultProps,
  defaultPropTypes,
  defaultFieldPropTypes,
} from 'components/Form/helpers';

// eslint-disable-next-line react/prop-types
const RenderField = ({ type, ...rest }) => {
  if (type === 'input') {
    return <FormInput {...rest} />;
  }

  return <FormInput {...rest} />;
};

const Form = ({ fields, button, onSubmit }) => {
  const {
    handleSubmit,
    register,
    errors,
  } = useForm();

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormFields>
        {fields.map((field) => (
          <RenderField
            key={field.id}
            field={field}
            register={register}
            error={errors[field.id]}
          />
        ))}
      </FormFields>
      <FormButtons>
        <FormButton
          type="submit"
          label={button.label}
          icon={button.icon}
          color={button.color}
          size={button.size}
        />
      </FormButtons>
    </FormContainer>
  );
};

Form.defaultProps = {
  ...defaultProps,
};

Form.propTypes = {
  ...defaultPropTypes,
};

RenderField.propTypes = {
  field: PropTypes.shape({
    ...defaultFieldPropTypes,
  }).isRequired,
};

export default Form;
