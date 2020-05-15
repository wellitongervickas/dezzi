import React from 'react';
import PropTypes from 'prop-types';

import {
  FormContainer,
  FormFields,
  FormButtons,
} from 'components/Form/styles';

import FormInput from 'components/Form/Input';
import FormButton from './Button';

const RenderField = ({ field }) => {
  if (field.type === 'input') {
    return <FormInput field={field} />;
  }

  return <FormInput field={field} />;
};

const Form = ({ fields, button }) => fields.length > 0 && (
  <FormContainer>
    <FormFields>
      {fields.map((field) => (
        <RenderField
          key={field.id}
          field={field}
        />
      ))}
    </FormFields>
    <FormButtons>
      <FormButton
        label={button.label}
        icon={button.icon}
        color={button.color}
        size={button.size}
        onClick={() => {}}
      />
    </FormButtons>
  </FormContainer>
);

Form.defaultProps = {
  fields: [],
  button: {
    label: 'Submit',
    size: 'sm',
  },
};

RenderField.propTypes = {
  field: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
};

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.shape({}),
    size: PropTypes.string,
    color: PropTypes.string,
  }),
};

export default Form;
