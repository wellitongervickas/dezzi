import React from 'react';
import PropTypes from 'prop-types';

import {
  FontsTitleContainer,
} from 'components/Fonts/styles';

const FontsTitle = ({
  children,
  label,
  color,
  className,
}) => (
  <FontsTitleContainer
    className={className}
    color={color}
  >
    <h1>{label}</h1>
    {children}
  </FontsTitleContainer>
);

FontsTitle.defaultProps = {
  color: null,
  className: null,
  children: null,
};

FontsTitle.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default FontsTitle;
