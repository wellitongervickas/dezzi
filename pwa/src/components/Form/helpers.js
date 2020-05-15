import PropTypes from 'prop-types';

export const defaultProps = {
  onSubmit: () => {},
  fields: [],
  button: {
    label: 'Submit',
    size: 'sm',
  },
};

export const defaultFieldPropTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export const defaultPropTypes = {
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({
    ...defaultFieldPropTypes,
  })),
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.shape({}),
    size: PropTypes.string,
    color: PropTypes.string,
  }),
};
