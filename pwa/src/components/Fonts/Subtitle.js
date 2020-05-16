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
    <h2>{label}</h2>
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
