import * as types from 'components/Form/types';

export const register = () => [{
  ...types.input,
  id: 'first_name',
  label: 'First name',
  placeholder: 'Please type you first name',
  validations: [{
    type: 'blank',
  }],
}, {
  ...types.input,
  id: 'last_name',
  label: 'Last name',
  placeholder: 'Please type you last name',
  validations: [{
    type: 'blank',
  }],
}];

export default () => [{
  ...types.input,
  id: 'email',
  label: 'Email',
  placeholder: 'Please type you email',
  validations: [{
    type: 'blank',
  }, {
    type: 'email',
  }],
}, {
  ...types.input,
  id: 'password',
  label: 'Password',
  placeholder: 'Please type you password',
  validations: [{
    type: 'blank',
  }, {
    type: 'length',
    min: 8,
    max: 16,
    equals: true,
  }],
}];
