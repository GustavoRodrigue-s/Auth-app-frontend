import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.sizes.medium};

    > span {
      color: ${theme.colors.primary};
      font-weight: ${theme.weights.bold};
    }
  `}
`;
