import styled from 'styled-components';
import { fluidRange } from 'polished';

export const ViewContrainer = styled.div`
  margin: 0 auto;
  height: 100%;

  ${fluidRange(
    {
      prop: 'width',
      fromSize: '320px',
      toSize: '1024px',
    },
    '400px',
  )}
`;

export default ViewContrainer;
