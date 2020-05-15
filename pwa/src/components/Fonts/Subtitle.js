import React from 'react';
import PropTypes from 'prop-types';

import {
  FontsSubtitleContainer,
} from 'components/Fonts/styles';

const FontsSubtitle = ({
  children,
  label,
  color,
  className,
}) => (
  <FontsSubtitleContainer
    className={className}
    color={color}
  >
    <h3>{label}</h3>
    {children}
  </FontsSubtitleContainer>
);

FontsSubtitle.defaultProps = {
  color: null,
  className: null,
  children: null,
};

FontsSubtitle.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default FontsSubtitle;
