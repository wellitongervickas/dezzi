import PropTypes from 'prop-types';

export const buttonSizes = ['xl', 'lg', 'md', 'sm', 'xs'];

export const defaultProps = {
  onSubmit: () => {},
  fields: [],
  formErrors: [],
  loading: false,
  button: {
    label: 'Submit',
    size: 'sm',
  },
};

export const defaultButtonProps = {
  loading: false,
  icon: null,
  label: null,
  color: 'violet',
  size: 'md',
  type: 'button',
  onClick: () => {},
};

export const defaultButtonPropTypes = {
  type: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(buttonSizes),
  icon: PropTypes.shape({}),
  color: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export const defaultFieldPropTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export const defaultPropTypes = {
  loading: PropTypes.bool,
  formErrors: PropTypes.arrayOf(PropTypes.shape({})),
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
