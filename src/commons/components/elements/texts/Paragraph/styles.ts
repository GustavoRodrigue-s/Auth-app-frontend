import styled, { css } from 'styled-components';

export const Container = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray100};
    font-weight: ${theme.weights.normal};
    font-size: ${theme.sizes.normal};
  `}
`;
