import React, {
  useState,
  useMemo,
  useCallback,
  useContext,
} from 'react';

import {
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

import View from 'components/Page/View';
import Wrapper from 'components/Wrapper';
import Logo from 'components/Logo';
import Form from 'components/Form';

import {
  LoginContainer,
  LoginWrapper,
  LoginNavigation,
} from 'views/login/styles';

import fields, {
  register,
} from 'views/login/Form/fields';

import {
  saveStorage,
  deleteStorage,
} from 'helpers/session/storage';

import { actions } from 'store/modules/auth';
import context from '../../store';

const Login = () => {
  const { path } = useRouteMatch();
  const { push } = useHistory();
  const { states, storeDispatch } = useContext(context);

  const [formFields, setFields] = useState([...fields()]);
  const [formErrors, setFormErrors] = useState([]);

  const isRegister = path.includes('register');
  const loading = useMemo(() => states.auth.READ_LOADING, [states.auth.READ_LOADING]);

  useMemo(() => {
    deleteStorage('auth');
  }, []);

  useMemo(() => {
    if (isRegister) {
      setFields((f) => [
        ...f,
        ...register(),
      ]);
    }
  }, [isRegister]);

  const onSubmitSuccess = useCallback((response) => {
    storeDispatch('auth', 'READ_LOADING', false);
    storeDispatch('auth', 'READ', response);
    saveStorage('auth', response);

    push('/');
  }, [storeDispatch, push]);

  const onSubmitFailure = useCallback(({ response }) => {
    storeDispatch('auth', 'READ_LOADING', false);

    try {
      setFormErrors(response.data.errors);
    } catch (err) { /* */ }
  }, [storeDispatch, setFormErrors]);

  const handleSubmit = useCallback((data) => {
    storeDispatch('auth', 'READ', { });
    storeDispatch('auth', 'READ_LOADING', true);

    actions[isRegister ? 'create' : 'auth'](data)
      .then(onSubmitSuccess)
      .catch(onSubmitFailure);
  }, [onSubmitSuccess, onSubmitFailure, storeDispatch, isRegister]);

  return (
    <View>
      <LoginContainer>
        <LoginWrapper>
          <Logo />
          <Wrapper>
            <Form
              fields={formFields}
              onSubmit={handleSubmit}
              formErrors={formErrors}
              loading={loading}
            />
          </Wrapper>
          {!isRegister ? (
            <LoginNavigation to="/auth/register">
              New user? Register now
            </LoginNavigation>
          ) : (
            <LoginNavigation to="/auth/login">
              Already user? Login page
            </LoginNavigation>
          )}
        </LoginWrapper>
      </LoginContainer>
    </View>
  );
};

export default Login;
