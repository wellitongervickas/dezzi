import React from 'react';

import View from 'components/Page/View';
import Wrapper from 'components/Wrapper';
import Form from 'components/Form';
import Logo from 'components/Logo';

import {
  LoginContainer,
  LoginWrapper,
} from 'views/login/styles';

const Login = () => (
  <View>
    <LoginContainer>
      <LoginWrapper>
        <Logo />
        <Wrapper>
          <Form />
        </Wrapper>
      </LoginWrapper>
    </LoginContainer>
  </View>
);

export default Login;
