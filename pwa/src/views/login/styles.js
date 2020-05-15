import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { sm } from 'assets/stylesheets/js/sizes';

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const LoginWrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: ${sm()};
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;

export const LoginNavigation = styled(Link)`
  text-align: center;
`;

export default LoginContainer;
