import React, {
  useState,
  useMemo,
} from 'react';

import { useRouteMatch } from 'react-router-dom';

import View from 'components/Page/View';
import Wrapper from 'components/Wrapper';
import Logo from 'components/Logo';
import LoginForm from 'views/login/Form';

import {
  LoginContainer,
  LoginWrapper,
  LoginNavigation,
} from 'views/login/styles';

import fields, {
  register,
} from 'views/login/Form/fields';

const Login = () => {
  const [formFields, setFields] = useState([
    ...fields(),
  ]);

  const { path } = useRouteMatch();
  const isRegister = path.includes('register');

  useMemo(() => {
    if (isRegister) {
      setFields((f) => [
        ...f,
        ...register(),
      ]);
    }
  }, [isRegister]);

  return (
    <View>
      <LoginContainer>
        <LoginWrapper>
          <Logo />
          <Wrapper>
            <LoginForm fields={formFields} />
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
