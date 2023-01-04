import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

export const Container = styled(Link)`
  ${({ theme }) => css`
    text-decoration: none;
    font-weight: ${theme.weights.medium};
    color: ${theme.colors.black};

    position: relative;

    ::before {
      content: '';
      position: absolute;
      top: 20px;
      left: 100%;
      width: 0;
      height: 2px;
      background-color: ${theme.colors.primary};
      transition: 0.3s;
    }

    :hover::before {
      transition: width 0.3s;
      width: 100%;
      left: 0;
    }
  `}
`;
