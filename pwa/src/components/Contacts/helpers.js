import PropTypes from 'prop-types';

export const setNavLink = (uuid) => `/contacts/${uuid}`;

export const defaultPropTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
  })).isRequired,
};
