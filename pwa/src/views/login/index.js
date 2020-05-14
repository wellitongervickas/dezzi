import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import View from 'components/Page/View';
import Wrapper from 'components/Wrapper';
import Logo from 'components/Logo';

import {
  LoginContainer,
  LoginWrapper,
  LoginNavigation,
} from 'views/login/styles';

const Login = () => {
  const { path } = useRouteMatch();

  const isRegister = path.includes('register');

  return (
    <View>
      <LoginContainer>
        <LoginWrapper>
          <Logo />
          <Wrapper>
            #Form
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
