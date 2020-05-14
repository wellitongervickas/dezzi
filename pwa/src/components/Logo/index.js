import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrog } from '@fortawesome/free-solid-svg-icons';

import LogoContainer from 'components/Logo/styles';

const Logo = () => (
  <LogoContainer>
    <FontAwesomeIcon icon={faFrog} />
    <span>Dezzi</span>
  </LogoContainer>
);

export default Logo;
