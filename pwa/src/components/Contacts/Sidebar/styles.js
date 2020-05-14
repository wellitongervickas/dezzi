import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


import * as fonts from 'assets/stylesheets/js/fonts';
import * as colors from 'assets/stylesheets/js/colors';
import * as sizes from 'assets/stylesheets/js/sizes';

export const ContactsSidebarItemContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  padding: ${sizes.sm()};
  transition: border 0.5s;
  border-left: 0px solid transparent;

  &, &:hover {
    color: ${colors.violetLight};
  }

  &.active {
    border-left: ${sizes.xs()} solid ${colors.violetDarkBlack};
    background-color: ${colors.violetLight};
    color: ${colors.violetDarkBlack};
  }
`;

export const ContactsSidebarItemName = styled.h3`
  font-weight: ${fonts.bold};
  text-transform: capitalize;
  margin-bottom: ${sizes.xs()};
`;

export const ContactsSidebarItemPhone = styled.p``;
