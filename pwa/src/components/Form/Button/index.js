import React from 'react';
import PropTypes from 'prop-types';

import {
  FormButtonContainer,
  FormButtonLabel,
} from 'components/Form/Button/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const buttonSizes = ['xl', 'lg', 'md', 'sm', 'xs'];

const FormButton = ({
  icon,
  label,
  color,
  size,
  onClick,
}) => {
  const handleClick = onClick;

  return (
    <FormButtonContainer
      color={color}
      size={size}
      onClick={handleClick}
    >
      {icon && (
        <FontAwesomeIcon icon={icon} />
      )}
      {label && (
        <FormButtonLabel useIcon={!!icon}>
          {label}
        </FormButtonLabel>
      )}
    </FormButtonContainer>
  );
};

FormButton.defaultProps = {
  icon: null,
  label: null,
  color: 'violet',
  size: 'md',
};

FormButton.propTypes = {
  size: PropTypes.oneOf(buttonSizes),
  icon: PropTypes.shape({}),
  color: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default FormButton;
