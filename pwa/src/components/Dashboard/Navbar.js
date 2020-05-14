import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faUser,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';

import { NavbarContainer } from 'components/Dashboard/styles';

const Navbar = () => (
  <NavbarContainer>
    <Link to="/users">
      <FontAwesomeIcon
        icon={faUser}
        cursor="pointer"
      />
    </Link>
    <Link to="/login">
      <FontAwesomeIcon
        icon={faPowerOff}
        cursor="pointer"
      />
    </Link>
  </NavbarContainer>
);

export default Navbar;
