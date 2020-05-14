import styled from 'styled-components';

import {
  mid,
  big,
  monitor,
} from 'assets/stylesheets/js/sizes';

import { violetDarkBlack } from 'assets/stylesheets/js/colors';

export const DashboardContainer = styled.div`
  padding: ${mid()} 0;
`;

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${violetDarkBlack};
`;

export const DashboardContent = styled.div`
  display: flex;
  margin-top: ${mid()};
`;

export const SidebarContainer = styled.div`
  width: ${big(8)};

  @media (max-width: ${monitor}) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
`;

export const NavbarContainer = styled.div`
  & > :last-child {
    margin-left: ${mid()};
    padding-left: ${mid()};
    border-left: 1px solid ${violetDarkBlack};
  }
`;

export default DashboardContainer;
