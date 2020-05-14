import styled from 'styled-components';

import { mid, midSmall } from 'assets/stylesheets/js/sizes';
import { white } from 'assets/stylesheets/js/colors';

export const WrapperContainer = styled.div`
  background-color: ${white};
  padding: ${mid()};
  border-radius: ${midSmall()};
`;

export default WrapperContainer;
