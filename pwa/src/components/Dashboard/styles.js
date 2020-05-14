import styled from 'styled-components';

import {
  sm,
  md,
} from 'assets/stylesheets/js/sizes';

import { violetDarkBlack } from 'assets/stylesheets/js/colors';

export const DashboardContainer = styled.div`
  padding: ${sm()} 0;
`;

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${violetDarkBlack};
`;

export const DashboardContent = styled.div`
  display: flex;
  margin-top: ${sm()};
`;

export const SidebarContainer = styled.div`
  width: ${md(6)};
`;

export const ContentContainer = styled.div`
  flex: 1;
`;

export const NavbarContainer = styled.div`
  display: flex;

  & > * {
    padding: 0 ${sm()};
    border-right: 1px solid ${violetDarkBlack};
  }

  & > :last-child {
    border: none;
  }
`;

export default DashboardContainer;
