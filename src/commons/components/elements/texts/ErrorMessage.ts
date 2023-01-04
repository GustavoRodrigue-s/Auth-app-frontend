import styled, { css } from 'styled-components';

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.sizes.normal};
    font-weight: ${theme.weights.medium};
    color: ${theme.colors.red};
  `}
`;
