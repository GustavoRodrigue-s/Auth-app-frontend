import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;

    outline: none;
    padding: 12px 16px;
    border-radius: 4px;
    border: 1px solid ${theme.colors.white100};
    background-color: transparent;

    font-size: ${theme.sizes.normal};

    color: ${theme.colors.black};
  `}
`;
