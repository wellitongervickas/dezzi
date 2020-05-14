import styled from 'styled-components';
import { mid } from 'assets/stylesheets/js/sizes';

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const LoginWrapper = styled.div`
  width: 320px;

  & > :last-child {
    margin-top: ${mid()};
  }
`;

export default LoginContainer;
