import styled from 'styled-components';

import * as sizes from 'assets/stylesheets/js/sizes';
import * as colors from 'assets/stylesheets/js/colors';

export const BillingsListContainer = styled.div`
  display: flex;
`;

export const BillingsItemContainer = styled.div`
  padding: ${sizes.sm()};
  color: ${colors.violetDark};
  border: 2px solid ${colors.violetDark};
  border-radius: ${sizes.sm()};
  margin-right: ${sizes.sm()};

  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  &:last-of-type {
    margin-right: 0;
  }
`;

export default BillingsListContainer;
