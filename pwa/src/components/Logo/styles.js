import styled from 'styled-components';
import { bold } from 'assets/stylesheets/js/fonts';
import { white } from 'assets/stylesheets/js/colors';
import { big, bigSmall } from 'assets/stylesheets/js/sizes';

const LogoContainer = styled.div`
  user-select: none;
  font-weight: ${bold};
  font-size: ${big(1.5)};
  color: ${white};

  span {
    margin-left: ${bigSmall()};
  }
`;

export default LogoContainer;
